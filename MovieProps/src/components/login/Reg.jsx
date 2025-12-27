import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";
const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allData, setallData] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setallData((prev) => [...prev, { email, password }]);
    setEmail("");
    setPassword("");
    setTimeout(() => {
      alert("Registered ✅");
    }, 1000);
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        background: "linear-gradient(to right,#9AD1EF,#DBEFF9,#E5EEF7,#FBFBFD)",
      }}
    >
      <div className="h-[60%] w-[27%] bg-white/80 rounded-2xl shadow-2xl">
        <div className="w-full flex items-center justify-center text-4xl  h-[20%]">
          <IoMdExit />
        </div>
        <div className="text-center flex items-center flex-col gap-2 ">
          <h1 className="text-base font-bold opacity-[0.9]">
            Sign up with email
          </h1>
          <p className="text-[12px] w-[90%] text-center opacity-[0.6]">
            Get started to access discover new titles, and stay connected to
            what’s worth watching.
          </p>
          <form
            noValidate
            className="w-full"
            onSubmit={(e) => {
              formHandler(e);
            }}
          >
            <div className=" w-full  flex items-center justify-center gap-4">
              <IoIosMail className="opacity-[0.4] " />
              <input
                onChange={(e) => {
                  //   console.log(e.target.value);
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="   Email"
                value={email}
                required
                className="w-[70%]  py-2 text-[10px] border-2 rounded-lg border-white  outline-none  caret-transparent"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-4">
              <FaUnlockAlt className="opacity-[0.4] text-sm " />
              <input
                onChange={(e) => {
                  //   console.log(e.target.value);
                  setPassword(e.target.value);
                }}
                value={password}
                type="text"
                placeholder="   Password"
                className="w-[70%]  py-2 text-[10px] border-2 rounded-lg border-white  outline-none  caret-transparent"
              />
            </div>
            <button className="bg-black text-white px-12 py-2 text-sm font-light rounded-3xl mt-5 active:scale-95">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg;
