/** @format */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useRouter } from "next/router";
import ContactIcons from "./ContactIcons";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    const allRoutes = ["/netflix", "/tbc"];
    setNavBg(allRoutes.includes(router.asPath) ? "transparent" : "#ecf0f3");
    setLinkColor(allRoutes.includes(router.asPath) ? "#ecf0f3" : "#1f2937");
  }, [router]);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const handleShadow = () => {
    if (window.scrollY >= 90) setShadow(true);
    else setShadow(false);
  };

  useEffect(() => {
    if (!toggle) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    window.addEventListener("scroll", handleShadow);
  }, [toggle]);

  return (
    <div
      style={{ background: `${navBg}`, opacity: `${toggle ? "0.9" : "1"}` }}
      className={
        shadow
          ? "fixed w-full shadow-xl z-[100] bg-[#ecf0f3]/90 ease-in-out duration-300"
          : "fixed w-full z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full py-2 px-4 2xl:px-16">
        <Link href="/#home">
          <Image
            className="object-cover cursor-pointer"
            src="/assets/logo.png"
            alt="sigature logo"
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul 
          style={{ color: `${linkColor }`}} 
          className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:scale-105 duration-100	">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden cursor-pointer hover:scale-105 duration-100"
            onClick={handleToggle}
          >
            <AiOutlineMenu 
            style={{ color: `${linkColor }`}} 
            size="25px" />
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
            <Link href="/#home">
              <Image
                className="object-cover"
                src="/assets/logo.png"
                alt="sigature logo"
                width="110"
                height="50"
              />
            </Link>

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
              &quot;Dedication makes dreams come true.&quot;
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
              <Link href="/#about">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm hover:scale-105 duration-100">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-40 ">
            <p className="uppercase tracking-widest text-[#5651e5]">
              let&apos;s connect
            </p>
            <ContactIcons size='p-5'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
