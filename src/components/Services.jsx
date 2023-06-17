import React from "react";
import ServicesItem from "./ServicesItem";
import { StyleMe } from "../util/Style";

function Services() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={StyleMe.title_text}>Creative Service</p>
          <p className={StyleMe.description}>
            What can I do for service <br /> clients you
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
      <div className="grid grid-cols-3 gap-4 w-full">
        <ServicesItem
          props={{
            color: "app_green",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "app_primary",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "app_blue",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "app_yellow",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "app_purple",
            title: "Web Development",
            description:
              "Promote your blog posts. case udie and product ounces nts with the branded videos",
          }}
        />
        <ServicesItem
          props={{
            color: "app_purple2",
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
