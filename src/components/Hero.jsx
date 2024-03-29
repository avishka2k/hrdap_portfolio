import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import Profile_picture from "../assets/img/Profile_picture.png";
import { MdDone } from "react-icons/md";
import { Basic, Social } from "../util/User";
import { FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
    <div className="max-w-screen-xl h-screen flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="bg-primary w-[30rem] relative">
        <img src={Profile_picture} className="" alt="" />
        <div className="absolute bottom-0 right-[-3rem] bg-black flex items-center gap-5 py-3 px-7 rounded-full">
          <MdDone className=" text-primary border-2 rounded-full w-8 h-8 p-1" />
          <div className="">
            <p className="text-2xl">1100+</p>
            <p className="text-sm">Completed Projects</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className=" uppercase text-primary italic mb-3 font-semibold text-xl">
          Hello i'm
        </p>
        <p className=" text-6xl font-semibold mb-5">{Basic.full_name}</p>
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
            <a href={Social.linedin}>
              <FaLinkedinIn className="text-primary border rounded-full p-1 w-6 h-6" />
            </a>
            <a href={Social.facebook}>
              <RiFacebookFill className="text-primary border rounded-full p-1 w-6 h-6" />
            </a>
            <a href={Social.github}>
              <FiGithub className="text-primary border rounded-full p-1 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
