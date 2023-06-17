import React from "react";
import { StyleMe } from "../util/Style";
import FilterGallery from "./Gallery";

function Projects() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={StyleMe.title_text}>Projects</p>
          <p className={StyleMe.description}>
            Never compromise
            <br />
            for portfolio quality
          </p>
        </div>
        <div className="">
          <p className="font-light text-app_gray max-w-md">
            Promote your blog posts, case udie, and product ounces with the
            branded videos customers come back for services Make the best
            effort.
          </p>
        </div>
      </div>
      <div className="w-full">
        <FilterGallery />
      </div>
    </div>
  );
}

export default Projects;
