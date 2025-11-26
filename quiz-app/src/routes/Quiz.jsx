import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";

const Quiz = () => {
  const navigate = useNavigate();
  const { questions, index, selectAnswer, nextQuestion } = useStore();

  if (!questions.length) return <p className="text-white">Loading...</p>;

  const current = questions[index];

  const handleSelect = (answer) => {
    selectAnswer(answer);

    if (index + 1 < questions.length) {
      nextQuestion();
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="h-screen bg-[#1a1a1a] flex justify-center items-center">
      <div className="flex flex-col items-center px-5 py-[60px] rounded-xl w-[80%] h-[80%]">
        <h1 className="mb-6 text-white text-[32px] text-center">
          {current.question}
        </h1>

        <ul className="w-full flex flex-col gap-4">
          {current.options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="border text-white text-[22px] p-3 rounded cursor-pointer hover:bg-blue-500"
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
