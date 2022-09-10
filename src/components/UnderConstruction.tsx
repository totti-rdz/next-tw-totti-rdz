import React, { useEffect, useState } from "react";

const giphys = [
  "o0vwzuFwCGAFO",
  "llKJGxQ1ESmac",
  "pOKrXLf9N5g76",
  "3oriO7A7bt1wsEP4cw",
  "toXKzaJP3WIgM",
  "BemKqR9RDK4V2",
  "2YOp8WqFDRHhe",
  "WoErBV0Detcum33FJQ",
  "iIAYEKtLy0yG7TacbC",
  "mCRJDo24UvJMA",
  "QKkV58ufpV4ksJ1Okh",
  "5Zesu5VPNGJlm",
];

export const UnderConstruction = () => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const rdx = Math.floor(Math.random() * giphys.length);
    setImgSrc(`https://i.giphy.com/media/${giphys[rdx]}/giphy.webp`);
  }, []);

  return (
    <div className="w-full grow flex justify-center items-center flex-col space-y-10 p-5">
      <h1 className="text-4xl sm:text-5xl font-medium">Work in progress</h1>
      {imgSrc && <img src={imgSrc} className="rounded-lg w-full sm:w-2/3 lg:w-1/2 2xl:w-1/3" />}
    </div>
  );
};
