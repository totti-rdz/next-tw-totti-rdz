import React, { useState } from "react";
import AnimatedStar from "./components/AnimatedStar";
import Star from "./components/Star";

const index = () => {
  const [bool, setBool] = useState(true);
  const startAnimation = () => setBool((current) => !current);

  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <div className="flex" onClick={startAnimation}>
        <AnimatedStar triggerAnimation={bool} delay={0.1} />
        <AnimatedStar triggerAnimation={bool} delay={0.2} />
        <AnimatedStar triggerAnimation={bool} delay={0.3} />
        <AnimatedStar triggerAnimation={bool} delay={0.4} />
        <AnimatedStar triggerAnimation={bool} delay={0.5} />
      </div>
      <div>
        <p>
          <q>
            The smartest, most hard-working and the most handsome young man out
            there!
          </q>
        </p>
        <p>&ndash; Mother</p>
      </div>
    </div>
  );
};

export default index;
