import React from "react";
import ppapp from "../public/ppapp.png";
import Image from "next/image";
import Heading from "./Heading";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:py-36 md:py-24 py-48 lg:mt-8 flex flex-wrap "
    >
      <div className="max-md:h-screen mx-auto">
        <div className="mx-auto">
          <div className="text-center  p-8 mx-auto  max-sm:mb-20 bg-white rounded-lg">
            <Heading title="OFF THE ROAD " />
            <br></br>
            <h1 className="text-5xl">COllECTIVE</h1>
            <br></br>
            <p className="text-2xl text-black py-6 tracking-tight">
              Committed to making a difference in the {" "}
              <span className="underline decoration-darkColor italic tracking-tightest">
                world
              </span>
              !{" "}
            </p>
            <br></br>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
