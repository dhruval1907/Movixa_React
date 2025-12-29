import React from "react";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    <div className="h-20 flex  w-full p-2 px-5 justify-between">
      <div className="h-full   w-[30%] relative mt-5">
        <CiSearch className="absolute top-[25%]   left-[5%] text-3xl text-white bg-transparent"/>
        <input type="text" className='w-100 h-full text-white  border-1 border-black rounded-full' placeholder="               search for movies" />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Nav;
