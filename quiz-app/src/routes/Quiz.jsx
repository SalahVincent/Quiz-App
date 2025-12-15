import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";

const Quiz = () => {
  const navigate = useNavigate();
  const { questions, loading, error, index, selectAnswer, nextQuestion, timer} = useStore();

  if (!questions.length) return <p className="text-white">Loading...</p>;

  const current = questions[index];

  const handleSelect = (answer) => {
    selectAnswer(answer);

    if (loading) {
        return <p>Loading...</p>
    }
    
    if (error) {
        return <p>error: {error.message}</p>
    }

    if (index + 1 < questions.length) {
      nextQuestion()
    } else {
      navigate("/result")
    }
  }

    console.log('time:', timer)

  return (
    <div className="h-screen bg-[#1a1a1a] flex flex-col justify-center items-center">
      <div className="text-white">{timer}</div>
      <div className="flex flex-col items-center px-5 py-[60px] rounded-xl w-[80%] h-fit">
        <h1 className="mb-6 text-[32px] text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4359d8] to-[#e65d5d]">
          {current.question}
        </h1>

        <ul className="w-full flex flex-col gap-4">
          {current.options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="border bg-white text-[22px] p-3 rounded-[20px] cursor-pointer hover:bg-blue-500 text-center"
            >
              {opt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
