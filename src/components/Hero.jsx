import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";

function Hero() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className=""></div>
      <div className="">
        <p className=" uppercase text-primary italic mb-3 font-semibold text-xl">
          Hello i'm
        </p>
        <p className=" text-6xl font-semibold mb-5">Avishka Prabath!</p>
        <p className="text-3xl font-light mb-5">DevOps Engineer</p>
        <p className=" text-sm text-gray">
          There are many variations of sum available <br /> in the galley of
          type and scrambled it some.
        </p>
        <div className="flex mt-10 items-center">
          <button className=" border-2 rounded-full py-1 px-4 mr-10 text-primary">
            About Me
          </button>
          Follow Me:
          <div className="flex gap-2 ml-4">
            <RiFacebookFill className="text-primary border rounded-full p-1 w-6 h-6" />
            <FiGithub className="text-primary border rounded-full p-1 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
