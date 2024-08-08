"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/lib/components/layout/Footer";
const portfolioData = [
  {
    img: "0x-logo",
    type: "Venture",
    sector: "DeFi",
  },
  {
    img: "1inch-logo",
    type: "Venture",
    sector: "Finance",
  },
  {
    img: "abra-logo",
    type: "Venture",
    sector: "Infrastructure",
  },
  {
    img: "Acala-logo",
    type: "Venture",
    sector: "Finance",
  },
  {
    img: "Alchemy-logo",
    type: "Venture",
    sector: "Infrastructure",
  },
  {
    img: "amber-logo",
    type: "Venture",
    sector: "Infrastructure",
  },
];

const Portfolio = () => {
  return (
    <div>
      <div className="sm:section-hero outpadding sm:pt-0 pt-[150px] pb-[70px] flex flex-col grid1 mx-auto sm:justify-center sm:items-center">
        <div className="sm:text-center pb-[40px] sm:w-[81%] sm:pb-[80px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-[50px] text-[35px] pb-[40px]"
          >
            A global portfolio
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="sm:text-[15px] text-[12px]"
          >
            We invest in thematic ideas and projects that are core
            infrastructure pieces of the blockchain ecosystem, such as
            exchanges, custodians, institutional trading tools, decentralized
            finance, next gen payment systems, and more. Since 2013, we have
            backed more than 100 blockchain companies and 110 early-stage token
            deals.
          </motion.div>
        </div>
        <div className="border-y-[1px] w-[100%] border-black flex flex-row justify-between py-[20px] px-[20px] bg-gray-300 transition delay-100 duration-200 ease-in-out">
          <div className="text-[15px] flex my-auto ">VENTURE</div>
          <div className="text-[15px] flex my-auto"></div>
          <div className="text-[15px] flex my-auto">FILTER</div>
        </div>
        <div className="border-b-[1px] w-[100%] border-black flex flex-row justify-between py-[20px] px-[20px] bg-amber-500 bg-opacity-0 transition delay-100 duration-200 ease-in-out">
          <div className="text-[15px] flex my-auto w-[25%]">NAME</div>
          <div className="text-[15px] flex my-auto w-[25%]">TYPE</div>
          <div className="text-[15px] flex my-auto w-[25%]">SECTOR</div>
        </div>
        {portfolioData.map((val, index) => {
          return (
            <div
              key={index}
              className="border-b-[1px] w-[100%] border-black flex flex-row justify-between py-[20px] px-[20px] bg-amber-500 bg-opacity-0 hover:bg-opacity-100 transition delay-100 duration-200 ease-in-out hover:cursor-pointer"
            >
              <div className=" w-[25%]">
                <Image
                  src={`/portfolio/${val.img}.svg`}
                  width={80}
                  height={80}
                  alt="LOGO"
                />
              </div>
              <div className="sm:text-[15px] text-[12px] flex my-auto w-[25%]">
                {val.type}
              </div>
              <div className="sm:text-[15px] text-[12px] flex my-auto w-[25%]">
                {val.sector}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
