import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  img: string;
  imgSize: number;
  isReversed?: boolean;
  list?: string[];
  text?: string;
  title?: string;
};

const TextBox = ({
  img,
  imgSize,
  isReversed = false,
  list,
  text,
  title,
}: Props) => {
  return (
    <div
      className={`w-full flex flex-col justify-center gap-5 ${
        isReversed ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="space-y-5 w-full max-w-prose">
        {!!title && (
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 text-center sm:text-left">
            {title}
          </h2>
        )}
        {!!text && <p>{text}</p>}
        {!!list && (
          <ul className="pl-8 list-disc list-outside space-y-3">
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative rounded-3xl overflow-hidden sm:max-w-[300px] w-2/3 mx-auto sm:mx-5 sm:w-1/3 shrink-0 aspect-square">
        <Image
          src={img}
          width={imgSize}
          height={imgSize}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default TextBox;
