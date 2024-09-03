import React from "react";

const InputBox = ({ label, inputName, value, InputType, handleChange }) => {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        name={inputName}
        type={InputType}
        value={value}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default InputBox;
