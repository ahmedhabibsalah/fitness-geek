import React from "react";

function TextStyle({ text, coloredIndices }) {
  if (text.split(" ").length < Math.max(...coloredIndices)) {
    throw new Error("Colored Indexes out of bounds");
  }
  const splitText = text.trim().split(" ");
  const finalText = splitText.map((word, index) => {
    return (
      <h1
        className={`text-3xl sm:text-5xl font-semibold relative whitespace-normal text-[#001427] ${
          coloredIndices.includes(index)
            ? "border-[2px] border-[#8d0801] p-2"
            : "border-none"
        }`}
        key={index}
      >
        {word}
        {/* {coloredIndices.includes(index) ? (
          <h1 className="border border-[#f7e7e7]"></h1>
        ) : (
          ""
        )} */}
      </h1>
    );
  });
  return (
    <div className="flex flex-wrap	gap-x-4	text-center items-center z-0">
      {finalText}
    </div>
  );
}

export default TextStyle;
