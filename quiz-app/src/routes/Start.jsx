import { useNavigate } from "react-router-dom";
import { useStore } from "../Store/store";

const Start = () => {
  const navigate = useNavigate();
  const startQuiz = useStore((state) => state.startQuiz);

  const handleStart = async () => {
    await startQuiz();
    navigate("/quiz");
  };

  return (
    <div className="h-screen bg-[#1a1a1a] flex justify-center items-center">
      <div className="flex flex-col items-center px-5 py-[60px] rounded-xl w-[80%] h-[80%]">
        <h1 className="text-white text-[50px] font-bold">
          Take Your <span className="text-blue-500">Quiz</span>
        </h1>

        <button
          onClick={handleStart}
          className="bg-white mt-10 rounded-3xl text-[20px] px-10 active:transform-scale"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
