import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Get Started"}) => {
  return (
    <div className="max-w-40 px-3 py-2 bg-zinc-100 rounded-full flex items-center justify-between  ">
      <span className="text-sm font-semibold text-black">{title}</span>
      <IoIosReturnRight color="black" fontSize={23} />
    </div>
  );
};

export default Button;
