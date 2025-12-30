import React from "react";
import Side from "./Side";
import Heromain from "./Heromain";

const Hero = () => {
  return (
    <div
      className="h-screen w-full p-7"
      style={{ backgroundColor: "black" }}
    >
      <div className="h-full w-full flex justify-between gap-5">

        {/* SIDEBAR */}
        <div
          className="p-3 w-[24%] h-full rounded-2xl"
          style={{
            background: "linear-gradient(#241C2F,#0E0E0E,#37364B)",
          }}
        >
          <Side />
        </div>

        {/* MAIN CONTENT */}
        <div
          className="w-[72%] h-full rounded-2xl"
          style={{
            background: "linear-gradient(#241C2F,#0E0E0E,#37364B)",
          }}
        >
          <Heromain />
        </div>

      </div>
    </div>
  );
};

export default Hero;
