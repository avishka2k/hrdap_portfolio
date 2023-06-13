import React from "react";
import { StyleMe } from "../util/Style";
import Info from "./Info";
import { Basic } from "../util/User";

function AboutMe() {
  return (
    <div className="max-w-screen-xl h-screen flex flex-wrap items-center justify-between mx-auto py-8 px-28">
      <div className="">
        <div className="">
          <p className={StyleMe.title_text}>About Me</p>
          <p className={StyleMe.description}>
            I can design world <br /> for leading UI/UX
          </p>
        </div>
        <div className="">
          <p className={`uppercase mt-10 ${StyleMe.title_text}`}>
            personal infos:
          </p>
          <div className="grid grid-cols-2 gap-8 mt-5">
            <Info
              props={{
                info: "First Name:",
                details: Basic.fname,
              }}
            />
            <Info
              props={{
                info: "Last Name:",
                details: Basic.lname,
              }}
            />
            <Info
              props={{
                info: "Location:",
                details: Basic.Address,
              }}
            />
            <Info
              props={{
                info: "Phone:",
                details: Basic.phone,
              }}
            />
            <Info
              props={{
                info: "23 Years Nationality",
                details: "",
              }}
            />
            <Info
              props={{
                info: "Email:",
                details: Basic.email,
              }}
            />
            <Info
              props={{
                info: "Available",
                details: "",
              }}
            />
            <Info
              props={{
                info: "Languages:",
                details: Basic.languages,
              }}
            />
          </div>
        </div>
        <button class="text-white mt-16 bg-primary gap-2 items-center font-semibold text-xl py-3 px-8 flex flex-row rounded-full">
          Hire Me
        </button>
      </div>
      <div className=""></div>
    </div>
  );
}

export default AboutMe;
