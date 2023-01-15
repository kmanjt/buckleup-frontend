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
      <div className="max-md:h-screen">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left p-5 mx-auto lg:pl-16 max-sm:mb-20">
            <Heading title="Buckle Up" />
            <br></br>
            <p className="text-2xl text-white py-6 tracking-tight">
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
