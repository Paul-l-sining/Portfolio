/** @format */

import React from "react";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I was born and raised in Shanghai, China. I came to the US to pursue
            my bachelor&apos;s degree at University of San Diego in the class of
            2019. I like to play many sports like tennis, basketball, surfing,
            snowboarding... and still trying to learn some new sports.
          </p>
          <p className="py-2 text-gray-600 italic">
            Fun fact about me: I can cook the best roast chicken.
          </p>
          <p className="py-2 text-gray-600">
            I have been learning coding for 5 years, and I have learned many
            areas of technologies. I knew my passion lied in the Web
            Development. I enjoy how a website is established piece by piece. I
            have spent most of my spare time learning the frontend, now I can
            build a fully responsive and interactive frontend website using
            React. In the summer of 2022, I started freelancing and helped a
            friend of mine build his e-commerce company website. Right now I am
            shifting my focus on the backend and trying to build more
            professional website.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-100 relative">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="programming image"
          />
          <div className="absolute left-0 top-0 rounded-xl w-full h-full bg-slate-400/20"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
