import React from "react";

type Props = {
  value: number;
  text: string;
  time: number;
  updateInterval: number;
  elapsedTime: number;
};

const Stat = ({ value, text, time, updateInterval, elapsedTime }: Props) => {
  const test = Math.floor((value * elapsedTime) / time);
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{value}</p>
      <p>{text}</p>
      <p>time: {time}</p>
      <p>updateInterval: {updateInterval} ms</p>
      <p>updateInterval: {updateInterval / 1000} s</p>
      <p>result: {elapsedTime}</p>
      <p>test: {test}</p>
    </div>
  );
};

export default Stat;
