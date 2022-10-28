import React from "react";

type Props = {
  author: string;
  quote: string;
};

const Quote = ({ author, quote }: Props) => {
  return (
    <div>
      <p>
        <q>{quote}</q>
      </p>
      <p>&ndash; {author}</p>
    </div>
  );
};

export default Quote;
