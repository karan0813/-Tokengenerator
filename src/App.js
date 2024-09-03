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
      // [name]: value,
      [name]: name.includes("PerRow") ? Number(value) : value,
    }));
  };

  const renderTokens = (tokens, perRow, colorClass) => {
    const rows = [];

    for (let i = 0; i < tokens.length; i += perRow) {
      const rowTokens = tokens.slice(i, i + perRow);
      rows.push(
        <div key={i} className="flex justify-center space-x-2 mb-2">
          {rowTokens.map((token, index) => (
            <div
              key={index}
              className={`p-4 text-center rounded ${colorClass}`}
            >
              {token}
            </div>
          ))}
        </div>
      );
    }

    return rows.length > 0 ? <div className="mt-6">{rows}</div> : null;
  };

  const generateTokens = (count, prefix) =>
    Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`);

  const handleGenerate = () => {
    setState((prevState) => ({
      ...prevState,
      blueTokens: generateTokens(
        prevState.inputBlueCount,
        prevState.inputBluePrefix
      ),
      redTokens: generateTokens(
        prevState.inputRedCount,
        prevState.inputRedPrefix
      ),
      bluePerRow: prevState.inputBluePerRow,
      redPerRow: prevState.inputRedPerRow,
    }));
  };
  const handleClear = () => {
    setState({
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
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md form ">
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
        <div className=" space-y-3">
          <button
            onClick={handleGenerate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
          >
            Generate
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 w-full "
          >
            Clear
          </button>
        </div>
      </div>
      {/* Token Displays */}
      {renderTokens(
        state.blueTokens,
        state.bluePerRow,
        "bg-blue-100 text-blue-700"
      )}
      {renderTokens(
        state.redTokens,
        state.redPerRow,
        "bg-red-100 text-red-700"
      )}
    </div>
  );
}

export default App;
