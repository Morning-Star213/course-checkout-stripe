"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import NewsCard from "@/lib/components/cards/NewsCard";
import { Pagination } from "swiper/modules";

interface CardProps {
  card_contents: {
    title: string;
    text: string;
    imgUrl: string;
  }[];
}

const NewsCarousel: React.FC<CardProps> = ({ card_contents }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {card_contents.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <NewsCard
                id={index + 1}
                title={item.title}
                text={item.text}
                imgUrl={item.imgUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default NewsCarousel;
