/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ src, title, details, ProjectUrl }) {
  return (
    <div className="relative flex items-center p-4 justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hvr-shutter-in-horizontal">
      <Image
        className="object-cover rounded-xl group-hover:opacity-10 duration-500"
        src={`/showcases/${src}`}
        alt={title}
        height="1080px"
        width="1280px"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-500 ease-in-out">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{details}</p>
        <Link href={ProjectUrl}>
          <p className="text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
