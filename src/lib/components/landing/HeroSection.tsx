"use client";
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
  related_news?: {
    title: string;
    contents: string;
  }[];
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
    bg_url: "landing1.png",
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
    bg_url: "landing2.png",
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
    bg_url: "landing3.png",
  },
];

export const CarouselPage: FC<CarouselType> = ({
  title,
  contents,
  related_news,
  bg_url,
}) => {
  return (
    <div
      className={twMerge(
        "section-hero bg-cover bg-no-repeat",
        bg_url == "landing1.png" && "bg-[url('/landing1.png')]",
        bg_url == "landing2.png" && "bg-[url('/landing2.png')]",
        bg_url == "landing3.png" && "bg-[url('/landing3.png')]"
      )}
    >
      <div className="section-hero flex justify-end">
        <div className="main-container">
          <div className="h-full flex">
            <div className="w-full flex items-end px-4 pb-6 md:pb-28">
              <div>
                <h1>{title}</h1>
                <p className="sub-title">{contents}</p>
              </div>
            </div>
            {related_news && (
              <div className="sidebar-news hidden lg:block">
                <div className="h-full flex items-end pb-10 border-l-[1px] border-[#CCCCCC]">
                  <div className="w-full flex flex-col justify-end">
                    <div>
                      <h3 className="px-6 text-white">Related News</h3>
                      <div className="pr-16">
                        <div className="p-6 max-w-[350px]">
                          <p className="text-[20px] font-bold text-white">
                            {related_news && related_news[0]?.title}
                          </p>
                          <p className="mt-3 text-[16px] font-medium text-white">
                            {related_news && related_news[0]?.contents}
                          </p>
                        </div>
                      </div>
                      <div className="h-[1px] bg-border-gray"></div>
                      <div className="pr-16">
                        <div className="p-6 pb-0 max-w-[350px]">
                          <p className="text-[20px] font-bold text-white">
                            {related_news && related_news[1]?.title}
                          </p>
                          <p className="mt-3 text-[16px] font-medium text-white">
                            {related_news && related_news[1]?.contents}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={pagination}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {CarouselData.map((carousel, index) => {
        return (
          <SwiperSlide key={index}>
            <CarouselPage
              title={carousel.title}
              contents={carousel.contents}
              related_news={carousel.related_news}
              bg_url={carousel.bg_url}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
