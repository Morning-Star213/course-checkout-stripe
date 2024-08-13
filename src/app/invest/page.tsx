"use client";
import React from "react";
import { motion} from "framer-motion";
import Footer from "@/lib/components/layout/Footer";
import ContactUs from "@/lib/components/contactus/indext";

const Invest = () => {
  return (
    <div>
      <div className="grid-x md:section-hero md:pt-0 pt-[150px] outpadding flex flex-col mx-auto">
        <div className="flex flex-col md:max-w-[50%] max-w-[100%]  pb-[70px]">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[50px] text-[40px]"
            style={{ fontFamily: "NeoGramExtended", letterSpacing: "-0.18rem" }}
          >
            Capital Invest 360 Funds
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="md:text-[20px] text-[18px] leading-[23px] pt-[40px]"
            style={{
              fontFamily: "NeoGramCondensed",
            }}
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
            className="md:text-[18px] text-[20px] leading-[23px] pt-[40px]"
            style={{
              fontFamily: "NeoGramCondensed",
              letterSpacing: "-0.02rem",
            }}
          >
            Capital Invest 360 manages $5.6 billion in blockchain-related
            assets. Funds are available to accredited investors, with minimums
            of $100,000 or more.
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="md:text-[18px] text-[20px] leading-[23px] pt-[40px]"
            style={{
              fontFamily: "NeoGramCondensed",
              letterSpacing: "-0.02rem",
            }}
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
            className="md:text-[18px] text-[20px] leading-[23px] pt-[40px]"
            style={{
              fontFamily: "NeoGramCondensed",
              letterSpacing: "-0.02rem",
            }}
          >
            You can also contact our Capital Formation team directly at
            info@capitalinvest360.com.
          </motion.div>
        </div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Invest;
