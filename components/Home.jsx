/** @format */

import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import ContactIcons from "./ContactIcons";

function Home() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Paul Lu</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building exceptional
            digital experience. Currently I'm focused on building reponsive
            front-end web applications while learning back-end technologies.
          </p>

          <ContactIcons size='5 md:p-6' extraFeatures='max-w-[330px] m-auto md:space-x-10 py-4'/>

        </div>
      </div>
    </div>
  );
}

export default Home;
