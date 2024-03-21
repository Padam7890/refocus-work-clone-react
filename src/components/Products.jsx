import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import oneimg from "../assets/oneimg.png"
import cula from "../assets/cula.mp4";

const products = () => {
  const products = [
    {
      title: "Arquitel",
      live: true,
      case: false,
      desc:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.      ",
    },
    {
      title: "Cula",
      live: true,
      case: false,
      desc:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },

    {
      title: "LayoutLand",
      live: true,
      case: true,
      desc:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
  ];

  const [poistion, setPoistion] = useState(0);
  const mover = (val) => {
    setPoistion(val * 23);
  };

  return (
    <div className=" mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} count={index} data={val} mover={mover} />
      ))}
      <div className=" absolute top-0 w-full h-full  pointer-events-none">
        <motion.div
          initial={{ y: poistion, x: "-50%" }}
          animate={{ y: poistion + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] overflow-hidden bg-white left-[44%]  "
        >
          <motion.div
            animate={{ y: -poistion + `rem` }}
            className=" w-full h-full bg-sky-100 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
           <video className="w-full h-full" autoPlay loop muted >
            <source  src={cula} type="video/mp4" />
           </video>


          </motion.div>
          <motion.div
            animate={{ y: -poistion + `rem` }}
            className=" w-full h-full bg-sky-200 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5}}
          ></motion.div>
          <motion.div
            animate={{ y: -poistion + `rem` }}
            className=" w-full h-full bg-sky-300 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default products;
