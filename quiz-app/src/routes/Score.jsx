import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";

const Score = () => {
  const navigate = useNavigate();
  const { score, questions, correctAnswer, index, answers } = useStore();

  let quiz = questions
  console.log(questions)

  return (
    <div className="h-[120vh] bg-[#1a1a1a] flex justify-center items-center">
      <div className="flex flex-col items-center px-5 py-[45px] rounded-[30px] w-[60rem] h-fit border-black bg-white border-2">
        <h1 className="text-[35px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4359d8] to-[#e65d5d] text-center">Your Score</h1>
        <p className="text-[30px] mt-5">
          {score} / {questions.length}
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-200 my-4 py-[5px] rounded-[12px] text-[20px] px-10 active:scale-125 transition duration-200 ease-in-out transform hover:bg-blue-500">
          Restart
        </button>
        <div className="flex">
          <ol> {quiz.map((item) => (
          <li
          key={quiz}>
          {item.question}
          <span className="text-green-500 font-[500]">{item.correct}</span>
        </li>
      ))}
        </ol>
        <p>{answers}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
