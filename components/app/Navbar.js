import React from "react";

// import IoFitnessSharp from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
function Navbar() {
  return (
    <nav className="flex px-6 py-4 items-center justify-between bg-[#f4d58d] shadow-lg">
      <div className="text-[#8d0801] text-2xl font-bold flex items-center gap-[2px]">
        <h3 className="">FitnessGeek</h3>
        {/* <IoIosFitness fontSize="2rem" /> */}
        <IoFitnessSharp fontSize="2rem" />
      </div>
    </nav>
  );
}

export default Navbar;
