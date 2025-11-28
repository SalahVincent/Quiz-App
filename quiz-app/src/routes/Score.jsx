import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";

const Score = () => {
  const navigate = useNavigate();
  const { score, questions, correctAnswer } = useStore();

  return (
    <div className="h-screen bg-[#1a1a1a] flex justify-center items-center">
      <div className="flex flex-col items-center px-5 py-[60px] rounded-xl w-[80%] h-[80%] text-white">
        <h1 className="text-[50px] font-bold">Your Score</h1>
        <p className="text-[30px] mt-5">
          {score} / {questions.length}
        </p>
        <p>
          {correctAnswer}
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-white text-black mt-10 rounded-3xl text-[20px] px-10"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Score;
