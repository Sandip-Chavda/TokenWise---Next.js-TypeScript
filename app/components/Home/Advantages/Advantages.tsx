import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import AdvantageImage from "@/public/Images/heroimgM1.png";
import Image from "next/image";

const Advantages = () => {
  return (
    <div className="pt-20 pb-16 ">
      <SectionHeading heading="Our Advantages" />

      <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="">
          <h1
            data-aos="fade-right"
            className="text-[19px] md:text-[25px] font-semibold"
          >
            We are offering 100% Guarantee
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-black/90 mt-4"
          >
            Our platform offers real-time market analytics, personalized
            investment strategies, and secure transactions, ensuring you stay
            ahead in the rapidly evolving world of cryptocurrency investments
            with confidence and ease.
          </p>

          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-black/90 mt-4"
          >
            Leverage our advanced technology, intuitive design, and expert
            support to enhance and optimize your cryptocurrency investment
            decisions efficiently.
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="600">
          <Image
            height={650}
            width={650}
            alt="AdvatageImage"
            src={AdvantageImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
