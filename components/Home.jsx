/** @format */

import React from "react";
import ContactIcons from "./ContactIcons";

function Home() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Paul Lu</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a fullstack web developer based in{" "}
            <span className="text-[#5651e5]">San Diego, CA</span>. I enjoy
            building websites that are fast, responsive, and robust. I
            specialize in building frontend applications using{" "}
            <span className="text-[#5651e5]">React</span> and backend services
            using <span className="text-[#5651e5]">Node</span> and
            <span className="text-[#5651e5]"> Go</span>.
          </p>

          <ContactIcons
            size="p-5 md:p-6"
            extraFeatures="max-w-[330px] m-auto md:space-x-10 py-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
