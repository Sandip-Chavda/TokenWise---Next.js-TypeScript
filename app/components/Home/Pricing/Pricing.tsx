import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div id="pricing" className="pt-20 pb-16">
      <SectionHeading heading="Our Pricing" />

      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-16 ">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard
            shadow="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            days="30"
            percerntage="50"
            minInvest="500"
            maxInvest="1,00,000"
          />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard
            shadow="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            days="20"
            percerntage="80"
            minInvest="300"
            maxInvest="10,00,000"
          />
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard
            shadow="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            days="10"
            percerntage="99"
            minInvest="100"
            maxInvest="25,00,000"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
