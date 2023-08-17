import React from "react";

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  show?: boolean;
};

const SlideInWrapper = ({ children, reverse = false, show = true }: Props) => {
  const translateDirection = reverse ? "-translate-x-[100vw]" : "translate-x-[100vw]";
  const translateXClass = show ? "translate-x-0" : translateDirection;

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`${translateXClass} transition ease-in-out duration-1000`}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideInWrapper;
