"use client";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  const onLogo = useCallback(() => {
    router.push("/home");
  }, [router]);

  const logoElement = useMemo(() => {
    return (
      <Image
        src={"/logo_footer.svg"}
        width={170}
        height={40}
        onClick={onLogo}
        alt="LOGO"
      />
    );
  }, [onLogo]);
  return (
    <footer className="bg-[#d4d3d1] text-[#1b263b] w-full z-20 md:px-12 px-4 py-4 dark:text-default-color dark:bg-[#1b263b]">
      <div className="main-container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-6">
          {logoElement}
          <div className="md:hidden w-full h-[2px] my-3 bg-white"></div>
          <p className="small-content">
            © 2024 MentorCruise. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
