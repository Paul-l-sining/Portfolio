/** @format */

import React from "react";
import { useState } from "react";
import {
  AiFillPhone,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NotificationManager } from "react-notifications";

function ContactIcons({ size, extraFeatures }) {
  const email = "paul.l.sining@gmail.com";
  const phone = "+1(619)918-7307";
  const [copied, setCopied] = useState(0);

  return (
    <div
      className={`flex justify-between items-center w-full my-4 ${extraFeatures}`}
    >
      <a
        href="https://www.linkedin.com/in/paul-sining-lu-8a438820a/"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={`rounded-full shadow-lg shadow-gray-400 p-${size} cursor-pointer hover:scale-105 duration-100`}
        >
          <AiFillLinkedin size="25px" />
        </div>
      </a>
      <a href="https://github.com/Paul-l-sining" target="_blank" rel="noreferrer">
        <div
          className={`rounded-full shadow-lg shadow-gray-400 p-${size} cursor-pointer hover:scale-105 duration-100`}
        >
          <AiFillGithub size="25px" />
        </div>
      </a>

      <CopyToClipboard
        text={email}
        onCopy={() => {
          setCopied(copied + 1);
        }}
      >
        <div
          className={`rounded-full shadow-lg shadow-gray-400 p-${size} cursor-pointer hover:scale-105 duration-100`}
          onClick={() => {
            NotificationManager.success(
              "Copied email to the clipboard",
              "SUCCESS"
            );
          }}
        >
          <AiFillMail size="25px" />
        </div>
      </CopyToClipboard>

      <CopyToClipboard
        text={phone}
        onCopy={() => {
          setCopied(copied + 1);
        }}
      >
        <div
          className={`rounded-full shadow-lg shadow-gray-400 p-${size} cursor-pointer hover:scale-105 duration-100`}
          onClick={() => {
            NotificationManager.success(
              "Copied phone to the clipboard",
              "SUCCESS"
            );
          }}
        >
          <AiFillPhone size="25px" />
        </div>
      </CopyToClipboard>
    </div>
  );
}

export default ContactIcons;
