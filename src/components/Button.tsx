import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="bg-[#10aadc] hover:bg-[#2894ea] active:bg-[#3489f1] text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#facc15]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
