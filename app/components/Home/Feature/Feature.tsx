import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { PiMoneyWavy } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdCurrencyExchange } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

const Feature = () => {
  return (
    <div id="services" className="pt-20 pb-16 ">
      <SectionHeading heading="Why Choose Us" />

      <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center">
        <div data-aos="fade-right">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <PiMoneyWavy className="mx-auto mt-8 w-16 h-16" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl font-semibold">
              Fast Profit
            </h1>
            <p className="text-center text-black/70">
              Make fast profit with the world&apos;s best investment plateform.
            </p>
          </div>
        </div>

        <div data-aos="fade-right">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <GiTakeMyMoney className="mx-auto mt-8 w-16 h-16" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl font-semibold">
              Instant Withdraw
            </h1>
            <p className="text-center text-black/70">
              Withdraw all your money instanly with just one click.
            </p>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <MdCurrencyExchange className="mx-auto mt-8 w-16 h-16" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl font-semibold">
              Multi-Currency
            </h1>
            <p className="text-center text-black/70">
              You can invest in multiple currencies without any problem.
            </p>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="p-6 cursor-pointer hover:scale-110 transition-all duration-300 rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <MdSupportAgent className="mx-auto mt-8 w-16 h-16" />
            <h1 className="text-base text-center mt-8 mb-4 md:text-xl font-semibold">
              Support 24*7
            </h1>
            <p className="text-center text-black/70">
              Our team is always ready to assist and solve your problem 24*7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
