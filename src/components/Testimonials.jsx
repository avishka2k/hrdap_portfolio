import React from "react";
import { StyleMe } from "../util/Style";
import { BsQuote, BsFillStarFill } from "react-icons/bs";
import Testimonials1 from "../assets/img/Testimonials1.jpg";
import Testimonials2 from "../assets/img/Testimonials2.jpg";
import Testimonials3 from "../assets/img/Testimonials3.jpg";
import Profile_picture from "../assets/img/Profile_picture.png";
import { Carousel } from "flowbite-react";

function Testimonials() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center mx-auto py-8 px-28">
      <div className="w-full mb-titlebottom">
        <div className="justify-center text-center">
          <p className={StyleMe.title_text}>Testimonials</p>
          <p className={StyleMe.description}>What people say about us</p>
        </div>
      </div>
      <div className="flex w-full h-[30rem] relative min-h-[22rem] items-center">
        <Carousel
          className="max-w-[35rem] m-auto text-center"
          leftControl
          rightControl
        >
          <div className="max-w-md justify-center m-auto text-center">
            <div className="flex text-sm justify-center gap-5">
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
            </div>
            <p className="mt-6 text-lg text-app_gray">
              We understand the importance of approaching each work integrally
              and believe in the power of simple and we say easy cation growth.
            </p>
            <div className="">
              <img
                src={Testimonials1}
                className="rounded-full my-7 m-auto w-32 aspect-square"
                alt="Testimonials"
              />
              <p className="font-bold text-xl">Romes Barson</p>
              <p className="text-sm font-medium text-app_gray">Manager</p>
            </div>
          </div>
          <div className="max-w-md justify-center m-auto text-center">
            <div className="flex text-sm justify-center gap-5">
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
            </div>
            <p className="mt-6 text-lg text-app_gray">
              We understand the importance of approaching each work integrally
              and believe in the power of simple and we say easy cation growth.
            </p>
            <div className="">
              <img
                src={Testimonials2}
                className="rounded-full my-7 m-auto w-32 aspect-square"
                alt="Testimonials"
              />
              <p className="font-bold text-xl">Romes Barson</p>
              <p className="text-sm font-medium text-app_gray">Manager</p>
            </div>
          </div>
          <div className="max-w-md justify-center m-auto text-center">
            <div className="flex text-sm justify-center gap-5">
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
              <BsFillStarFill className=" text-app_yellow" />
            </div>
            <p className="mt-6 text-lg text-app_gray">
              We understand the importance of approaching each work integrally
              and believe in the power of simple and we say easy cation growth.
            </p>
            <div className="">
              <img
                src={Testimonials3}
                className="rounded-full my-7 m-auto w-32 aspect-square"
                alt="Testimonials"
              />
              <p className="font-bold text-xl">Romes Barson</p>
              <p className="text-sm font-medium text-app_gray">Manager</p>
            </div>
          </div>
        </Carousel>
        <BsQuote className="text-app_primary text-[300px] absolute left-0" />
        <BsQuote className="text-app_primary mb-10 rotate-180 text-[300px] absolute right-0" />
      </div>
    </div>
  );
}

export default Testimonials;
