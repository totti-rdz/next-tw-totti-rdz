import React from "react";

type Props = {
  children: React.ReactNode;
  show?: boolean;
};

const SlideInWrapper = ({ children, show = true }: Props) => {
  const translateXClass = show ? "translate-x-0" : "translate-x-[100vw]";

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
