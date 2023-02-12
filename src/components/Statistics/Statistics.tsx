import React, { useEffect, useState } from "react";
import Stat from "./components/Stat";

type Props = {};

const Statistics = (props: Props) => {
  const durationTime = 100;
  const updateInterval = 10; //millisecondsInSecond / framesPerSecond;
  const [elapsedTime, SetElapsedTime] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    if (elapsedTime < durationTime) {
      timeout = setTimeout(() => {
        SetElapsedTime((current) => ++current);
      }, updateInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [elapsedTime]);

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
