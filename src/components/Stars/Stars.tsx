import React, { useState } from "react";
import AnimatedStar from "./components/AnimatedStar";
import Quote from "./components/Quote";

type Props = { startAnimation?: boolean };

const index = ({ startAnimation = true }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <div className="flex">
        <AnimatedStar triggerAnimation={startAnimation} delay={0.1} />
        <AnimatedStar triggerAnimation={startAnimation} delay={0.2} />
        <AnimatedStar triggerAnimation={startAnimation} delay={0.3} />
        <AnimatedStar triggerAnimation={startAnimation} delay={0.4} />
        <AnimatedStar triggerAnimation={startAnimation} delay={0.5} />
      </div>
      <Quote
        quote="The smartest, most hard-working and the most handsome young man out
            there!"
        author="Mother"
      />
    </div>
  );
};

export default index;
