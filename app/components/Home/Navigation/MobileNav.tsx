import Link from "next/link";
import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

type Props = () => {
  nav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, nav }: Props) => {
  const navOpenStyle = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`transform transition-all duration-500 fixed top-0 left-0 z-[200] h-screen right-0 bottom-0 bg-white ${navOpenStyle}`}
    >
      <FaRegWindowClose
        onClick={closeNav}
        className="w-8 h-8 absolute top-32 z-[202] right-8"
      />
      <ul className="relative z-[201] space-y-10 flex flex-col items-center justify-center h-full">
        <li className="text-[25px] cursor-pointer hover:underline transition-all duration-200">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:underline transition-all duration-200">
          <Link href="#about">About</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:underline transition-all duration-200">
          <Link href={"#pricing"}>Investment</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:underline transition-all duration-200">
          <Link href={"#services"}>Services</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:underline transition-all duration-200">
          <Link href={"#blogs"}>Blog</Link>
        </li>
        <li className="text-[25px] cursor-pointer hover:underline transition-all duration-200">
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
