import React from "react";

function Info({ props }) {
  return (
    <p className="flex items-center gap-2 text-app_gray font-light">
      <div className="rounded-full w-5 p-[3.5px] border-2 border-app_primary aspect-square">
        <div className="w-full aspect-square rounded-full bg-app_primary"></div>
      </div>
      {props.info} {props.details}
    </p>
  );
}

export default Info;
