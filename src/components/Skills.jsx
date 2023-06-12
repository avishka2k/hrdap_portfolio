import React from "react";
import { StyleMe } from "../util/Style";
import { MySkills } from "../util/User";

function Skills() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={StyleMe.title_text}>Skills</p>
          <p className={StyleMe.description}>
            Skill of Best Masters <br /> Software Skills.
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
      <div className="grid grid-cols-2 gap-y-5 gap-x-[13rem] justify-between">
        {MySkills.map((skills) => (
          <div className="w-full">
            <p className=" text-sm pb-1">{skills.name}</p>
            <div class="w-[25rem] bg-gray rounded-full h-2 mb-4">
              <div style={{width: `${skills.score}%`}} class={`bg-primary h-2 rounded-full relative`}>
                <div className="w-5 h-5 absolute right-[-8px] top-[-1.5rem]">
                  {skills.score}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
