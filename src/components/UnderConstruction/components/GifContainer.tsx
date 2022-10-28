import React from "react";

type Props = {
  url: string;
  onClick: () => void;
};

const GifContainer = ({ url, onClick }: Props) => (
  <div
    className="rounded-lg w-full sm:w-2/3 lg:w-1/2 2xl:w-1/3 aspect-square"
    onClick={onClick}
  >
    <img src={url} className="rounded-lg w-full" />
  </div>
);

export default GifContainer;
