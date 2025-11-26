import { create } from "zustand"
import { getQuestionsById } from "../services/service"

export const useStore = create((set, get) => ({
  questions: [],
  index: 0,
  answers: [],
  score: 0,
  loading: false,
  error: null,

  startQuiz: async () => {
    set({ loading: true, index: 0, answers: [], score: 0 })

    try {
      const data = await getQuestionsById()

      const formatted = data.map((item) => ({
        id: item.id,
        question: item.question.text,
        options: [...item.incorrectAnswers, item.correctAnswer].sort(
          () => Math.random() - 0.5
        ),
        correct: item.correctAnswer,
      }));

      set({ questions: formatted, loading: false });
    } catch (err) {
      set({ error: "Failed to load questions", loading: false });
    }
  },

  selectAnswer: (answer) => {
    const { index, questions, answers } = get();

    const isCorrect = answer === questions[index].correct;

    set({
      answers: [...answers, answer],
      score: isCorrect ? get().score + 1 : get().score,
    });
  },

  nextQuestion: () => {
    set((state) => ({ index: state.index + 1 }));
  },
}));
