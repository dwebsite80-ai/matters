import { Subject, Topic, Lesson, Question, SubjectId } from '../types';
import { SUBJECTS, TOPICS } from './subjects';
import { LAW_LESSONS, LAW_QUESTIONS } from './lawLessons';
import { FINANCE_LESSONS, FINANCE_QUESTIONS } from './financeLessons';
import { ECONOMICS_LESSONS, ECONOMICS_QUESTIONS } from './economicsLessons';
import { BIHAR_LESSONS, BIHAR_QUESTIONS } from './biharLessons';
import { POLITY_LESSONS, POLITY_QUESTIONS } from './polityLessons';
import { HISTORY_LESSONS, HISTORY_QUESTIONS } from './historyLessons';
import { PERSONALITY_LESSONS, PERSONALITY_QUESTIONS } from './personalityLessons';
import { DRESSING_LESSONS, DRESSING_QUESTIONS } from './dressingLessons';

export const ALL_SUBJECTS: Subject[] = SUBJECTS;
export const ALL_TOPICS: Topic[] = TOPICS;
export const ALL_LESSONS: Lesson[] = [
  ...LAW_LESSONS,
  ...FINANCE_LESSONS,
  ...ECONOMICS_LESSONS,
  ...BIHAR_LESSONS,
  ...POLITY_LESSONS,
  ...HISTORY_LESSONS,
  ...PERSONALITY_LESSONS,
  ...DRESSING_LESSONS,
];
export const ALL_QUESTIONS: Question[] = [
  ...LAW_QUESTIONS,
  ...FINANCE_QUESTIONS,
  ...ECONOMICS_QUESTIONS,
  ...BIHAR_QUESTIONS,
  ...POLITY_QUESTIONS,
  ...HISTORY_QUESTIONS,
  ...PERSONALITY_QUESTIONS,
  ...DRESSING_QUESTIONS,
];

// Helper functions for easy data access
export function getSubjectById(subjectId: SubjectId): Subject | undefined {
  return ALL_SUBJECTS.find((s) => s.id === subjectId);
}

export function getTopicsBySubject(subjectId: SubjectId): Topic[] {
  return ALL_TOPICS.filter((t) => t.subject_id === subjectId).sort(
    (a, b) => a.order_index - b.order_index
  );
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === lessonId);
}

export function getLessonByTopicId(topicId: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.topic_id === topicId);
}

export function getQuestionsByLessonId(lessonId: string): Question[] {
  return ALL_QUESTIONS.filter((q) => q.lesson_id === lessonId);
}

export function getQuestionsBySubjectId(subjectId: SubjectId): Question[] {
  return ALL_QUESTIONS.filter((q) => q.subject_id === subjectId);
}
