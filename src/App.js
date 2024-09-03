import React, { useState } from "react";
import InputBox from "./Component/InputBox";

function App() {
  // state
  const [state, setState] = useState({
    inputBlueCount: 0,
    inputBluePrefix: "",
    inputBluePerRow: 1,
    inputRedCount: 0,
    inputRedPrefix: "",
    inputRedPerRow: 1,
    blueTokens: [],
    redTokens: [],
    bluePerRow: 1,
    redPerRow: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      // [name]: name.includes("PerRow") ? Number(value) : value,
    }));
    console.log(state);
  };

  const handleGenerate = () => {};
  const handleClear = () => {};
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="space-y-4">
        <InputBox
          label={"Number of Blue Tokens"}
          InputType="number"
          inputName="inputBlueCount"
          value={state.inputBlueCount}
          handleChange={handleChange}
        />
        <InputBox
          label={"Blue Token Prefix"}
          InputType="text"
          inputName="inputBluePrefix"
          value={state.inputBluePrefix}
          handleChange={handleChange}
        />
        <InputBox
          label={"Blue Tokens per Row"}
          InputType="number"
          inputName="inputBluePerRow"
          value={state.inputBluePerRow}
          handleChange={handleChange}
        />
        <InputBox
          label={"Number of Red Tokens"}
          InputType="number"
          inputName="inputRedCount"
          value={state.inputRedCount}
          handleChange={handleChange}
        />
        <InputBox
          label={"Red Token Prefix"}
          InputType="text"
          inputName="inputRedPrefix"
          value={state.inputRedPrefix}
          handleChange={handleChange}
        />
        <InputBox
          label={"Red Tokens per Row"}
          InputType="number"
          inputName="inputRedPerRow"
          value={state.inputRedPerRow}
          handleChange={handleChange}
        />
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
