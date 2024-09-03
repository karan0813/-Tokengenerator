import React from "react";
import InputBox from "./Component/InputBox";

function App() {
  const handleGenerate = () => {};
  const handleClear = () => {};
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="space-y-4">
        <InputBox label={"Number of Blue Tokens"} InputType="number" />
        <InputBox label={"Blue Token Prefix"} InputType="text" />
        <InputBox label={"Blue Tokens per Row"} InputType="number" />
        <InputBox label={"Number of Red Tokens"} InputType="number" />
        <InputBox label={"Red Token Prefix"} InputType="text" />
        <InputBox label={"Red Tokens per Row"} InputType="number" />
        {/* Generate and Clear Buttons */}
        <div className="space-x-4">
          <button
            onClick={handleGenerate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Generate
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
