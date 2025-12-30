import React from "react";
import { useNavigate } from "react-router-dom";
import { RiMovieAiFill } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { RiCompassLine } from "react-icons/ri";
import { CiBookmark, CiPlay1 } from "react-icons/ci";
import { WiTime12 } from "react-icons/wi";
import { HiOutlineCollection } from "react-icons/hi";
import { MdOutlineFileDownload, MdOutlineLogout } from "react-icons/md";

const Side = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to log out?"
    );

    if (!confirmLogout) return;

    // clear credentials
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // navigate to login
    navigate("/login");
  };

  return (
    <div className="h-full flex flex-col justify-between bg-black">
      <div className="text-white flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-4">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <RiMovieAiFill className="text-3xl" />
            <h1 className="text-3xl font-semibold">Moviexa</h1>
          </div>

          {/* MENU */}
          <div className="flex flex-col px-2 mt-5 gap-1">
            <MenuItem icon={<MdHomeFilled />} text="Home" />
            <MenuItem icon={<RiCompassLine />} text="Explore" />
            <MenuItem icon={<CiBookmark />} text="Favourites" />
          </div>

          <hr className="border-white/20 my-4" />

          <div className="flex flex-col px-2 gap-1">
            <MenuItem icon={<CiPlay1 />} text="Continue Watching" />
            <MenuItem icon={<WiTime12 />} text="Recently Added" />
            <MenuItem icon={<HiOutlineCollection />} text="My Collections" />
            <MenuItem icon={<MdOutlineFileDownload />} text="Download" />
          </div>

        </div>
      </div>

      {/* LOGOUT */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-4 w-full bg-blue-500/50 rounded-xl
                     active:scale-95 transition"
        >
          <MdOutlineLogout className="text-white text-2xl" />
          <span className="text-white text-xl">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Side;

const MenuItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl cursor-pointer
                    hover:bg-blue-500 transition">
      <div className="text-xl">{icon}</div>
      <span className="text-xl font-light">{text}</span>
    </div>
  );
};
