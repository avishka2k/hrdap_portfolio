import React from "react";
import { StyleMe } from "../util/Style";

function Contact() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full mb-titlebottom">
        <div className="">
          <p className={StyleMe.title_text}>Contact</p>
          <p className={StyleMe.description}>Get we contact work</p>
          <p className="font-light text-gray max-w-md">
            Promote your blog posts, case udie, and product ounces with the
            branded videos customers come back for services Make the best
            effort.
          </p>
          <form action="">
            <div className="">
              <div className="flex gap-3">
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John"
                    required
                  />
              </div>
            </div>
            <div className=""></div>
          </form>
        </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-[13rem] justify-between"></div>
    </div>
  );
}

export default Contact;
