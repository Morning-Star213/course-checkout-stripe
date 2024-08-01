"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

  const ExpandedMenu = () => {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOutSideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    useEffect(() => {
      window.document.addEventListener("mousedown", handleOutSideClick);

      return () => {
        window.document.removeEventListener("mousedown", handleOutSideClick);
      };
    }, []);

    return (
      <div className="toggle-menu shadow-md" ref={menuRef}>
        <div className="flex items-start gap-4 relative">
          <Image src="/avatar.svg" width={70} height={70} alt="User" />
          <ul className="flex flex-col gap-2">
            <li className="font-bold">John Doe</li>
            <li className="md:hidden block">
              <Link href="/home">Home</Link>
            </li>
            <li className="md:hidden block">My Interests</li>
            <li>Manage your Interests</li>
            <li>Your Prizes</li>
            <li>Rest Password</li>
            <li>Logoff</li>
          </ul>
          <Image
            className="absolute right-0 top-1.5 hover:cursor-pointer"
            src="/inbox.svg"
            alt="Inbox"
            width={30}
            height={30}
            onClick={() => setExpanded(true)}
          />
        </div>
      </div>
    );
  };

  return (
    <header className="w-full relative md:px-12 px-4 py-4">
      <div className="flex items-center justify-between">
        {logoElement}
        {headerTrailing}
        <button>Login</button>
      </div>
    </header>
  );
}
