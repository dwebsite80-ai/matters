import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { AuthView } from './components/auth/AuthView';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { HomeDashboard } from './components/home/HomeDashboard';
import { SubjectsView } from './components/learn/SubjectsView';
import { TopicRoadmap } from './components/learn/TopicRoadmap';
import { LessonPlayer } from './components/lesson/LessonPlayer';
import { QuizPlayer } from './components/quiz/QuizPlayer';
import { RevisionView } from './components/revision/RevisionView';
import { ProgressView } from './components/progress/ProgressView';
import { ProfileView } from './components/profile/ProfileView';
import { SchemaModal } from './components/modals/SchemaModal';
import { ActiveTab, Lesson, SubjectId } from './types';
import { getQuestionsByLessonId, getLessonById } from './data/initialContent';

function MainAppContent() {
  const { user, preferences, loading, refreshUserData } = useAuth();

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeQuizLesson, setActiveQuizLesson] = useState<Lesson | null>(null);
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState<boolean>(false);

  // Loading spinner during session restoration
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-3">
        <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xs font-semibold text-slate-500">Loading your learning space...</p>
      </div>
    );
  }

  // 1. Unauthenticated -> Show Auth (Login / Signup / Demo)
  if (!user) {
    return <AuthView />;
  }

  // 2. Authenticated but haven't completed onboarding
  if (!preferences?.onboarding_completed) {
    return (
      <OnboardingFlow
        onComplete={() => {
          refreshUserData();
          setActiveTab('home');
        }}
      />
    );
  }

  // Navigation handlers
  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setActiveQuizLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuizFromLesson = () => {
    if (activeLesson) {
      setActiveQuizLesson(activeLesson);
      setActiveLesson(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinishQuiz = () => {
    const prevSub = activeQuizLesson?.subject_id;
    setActiveQuizLesson(null);
    setActiveLesson(null);
    if (prevSub) {
      setSelectedSubjectId(prevSub);
      setActiveTab('learn');
    } else {
      setActiveTab('home');
    }
  };

  const handleSelectSubject = (subjectId: SubjectId) => {
    setSelectedSubjectId(subjectId);
    setActiveTab('learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartRevision = () => {
    setActiveTab('revision');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setActiveLesson(null);
    setActiveQuizLesson(null);
    if (tab !== 'learn') {
      setSelectedSubjectId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] flex flex-col pb-24 md:pb-12 overflow-x-hidden w-full max-w-full">
      {/* Top Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenSchemaModal={() => setIsSchemaModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {/* Active Quiz Player */}
        {activeQuizLesson ? (
          <QuizPlayer
            lesson={activeQuizLesson}
            questions={getQuestionsByLessonId(activeQuizLesson.id)}
            onFinish={handleFinishQuiz}
          />
        ) : activeLesson ? (
          /* Active Lesson Player */
          <LessonPlayer
            lesson={activeLesson}
            onBack={() => {
              setActiveLesson(null);
              if (selectedSubjectId) {
                setActiveTab('learn');
              }
            }}
            onStartQuiz={handleStartQuizFromLesson}
          />
        ) : activeTab === 'home' ? (
          /* Home Dashboard */
          <HomeDashboard
            onStartLesson={handleStartLesson}
            onStartRevision={handleStartRevision}
            onSelectSubject={handleSelectSubject}
            setActiveTab={handleTabChange}
          />
        ) : activeTab === 'learn' ? (
          /* Learn View / Subject Roadmap */
          selectedSubjectId ? (
            <TopicRoadmap
              subjectId={selectedSubjectId}
              onBack={() => setSelectedSubjectId(null)}
              onStartLesson={handleStartLesson}
            />
          ) : (
            <SubjectsView onSelectSubject={(subId) => setSelectedSubjectId(subId)} />
          )
        ) : activeTab === 'revision' ? (
          /* Spaced Revision View */
          <RevisionView
            onStartFirstLesson={() => {
              const ecoLesson = getLessonById('lesson-eco-3');
              if (ecoLesson) handleStartLesson(ecoLesson);
              else handleTabChange('learn');
            }}
          />
        ) : activeTab === 'progress' ? (
          /* Analytics & Progress View */
          <ProgressView />
        ) : activeTab === 'profile' ? (
          /* Profile & Preferences View */
          <ProfileView onOpenSchemaModal={() => setIsSchemaModalOpen(true)} />
        ) : null}
      </main>

      {/* Mobile Bottom Bar */}
      {!activeLesson && !activeQuizLesson && (
        <BottomNav activeTab={activeTab} setActiveTab={handleTabChange} />
      )}

      {/* Schema & Supabase Setup Modal */}
      <SchemaModal
        isOpen={isSchemaModalOpen}
        onClose={() => setIsSchemaModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <LearningProvider>
          <MainAppContent />
        </LearningProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
