import React from "react";
import ServicesItem from "./ServicesItem";
import { Style } from "../util/Style";


function Services() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={Style.title_text}>
            Creative Service
          </p>
          <p className={Style.description}>
            What can I do for service <br /> clients you
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
      <div className="grid grid-cols-3 gap-4 w-full">
        <ServicesItem
          props={{
            color: "green",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "primary",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "blue",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "yellow",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "purple",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "purple2",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
      </div>
    </div>
  );
}

export default Services;
