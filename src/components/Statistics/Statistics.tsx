import React, { useEffect, useState } from "react";
import StatisticsView from "./components/StatisticsView/StatisticsView";
import { getDaysAlive } from "./components/StatisticsView/helper/getDaysAlive";

const daysAlive = getDaysAlive();
const height = 176;
const averageSleepingTimeInHours = 8;
const hoursSlept = daysAlive * averageSleepingTimeInHours;

const StatisticsProvider = () => {
  const [amountGithubRepos, setAmountGithubRepos] = useState(0);

  const data = [
    { description: "Days alive", value: daysAlive },
    { description: "Height in cm", value: height },
    { description: "Hours slept", value: hoursSlept },
    { description: "Github projects", value: amountGithubRepos },
  ];

  useEffect(() => {
    const getData = async (url: string) => {
      const response = await (await fetch(url)).json();

      setAmountGithubRepos(response.public_repos);
    };

    getData("https://api.github.com/users/totti-rdz");
  }, []);

  return <StatisticsView data={data} />;
};

export default StatisticsProvider;
