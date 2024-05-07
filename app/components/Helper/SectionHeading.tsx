import React from "react";

type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div data-aos="fade-down" className="text-center p-3">
      <h1 className="text-[22px] md:text-[30px] font-semibold">{heading}</h1>
      <div className="h-[2px] w-[100px] mx-auto bg-black " />
      <h1 className="text-[15px] mt-2 md:text-[17px] text-black/65">
        We use the latest technologies and tools in order to create a better
        output.
      </h1>
    </div>
  );
};

export default SectionHeading;
