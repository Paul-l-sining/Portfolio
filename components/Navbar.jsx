/** @format */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillContacts,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();

    setToggle(!toggle);
  };

  useEffect(() => {
    if (!toggle) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [toggle]);

  return (
    <div className="fixed w-full shadow-xl z-[100] bg-slate-100/90">
      <div className="flex justify-between items-center w-full h-full py-2 px-4 2xl:px-16">
        <Image
          className="object-cover cursor-pointer"
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
          <div
            className="md:hidden cursor-pointer hover:scale-105 duration-100"
            onClick={handleToggle}
          >
            <AiOutlineMenu size="25px" />
          </div>
        </div>
      </div>

      {/* Pop-up sidebar */}
      <div
        className={
          !toggle
            ? "fixed md:hidden left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            !toggle
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center w-full">
            <Image
              className="object-cover"
              src="/../public/assets/logo.png"
              alt="sigature logo"
              width="110"
              height="50"
            />

            <div
              onClick={handleToggle}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-100"
            >
              <AiOutlineClose size="25px" />
            </div>
          </div>

          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              <span className="italic">
                "Dedication makes dreams come true."
              </span>
              -- Kobe Bryant
            </p>
          </div>
          <div className="mt-8">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-40 ">
            <p className="uppercase tracking-widest text-[#5651e5]">
              let's connect
            </p>
            <div className="flex justify-between items-center w-full my-4 sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillLinkedin size="25px" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillGithub size="25px" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillMail size="25px" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillContacts size="25px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
