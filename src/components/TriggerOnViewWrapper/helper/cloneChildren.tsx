import React from "react";

export const cloneChildren = (
  children: React.ReactNode,
  props: Record<string, string | number | boolean>
) => {
  if (!React.isValidElement(children))
    throw new Error(
      "Invalid element passed as children to cloneChildren function"
    );

  return React.cloneElement(children, props);
};
