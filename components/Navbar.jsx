/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  return (
    <div className="fixed w-full shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full py-2 px-4 2xl:px-16">
        <Image
          className="object-cover"
          src="/../public/assets/logo.png"
          alt="sigature logo"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer">
            <AiOutlineMenu size="25px" />
          </div>
        </div>
      </div>

      <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
          <div className="flex justify-between items-center w-full">
            <Image
              className="object-cover"
              src="/../public/assets/logo.png"
              alt="sigature logo"
              width="110"
              height="50"
            />

            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <AiOutlineClose size="25px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
