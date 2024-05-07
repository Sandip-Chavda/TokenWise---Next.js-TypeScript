import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div
      data-aos="fade-down"
      className="h-[12vh] fixed w-full z-[500] !bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
    >
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-gray-700">
          <span className="text-[27px] md:text-[40px] text-black">Token</span>
          Wise
        </h1>

        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[17px] cursor-pointer font-semibold hover:underline hover:scale-105 transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer font-semibold hover:underline hover:scale-105 transition-all duration-200">
            <Link href="#about">About</Link>
          </li>
          <li className="text-[17px] cursor-pointer font-semibold hover:underline hover:scale-105 transition-all duration-200">
            <Link href="#pricing">Inevstment</Link>
          </li>
          <li className="text-[17px] cursor-pointer font-semibold hover:underline hover:scale-105 transition-all duration-200">
            <Link href="#services">Services</Link>
          </li>
          <li className="text-[17px] cursor-pointer font-semibold hover:underline hover:scale-105 transition-all duration-200">
            <Link href="#blogs">Blog</Link>
          </li>
          <li className="text-[17px] cursor-pointer font-semibold hover:underline hover:scale-105 transition-all duration-200">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        <div className="space-x-4 flex items-center">
          <button className="css-button-retro--black">Login</button>
          <FaBars
            onClick={openNav}
            className="w-8 h-8 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
