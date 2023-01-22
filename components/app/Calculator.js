import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  muscleGainWorkout,
  overWeightWorkout,
  underWeightWorkout,
} from "../../dummydata/data";

function Calculator() {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [idealW, setIdealW] = useState();
  const [caloriesM, setCaloriesM] = useState();
  const [caloriesW, setCaloriesW] = useState();
  const [data, setData] = useState(muscleGainWorkout);
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState();
  const handleChanges = () => {
    setHidden(!hidden);
  };
  const handleBmi = (e) => {
    e.preventDefault();

    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);

    let idealWeight = (50 + 0.91 * [height - 152.4]).toFixed(1);

    let caloriesForMen = (
      66.47 +
      13.75 * weight +
      5.003 * height -
      6.755 * age
    ).toFixed(1);

    let caloriesForWomen = (
      655.1 +
      9.563 * weight +
      1.85 * height -
      4.676 * age
    ).toFixed(1);

    setBmi(val);
    setIdealW(`${idealWeight - 5}Kg : ${idealWeight}Kg`);
    setCaloriesM(caloriesForMen);
    setCaloriesW(caloriesForWomen);

    if (val < 18.5) {
      setInfo("Underweight ");
      setData(underWeightWorkout);
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Normal Weight ");
      setData(muscleGainWorkout);
    } else if (val > 24.9 && val < 30) {
      setInfo("a little Overweight ");
      setData(overWeightWorkout);
    } else {
      setInfo("Overweight ");
      setData(overWeightWorkout);
    }

    e.target.reset();
  };
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <form
        className="flex flex-col gap-3 w-[280px]  justify-center bg-[#001427] rounded-br-3xl px-2 py-4 shadow-lg"
        onSubmit={handleBmi}
      >
        <h1 className=" text-[#f4d58d] text-2xl">Health Stats Calculator</h1>
        <div className="flex flex-col  gap-1">
          <label className="text-[#f4d58d]">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="input"
          />
        </div>
        <div className="flex flex-col  gap-1">
          <label className="text-[#f4d58d]">Height</label>
          <input
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="height in cm"
            className="input"
          />
        </div>
        <div className="flex flex-col  gap-1">
          <label className="text-[#f4d58d]">Weight</label>
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
            className="input"
          />
        </div>
        <div className="flex flex-col  gap-1">
          <label className="text-[#f4d58d]">Age</label>
          <input
            type="text"
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Calculate
        </button>
      </form>

      <div className="flex flex-col gap-3 w-[280px]  justify-center bg-[#001427] rounded-br-3xl px-2 py-4 shadow-lg">
        <h1 className=" text-[#f4d58d] text-2xl border-b-2">Your Results</h1>
        <span className="flex gap-2 flex-col ">
          <p className="text-[#f4d58d] text-base">Your BMI is</p>
          <p className="text-[#f4d58d] text-base font-bold">{bmi}</p>
        </span>
        <span className="flex gap-2 flex-col ">
          <p className="text-[#f4d58d] text-base"> {name} You Weight is</p>
          <p className="text-[#f4d58d] text-base font-bold">
            {name == "raneem waleed" ? "Perfect just like you" : info}
          </p>
        </span>
        <span className="flex gap-2 flex-col ">
          <p className="text-[#f4d58d] text-base">
            {" "}
            Your Ideal Weight is between
          </p>
          <p className="text-[#f4d58d] text-base font-bold whitespace-nowrap">
            {idealW}
          </p>
        </span>
        <span className="flex gap-2  flex-col ">
          <p className="text-[#f4d58d] text-base"> Needed Daily Calories</p>
          <span className="flex flex-col">
            <p className="text-[#f4d58d] text-base font-bold">
              For Men {caloriesM} cal
            </p>
            <p className="text-[#f4d58d] text-base font-bold">
              For Women {caloriesW} cal
            </p>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <button className="button" onClick={handleChanges}>
          {hidden ? "Hide Exercises" : "Show Exercises"}
        </button>
        {hidden ? (
          <div className="flex  gap-4 items-center flex-wrap justify-center">
            {data.map((exercise) => (
              <div
                key={exercise.id}
                className="flex flex-col items-start w-[280px] h-[350px] gap-1 shadow-lg rounded-br-3xl bg-[#001427]"
              >
                <div className="flex-[0.7] w-[280px] relative">
                  <Image
                    src={exercise.src}
                    alt={exercise.title}
                    fill
                    sizes=""
                  />
                </div>
                <div className="flex flex-col gap-1 items-start px-2 flex-[0.3]">
                  <p className="text-xl font-bold text-[#f4d58d]">
                    {exercise.title}
                  </p>
                  <span className="flex w-full gap-1">
                    <p className="text-xl text-[#f4d58d]">Sets</p>
                    <p className="text-xl font-bold text-[#f4d58d]">
                      {exercise.sets}
                    </p>
                  </span>
                  <span className="flex w-full gap-1">
                    <p className="text-xl text-[#f4d58d]">Reps</p>
                    <p className="text-xl font-bold text-[#f4d58d]">
                      {exercise.reps}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Calculator;
