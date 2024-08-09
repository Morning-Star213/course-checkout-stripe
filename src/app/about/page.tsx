"use client";
import React, { useState } from "react";
import { motion, useSpring, useMotionValueEvent } from "framer-motion";
import Footer from "@/lib/components/layout/Footer";
import { useScroll } from "framer-motion";

const About = () => {
  const { scrollY } = useScroll();
  const [y, setY] = useState<any>();
  const scroll: any = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useMotionValueEvent(scroll, "change", (latest) => {
    setY(scroll.current);
  });

  return (
    <div>
      <div className="grid-x md:section-hero outpadding md:pt-0 pt-[150px] pb-[70px] flex flex-col mx-auto md:justify-center md:items-center">
        <div className="md:text-center pb-[40px] md:w-[81%] md:pb-[80px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-[60px] text-[35px] md:pt-[30px] pb-[40px] font-bold"
            style={{ fontFamily: "NeoGramExtended", letterSpacing: "-0.18rem" }}
          >
            <p className="text-center">Involved from the start</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="text-[18px] md:text-[23px]   md:pb-[60px]"
            style={{
              fontFamily: "NeoGramCondensed",
              letterSpacing: "-0.02rem",
            }}
          >
            <p className="text-center">
              Capital Invest 360 was founded by former Tiger Management Head of
              Macro Trading and CFO Dan Morehead. Capital Invest 360's global
              macro strategy invested over $1 billion of institutional
              allocations. In 2013, Capital Invest 360 created the first
              blockchain hedge and venture funds in the United States.
            </p>
          </motion.div>
        </div>
        <div className="flex md:flex-row flex-col">
          <div
            className=" flex flex-col text-white bg-[#15182B] md:py-[80px] py-[85px] px-[30px] md:w-[33%] w-[100%] md:h-[320px] h-[300px] my-auto"
            style={{
              translate: `0px -${scroll.current * 0.3}px`,
            }}
          >
            <div className="flex m-auto text-[35px] pb-[5px]">4</div>
            <div
              className="flex text-center text-[20px]"
              style={{
                fontFamily: "NeoGramCondensed",
                letterSpacing: "-0.02rem",
              }}
            >
              Office locations spread across the Bay Area, New York, and Puerto
              Rico
            </div>
          </div>
          <div
            className=" flex flex-col text-white bg-[#15182B] md:py-[80px] py-[85px] px-[30px] md:w-[33%] w-[100%] md:h-[320px] h-[250px] my-auto"
            style={{
              translate: `0px -${scroll.current * 0.2}px`,
            }}
          >
            <div className="flex m-auto text-[35px] pb-[5px]">$242 million</div>
            <div
              className="flex text-center text-[20px]"
              style={{
                fontFamily: "NeoGramCondensed",
                letterSpacing: "-0.02rem",
              }}
            >
              Capital Invest 360 Venture Funds have realized $242 million on $57
              million of invested capital across 28 companies.
            </div>
          </div>
          <div
            className=" flex flex-col text-white bg-[#15182B] md:py-[80px] py-[85px] px-[30px] md:w-[33%] w-[100%] md:h-[320px] h-[250px] my-auto"
            style={{
              translate: `0px -${scroll.current * 0.1}px`,
            }}
          >
            <div className="flex m-auto text-[35px]">210</div>
            <div
              className="flex text-center text-[20px]"
              style={{
                fontFamily: "NeoGramCondensed",
                letterSpacing: "-0.02rem",
              }}
            >
              Capital Invest 360 has led about half of 210 investments since
              2013.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
