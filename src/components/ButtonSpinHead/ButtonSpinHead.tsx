import React, { useEffect, useState } from "react";
import Button from "../Button";
import { AnimationHelper } from "./helper/AnimationHelper";
import useCursorAnimation from "./hooks/useCursorAnimation";

type Props = {};

const ButtonHeadSpin = ({}: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const [_, setCursorAnimation] = useCursorAnimation(100);

  useEffect(() => {
    if (isAnimating) {
      AnimationHelper.rotatePage();
      AnimationHelper.rotateImages();
      setCursorAnimation(true);
    }
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  return <Button onClick={handleClick}>Let me make your head spin</Button>;
};

export default ButtonHeadSpin;
