/** @format */

import React from "react";

function TextAreaField({ label, title, value, handleChange }) {
  return (
    <div className="py-2 flex flex-col">
      <label className="uppercase text-sm py-2" htmlFor={label}>
        {title}
      </label>
      <textarea
        className="border-2 rounded-lg p-3 flex border-gray-300"
        rows="10"
        type={label}
        value={value}
        id={label}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default TextAreaField;
