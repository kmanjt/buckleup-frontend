import React from "react";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import Heading from "./Heading";

const feature = [
  {
    description:
      "Fashionable, durable and comfortable. Our products are designed to last.",
    icon: RiNumber1,
  },
  {
    description: "Supporting local businesses and reducing waste in landfills.",
    icon: RiNumber2,
  },
  {
    description: "Promoting sustainability through upcycling.",
    icon: RiNumber3,
  },
];

export default function Features() {
  return (
    <section id="products" className="py-32 my-16">
      <div>
        <div className="p-5">
          <Heading title="Our Products" />
        </div>
        <br></br>
        <div className="grid md:grid-cols-3 grid-cols-1 p-4">
          {feature.map((feature, index) => {
            return (
              <div key={index} className="p-4">
                <div
                  key={index}
                  className="rounded-lg  text-center p-4 w-full h-full shadow-lg"
                  style={{ backgroundColor: "#174484" }}
                >
                  <feature.icon
                    className="h-10 text-white text-bold w-10 p-2 mx-auto rounded-full"
                    style={{ backgroundColor: "#83A5D3" }}
                  />
                  <br></br>
                  <p className="font-medium text-white text-2xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
