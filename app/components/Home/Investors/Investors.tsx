import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import InvestorCard from "./InvestorCard";

const Investors = () => {
  return (
    <div className="pt-20 pb-16 ">
      <SectionHeading heading="Our Top Investors" />

      <div className="w-4/5 mt-16 mx-auto gap-5 lg:space-y-0 md:space-y-0 xl:space-y-0 space-y-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <div data-aos="zoom-out" data-aos-delay="200">
          <InvestorCard
            image="/images/investor4.jpg"
            invest="500"
            name="Sandip Chavda"
            bg="hover:shadow-[0px_0px_49px_0px_#fbd38d] border-[#fbd38d]"
            sub="Founder"
            width={300}
            height={300}
          />
        </div>

        <div data-aos="zoom-out" data-aos-delay="400">
          <InvestorCard
            image="/images/investor2.jpg"
            invest="300"
            name="Lilith Easom"
            bg="hover:shadow-[0px_0px_49px_0px_#BEE3F8] border-[#BEE3F8]"
            sub="Lender"
            width={300}
            height={300}
          />
        </div>

        <div data-aos="zoom-out" data-aos-delay="600">
          <InvestorCard
            image="/images/investor1.jpg"
            invest="200"
            name="Zara Eldridge"
            bg="hover:shadow-[0px_0px_49px_0px_#FBB6CE] border-[#FBB6CE]"
            sub="Lender"
            width={300}
            height={300}
          />
        </div>

        <div data-aos="zoom-out" data-aos-delay="800">
          <InvestorCard
            image="/images/investor3.jpg"
            invest="270"
            name="Richie Rich"
            bg="hover:shadow-[0px_0px_49px_0px_#fbd38d] border-[#fbd38d]"
            sub="Lender"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Investors;
