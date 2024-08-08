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
        src={"/logo.webp"}
        width={170}
        height={40}
        onClick={onLogo}
        alt="LOGO"
      />
    );
  }, [onLogo]);
  return (
    <div className="bg-[#E9B737]">
      <div className=" sm:flex sm:grid2-x sm:m-auto">
        <div className=" sm:m-auto mt-10  outpadding sm:flex sm:justify-between sm:w-[100%]">
          <div className="text-center sm:text-[20px] text-[15px] py-6 flex my-auto">
            GET THE LATEST NEWS IN BLOCKCHAIN AND CRYPTO
          </div>
          <button className="bg-[#E9B737] hover:bg-white my-6 sm:my-10 text-black sm:w-[20%] w-[100%] sm:mr-10 h-[45px] border-[1px] border-black">
            SUBSCRIBE
          </button>
        </div>
      </div>
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
    </div>
  );
}
