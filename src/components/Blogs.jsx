import React from "react";
import { StyleMe } from "../util/Style";
import { Card } from "flowbite-react";
import Testimonials1 from "../assets/img/Testimonials1.jpg";

function Blogs() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={StyleMe.title_text}>Blogs</p>
          <p className={StyleMe.description}>
            Blog Latest News tricks <br />& Updates
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
      <div className="grid grid-cols-3 gap-5 ">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={Testimonials1}
          className="rounded-none"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={Testimonials1}
          className="rounded-none"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={Testimonials1}
          className="rounded-none"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Blogs;
