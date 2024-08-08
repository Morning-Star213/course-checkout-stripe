"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FloatingNav } from "@/lib/components/layout/FloatingHeader";
import Footer from "@/lib/components/layout/Footer";

const Invest = () => {
  return (
    <div>
      <div className="sm:section-hero sm:pt-0 pt-[150px] outpadding flex flex-col grid1 mx-auto">
        <div className="flex flex-col sm:max-w-[50%] max-w-[100%]  pb-[70px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-[50px] text-[40px]"
          >
            Pantera Funds
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="sm:text-[18px] text-[15px] leading-[23px] pt-[40px]"
          >
            Our funds provide investors with the full spectrum of exposure to
            the blockchain space, ranging from illiquid venture capital assets
            (including early-stage tokens and multi-stage venture capital
            equity) to more liquid assets like bitcoin and other
            cryptocurrencies.
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="sm:text-[18px] text-[15px] leading-[23px] pt-[40px]"
          >
            Pantera manages $5.6 billion in blockchain-related assets. Funds are
            available to accredited investors, with minimums of $100,000 or
            more.
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="sm:text-[18px] text-[15px] leading-[23px] pt-[40px]"
          >
            If you meet the above requirements and are interested in learning
            more, please fill out the form below to be sent additional
            information.
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="sm:text-[18px] text-[15px] leading-[23px] pt-[40px]"
          >
            You can also contact our Capital Formation team directly at
            invest@panteracapital.com.
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invest;
