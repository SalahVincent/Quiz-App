import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate =useNavigate
  return (
    <>
      <div className="h-screen bg-[#1a1a1a] flex justify-center items-center">
        <div className="flex flex-col items-center text-[10px] px-5 py-[60px] rounded-xl border-white w-[80%] h-[80%] bg-linear-to-r from-[#555] to-[#4e0a4e77]">
          <h1 className="mb-1 text-white text-[50px] font-bold border-b-2 w-fit">Take Your <span className="text-blue-500">Quiz</span> Here</h1>
        <p></p>
        <button onClick={()=> navigate(`/start`)} className="bg-white rounded-3xl text-[20px] px-10">Start</button>
      </div>
      </div>
    </>
  );
};

export default Start;
