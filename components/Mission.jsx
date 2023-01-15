import React from "react";
import people from "../public/people.png";
import Image from "next/image";
import Heading from "./Heading";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-32">
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-center md:text-left p-5">
            <Heading title="Our Mission" />
            <br></br>
            <p className="text-2xl tracking-tight pl-4">
              We are committed to providing our customers with fashionable,
              trendy and sustainable clothing by transforming discarded bicycle
              tires into unique and stylish accessories. <br /> <br /> Join us
              in reducing waste in landfills and promoting sustainability
              through upcycling.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              duration: 3,
              bounce: 0.5,
            }}
            className="align-top text-center m-auto"
          >
            <Image src={people} alt="people" height={500} width={500} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
