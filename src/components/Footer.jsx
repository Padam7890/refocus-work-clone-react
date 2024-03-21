import React from "react";

const Footer = () => {
  return (
    <div className=" w-full">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className=" basis-1/2 ">
          <h1 className=" text-[11.5rem] font-semibold leading-none tracking-tight ">
            refoKus.
          </h1>
        </div>
        <div className=" basis-1/2 flex gap-4">
          
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter", "LinkedIn", ""].map((val, index) => (
              <a
                key={index}
                className="block mt-2 capitalize text-zinc-600"
                href=""
              >
                {" "}
                {val}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
            {["instagram", "twitter", "LinkedIn", ""].map((val, index) => (
              <a
                key={index}
                className="block mt-2 capitalize text-zinc-600"
                href=""
              >
                {" "}
                {val}
              </a>
            ))}
          </div>
          <div className="basis-1/2">
            <p>
              Our OMR22 Masterclass teaches how to create a showcase website,
              and we made a showcase website about showcase websites to promote
              the art of showcasing.
            </p>
            <img src="" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
