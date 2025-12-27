import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaUnlockAlt } from "react-icons/fa";

const Login = ({ users, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      alert("Login successful ✅");
    } else {
      alert("Invalid credentials ❌");
    }
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

    
        <div className="text-center flex items-center flex-col gap-2">
          <h1 className="text-base font-bold opacity-[0.9]">
            Login with email
          </h1>

          <p className="text-[12px] w-[90%] text-center opacity-[0.6]">
            Continue exploring movies and stay connected to what’s worth
            watching.
          </p>

          <form
            className="w-full"
            onSubmit={loginHandler}
          >
           
            <div className="w-full flex items-center justify-center gap-4">
              <IoIosMail className="opacity-[0.4]" />
              <input
                type="text"
                placeholder="   Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[70%]   font-semibold py-2 text-[10px] border-2 rounded-lg border-white outline-none caret-transparent"
              />
            </div>

            <div className="w-full flex items-center justify-center gap-4 mt-3">
              <FaUnlockAlt className="opacity-[0.4] text-sm" />
              <input
                type="password"
                placeholder="   Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[70%] font-semibold py-2 text-[10px] border-2 rounded-lg border-white outline-none caret-transparent"
              />
            </div>

            <button className="bg-black text-white px-12 py-2 text-sm font-light rounded-3xl mt-5 active:scale-95">
              Login
            </button>

        
            <p className="text-[11px] mt-4 opacity-70">
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="font-semibold cursor-pointer underline"
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
