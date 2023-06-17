import React from "react";
import { StyleMe } from "../util/Style";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { Basic } from "../util/User";

function Contact() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="flex justify-between items-center w-full">
        <div className="">
          <p className={StyleMe.title_text}>Contact</p>
          <p className={`${StyleMe.description} mb-5`}>Get we contact work</p>
          <p className="font-light text-app_gray w-[28rem] mb-10 mt-5">
            Promote your blog posts, case udie, and product ounces with the
            branded videos customers come back for services Make the best
            effort.
          </p>
          <form className="w-[35rem]">
            <div className="">
              <div className="flex gap-3">
                <input
                  type="text"
                  id="first_name"
                  className="border text-black text-sm rounded-md  focus:border-app_primary w-full p-2.5"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  id="first_name"
                  className="border text-black text-sm rounded-md focus:ring-app_primary focus:border-app_primary w-full p-2.5"
                  placeholder="Email"
                  required
                />
              </div>
              <textarea
                className="mt-5 border text-black text-sm rounded-md active:ring-app_primary active:border-app_primary block w-full p-2.5"
                rows="10"
                placeholder="Massage"
                required
              ></textarea>
              <button class="text-app_white mt-8 bg-app_primary gap-2 items-center py-3 px-5 flex flex-row rounded-full">
                Send Request
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <div className="flex items-center gap-3 mb-5">
            <IoCall className=" bg-app_primary bottom-[-2rem] text-app_white w-14 h-14 p-3 rounded-full" />
            <div className="">
              <p className=" font-medium">Call</p>
              <a
                href={`tel:${Basic.phone}`}
                className="text-app_gray font-light text-xs"
              >
                {Basic.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <MdEmail className=" bg-app_primary bottom-[-2rem] text-app_white w-14 h-14 p-3 rounded-full" />
            <div className="">
              <p className=" font-medium">Email</p>
              <a
                href={`mailto:${Basic.email}`}
                className="text-app_gray font-light text-xs"
              >
                {Basic.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn className=" bg-app_primary bottom-[-2rem] text-app_white w-14 h-14 p-3 rounded-full" />
            <div className="">
              <p className=" font-medium">Location</p>
              <p className="text-app_gray font-light text-xs">
                {Basic.Address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <iframe
          className="rounded-md border-2 border-app_primary w-full h-80"
          src={Basic.myLocation}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
