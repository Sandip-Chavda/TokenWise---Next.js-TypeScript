import React from "react";
import HeroImg from "@/public/Images/heroimgM.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:h-[80vh] md:mt-48 lg:mt-24 md:-[80vh] sm:-[75vh] h-[70vh] flex items-center justify-center flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto">
        <div className="col-span-2">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:mt-28 md:text-[35px] lg:text-[40px] mb-4 font-bold leading-[2.4rem] md:leading-[4rem]"
          >
            100% Secure <span className="text-gray-600">Investment</span> Plan
          </h1>
          <p
            data-aos="fade-left"
            data-aos-deay="200"
            className="md:text-[17px] text-[15px] mb-8 text-black/90 font-normal"
          >
            Discover innovative crypto investment opportunities with expert
            insights and secure, strategic growth at the forefront on our
            dedicated platform
          </p>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="w-full h-14 relative rounded-lg bg-black shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          >
            <input
              type="text"
              placeholder="Enter Your Email Here..."
              className="bg-transparent h-full ml-8 text-white outline-none w-[90%]"
            />
          </div>
          <button
            data-aos="fade-left"
            data-aos-delay="200"
            className="css-button-retro--black mt-4"
          >
            Submit
          </button>
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-delay="300"
          className="col-span-3 hidden sm:block mx-auto"
        >
          <Image width={580} height={580} src={HeroImg} alt="heroimage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
