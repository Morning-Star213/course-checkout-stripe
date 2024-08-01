"use client";
import React from "react";
import Link from "next/link";

import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import TopReadCard from "@/lib/components/cards/TopReadCard";
import { top_reads } from "@/lib/components/landing/RelevantSection";

import { CarouselPage } from "@/lib/components/landing/HeroSection";
import { CarouselData } from "@/lib/components/landing/HeroSection";

export default function NewsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const id = parseInt(params.slug);

  const headerTrailing = (
    <div className="hidden md:block max-w-[40%] w-full md:order-1">
      <ul className="news-content flex justify-between font-semibold">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>For you</li>
        <li>Sports</li>
        <li>Famous</li>
        <li>Prizes</li>
        <li>
          <b>...</b>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <Header headerTrailing={headerTrailing} hasSearch />
      <div>
        <CarouselPage
          title={CarouselData[id - 1].title}
          contents={CarouselData[id - 1].contents}
          bg_url={CarouselData[id - 1].bg_url}
        />
        <div className="flex justify-end max-w-[100vw] overflow-hidden mb-10">
          <div className="main-container">
            <div className="flex">
              <div className="w-full mt-8 px-4">{children}</div>
              <div className="sidebar-news lg:block hidden">
                <div className="pt-8 border-l-[1px] border-[#CCCCCC]">
                  <div className="flex items-center gap-2 py-4">
                    <div className="w-4 h-6 bg-[#273A8C] rounded-r-full"></div>
                    <h3 className="">MOST READ THIS WEEK</h3>
                  </div>
                  <div className="flex flex-col gap-4 pr-16">
                    {top_reads.map((item, index) => {
                      return (
                        <TopReadCard
                          key={item.content}
                          content={item.content}
                          imgUrl={`/topread${index + 1}.png`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
