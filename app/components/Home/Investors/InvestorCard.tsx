import Image from "next/image";
import React from "react";
import InSandip from "@/public/Images/investor4.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  image: string;
  invest: string;
  name: string;
  bg: string;
  sub: string;
  width: number;
  height: number;
};

const InvestorCard = ({
  width,
  height,
  image,
  sub,
  invest,
  name,
  bg,
}: Props) => {
  return (
    <div
      className={`border-r-2 border-l-2 border-b-2 ${bg} transition-all duration-300 p-6 rounded-lg`}
    >
      <Image
        width={width}
        height={height}
        className="rounded-xl -mt-12"
        src={image}
        alt="SandipChavda"
      />
      <p className="mt-6 text-lg text-center font-bold">
        {name}
        {"  "}
        <span className="text-black/55 text-[12px]">{sub}</span>
      </p>
      <p className="mt-2 text-black/80 text-lg text-center font-bold">
        ₹ {invest}
        <span className="text-sm">Cr</span>
      </p>
      <div className="mt-4 flex items-center justify-center space-x-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sandip-chavda-86704a2aa/"
          className="text-xl p-1.5 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
        >
          <FaLinkedinIn />
        </a>
        <a
          target="_blank"
          href="https://sandip-chavda-portfolio.vercel.app/"
          className="text-xl p-1.5 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
        >
          <GoGlobe />
        </a>
        <a
          target="_blank"
          href="https://github.com/Sandip-Chavda"
          className="text-xl p-1.5 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
        >
          <FiGithub />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/SandipC70731202"
          className="text-xl p-1.5 outline hover:bg-black hover:text-white transition-all duration-200 rounded-full"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default InvestorCard;
