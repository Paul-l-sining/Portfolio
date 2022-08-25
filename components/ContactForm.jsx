/** @format */

import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import emailjs from "@emailjs/browser";
import {
  NotificationManager,
} from "react-notifications";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoad(true);


    const response = await emailjs.send(
      process.env.EMAIL_JS_SERVICE_ID,
      process.env.EMAIL_JS_TEMPLATE_ID,
      {
        from_name: { name },
        to_name: "Paul",
        message: `SUBJECT: ${subject} \n
      EMAIL: ${email} \n
      PHONE NUMBER: ${number} \n
      MESSAGE: ${message}
      `,
      },
      process.env.EMAIL_JS_PUBLIC_KEY
    );

    response.status == "200"
      ? NotificationManager.success(
          "Inquiry has been sent successfully",
          "SUCCESS"
        )
      : NotificationManager.error(
          "Something went wrong, please try again later",
          "FAILURE"
        );

    setLoad(false);
    
    setName("");
    setNumber("");
    setEmail("");
    setSubject("");
    setMessage("");

  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="name"
        title="Name"
        value={name}
        handleChange={(e) => setName(e.target?.value)}
      />
      <InputField
        label="number"
        title="Phone number"
        value={number}
        handleChange={(e) => setNumber(e.target?.value)}
        pattern="[0-9]{9,}"
        hint="Must be at lease 9 digits"
      />
      <InputField
        label="email"
        title="Email"
        value={email}
        handleChange={(e) => setEmail(e.target?.value)}
        pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
        hint="Must be a valid email address"
      />
      <InputField
        label="subject"
        title="Subject"
        value={subject}
        handleChange={(e) => setSubject(e.target?.value)}
      />

      <TextAreaField
        label="message"
        title="Message"
        value={message}
        handleChange={(e) => setMessage(e.target?.value)}
      />

      <div className="py-2">
        <button
          className={`w-full p-4 text-gray-100 mt-4 ${!load ? "bg-[#5651e5]" : "bg-[#6d6ab7]"}`}
          type="submit"
          disabled={load}
        >
          Send Message
        </button>
      </div>
    </form>
    
  );
}

export default ContactForm;
