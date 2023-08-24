/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-10">
      <div className="max-w-[1240px] m-auto md:grid md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a new graduate from University of San Diego (USD) with a
            bachelor&apos;s degree in Computer Science in Dec 2023.{" "}
            <span className="font-bold">
              I am currently looking for a full-time software engineer position.
            </span>
          </p>

          <p className="py-2 text-gray-600">
            I have been learning coding for 5 years, and I have learned many
            areas of technologies. I knew my passion lied in the Web
            Development. I have completed many projects both in school and
            outside of school in the past including frontend applications,
            backend services, and full stack applications. I am also familiar
            with cloud services such as AWS and deployment tools such as Docker
            and Kubernetes.
          </p>

          <p className="py-2 text-gray-600">
            I am a quick learner and I am always eager to learn new things. In
            school I have learned many computer basics such as data structures,
            algorithms, and operating systems. Yet to become a fullstack
            developer, those are not enough. So I have been self-learning many
            other tech stack to adapt to the industry needs.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
          <a
            href="https://github.com/pawpaw2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my Github
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-100 relative">
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="programming image"
            layout="responsive"
            objectFit="cover"
            width="360px"
            height="240px"
          />
          <div className="absolute left-0 top-0 rounded-xl w-full h-full bg-slate-400/20"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
