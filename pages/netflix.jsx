/** @format */

import React from "react";
import Image from "next/image";
import { IoMdRadioButtonOn } from "react-icons/io";
import Link from "next/link";


function netflix() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-[-1]"
          layout="fill"
          ƒ
          objectFit="cover"
          src="/../public/showcases/netflix.png"
          alt="/netflix-showcase"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full translate-y-[-50%] text-white p-4 z-10">
          <h2 className="py-2">Netflix Clone</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] p-2 grid lg:grid-cols-5 gap-8 pt-8 mx-2">
        <div className="lg:col-span-4">
          <p className="text-xl tracking-wider uppercase text-[#5651e5]">Project</p>
          <h2 className="py-2 text-gray-600">Overview</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            veritatis reprehend derit ex, perferendis fuga explicabo, aliquid
            eius ullam dolor ut cupiditate, perspiciatis facilis ipsa.
            Laudantium natus laboriosam a sed soluta.
          </p>
          <a href="https://netflix-clone-4f0fa.firebaseapp.com" target="_blank"><button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-300">Demo</button></a>
          <a href="https://github.com/Paul-l-sining/Netflix-Clone" target="_blank"><button className="px-8 py-2 mt-4 hover:scale-105 duration-300">Code</button></a>
        </div> 

        <div className="lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-200 mx-4 lg:mx-0">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> React
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Tailwind
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Typescript
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> Firebase
              </p>
              <p className="flex text-gray-600 py-2 items-center">
                <IoMdRadioButtonOn className="pr-1" /> The Movie Database API
              </p>

            </div>
          </div>
        </div>

        <div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Back</p>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default netflix;
