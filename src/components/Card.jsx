import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover="false" }) => {
  return (
    <motion.div
      whileHover={{backgroundColor:hover ==="true" && "#7443ff"}}
      className={`${width} bg-zinc-800  p-5 rounded-xl min-h-[30rem] flex flex-col justify-between `}
    >
      <motion.div
      whileHover={{padding:"5px"}}
       className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">Whatever heading</h1>
      </motion.div>
      <div className="down w-full ">
        {start && (
          <div>
            <h1 className=" text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className=" rounded-full mt-5 py-2 px-3 border-[1px] border-white">
              Contact us
            </button>
          </div>
        )}
        {para && (
          <p className=" text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
