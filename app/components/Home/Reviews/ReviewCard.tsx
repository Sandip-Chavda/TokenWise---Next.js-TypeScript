import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

type Props = {
  image: string;
  name: string;
};

const ReviewCard = ({ image, name }: Props) => {
  return (
    <div className="p-6 m-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg">
      <div className="flex mt-3 items-center space-x-4 ">
        <div>
          <Image
            width={60}
            height={60}
            className="rounded-full"
            src={image}
            alt="Reviewer Image"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-xs text-black/80 font-medium">CEO, WebDevv</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-5">
        <FaStar className="w-4 h-4" />
        <FaStar className="w-4 h-4" />
        <FaStar className="w-4 h-4" />
        <FaStar className="w-4 h-4" />
        <FaStar className="w-4 h-4" />
      </div>
      <p className="mt-5 mb-8 text-black/80">
        The website under review provides a comprehensive suite of features
        designed to facilitate seamless crypto investment. These features
        include
      </p>
    </div>
  );
};

export default ReviewCard;
