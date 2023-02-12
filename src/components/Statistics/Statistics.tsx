import React, { useEffect, useState } from "react";
import Stat from "./components/Stat";

const millisecondsInSecond = 1000;

type Props = {};

const Statistics = (props: Props) => {
  const durationTime = 100;
  const framesPerSecond = 30;
  const updateInterval = 10; //millisecondsInSecond / framesPerSecond;
  const [elapsedTime, SetElapsedTime] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    if (elapsedTime === 0) console.time("bench");

    if (elapsedTime < durationTime) {
      timeout = setTimeout(() => {
        console.log("timeout");
        console.log("elapsedTime", elapsedTime);
        SetElapsedTime((current) => ++current);
      }, updateInterval);
    } else {
      console.timeEnd("bench");
    }

    return () => {
      console.log("useEffect cleanup");
      clearTimeout(timeout);
    };
  }, [elapsedTime]);

  useEffect(() => {
    console.log("hello world");
  });

  return (
    <div className="flex justify-center items-center p-5 gap-4">
      <Stat
        value={101234}
        text={"stat"}
        time={durationTime}
        elapsedTime={elapsedTime}
        updateInterval={updateInterval}
      />
      <Stat
        value={200}
        text="stat2"
        time={durationTime}
        updateInterval={updateInterval}
        elapsedTime={elapsedTime}
      />
    </div>
  );
};

export default Statistics;
