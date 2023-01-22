import React from "react";
import TextStyle from "../Shared/TextStyle";
import { IoIosFitness } from "react-icons/io";

function Hero() {
  return (
    <div className="flex flex-col p-10 items-center justify-center gap-4">
      <TextStyle text="Be a Better Version of Yourself." coloredIndices={[2]} />
      <p className="text-lg text-[#001427] ">
        Know Your Body mass index (BMI), Your Ideal Body Weight, How many
        calories you need per day and The Best Cardio for You.
      </p>
    </div>
  );
}

export default Hero;
