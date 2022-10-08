import React from "react";
import Star from "./components/Star";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <div className="flex">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
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
