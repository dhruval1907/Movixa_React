import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";


const Nav = () => {
  return (
    <div className="h-20 flex  w-full p-2  justify-between">
      <div className="relative w-[30%] h-12 mt-5">
        <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-zinc-400" />

        <input
          type="text"
          placeholder="Search for films, directors, or actors..."
          className="
      w-full h-full
      pl-12 pr-4
      text-white
      bg-zinc-900/60
      border border-zinc-700
      rounded-xl
      focus:outline-none
      focus:border-zinc-400
      focus:ring-1 focus:ring-zinc-500
      placeholder:text-zinc-400
      backdrop-blur-md
    "
        />
      </div>
      <div className="flex items-center h-full gap-7">
        <IoMdNotificationsOutline className="text-white text-3xl mt-5"/>
        <div className="h-12 w-12 bg-red-300 rounded-full  overflow-hidden mt-5">
           <img className="h-full w-full object-cover  "  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
