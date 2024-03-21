import { motion } from "framer-motion";
import React from "react";

const Marque = ({ imageUrl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x:direction === 'left' ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imageUrl.map((url, index) => (
          <img
            key={index}
            className=" w-[6vw] flex-shrink-0"
            src={url}
            alt=""
          />
        ))}
        {imageUrl.map((url, index) => (
          <img key={index} className="flex-shrink-0" src={url} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === 'left' ? "0" : "-100%" }}
        animate={{ x:direction === 'left' ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imageUrl.map((url, index) => (
          <img
            key={index}
            className=" w-[6vw] flex-shrink-0"
            src={url}
            alt=""
          />
        ))}
        {imageUrl.map((url, index) => (
          <img key={index} className="flex-shrink-0" src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
