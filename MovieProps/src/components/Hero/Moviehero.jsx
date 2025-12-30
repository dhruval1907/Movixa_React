import React from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";

const Moviehero = () => {
  return (
    <div className="h-[50vh] mt-5  w-full ">
      <div className="h-full  w-full rounded-2xl relative  overflow-hidden">
        <img
          className="h-full w-full absolute z-[1]  object-cover object-center"
          src="https://i.pinimg.com/736x/1b/2f/dd/1b2fdd23a2bb942ea40b89f745e66e54.jpg"
          alt=""
        />

        <div className="absolute h-full w-full z-[2] p-5 flex flex-col justify-between items-start ">
          <button className="px-2 py-3 rounded-4xl text-white font-semibold  bg-red-200/20">
            🔥 Now trending
          </button>
          <div className="h-[60%] w-full">
            <div className="h-12 w-[30%] flex gap-4">
              <button className="px-10 py-2 rounded-4xl text-white font-semibold  bg-red-200/20">
                Drama
              </button>
              <button className="px-10 py-2 rounded-4xl text-white font-semibold  bg-red-200/20">
                Thrilling
              </button>
            </div>
            <div className="w-full ">
              <h4 className="text-white font-semibold mt-5 px-4 w-[40%] text-4xl tracking-tighter">
                Explore a curated world of movies, designed for effortless
                discovery.
              </h4>
            </div>
            <div className="h-[20%] w-full flex items-center gap-5  px-4">
              <button className="p-3 bg-blue-300 mt-8 font-bold px-8 rounded-full">
                watch now 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviehero;
