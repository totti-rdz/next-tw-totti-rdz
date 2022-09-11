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

  const changeGif = () => {
    setImgSrc(
      `https://i.giphy.com/media/${
        giphys[Math.floor(Math.random() * giphys.length)]
      }/giphy.webp`
    );
  };

  return (
    <div
      className="w-full grow flex justify-center items-center flex-col space-y-10 p-5"
      id="gifs"
    >
      <h1 className="text-4xl sm:text-5xl font-medium">
        <a href="#gifs">Work in progress</a>
      </h1>
      {imgSrc && <GifContainer url={imgSrc} onClick={changeGif} />}
    </div>
  );
};

const GifContainer = ({ url, onClick }: { url: string; onClick: any }) => (
  <div
    className="rounded-lg w-full sm:w-2/3 lg:w-1/2 2xl:w-1/3 aspect-square"
    onClick={onClick}
  >
    <img src={url} className="rounded-lg w-full" />
  </div>
);
