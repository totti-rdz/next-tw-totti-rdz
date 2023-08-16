import React from "react";
import Image from "next/image";
import starSvg from "../assets/star.svg";

const Star = () => (
  <div className="w-12 sm:w-20 h-12 sm:h-20">
    <Image src={starSvg} alt="golden star" />
  </div>
);

export default Star;
