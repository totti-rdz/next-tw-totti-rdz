import React from "react";
import TriggerOnViewWrapper from "./TriggerOnViewWrapper/TriggerOnViewWrapper";
import SlideInWrapper from "./SlideInWrapper";

type Props = {
  children: React.ReactNode;
  triggerProp: string;
};

const SlideInOnViewWrapper = ({ children, triggerProp }: Props) => {
  return (
    <TriggerOnViewWrapper triggerProp={triggerProp}>
      <SlideInWrapper>{children}</SlideInWrapper>
    </TriggerOnViewWrapper>
  );
};

export default SlideInOnViewWrapper;
