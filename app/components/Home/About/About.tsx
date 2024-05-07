import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { FaCheck } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import AboutImage from "@/public/Images/heroimgF.png";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="pt-20 pb-16">
      <SectionHeading heading="About Us" />
      <div className="w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Image
            data-aos="zoom-in"
            width={650}
            height={650}
            alt="About Image"
            src={AboutImage}
          />
        </div>
        <div>
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-[19px] md:text-[25px] font-semibold"
          >
            A Faster Way to do just about anything.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-black/90 mt-4"
          >
            Explore tailored cryptocurrency investment strategies on our
            platform, designed to maximize returns and minimize risks for both
            new and seasoned investors.
          </p>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex mt-8 items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#e3eaef] outline flex flex-col justify-center items-center">
              <FaCheck className="w-[1.3rem] h-[1.3rem] text-black" />
            </div>
            <div>
              <h1 className="text-[16px] md:text-[22px] font-semibold">
                Licenced & Certified
              </h1>
              <p className="mt-2 text-black/75 text-[15px] ">
                This platform is licenced & certified.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex mt-8 items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#e3eaef] outline flex flex-col justify-center items-center">
              <GiMoneyStack className="w-[1.3rem] h-[1.3rem] text-black" />
            </div>
            <div>
              <h1 className="text-[16px] md:text-[22px] font-semibold">
                Savings & Investment
              </h1>
              <p className="mt-2 text-black/75 text-[15px] ">
                Save money & invest it right places
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="flex mt-8 items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#e3eaef] outline flex flex-col justify-center items-center">
              <MdOutlineSecurity className="w-[1.3rem] h-[1.3rem] text-black" />
            </div>
            <div>
              <h1 className="text-[16px] md:text-[22px] font-semibold">
                100% Safe & Secure
              </h1>
              <p className="mt-2 text-black/75 text-[15px] ">
                This is the 100% safe and secure to invest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
