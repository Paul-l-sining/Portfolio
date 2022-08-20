/** @format */

import React from "react";
import Image from "next/image";

function Badge({ src, name }) {
  return (
    <div className="p-6 shadow-xl hover:scale-105 ease-in duration-200">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`/../public/assets/${src}`}
            alt={name}
            width="64px"
            height="64px"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Badge;
