import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  width: number;
  height: number;
};

const BlogsCard = ({ image, title, width, height }: Props) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-105 transition-all duration-300 rounded-xl p-4">
      <Image
        width={width}
        height={height}
        className="object-cover rounded-xl"
        alt="Blog Image"
        src={image}
      />
      <div className="flex mt-4 items-center space-x-4">
        <span className="text-[15px] text-black/70">29-Feb-2024</span>
        <span className="text-[15px] text-black/70">By Sandip</span>
      </div>
      <h1 className="mt-2 cursor-pointer text-xl underline font-semibold">
        {title}
      </h1>
      <p className="text-lg transition-all duration-200 cursor-pointer mt-4 text-black hover:underline">
        Read more...
      </p>
    </div>
  );
};

export default BlogsCard;
