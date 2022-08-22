/** @format */

import React from "react";
import Image from "next/image";

function netflix() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-[-1]"
          layout="fill"
          objectFit="cover"
          src="/../public/showcases/netflix.png"
          alt="/netflix-showcase"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full translate-y-[-50%] text-white p-4 z-10">
          <h2 className="py-2">Netflix Clone</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4"></div>
      </div>
    </div>
  );
}

export default netflix;
