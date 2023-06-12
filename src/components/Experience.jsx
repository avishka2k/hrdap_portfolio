import React from "react";
import { StyleMe } from "../util/Style";
import { FaGraduationCap } from "react-icons/fa";

function Experience() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={StyleMe.title_text}>Experiance And Education</p>
          <p className={StyleMe.description}>
            Resume of Experiance <br /> and Education
          </p>
        </div>
        <div className="">
          <p className="font-light text-gray max-w-md">
            Promote your blog posts, case udie, and product ounces with the
            branded videos customers come back for services Make the best
            effort.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-[13rem] justify-between">
        <ExperienceItem />
      </div>
    </div>
  );
}

export default Experience;

function ExperienceItem() {
  return (
    <div className="flex gap-5">
      <div className="">
        <FaGraduationCap className=" bg-primary bottom-[-2rem] text-white w-14 h-14 p-3 rounded-full" />
      </div>
      <div className="mt-5">
        <p className="uppercase font-semibold mb-4 items-center flex">
          api development
          <span className="bg-primary font-medium text-xs py-1 px-4 text-white rounded-full ml-3">
            NSBM
          </span>
        </p>
        <p className=" text-gray font-light text-xs mb-3">
          Promote your blog posts. case udie. and product ounces nts with these
          branded videos.
        </p>
        <p className="flex items-center gap-1 text-xs text-primary">
          <div className="w-[4px] h-[4px] bg-primary"></div>2023
        </p>
      </div>
    </div>
  );
}
