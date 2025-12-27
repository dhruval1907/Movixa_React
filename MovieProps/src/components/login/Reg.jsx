import React from "react";
import { IoMdExit } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
const Reg = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center "
      style={{ background: "linear-gradient(to right,#9AD1EF,#DBEFF9,#E5EEF7,#FBFBFD)" }}
    >
      <div className="h-[60%] w-[27%] bg-white/80 rounded-2xl shadow-2xl">
        <div className="w-full flex items-center justify-center text-4xl  h-[20%]">
          <IoMdExit />
        </div>
        <div className="text-center flex items-center flex-col gap-2 ">
            <h1 className="text-base font-bold opacity-[0.9]">Sign up with email</h1>
            <p className="text-[12px] w-[90%] text-center opacity-[0.6]">Get started to access  discover new titles, and stay connected to what’s worth watching.</p>
            <div className="relative w-full">
                <IoIosMail className="opacity-[0.4] absolute top-[30%] left-[12%]" />
                <input type="text"  placeholder="         Email" className="w-[80%]  py-2 text-[10px] border-2 rounded-lg border-white"/>
            </div>
            <div className="relative w-full">
                <FaUnlockAlt className="opacity-[0.4] absolute top-[30%] left-[12%]" />
                <input type="text"  placeholder="         Password" className="w-[80%]  py-2 text-[10px] border-2 rounded-lg border-white"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
