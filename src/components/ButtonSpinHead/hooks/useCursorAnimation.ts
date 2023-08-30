import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { AnimationHelper } from "../helper/AnimationHelper";

function useCursorAnimation(
  interval: number
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout | null = null;
    if (isAnimating) {
      id = AnimationHelper.startCursorAnimation(interval);
    } else {
      if (id) {
        clearInterval(id);
      }
    }

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [isAnimating, interval]);

  return [isAnimating, setIsAnimating];
}

export default useCursorAnimation;
