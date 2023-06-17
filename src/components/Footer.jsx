import React from "react";
import { Social, Basic } from "../util/User";
import { RiFacebookFill } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto py-10 px-28">
      <div className="">
        <p className=" text-sm font-light text-app_gray">
          Developed with love by{" "}
          <span className=" text-app_primary">{Basic.fname}</span> &copy; 2022
        </p>
      </div>
      <div className="flex gap-2 ml-4">
        <a href={Social.linedin}>
          <FaLinkedinIn className="text-app_primary border-app_primary border rounded-full p-1 w-6 h-6" />
        </a>
        <a href={Social.facebook}>
          <RiFacebookFill className="text-app_primary border-app_primary border rounded-full p-1 w-6 h-6" />
        </a>
        <a href={Social.github}>
          <FiGithub className="text-app_primary border-app_primary border rounded-full p-1 w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
