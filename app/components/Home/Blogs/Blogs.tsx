import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  return (
    <div id="blogs" className="pt-20 pb-16">
      <SectionHeading heading="Latest Blogs" />
      <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className=""
        >
          <BlogsCard
            image="/images/blog1.svg"
            title="10 Resons to invest with us"
            width={400}
            height={400}
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <BlogsCard
            image="/images/blog2.svg"
            title="How to invest with analytics"
            width={400}
            height={400}
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <BlogsCard
            image="/images/blog3.svg"
            title="Get best dashboard settings"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
