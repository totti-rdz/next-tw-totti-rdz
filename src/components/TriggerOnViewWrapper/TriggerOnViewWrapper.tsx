import React from "react";
import { useInView } from "react-intersection-observer";
import { cloneChildren } from "./helper/cloneChildren";

type Props = {
  children: React.ReactNode;
  triggerOnce?: boolean;
  triggerProp: string;
};

function TriggerOnViewWrapper({
  children,
  triggerOnce = true,
  triggerProp,
}: Props) {
  const observerOptions = {
    fallbackInView: true,
    threshold: 0.4,
    triggerOnce,
  };
  const { ref, inView } = useInView(observerOptions);

  const ChildrenWithTrigger = cloneChildren(children, {
    [triggerProp]: inView,
  });

  return (
    <div ref={ref}>
      {ChildrenWithTrigger}
    </div>
  );
}

export default TriggerOnViewWrapper;
