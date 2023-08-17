import React from "react";

const Waves = () => {
  return (
    <div className="text-white">
      <svg
        className="relative w-full h-fit sm:h-[15vh] mb-[-7px] min-h-[40px] sm:min-h-[100px] max-h-[150px]"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            className="animate-[wavesFrames_7s_infinite] animation-delay-wave1"
            style={{
              animationTimingFunction: "cubic-bezier(.55,.5,.45,.5)",
              animationDelay: "-2s",
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            className="animate-[wavesFrames_10s_infinite] animation-delay-wave2"
            style={{
              animationTimingFunction: "cubic-bezier(.55,.5,.45,.5)",
              animationDelay: "-3s",
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            className="animate-[wavesFrames_13s_infinite] animation-delay-wave3"
            style={{
              animationTimingFunction: "cubic-bezier(.55,.5,.45,.5)",
              animationDelay: "-4s",
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use
            className="animate-[wavesFrames_20s_infinite] animation-delay-wave4 fill-current text-current"
            style={{
              animationTimingFunction: "cubic-bezier(.55,.5,.45,.5)",
              animationDelay: "-5s",
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            // fill="#FEFEFA"
          />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
