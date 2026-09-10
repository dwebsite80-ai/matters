import {
  TiaLessonContext,
  TiaMessage,
  TiaMode,
  TiaQuizEvaluation,
} from '../types';

/**
 * Tia AI Voice Learning Assistant Service
 * Provides funny, witty, encouraging, and pedagogically sound responses.
 * Designed with a modular interface ready for backend/Gemini connection.
 */

// Helper to generate unique IDs
const generateId = () => `tia-msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

/**
 * 1. Get Lesson Explanation
 * Explains topic simply, gives a relatable real-life example, asks if student wants a quiz.
 */
export async function getLessonExplanation(
  context?: TiaLessonContext,
  simpler = false
): Promise<TiaMessage> {
  const lessonName = context?.lessonTitle || 'this topic';
  const hook = context?.lessonHook || '';
  const example = context?.practicalExample?.scenario || '';
  const firstSection = context?.sections?.[0];

  let explanationText = '';

  if (simpler) {
    explanationText = `Arey tension mat lo, let's break "${lessonName}" down into bite-sized pieces! 🐣\n\nThink of it this way: instead of heavy textbook jargon, the core idea is super simple: ${
      firstSection?.content
        ? firstSection.content.slice(0, 180) + '...'
        : 'focusing on small practical actions that give you big leverage.'
    }\n\nSimple rule: do it once right, and you don't have to stress about it later! Should we test this with a super quick 1-minute quiz? 🎯`;
  } else {
    explanationText = `Alright, let's understand **${lessonName}** like friends having chai together! ☕\n\n${
      hook ? `Here's the core question: *${hook}*\n\n` : ''
    }**The Big Idea:**\n${
      firstSection?.content
        ? firstSection.content.slice(0, 260) + '...'
        : 'Every smart decision starts with knowing the underlying rules before jumping in.'
    }\n\n**Real-Life Example:**\n${
      example ||
      'Imagine buying a phone online. If you know consumer warranty laws, customer care can\'t give you the standard "no refunds" excuse!'
    }\n\nBhai samajh aaya ya dimag thoda ghoom gaya? Bolo toh I can make it funny or throw a quick quiz question at you! 🚀`;
  }

  return {
    id: generateId(),
    sender: 'tia',
    text: explanationText,
    mode: 'explain',
    timestamp: Date.now(),
    quickActions: [
      '😂 Make it funny',
      '🎯 Ask me a quiz question',
      '💡 Another example please',
      '🗣️ Let me explain it back to you',
    ],
  };
}

/**
 * 2. Generate Funny Explanation ("😂 Make It Funny")
 * Explains current concept using relatable examples, light jokes, funny analogies.
 */
export async function generateFunnyExplanation(
  context?: TiaLessonContext
): Promise<TiaMessage> {
  const lessonName = context?.lessonTitle || 'this concept';
  const subjectId = context?.subjectId;

  let funnyBody = '';

  if (subjectId === 'economics' || lessonName.toLowerCase().includes('inflation')) {
    funnyBody = `Inflation samajhna hai? Chai ki price se shuru karte hain! ☕\n\nInflation is literally your 100-rupee note doing a magic vanishing trick. Yesterday ₹100 bought you chai and samosa for the whole gang; today ₹100 barely gets you the paper cup and a tissue! 😂\n\nIt\'s not that things got precious like gold; it\'s just that the currency went on a diet and lost its purchasing muscle. So if your money sits idle in a savings account at 3%, inflation is eating 6% while laughing in the corner!`;
  } else if (subjectId === 'money-finance') {
    funnyBody = `Financial wisdom rule #1: Buying an iPhone on EMI to show off to relatives who don't even like you isn't "investing in lifestyle", it's voluntary financial kidnap! 📱💸\n\nAssets put money INTO your pocket (like a business or mutual fund), while liabilities suck money OUT (like that gym membership you used exactly twice in January). Don't look rich on Instagram while surviving on instant noodles offline!`;
  } else if (subjectId === 'law-rights') {
    funnyBody = `Aapka Consumer Right basically says: "Shopkeeper bhaiya can\'t play dumb when his product stops working in 2 days!" ⚖️\n\nWhenever a store says "Goods once sold will not be exchanged", remember that the Consumer Protection Act smiles and says: "Beta, check Section 2(47)." The law literally exists so you don't have to fight customer support using just anger and folded hands!`;
  } else if (subjectId === 'time-management') {
    funnyBody = `Time management isn't about making a 5:00 AM schedule that you abandon at 5:03 AM! ⏰😴\n\nMost people schedule 8 hours of work with 0 minutes of buffer. Then one random 10-minute phone call happens, and the entire day collapses like a house of cards! Tia's golden rule: Keep buffer blocks. If nothing goes wrong, enjoy a reel guilt-free!`;
  } else if (subjectId === 'dressing-sense') {
    funnyBody = `Dressing sense decoded: Wearing neon green sneakers with formal trousers doesn't make you "different", it makes you look like a traffic signal with opinions! 🚦👔\n\nKeep the base colors neutral—navy, charcoal, crisp white. That way people listen to what you're saying instead of wondering if your outfit glowed in the dark!`;
  } else {
    funnyBody = `Look at **${lessonName}** like this: Life is 10% what happens and 90% how you react without panicking! 😂\n\nMost people treat this concept like rocket science, but it's really just common sense dressed in formal shoes. Master this one rule and you're already 5 steps ahead of everyone who just memorizes definitions without understanding them!`;
  }

  return {
    id: generateId(),
    sender: 'tia',
    text: `Bhai suno, let's make **${lessonName}** memorable! 😂\n\n${funnyBody}\n\nSamajh aaya? Ab batao, should I quiz you to see if the brain actually registered it? 🧠✨`,
    mode: 'funny',
    timestamp: Date.now(),
    quickActions: [
      '🎯 Quiz me on this!',
      '💡 Give another real example',
      'Explain in simple English',
      'Ask me a speaking question',
    ],
  };
}

/**
 * 3. Generate Voice/Interactive Quiz Question
 */
export async function generateQuizQuestion(
  context?: TiaLessonContext
): Promise<TiaMessage> {
  const currentQ = context?.currentQuizQuestion;
  const lessonTitle = context?.lessonTitle || 'today\'s lesson';

  if (currentQ) {
    return {
      id: generateId(),
      sender: 'tia',
      text: `Chalo scholar saab, let's test your memory on **${lessonTitle}**! 🎯\n\n**${currentQ.question}**\n\nTake your time. You can speak your answer using the mic or tap an option!`,
      mode: 'quiz',
      timestamp: Date.now(),
      quizData: {
        question: currentQ.question,
        options: [
          `A) ${currentQ.option_a}`,
          `B) ${currentQ.option_b}`,
          `C) ${currentQ.option_c}`,
          `D) ${currentQ.option_d}`,
        ],
        hint: `Hint: Re-read the core takeaway about ${lessonTitle.toLowerCase()}!`,
        correctAnswer: currentQ.correct_answer,
      },
      quickActions: [
        `Option A: ${currentQ.option_a.slice(0, 30)}...`,
        `Option B: ${currentQ.option_b.slice(0, 30)}...`,
        '💡 Give me a hint, Tia',
      ],
    };
  }

  // Fallback conceptual quiz question based on subject
  const subjectId = context?.subjectId;
  let qText = '';
  let hint = '';

  if (subjectId === 'economics') {
    qText = 'If market demand for fresh mangoes suddenly skyrockets in summer but total supply stays fixed, what generally happens to mango prices?';
    hint = 'Think: more buyers fighting for the exact same crate of mangoes!';
  } else if (subjectId === 'law-rights') {
    qText = 'Under Indian consumer laws, can a retail shopkeeper legally charge more than the printed MRP on a bottle of cold water?';
    hint = 'MRP literally stands for Maximum Retail Price!';
  } else if (subjectId === 'money-finance') {
    qText = 'Which is a true financial asset: A new car that depreciates 15% every year, or a high-quality dividend stock?';
    hint = 'Remember Robert Kiyosaki\'s definition of an asset putting money INTO your pocket!';
  } else {
    qText = `From our lesson on ${lessonTitle}, what is the very first step before taking high-stakes action?`;
    hint = 'Check the facts and verify rights before signing or paying!';
  }

  return {
    id: generateId(),
    sender: 'tia',
    text: `Chalo scholar saab, one quick question for you! 🧠\n\n**${qText}**\n\nSpeak your thought or type below. No pressure, no marks deducted! 😄`,
    mode: 'quiz',
    timestamp: Date.now(),
    quizData: {
      question: qText,
      hint,
    },
    quickActions: ['Price will increase', 'Price stays same', '💡 Give me a hint', 'I am not sure, teach me!'],
  };
}

/**
 * 4. Evaluate Quiz Answer
 */
export async function evaluateQuizAnswer(
  userAnswer: string,
  questionText: string,
  context?: TiaLessonContext
): Promise<TiaQuizEvaluation> {
  const cleanAns = userAnswer.toLowerCase().trim();
  const currentQ = context?.currentQuizQuestion;

  // If we have an exact multiple choice question attached
  if (currentQ) {
    const isLetterMatch =
      cleanAns === currentQ.correct_answer.toLowerCase() ||
      cleanAns.startsWith(`option ${currentQ.correct_answer.toLowerCase()}`) ||
      cleanAns.startsWith(currentQ.correct_answer.toLowerCase());

    const correctOptionText =
      currentQ.correct_answer === 'A'
        ? currentQ.option_a
        : currentQ.correct_answer === 'B'
        ? currentQ.option_b
        : currentQ.correct_answer === 'C'
        ? currentQ.option_c
        : currentQ.option_d;

    const isTextMatch = cleanAns.length > 3 && correctOptionText.toLowerCase().includes(cleanAns);

    if (isLetterMatch || isTextMatch) {
      return {
        isCorrect: true,
        feedback: 'Correct! Dimaag ne aaj 100% attendance laga di! 🎉',
        explanation: currentQ.explanation,
        funnyRemark: 'Shabaash! Ekdum textbook answer without the boring lecture.',
        nextPrompt: 'Want to try another question, or revise the key takeaways?',
      };
    } else {
      return {
        isCorrect: false,
        feedback: 'Answer ne thoda sa wrong turn le liya! 😂 But good attempt.',
        explanation: `The correct answer was **Option ${currentQ.correct_answer}: ${correctOptionText}**.\n\n${currentQ.explanation}`,
        funnyRemark: 'Koi baat nahi, Einstein bhi pehli baar mein sab sahi nahi karta tha!',
        nextPrompt: 'Should we try another question or break down this concept once more?',
      };
    }
  }

  // Open-ended heuristic evaluation
  const positiveKeywords = ['increase', 'rise', 'up', 'no', 'cannot', 'dividend', 'stock', 'higher', 'right', 'verify', 'protect'];
  const isLikelyCorrect = positiveKeywords.some((k) => cleanAns.includes(k));

  if (isLikelyCorrect) {
    return {
      isCorrect: true,
      feedback: 'Spot on! Billi ko dhoodh mil gaya! 🎉',
      explanation: 'Your logic is totally sound. When you understand the underlying principle, the answers become second nature.',
      funnyRemark: 'You should start charging consultancy fees for answers this crisp!',
      nextPrompt: 'Ready for the next concept or should we do a 1-minute speaking drill?',
    };
  } else {
    return {
      isCorrect: false,
      feedback: 'Nice try! Close, but not quite there yet. 😄',
      explanation: 'Remember the core rule we discussed: look at who holds the leverage and how incentives flow.',
      funnyRemark: 'Don\'t worry, even GPS takes a recalculation detour sometimes!',
      nextPrompt: 'Would you like me to explain it using a funny daily-life analogy?',
    };
  }
}

/**
 * 5. Generate Speaking Practice Prompt
 */
export async function getSpeakingPracticePrompt(
  context?: TiaLessonContext
): Promise<TiaMessage> {
  const lessonTitle = context?.lessonTitle || 'everyday conversation';
  const prompts = [
    `Imagine you're explaining **${lessonTitle}** to your best friend over chai in 30 seconds. Press the mic and tell me: how would you summarize it simply?`,
    `Speak with confidence! If someone asks you in an interview: *"Why does this concept matter in the real world?"*, what would you say? Hit mic and speak!`,
    `Let's practice polite objection! Say this in English: *"I understand your point, but let's look at the actual facts."* Tap mic and practice your pronunciation!`,
  ];

  const selectedPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  return {
    id: generateId(),
    sender: 'tia',
    text: `🗣️ **Tia\'s Speaking Gym:**\n\n${selectedPrompt}\n\nDon't worry about being perfect. Just speak naturally—I\'ll listen and give you constructive, encouraging feedback! 🎙️`,
    mode: 'speaking_practice',
    timestamp: Date.now(),
    quickActions: [
      '🎙️ Tap Mic to Answer',
      'Give me an example answer first',
      'Give me a simpler topic',
      'Back to lesson chat',
    ],
  };
}

/**
 * 6. Evaluate Speaking Response
 */
export async function evaluateSpeakingAnswer(
  userSpeech: string,
  context?: TiaLessonContext
): Promise<TiaMessage> {
  const words = userSpeech.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  let feedback = '';

  if (wordCount < 4) {
    feedback = `Good start! But don\'t be shy—give me a fuller sentence so we can flex those speaking muscles. Try adding *"Because..."* or *"For example..."* to expand! 🎙️✨`;
  } else {
    feedback = `Great delivery! 👏 You spoke clearly and got the core message across. \n\n**Tia\'s Polish Tip:**\nTo sound even more confident and articulate, you can try starting with: *"The main takeaway here is..."* or *"Practically speaking..."*.\n\nYour flow felt very natural. Keep this up and you'll speak with executive presence anywhere!`;
  }

  return {
    id: generateId(),
    sender: 'tia',
    text: feedback,
    mode: 'speaking_practice',
    timestamp: Date.now(),
    quickActions: [
      'Try another speaking prompt',
      '😂 Make it funny',
      'Ask me a quiz question',
      'Back to lesson',
    ],
  };
}

/**
 * 7. Generate Revision Recap
 */
export async function generateRevisionQuestions(
  context?: TiaLessonContext
): Promise<TiaMessage> {
  const lessonTitle = context?.lessonTitle || 'recent lessons';
  const takeaways = context?.keyTakeaways || [
    'Always verify the facts before agreeing.',
    'Focus on assets that compound over time.',
    'Build buffer blocks into every schedule.',
  ];

  const bullets = takeaways.map((t, idx) => `${idx + 1}. ${t}`).join('\n');

  return {
    id: generateId(),
    sender: 'tia',
    text: `🔄 **Quick Memory Refresh for ${lessonTitle}:**\n\n${bullets}\n\nWant to do a rapid-fire quiz to test your retention? 5 quick questions! ⚡`,
    mode: 'revision',
    timestamp: Date.now(),
    quickActions: [
      '🎯 Start Rapid-Fire Quiz',
      '😂 Make it funny',
      'Give real-life scenario',
      'I\'m ready to continue reading',
    ],
  };
}

/**
 * 8. General Conversational Message Handler
 */
export async function sendTextMessage(
  userText: string,
  context?: TiaLessonContext,
  mode: TiaMode = 'chat'
): Promise<TiaMessage> {
  const text = userText.toLowerCase().trim();

  // Route to specific mode generators if trigger phrases are detected
  if (text.includes('funny') || text.includes('joke') || text.includes('comedy') || text.includes('make it funny')) {
    return generateFunnyExplanation(context);
  }
  if (text.includes('quiz') || text.includes('test me') || text.includes('ask me a question')) {
    return generateQuizQuestion(context);
  }
  if (text.includes('simpler') || text.includes('easy') || text.includes('confused') || text.includes('eli5')) {
    return getLessonExplanation(context, true);
  }
  if (text.includes('example') || text.includes('real life') || text.includes('scenario')) {
    const example = context?.practicalExample?.scenario || 'Imagine a situation where you are negotiating your salary or buying an apartment.';
    return {
      id: generateId(),
      sender: 'tia',
      text: `Here is a crystal-clear real-life scenario for **${context?.lessonTitle || 'this topic'}**! 💡\n\n${example}\n\n**Why it matters:** When you apply this, you avoid common traps that cost people thousands of rupees or weeks of wasted effort! What do you think?`,
      mode: 'explain',
      timestamp: Date.now(),
      quickActions: ['😂 Make it funny', '🎯 Quiz me now', 'Explain key takeaways'],
    };
  }
  if (text.includes('speaking') || text.includes('pronunciation') || text.includes('practice speaking')) {
    return getSpeakingPracticePrompt(context);
  }
  if (text.includes('revise') || text.includes('recap') || text.includes('revision')) {
    return generateRevisionQuestions(context);
  }

  // Contextual conversational response
  const lessonName = context?.lessonTitle || 'this topic';
  const student = context?.studentName ? ` ${context.studentName}` : '';

  const wittyReplies = [
    `Bhai${student}, I heard you! On **${lessonName}**, the biggest trap is overcomplicating things. Keep the foundation simple: understand the 'why' before the 'how'. What part is bothering you right now?`,
    `Good question! In the context of **${lessonName}**, think of it like learning to drive: at first you check every mirror 10 times, but once the muscle memory clicks, it\'s smooth cruising. Want a quick breakdown or a funny example?`,
    `Arey solid question! Here\'s the secret: most textbooks explain this with 50 lines of definitions, but Tia gives it to you straight in 2 sentences. Tell me: should I make it funny or give you a quiz right away?`,
  ];

  const chosenReply = wittyReplies[Math.floor(Math.random() * wittyReplies.length)];

  return {
    id: generateId(),
    sender: 'tia',
    text: chosenReply,
    mode: 'chat',
    timestamp: Date.now(),
    quickActions: [
      '💡 Explain This Lesson',
      '😂 Make It Funny',
      '🎯 Ask Quiz',
      '🗣️ Practice Speaking',
    ],
  };
}

/**
 * 9. Send Voice Message (Audio transcript wrapper)
 */
export async function sendVoiceMessage(
  transcript: string,
  context?: TiaLessonContext,
  mode: TiaMode = 'chat'
): Promise<TiaMessage> {
  const response = await sendTextMessage(transcript, context, mode);
  response.isVoice = true;
  return response;
}
