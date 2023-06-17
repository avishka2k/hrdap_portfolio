import React from "react";
import { TbWorld } from "react-icons/tb";

function ServicesItem({ props }) {
  return (
    <div className="aspect-square bg-[#1f2226] rounded-md relative">
      <div className="w-20 h-20 ml-5 relative">
        <div
          className={`opacity-20 w-[4rem] h-[5.5rem] m-auto bg-${props.color}`}
        ></div>
        <TbWorld
          className={`absolute bg-${props.color} bottom-[-2rem] text-white w-20 h-20 p-4 rounded-full`}
        />
      </div>
      <div className="max-w-[16rem] absolute bottom-5 left-5">
        <p className="text-xl font-medium mb-2">{props.title}</p>
        <p className="text-gray font-light text-sm mb-6">{props.description}</p>
        <a
          href={props.link}
          className={`font-medium cursor-pointer text-sm flex items-center mb-3 text-${props.color} gap-2`}
        >
          <div className={`w-[6px] h-[6px] bg-${props.color}`}></div>Read More
        </a>
      </div>
      <div className="text-yellow bg-yellow"></div>
      <div className="text-primary bg-primary"></div>
      <div className="text-green bg-green"></div>
      <div className="text-blue bg-blue"></div>
      <div className="text-purple bg-purple"></div>
      <div className="text-purple2 bg-purple2"></div>
    </div>
  );
}

export default ServicesItem;
