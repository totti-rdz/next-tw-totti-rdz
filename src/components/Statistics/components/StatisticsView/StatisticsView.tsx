import React, { useEffect, useState } from "react";
import Stat, { TStat } from "./components/Stat";

type Props = { data: TStat[]; startCountUp?: boolean };

const StatisticsView = ({ data, startCountUp = true }: Props) => {
  const durationTime = 100;
  const updateInterval = 10; // ms
  const [elapsedTime, SetElapsedTime] = useState(0);

  useEffect(() => {
    if (!startCountUp) return;
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    if (elapsedTime < durationTime) {
      timeout = setTimeout(() => {
        SetElapsedTime((current) => ++current);
      }, updateInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [elapsedTime, startCountUp]);

  return (
    <div className="flex justify-center items-center p-5 gap-4 flex-wrap">
      {!!data &&
        data.map((stat, idx) => (
          <Stat
            value={stat.value}
            description={stat.description}
            time={durationTime}
            elapsedTime={elapsedTime}
            key={idx}
          />
        ))}
    </div>
  );
};

export default StatisticsView;
