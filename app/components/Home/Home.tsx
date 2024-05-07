"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Feature from "./Feature/Feature";
import Pricing from "./Pricing/Pricing";
import Advantages from "./Advantages/Advantages";
import Investors from "./Investors/Investors";
import Reviews from "./Reviews/Reviews";
import Blogs from "./Blogs/Blogs";
import LocomotiveScroll from "locomotive-scroll";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Feature />
      <Pricing />
      <Advantages />
      <Investors />
      <Reviews />
      <Blogs />
    </div>
  );
};

export default Home;
