"use client";
import React, { useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Header({
  headerTrailing,
  hasSearch,
}: {
  headerTrailing?: React.ReactNode;
  hasSearch?: boolean;
}) {
  const router = useRouter();

  const [isExpanded, setExpanded] = useState(false);

  const onLogo = useCallback(() => {
    router.push("/home");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <Image
        className="hover:cursor-pointer"
        src={"/logo.svg"}
        width={170}
        height={80}
        onClick={onLogo}
        alt="LOGO"
        priority
      />
    );
  }, [onLogo]);

  return (
    <>
      <header className="w-full relative md:px-12 px-4 py-4">
        <div className="flex items-center justify-between">
          {logoElement}
          <div className="flex items-center">
            {headerTrailing}
            <button className="hidden md:block md:ml-20 lg:ml-40 sm:bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 hover:border-gray-300 sm:border-[1px] active:bg-gray-300">
              Login
            </button>
            <button
              className="md:hidden"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {/* Login */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="menu"
                width={30}
                height={30}
              >
                <g>
                  <g>
                    <rect
                      width="24"
                      height="24"
                      opacity="0"
                      transform="rotate(180 12 12)"
                    ></rect>
                    <circle cx="4" cy="12" r="1"></circle>
                    <rect
                      width="14"
                      height="2"
                      x="7"
                      y="11"
                      rx=".94"
                      ry=".94"
                    ></rect>
                    <rect
                      width="18"
                      height="2"
                      x="3"
                      y="16"
                      rx=".94"
                      ry=".94"
                    ></rect>
                    <rect
                      width="18"
                      height="2"
                      x="3"
                      y="6"
                      rx=".94"
                      ry=".94"
                    ></rect>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {isExpanded && (
        <div className="z-10 fixed top-0 w-[100vw] h-[100vh] flex justify-center items-end bg-white">
          <button
            className="absolute top-4 right-4"
            onClick={() => setExpanded(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="close"
              width="60px"
              height="60px"
            >
              <g>
                <g>
                  <rect opacity="0" transform="rotate(180 12 12)"></rect>
                  <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                </g>
              </g>
            </svg>
          </button>
          <ul className="mb-20 font-semibold text-xl flex flex-col gap-6">
            <li>INVEST</li>
            <li>PORTFOLIO</li>
            <li>TRAINING COURSES</li>
            <li>ABOUT</li>
            <li>LOGIN</li>
          </ul>
        </div>
      )}
    </>
  );
}
