export const convertMilliseconds = (
  milliseconds: number,
  format?: "s" | "m" | "h" | "d"
) => {

  // if (milliseconds === 0) return 0; // would return wrong type if no format is specified (default case)

  const total_seconds = Math.floor(milliseconds / 1000);
  const total_minutes = Math.floor(total_seconds / 60);
  const total_hours = Math.floor(total_minutes / 60);
  const days = Math.floor(total_hours / 24);

  const seconds = total_seconds % 60;
  const minutes = total_minutes % 60;
  const hours = total_hours % 24;

  switch (format) {
    case "s":
      return total_seconds;
    case "m":
      return total_minutes;
    case "h":
      return total_hours;
    case "d":
      return days;
    default:
      return { d: days, h: hours, m: minutes, s: seconds };
  }
};
