import { convertMilliseconds } from "./convertMilliseconds";

export const getDaysAlive = () => {
  const dateOfBirth = new Date("89, 5, 24");
  const daysAliveInMs = Date.now() - dateOfBirth.getTime();
  return convertMilliseconds(daysAliveInMs, "d") as number;
};
