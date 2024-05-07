import React from "react";

type Props = {
  shadow: string;
  days: string;
  percerntage: string;
  minInvest: string;
  maxInvest: string;
};

const PriceCard = ({
  days,
  percerntage,
  shadow,
  minInvest,
  maxInvest,
}: Props) => {
  return (
    <div
      className={`${shadow} hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] transition-all duration-300 p-6 text-center rounded-md`}
    >
      <h1 className="text-[17px] font-medium md:text-[20px] mt-8 ">
        After{" "}
        <span className="text-[20px] font-bold md:text-[23px]">{days}</span>{" "}
        days
      </h1>

      <h1 className="w-2/6 mx-auto outline bg-[#e3eaef] text-[23px] font-bold p-4 rounded-md mt-6">
        {percerntage}%
      </h1>

      <h1 className="mt-4 text-[17px] font-medium mb-4">
        Minimum Investment :{" "}
        <span className="text-[19px] font-semibold">₹{minInvest}</span>
      </h1>
      <h1 className="mt-4 text-[17px] font-medium mb-4">
        Maximun Investment :{" "}
        <span className="text-[19px] font-semibold">₹{maxInvest}</span>
      </h1>

      <div className="text-center mt-8">
        <button className="css-button-retro--black">Deposite ₹</button>
      </div>
    </div>
  );
};

export default PriceCard;
