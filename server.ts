import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

import {
  classifyUserQuestion,
  generateKnowledgeResponse,
  checkResponseRelevance,
} from './src/services/tiaSemanticEngine';
import { getCourseScope } from './src/services/tiaCourseRegistry';
import { cleanTiaSpeechText } from './src/services/tiaLanguageConfig';
import { TiaLessonContext, TiaMessage } from './src/types';

let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PRIMARY_PORT = 3000;

  app.use(express.json());

  // Health checks
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });
  app.get('/healthz', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Tia AI chat endpoint
  app.post('/api/tia/chat', async (req, res) => {
    try {
      const {
        message = '',
        context,
        mode = 'chat',
        language = 'hi',
        conversationHistory = [],
      } = req.body as {
        message: string;
        context?: TiaLessonContext;
        mode?: string;
        language?: 'hi' | 'en';
        conversationHistory?: TiaMessage[];
      };

      const userText = (message || '').trim();
      if (!userText) {
        return res.status(400).json({ error: 'Message cannot be empty' });
      }

      // STEP 1, 2, 3: Classify question internally
      const classification = classifyUserQuestion(userText, context);
      const course = classification.course;
      const isHindi = language === 'hi';

      // STEP 4C: If Out-of-Scope, return polite syllabus boundary message immediately
      if (classification.category === 'OUT_OF_SCOPE') {
        const outDisplay = isHindi
          ? course.outOfScopeResponse.hi
          : course.outOfScopeResponse.en;
        const outSpeech = isHindi
          ? `यह विषय मेरे वर्तमान कोर्स का हिस्सा नहीं है। मैं अभी आपको ${course.name} से जुड़े सवालों में मदद कर सकती हूँ।`
          : `That topic is not part of my current course. I can help you with questions related to ${course.name}.`;

        const quickActions = isHindi
          ? [`💡 ${course.name} क्या है?`, `🎯 ${course.name} का क्विज़`, `इस कोर्स के विषय`]
          : [`💡 Tell me about ${course.name}`, `🎯 Quiz on ${course.name}`, `Topics in this course`];

        return res.json({
          ok: true,
          message: {
            id: `tia-out-${Date.now()}`,
            sender: 'tia',
            text: outDisplay,
            speechText: outSpeech,
            timestamp: Date.now(),
            quickActions,
          },
        });
      }

      // STEP 4A & 4B: Educational inquiry within Course Scope
      // First attempt: Server-Side Gemini API if key is available
      const gemini = getGeminiClient();
      let generatedDisplayText = '';
      let generatedSpeechText = '';
      let quickActions: string[] = [];

      if (gemini) {
        try {
          const lessonSections = context?.sections
            ?.map(
              (s) =>
                `• ${isHindi ? s.title_hi || s.title : s.title}: ${
                  isHindi ? s.content_hi || s.content : s.content
                }`
            )
            .join('\n') || '';

          const recentHistory = conversationHistory
            .slice(-4)
            .map((m) => `${m.sender === 'user' ? 'User' : 'Tia'}: ${m.text}`)
            .join('\n');

          const systemPrompt = `You are Tia, an intelligent, conversational, and direct AI tutor.
CRITICAL MANDATES:
1. ANSWER THE USER'S ACTUAL QUESTION FIRST AND DIRECTLY.
2. The user's question is highest priority: "${userText}".
3. NEVER assume the user is asking about the current lesson or asking for a general lesson summary unless explicitly requested.
4. SPECIFIC EXAMPLE: If the user asks about Airbnb's net worth or valuation ("airbnb ki networth kitni hai"), you MUST answer about Airbnb's market capitalization ($80-90B USD) and founders' net worth ($8-10B each). Do NOT describe Airbnb's business model or how it connects hosts and guests!
5. OUTPUT FORMAT: Respond ONLY with a valid JSON object containing exactly two string fields:
{
  "displayText": "Clear, engaging text formatted with markdown for visual UI display.",
  "speechText": "Natural spoken sentence for speech synthesis."
}
LANGUAGE RULES:
- If Target Language is Hindi:
  - displayText: Natural conversational Hinglish/Hindi with markdown bolding.
  - speechText: Natural spoken Hindi in pure DEVANAGARI script for hi-IN voice. Technical names like Airbnb, GDP, CPI, Market Cap, Valuation may be written in English or Devanagari, but ALL surrounding Hindi words MUST be in Devanagari script. NO asterisks (*), NO markdown hashes (#), NO bullet points, NO emojis in speechText.
- If Target Language is English:
  - displayText: Clean English with markdown bolding.
  - speechText: Natural spoken English without markdown or emojis.`;

          const userContextPrompt = `CURRENT_COURSE: ${course.name} (${course.description})
COURSE_SYLLABUS_TOPICS: ${course.syllabusSummary}
CURRENT_LESSON_TITLE: ${context?.lessonTitle || course.name}
CURRENT_LESSON_CONTENT: ${lessonSections ? lessonSections.slice(0, 400) : 'N/A'}
${recentHistory ? `RECENT_CONVERSATION_HISTORY:\n${recentHistory}\n` : ''}
USER_LATEST_QUESTION: "${userText}"
TARGET_LANGUAGE: ${isHindi ? 'Hindi (speechText in Devanagari)' : 'English'}`;

          const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
          const modelsToTry = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
          let response: any = null;

          for (let i = 0; i < modelsToTry.length; i++) {
            const modelName = modelsToTry[i];
            try {
              response = await gemini.models.generateContent({
                model: modelName,
                contents: userContextPrompt,
                config: {
                  systemInstruction: systemPrompt,
                  temperature: 0.7,
                  maxOutputTokens: 700,
                  responseMimeType: 'application/json',
                },
              });
              if (response?.text) break;
            } catch (err: any) {
              const isHighDemand =
                err?.status === 503 ||
                err?.message?.includes('503') ||
                err?.message?.includes('high demand') ||
                err?.message?.includes('UNAVAILABLE');
              console.info(
                `Model ${modelName} temporarily unavailable${isHighDemand ? ' (high demand spike)' : ''}, checking next fallback...`
              );
              if (i < modelsToTry.length - 1) {
                await sleep(400);
              }
            }
          }

          if (response?.text) {
            const rawText = response.text.trim();
            let parsedDisplay = '';
            let parsedSpeech = '';

            try {
              const parsed = JSON.parse(rawText);
              if (parsed && typeof parsed === 'object') {
                parsedDisplay = parsed.displayText || parsed.text || '';
                parsedSpeech = parsed.speechText || '';
              }
            } catch {
              const jsonMatch = rawText.match(/\{[\s\S]*\}/);
              if (jsonMatch) {
                try {
                  const parsed = JSON.parse(jsonMatch[0]);
                  parsedDisplay = parsed.displayText || parsed.text || '';
                  parsedSpeech = parsed.speechText || '';
                } catch {
                  // ignore
                }
              }
            }

            if (!parsedDisplay) {
              parsedDisplay = rawText;
              parsedSpeech = cleanTiaSpeechText(rawText, isHindi);
            }

            // Check Response Relevance
            const relevance = checkResponseRelevance(
              parsedDisplay,
              userText,
              classification.intentType,
              context?.lessonTitle,
              course.name
            );

            if (relevance.isRelevant && parsedDisplay.length > 20) {
              generatedDisplayText = parsedDisplay;
              generatedSpeechText = cleanTiaSpeechText(parsedSpeech || parsedDisplay, isHindi);
            } else {
              console.log(
                'Gemini response failed relevance check:',
                relevance.reason,
                '- using curated semantic response'
              );
            }
          } else {
            console.info('Gemini models temporarily at capacity; smoothly serving via semantic knowledge engine.');
          }
        } catch (geminiErr) {
          console.info('Using semantic knowledge engine for response:', (geminiErr as any)?.message || geminiErr);
        }
      }

      // If Gemini wasn't available, failed, or failed relevance check, use semantic knowledge response
      if (!generatedDisplayText) {
        const fallback = generateKnowledgeResponse(classification, language, context);
        generatedDisplayText = fallback.displayText || fallback.text;
        generatedSpeechText = fallback.speechText;
        quickActions = fallback.quickActions;
      }

      if (quickActions.length === 0) {
        quickActions = isHindi
          ? ['💡 आसान उदाहरण दो', '😂 मज़ाकिया बनाओ', '🎯 क्विज़ पूछो']
          : ['💡 Give simple example', '😂 Make it funny', '🎯 Quiz me'];
      }

      return res.json({
        ok: true,
        message: {
          id: `tia-resp-${Date.now()}`,
          sender: 'tia',
          text: generatedDisplayText,
          speechText: generatedSpeechText,
          timestamp: Date.now(),
          quickActions,
        },
      });
    } catch (err) {
      console.error('Error handling /api/tia/chat:', err);
      return res.status(500).json({ error: 'Internal server error processing Tia chat' });
    }
  });

  // Vite middleware setup for development, or static serving in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath, (err) => {
          if (err && !res.headersSent) {
            res.status(500).send('Error serving application');
          }
        });
      } else {
        res.status(404).send('Application build artifact index.html not found. Run npm run build.');
      }
    });
  }

  const tryListen = (port: number, label: string) => {
    try {
      const server = http.createServer(app);
      server.on('error', (err: any) => {
        if (err.code === 'EADDRINUSE') {
          console.warn(`[${label}] Port ${port} is already in use; skipping listener on ${port}.`);
        } else {
          console.error(`[${label}] Server error on port ${port}:`, err);
        }
      });
      server.listen(port, '0.0.0.0', () => {
        console.log(`Tia Server (${label}) listening on http://0.0.0.0:${port}`);
      });
      return server;
    } catch (err) {
      console.warn(`[${label}] Failed to start listener on port ${port}:`, err);
      return null;
    }
  };

  // Primary listener binds to port 3000 (standard for AI Studio dev server & Nginx reverse proxy)
  tryListen(PRIMARY_PORT, 'primary');

  // Secondary listener for standalone Cloud Run container if PORT is specified and distinct
  const secondaryPort = Number(process.env.PORT);
  if (secondaryPort && secondaryPort !== PRIMARY_PORT) {
    tryListen(secondaryPort, 'secondary');
  }
}

startServer();
