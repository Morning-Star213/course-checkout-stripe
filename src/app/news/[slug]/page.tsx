"use client";
import { Tag } from "@/lib/components/landing/RelevantSection";
import NewsData from "./data.json";
import { notFound } from "next/navigation";

export default function NewsPage({ params }: { params: { slug: string } }) {
  const id = parseInt(params.slug);

  if (id > 3) return notFound();

  return (
    <div className="my-8">
      <div className="flex flex-col gap-3">
        {NewsData[id - 1].overview.map((overview, index) => {
          return (
            <p key={overview} className="leading-[18px]">
              {overview}
            </p>
          );
        })}
      </div>
      <div>
        <h2 className="text-center my-4">
          {NewsData[id - 1].main_contents.title}
        </h2>
        <div className="flex flex-col gap-3">
          {NewsData[id - 1].main_contents.contents.map((content) => {
            return (
              <p key={content} className="leading-[18px]">
                {content}
              </p>
            );
          })}
        </div>
        <div>
          {NewsData[id - 1].sub_contents.map((sub_content, index) => {
            return (
              <div key={sub_content.title}>
                <h3 className="my-4">{sub_content.title}</h3>
                <div className="flex flex-col gap-3">
                  {sub_content.contents.map((content) => {
                    return (
                      <p key={content} className="leading-[18px]">
                        {content}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-10">
          <Tag topic="Health and Wellness" />
        </div>
        <div>
          <p>Tags: tag #1, tag #2, tag #3, tag #4</p>
        </div>
      </div>
    </div>
  );
}
