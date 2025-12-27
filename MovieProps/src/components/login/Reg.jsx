import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";

const Reg = ({ setUsers, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    setUsers((prev) => [...prev, { email, password }]);

    setEmail("");
    setPassword("");

    alert("Registered ✅");
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to right,#9AD1EF,#DBEFF9,#E5EEF7,#FBFBFD)",
      }}
    >
      <div className="h-[60%] w-[27%] bg-white/80 rounded-2xl shadow-2xl">
        <div className="w-full flex items-center justify-center text-4xl h-[20%]">
          <IoMdExit />
        </div>

        <div className="text-center flex flex-col gap-2">
          <h1 className="text-base font-bold opacity-90">
            Sign up with email
          </h1>

          <p className="text-[12px] w-[90%] opacity-60 mx-auto">
            Get started to discover new titles and stay connected to what’s
            worth watching.
          </p>

          <form
            className="w-full"
            noValidate
            onSubmit={formHandler}
          >
            <div className="w-full flex items-center justify-center gap-4">
              <IoIosMail className="opacity-40" />
              <input
                type="email"
                placeholder="   Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[70%] font-semibold py-2 text-[10px]  rounded-lg  boredr-none caret-transparent" 
              />
            </div>

            <div className="w-full flex items-center justify-center gap-4 mt-3">
              <FaUnlockAlt className="opacity-40" />
              <input
                type="password"
                placeholder="   Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[70%] font-semibold py-2 text-[10px] rounded-lg outline-none caret-transparent"
              />
            </div>

            <button className="bg-black text-white px-12 py-2 text-sm rounded-3xl mt-5 active:scale-95">
              Sign up
            </button>

            <p className="text-[11px] mt-4 opacity-70">
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="font-semibold cursor-pointer underline"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg;
