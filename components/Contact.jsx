/** @format */

import React from "react";
import {
  AiFillContacts,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsChevronDoubleUp } from "react-icons/bs";
import ContactForm from "./ContactForm";
import Link from "next/link";

function Contact() {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5  gap-8">
          {/* left */}
          <div className="relative lg:col-span-2 p-8 h-full w-full shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-100 ease-in">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="business"
            />
            <h2 className="py-2">Paul Lu</h2>
            <p className="pb-8">Front-End Developer</p>
            <p>I am available for freelance or full-time positions.</p>
            <p className="pb-40">Contact me and let's talk.</p>
            <p className="py-4 uppercase">Connect with me</p>
            <div className="flex items-center justify-between m-auto max-w-[420px] py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 md:p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillLinkedin size="25px" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 md:p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillGithub size="25px" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 md:p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillMail size="25px" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 md:p-5 cursor-pointer hover:scale-105 duration-100">
                <AiFillContacts size="25px" />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="lg:col-span-3 p-8 h-full w-full shadow-xl relative shadow-gray-400 rounded-xl hover:scale-105 duration-100 ease-in">
            <ContactForm />
          </div>
        </div>
        <div className="flex justify-center pt-24">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 md:p-5 cursor-pointer hover:scale-110 duration-300 ">
              <BsChevronDoubleUp size="25px" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
