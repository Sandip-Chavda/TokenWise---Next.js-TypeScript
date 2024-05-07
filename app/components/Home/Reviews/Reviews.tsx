import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return (
    <div className="pt-20 pb-16 ">
      <SectionHeading heading="User's Reviews" />

      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="w-4/5 mt-16 mx-auto"
      >
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
