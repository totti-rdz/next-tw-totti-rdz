import React from "react";
import TriggerOnViewWrapper from "./TriggerOnViewWrapper/TriggerOnViewWrapper";
import SlideInWrapper from "./SlideInWrapper";

type Props = {
  children: React.ReactNode;
  reverse?: boolean;
  triggerProp: string;
};

const SlideInOnViewWrapper = ({ children, reverse, triggerProp }: Props) => {
  return (
    <TriggerOnViewWrapper triggerProp={triggerProp}>
      <SlideInWrapper reverse={reverse}>{children}</SlideInWrapper>
    </TriggerOnViewWrapper>
  );
};

export default SlideInOnViewWrapper;
