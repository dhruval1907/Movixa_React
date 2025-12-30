import React from "react";

const Moviecard = () => {
  return (
    <div className="h-[20vh] w-[320px] bg-red-200 rounded-2xl relative shrink-0 " id="movie">
      <div className="z-[1] h-full w-full rounded-2xl overflow-hidden absolute">
        <img
          className="h-full w-full "
          src="https://i.pinimg.com/1200x/ab/77/d2/ab77d2b713312df62e876018b9be0ea1.jpg"
          alt=""
        />
      </div>
      <div className="absolute z-[2] p-2 top-2/3 px-5 w-full">
        <h1 className="text-white text-lg font-bold">batman never way home</h1>
        <div className="h-1 bg-white/40 w-[80%] rounded-2xl mt-2">
          <div className="bg-blue-300 h-full w-[30%] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
