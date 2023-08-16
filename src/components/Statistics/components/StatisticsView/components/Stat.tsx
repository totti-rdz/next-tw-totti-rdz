import React from "react";

export type TStat = {
  description: string;
  value: number;
};

type Props = TStat & {
  time: number;
  elapsedTime: number;
  start?: boolean;
};

const Stat = ({ value, description, time, elapsedTime }: Props) => {
  const currentValue = Math.floor((value * elapsedTime) / time);
  return (
    <div className="flex flex-col justify-between items-center text-center border-[#2597e8] bg-[#12aadc] border-2 p-4 pt-14 rounded-xl w-36 h-52 overflow-hidden">
      <span className="text-3xl font-bold text-[#facc15]">{currentValue}</span>
      <div className="flex justify-center items-center h-[3rem] ">
        <p className="text-white font-">{description}</p>
      </div>
    </div>
  );
};

export default Stat;
