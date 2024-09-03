import React from "react";

const InputBox = ({ label, value, setValue, InputType }) => {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <input
        type={InputType}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default InputBox;
