import React from "react";
import Star from "./Star";

type Props = {
  triggerAnimation?: boolean;
  delay?: number;
};

const AnimatedStar = ({ triggerAnimation = true, delay }: Props) => {
  const animateStarClass = triggerAnimation
    ? "animate-[starsFrames_1.2s_ease-in-out_both] grayscale-0"
    : "grayscale";
  return (
    <div
      className={animateStarClass}
      style={{
        animationDelay: (delay || 0) + "s",
      }}
    >
      <Star />
    </div>
  );
};

export default AnimatedStar;
