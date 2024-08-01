"use client";
import { useState, useRef, useEffect } from "react";

import "./style.css";

export default function Faq() {
  const items = [
    {
      title: "How do online Cryptocurrency lessons work?",
      content:
        "You can discuss directly with your teacher via email or phone. Their contact details are in the left-hand bar of the lesson request. You can then decide with your teacher on the format of classes you would prefer.",
    },
    {
      title: "How are tutors selected to give online Cryptocurrency lessons?",
      content:
        "We verify the identity, coordinates (telephone, email, and photo), as well as the diploma for all of our teachers.",
    },
    {
      title: "What is the average price for online Cryptocurrency lessons?",
      content:
        "The average price for online cryptocurrency lessons classes is $ 18 .",
    },
    {
      title: "Why choose online lessons?",
      content:
        "With so many of our connections being formed and maintained via online channels, online learning is becoming more and more popular with students.  ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onTitleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (contentRefs.current[activeIndex as number]) {
      contentRefs.current[activeIndex as number]!.style.maxHeight =
        contentRefs.current[activeIndex as number]!.scrollHeight + "px";
    }
    return () => {
      if (contentRefs.current[activeIndex as number]) {
        contentRefs.current[activeIndex as number]!.style.maxHeight = "";
      }
    };
  }, [activeIndex]);

  return (
    <section className="max-w-[1440px] mx-auto py-24 px-4">
      <h2 className="mb-6">FAQ</h2>
      <div className="accordion-group w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <button
              className="accordion-header"
              onClick={() => onTitleClick(index)}
            >
              {item.title}
              <span className={`icon ${index === activeIndex ? "rotate" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 64 64"
                  viewBox="0 0 64 64"
                  id="arrow"
                  width="30px"
                  height="30px"
                >
                  <path
                    d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
                    transform="translate(237 335)"
                  ></path>
                </svg>
              </span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className={`accordion-content`}
              style={{
                maxHeight:
                  index === activeIndex
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0",
              }}
            >
              <div className="accordion-content-inner">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
