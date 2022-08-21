/** @format */

import React from "react";
import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
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
      />
      <InputField
        label="email"
        title="Email"
        value={email}
        handleChange={(e) => setEmail(e.target?.value)}
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
          className="w-full p-4 text-gray-100 mt-4 bg-[#5651e5]"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
