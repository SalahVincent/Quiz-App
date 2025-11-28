import { create } from "zustand"
import { getQuestionsById } from "../services/service"

let timerId =null

export const useStore = create((set, get) => ({
  questions: [],
  index: 0,
  answers: [],
  score: 0,
  loading: false,
  error: null,
  timer: 9,

  stopTime: () => {
    if (timerId) {
        clearInterval(timerId)
        timerId = null
    }
  },

  startTime: () => {
    get().stopTime()
    set({timer: 9})
    timerId = setInterval(() => {
    const state = get()

    if(state.timer > 0) {
        set((state) => ({ timer: state.timer -1}))
    } else {
        get().stopTime()
        get().selectAnswer(null)
        get().nextQuestion()
    }
}, 1000)
},

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
      }))

      set({ questions: formatted, loading: false })

      if (formatted.length > 0) {
        get().startTime()
      }
    } catch (err) {
      set({ error: "Failed to load questions", loading: false })
    }
  },

  selectAnswer: (answer) => {
    const { index, questions, answers } = get()

    get().stopTime()

    const isCorrect = answer === questions[index].correct

    set({
      answers: [...answers, answer],
      score: isCorrect ? get().score + 1 : get().score,
    })

    get().nextQuestion
  },

  nextQuestion: () => {
    const state = get()

    if (state.index <state.questions.length -1) {
    set((state) => ({ index: state.index + 1 }))
    get().startTime()
  } else {
    get().stopTime()
  }
  },
}))
