"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useAtom } from "jotai";
import { loginstatusAtom } from "@/lib/store";
import Dropdown from "./dropdown";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const navItems = [
  {
    name: "INVEST",
    link: "/invest",
    items: [],
  },
  {
    name: "PORTFOLIO",
    link: "/portfolio",
    items: [],
  },
  {
    name: "TRAINING COURSES",
    link: "/course",
    items: [],
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "LOGIN",
    link: "/login",
    items: ["eee", "reee"],
  },
];

export const MenuItem = ({
  setActive,
  active,
  item,
  link,
  children,
  index,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  link: string;
  index: number;
  children?: React.ReactNode;
}) => {
  const [loginstatus, setloginstatus] = useAtom<boolean>(loginstatusAtom);
  const router = useRouter().push;

  useEffect(() => {
    let loginS = localStorage.getItem("loginStatus");
    if (!loginS) {
      setloginstatus(false);
      // router("/login");
    } else {
      setloginstatus(true);
    }
  }, []);

  return (
    <div
      className="relative font-medium"
      style={{ fontFamily: "IBM Plex Mono" }}
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        onClick={() => setActive(item)}
      >
        <Link href={loginstatus && item === "LOGIN" ? "#" : link}>
          {item === "LOGIN" ? (loginstatus ? children : item) : item}
        </Link>
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav // resets the state
      className="hidden sm:flex min-w-[50%] relative shadow-input justify-between space-x-8"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const FloatingNav = ({ className }: { className?: string }) => {
  const [loginstatus, setloginstatus] = useAtom<boolean>(loginstatusAtom);

  const { scrollYProgress } = useScroll();

  const router = useRouter();

  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [isUp, setIsUp] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isExpanded]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() == 0) {
        setIsUp(false);
      }
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setIsUp(true);
          setVisible(true);
        } else {
          setIsUp(false);
          setVisible(false);
        }
      }
    }
  });

  const onLogo = useCallback(() => {
    router.push("/home");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <div className="flex">
        <Image
          className="hover:cursor-pointer -ml-[30px]"
          src={"/logo.png"}
          width={365}
          height={125}
          onClick={onLogo}
          alt="LOGO"
          priority
        />
      </div>
    );
  }, [onLogo]);

  const logout = async () => {
    setloginstatus(false);
    localStorage.removeItem("loginStatus");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          `flex fixed top-0 inset-x-0 mx-auto z-40 px-2 py-2  items-center justify-center space-x-4 ${
            isUp && "bg-white duration-75"
          } `,
          className
        )}
      >
        <div className="grid-container w-full">
          <div className="outpadding  grid-x flex mx-auto justify-between items-center">
            {logoElement}
            {
              <button
                className="md:hidden"
                onClick={() => setExpanded(!isExpanded)}
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
            }
            <Menu setActive={setActive}>
              {navItems.map((navItem: any, idx: number) => (
                <MenuItem
                  key={idx}
                  setActive={setActive}
                  active={active}
                  link={navItem.link}
                  item={navItem.name}
                  index={idx}
                >
                  {loginstatus && navItem.name === "LOGIN"
                    ? "My Account"
                    : navItem.name}
                  {active !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={transition}
                    >
                      {active === "LOGIN" && navItems[idx] && (
                        <div className="absolute top-[calc(100%_+_0.6rem)] left-1/2 transform -translate-x-1/2">
                          <motion.div
                            transition={transition}
                            layoutId="active" // layoutId ensures smooth animation
                            className="backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                          >
                            <motion.div
                              layout // layout ensures smooth animation
                              className="w-max h-full p-4"
                            >
                              <div className="list-none">
                                <div className="hover:text-[#E9B737]">
                                  {" "}
                                  <Link href="/account">
                                    Account Settings
                                  </Link>{" "}
                                </div>
                                <div className="hover:text-[#E9B737]">
                                  {" "}
                                  <Link href="/purchases">
                                    My Purchases
                                  </Link>{" "}
                                </div>
                                <div
                                  className="hover:text-[#E9B737]"
                                  onClick={logout}
                                >
                                  <Link href="/login">Logout</Link>
                                </div>
                              </div>
                            </motion.div>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </MenuItem>
              ))}
            </Menu>
            <div
              className={`${
                isExpanded ? "translate-y-0" : "-translate-y-[100vh]"
              } z-40 fixed left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[#15182B] transition-all duration-300`}
            >
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
                  fill="white"
                >
                  <g>
                    <g>
                      <rect opacity="0" transform="rotate(180 12 12)"></rect>
                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                    </g>
                  </g>
                </svg>
              </button>
              <ul
                className="translate-y-[50px] font-medium text-xl flex flex-col items-center gap-6 text-white"
                style={{ fontFamily: "IBM Plex Mono" }}
              >
                <li onClick={() => setExpanded(false)}>
                  <Link href="/invest">INVEST</Link>
                </li>
                <li onClick={() => setExpanded(false)}>
                  <Link href="/portfolio">PORTFOLIO</Link>
                </li>
                <li onClick={() => setExpanded(false)}>
                  <Link href="/course">TRAINING COURSES</Link>
                </li>
                <li onClick={() => setExpanded(false)}>
                  <Link href="/about">ABOUT</Link>
                </li>
                <li onClick={() => setExpanded(false)}>
                  <Link href="/login">LOGIN</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
