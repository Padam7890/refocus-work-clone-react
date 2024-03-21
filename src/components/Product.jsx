import React, { useState } from "react";
import Button from "./Button";

const Product = ({ data, mover, count }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full py-20 h-[23rem] text-white `}
      onMouseEnter={() => {
        mover(count);
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${isHovered ? "  transition ease-in-out delay-150" : ""} `}>
        <div
          className={` max-w-screen-xl mx-auto flex items-center justify-between`}
        >
          <h1 className="text-6xl capitalize font-medium">{data.title}</h1>
          <div className="dets w-1/3">
            <p className="mb-10">{data.desc}</p>
            <div
              className={`items-center z-50 gap-5 ${
                isHovered ? "flex" : "hidden"
              }`}
            >
              {data.live && <Button />}
              {data.case && <Button title="Case Study" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
