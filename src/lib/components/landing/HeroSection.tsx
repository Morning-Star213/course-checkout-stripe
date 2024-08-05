"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { twMerge } from "tailwind-merge";

import type { FC } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CarouselType = {
  title: string;
  contents: string;
  bg_url: string;
  asset_url?: string;
  related_news?: {
    title: string;
    contents: string;
  }[];
  index?: number;
};

export const CarouselData = [
  {
    title: "Master Cryptocurrency with Expert Guidance",
    contents:
      "Join our interactive courses designed for beginners and advanced learners alike. Unlock the secrets of blockchain, trading, and investment strategies.",
    related_news: [
      {
        title: "Advancements in Gene Therapy",
        contents:
          "Scientists discuss how gene therapy is becoming a promising treatment option.",
      },
      {
        title: "Exclusive Interview with Experts",
        contents:
          "Experts comment on the potential impacts of these discoveries on the global medical landscape.",
      },
    ],
    bg_url: "/hero3.png",
    asset_url: "/lines.svg",
  },
  {
    title: "Transform Your Financial Future",
    contents:
      "Learn from industry experts and gain the skills needed to navigate the cryptocurrency market confidently.",
    related_news: [
      {
        title: "Autonomous Cars in Testing",
        contents:
          "Leading companies reveal the results of autonomous car tests on public roads.",
      },
      {
        title: "Sustainability in Production",
        contents:
          "How automakers are adopting sustainable practices to reduce environmental impact.",
      },
    ],
    bg_url: "/hero2.png",
    asset_url: "/chart.svg",
  },
  {
    title: "Join a Thriving Community of Crypto Enthusiasts",
    contents:
      "Connect with like-minded learners and receive ongoing support from our tutors as you embark on your cryptocurrency journey.  ",
    related_news: [
      {
        title: "Fashion Trends",
        contents:
          "Dive into the style choices  from celebrities, inspiring fans worldwide.",
      },
      {
        title: "Philanthropic Projects",
        contents:
          "Learn about the social initiatives supported by the celebrities and their positive impact on the community",
      },
    ],
    bg_url: "/hero.webp",
    asset_url: "/candles.svg",
  },
];

export const CarouselPage: FC<CarouselType> = ({
  title,
  contents,
  related_news,
  bg_url,
  asset_url,
  index,
}) => {
  return (
    <div className={twMerge("section-hero h-full bg-cover bg-no-repeat")}>
      <div className="w-full h-full dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="section-hero flex justify-center">
          <div className="main-container">
            <div className="h-full relative">
              <div className="md:px-8 relative w-full h-full flex items-center px-4 pb-6 md:pb-12`">
                <div className="z-10 max-w-[700px]">
                  <h1>{title}</h1>
                  <p className="sub-title mt-6 sm:mt-10">{contents}</p>
                </div>
                <div className="z-0 absolute w-full flex justify-end md:px-20 px-4">
                  <div className="relative hidden md:flex justify-center w-[50%] h-[100%]">
                    <Image
                      className={`${index == 2 ? "max-h-[800px]" : "w-full"} `}
                      src={bg_url}
                      width={400}
                      height={600}
                      unoptimized
                      alt="Trading"
                    />
                  </div>
                </div>
                {asset_url && (
                  <Image
                    className="-z-10 absolute w-[90%] sm:bottom-[200px] opacity-40"
                    src={asset_url}
                    width={500}
                    height={800}
                    unoptimized
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 300000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={pagination}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[100vh]"
    >
      {CarouselData.map((carousel, index) => {
        return (
          <SwiperSlide key={index}>
            <CarouselPage
              title={carousel.title}
              contents={carousel.contents}
              related_news={carousel.related_news}
              bg_url={carousel.bg_url}
              asset_url={carousel.asset_url}
              index={index}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
