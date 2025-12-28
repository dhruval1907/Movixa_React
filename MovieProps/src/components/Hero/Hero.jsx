import React from "react";
import Side from "./Side";
import Heromain from "./Heromain";

const Hero = () => {
  return (
    <div
      className="h-screen w-full p-7"
      style={{ background: "linear-gradient(black,white)" }}
    >
      <div className="hero h-full w-full flex justify-evenly ">
        <div
          className="p-3 w-[24%] h-full rounded-2xl relative"
          style={{ background: "linear-gradient(#241C2F,#0E0E0E,#37364B)" }}
        >
        <Side />
        </div>
        <div
          className="w-[72%] h-full rounded-2xl"
          style={{ background: "linear-gradient(#241C2F,#0E0E0E,#37364B)" }}
        >
          <Heromain />
        </div>
      </div>
    </div>
  );
};

export default Hero;
