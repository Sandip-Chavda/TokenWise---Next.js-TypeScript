import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div data-aos="zoom-in" id="contact" className="pt-12 bg-[#e3eaef] pb-12 ">
      <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-black pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        <div data-aos="fade-right" className="lg:mx-auto mx-0">
          <h1 className="text-[16px] md:text-[25px] font-bold text-gray-700">
            <span className="text-[27px] md:text-[40px] text-black">Token</span>
            Wise
          </h1>
          <p className="text-black text-opacity-70 font-medium mt-2">
            Best investing platform for invest.
          </p>
          <p className="text-black/70 mt-4 font-bold">chavdas766@gmail.com</p>
          <p className="text-black/70 mt-1 font-bold">+91 12345 67890</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="lg:mx-auto mx-0 "
        >
          <h1 className="text-lg text-black/80 font-bold mb-6 underline">
            Company
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            About
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Affiliate
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Careers & Culture
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Blogs
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Press
          </h1>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:mx-auto mx-0 "
        >
          <h1 className="text-lg text-black/80 font-bold mb-6 underline">
            Inforamtion
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Return Policy
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Privacy Policy
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Terms & Conditions
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Site Map
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Store Hours
          </h1>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="lg:mx-auto mx-0 "
        >
          <h1 className="text-lg text-black/80 font-bold mb-6 underline">
            About Us
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Support Center
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Customer Support
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            About Us
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Leagal
          </h1>
          <h1 className="text-black/65 mb-4 text-[15px] font-semibold cursor-pointer hover:underline transition-all duration-200 ">
            Popular Campaign
          </h1>
        </div>
      </div>
      <div className="w-4/5 mx-auto items-center justify-between flex mt-4">
        <div className="text-[15px] font-medium text-black/80">
          Copyright © 2024 by TokenWise.
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            target="_blank"
            title="LinkedIn"
            className="text-lg p-1 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
            href={"https://www.linkedin.com/in/sandip-chavda-86704a2aa/"}
          >
            <FaLinkedinIn />
          </Link>
          <Link
            target="_blank"
            title="GitHub"
            className="text-lg p-1 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
            href={"https://github.com/Sandip-Chavda"}
          >
            <FiGithub />
          </Link>
          <Link
            target="_blank"
            title="Website"
            className="text-lg p-1 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
            href={"https://sandip-chavda-portfolio.vercel.app/"}
          >
            <GoGlobe />
          </Link>
          <Link
            target="_blank"
            title="Twitter"
            className="text-lg p-1 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
            href={"https://twitter.com/SandipC70731202"}
          >
            <FaXTwitter />
          </Link>
          <Link
            target="_blank"
            title="Instagram"
            className="text-lg p-1 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
            href={"#"}
          >
            <IoLogoInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
