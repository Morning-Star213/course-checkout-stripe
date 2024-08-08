"use client";
import { useState } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Button from "./button";
import InvestmentTypeSection from "../landing/InvestmentTypeSection";
import { useMediaQuery } from "@mui/material";

const ScrollButton = () => {
  const matches = useMediaQuery("(max-width:600px)");
  console.log("ok>>>>>>>>>>>>>>>>", matches);
  const [y, setY] = useState<number>(0);
  // const [sm, setSm] = useState<boolean>(false);
  // console.log("ssssssssssssssssssssss", sm);
  const { scrollY }: { scrollY: any } = useScroll();
  const { scrollYProgress }: { scrollYProgress: any } = useScroll();
  const scaleY: any = useSpring(scrollYProgress);
  const max = 645;
  const scroll: any = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scroll, "change", (latest) => {
    setY(scaleY.current);
  });
  let top = scroll.current > max ? max : scroll.current;
  let top2;
  matches
    ? (top2 = scroll.current < max ? 0 : scroll.current * 0.5 - max)
    : (top2 = scroll.current < max ? 0 : scroll.current * 0.9 - max);
  return (
    <div className="">
      <div className="outpadding grid-x flex flex-col mx-auto grid3 gap-5">
        <Button top={top} speed={0.1}>
          FUNDS
        </Button>
        <Button top={top} speed={0.175}>
          PORTFOLIO
        </Button>
        <Button top={top} speed={0.25}>
          INSIGHTS
        </Button>
      </div>

      <div className="text-white pt-16 flex flex-col sm:flex-row grid2-x mx-auto sm:h-[1000px] -z-50">
        <div
          className="black-card1  right-1 sm:w-[100%] sm:order-1"
          style={{ translate: `0px ${top * 0.2}px` }}
        >
          <div className="bg-[#15182B] flex flex-col sm:m-auto">
            <div className="text-[30px] sm:text-[50px] outpadding py-7 font-bold sm:pb-[35px] sm:pt-[135px] ">
              A history of firsts
            </div>
            <div className="text-[17px] sm:text-[20px] outpadding p-[20px] sm:pb-[155px] ">
              Pantera launched the first cryptocurrency fund in the U.S. when
              bitcoin was at $65 /BTC in 2013. The firm subsequently launched
              the first blockchain-focused venture fund. In 2017, Pantera was
              the first to offer an early-stage token fund.
            </div>
          </div>
        </div>

        <div
          className={`black-card2  sm:w-[100%] sm:pt-[800px] pt-[650px] sm:order-0 -z-50`}
          style={{
            translate: `0px -${top2}px`,
          }}
        >
          <div className="bg-[#15182B] flex flex-col relative">
            <div className="text-[30px] sm:text-[45px] outpadding py-7 font-bold sm:pt-[100px]">
              Pantera at a glance
              <sup>
                <span className="text-[20px]">1</span>
              </sup>
            </div>
            <div className="flex justify-between pt-5 sm:py-[50px]  outpadding">
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  $5.1bn
                </div>
                <div className="text-white text-center">
                  Assets Under Management
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  3
                </div>
                <div className="text-white text-center">Found Strategies</div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  75%
                </div>
                <div className="text-white text-center">
                  Deals Led (Blockchain Fund)
                </div>
              </div>
            </div>
            <div className="flex justify-between pb-[40px] sm:pb-[170px] outpadding">
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  $5.1bn
                </div>
                <div className="text-white text-center">
                  Assets Under Management
                </div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  3
                </div>
                <div className="text-white text-center">Found Strategies</div>
              </div>
              <div>
                <div className="text-yellow-600  text-center text-[25px]">
                  75%
                </div>
                <div className="text-white text-center">
                  Deals Led (Blockchain Fund)
                </div>
              </div>
            </div>
            <div className="text-[9px] absolute bottom-5 right-3">
              1 Figures are estimated and unaudited as of June 30, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollButton;
