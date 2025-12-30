import React from "react";
import { RiMovieAiFill } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { RiCompassLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { WiTime12 } from "react-icons/wi";
import { HiOutlineCollection } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

const Side = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className=" text-white flex flex-col gap-2 p-4 ">
        <div className="upper-part flex flex-col gap-4 ">
          <div className="flex items-center gap-4">
            <RiMovieAiFill className="text-3xl" />
            <div className="text-3xl font-serif font-semibold font-[verdana]">
              Moviexa
            </div>
          </div>
          <div className="flex flex-col px-2 mt-5">
            <div className="flex items-center gap-4 w-[50%] p-4 hover:bg-blue-500 rounded-xl">
              <MdHomeFilled className="text-xl" />
              <div className="text-xl font-light font-[arial]">Home</div>
            </div>
            <div className="flex items-center gap-4 w-[50%] p-4 hover:bg-blue-500 rounded-xl">
              <RiCompassLine className="text-xl" />
              <div className="text-xl font-light font-[arial]">Explore</div>
            </div>
            <div className="flex items-center gap-4 w-[50%] p-4 hover:bg-blue-500 rounded-xl">
              <CiBookmark className="text-xl" />
              <div className="text-xl font-light font-[arial]">Favoruites</div>
            </div>
          </div>
          <hr className="text-blue-200 opacity-[0.3]  " />
          <div className="flex flex-col px-2 mt-5">
            <div className="flex items-center gap-4 w-[80%] p-4 hover:bg-blue-500 rounded-xl">
              <CiPlay1 className="text-xl" />
              <div className="text-xl font-light font-[arial]">
                Continue / Watching
              </div>
            </div>
            <div className="flex items-center gap-4 w-[80%] p-4 hover:bg-blue-500 rounded-xl">
              <WiTime12 className="text-2xl" />
              <div className="text-xl font-light font-[arial]">
                Recentely Addded
              </div>
            </div>
            <div className="flex items-center gap-4 w-[80%] p-4 hover:bg-blue-500 rounded-xl">
              <HiOutlineCollection className="text-xl" />
              <div className="text-xl font-light font-[arial]">
                My collections
              </div>
            </div>
            <div className="flex items-center gap-4 w-[80%] p-4 hover:bg-blue-500 rounded-xl">
              <MdOutlineFileDownload className="text-xl" />
              <div className="text-xl font-light font-[arial]">Download</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10%]  p-4">
        <button className="flex items-center p-4 active:scale-95   gap-2 w-[40%] bg-blue-500/50 rounded-xl">
          <MdOutlineLogout className="text-white text-2xl" />
          <span className="text-white text-xl">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Side;
