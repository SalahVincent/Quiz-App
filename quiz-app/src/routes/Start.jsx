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
      <div className="flex flex-col items-center px-5 py-[45px] rounded-[30px] w-[50rem] h-fit border-black bg-white border-2">
        <h1 className="text-[35px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4359d8] to-[#e65d5d] text-center">Get Ready To Test Your Knowledge</h1>
        <p className="text-center">Challenge yourself by answering these questions</p>
        <h2 className="border-b">Quiz Details:</h2>
        <div className="text-start">
          <ol>
        <li><span>Number of Questions: </span>10</li>
        <li><span>Time Limit: </span>10 seconds</li>
        </ol>
        </div>
        <button
          onClick={handleStart}
          className="bg-blue-200 my-4 py-[5px] rounded-[12px] text-[20px] px-10 active:scale-125 transition duration-200 ease-in-out transform hover:bg-blue-500">
          Start
        </button>
        <div className='flex justify-center'><img className='h-[200px]' src="./quiz.gif" alt="" /></div>
      </div>
    </div>
  );
};

export default Start;
