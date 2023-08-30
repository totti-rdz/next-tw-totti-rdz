import React, { useEffect, useState } from "react";
import GifContainer from "./components/GifContainer";

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

  const changeGif = () => {
    setImgSrc(
      `https://i.giphy.com/media/${
        giphys[Math.floor(Math.random() * giphys.length)]
      }/giphy.webp`
    );
  };

  return (
    <div className="w-full grow flex justify-center items-center flex-col space-y-10 p-5">
      <h1 className="text-4xl sm:text-5xl font-medium">Work in progress</h1>
      {imgSrc && <GifContainer url={imgSrc} onClick={changeGif} />}
    </div>
  );
};
