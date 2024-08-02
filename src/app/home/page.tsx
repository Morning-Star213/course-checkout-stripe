import Link from "next/link";

import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import HeroSection from "@/lib/components/landing/HeroSection";
import RelevantSection from "@/lib/components/landing/RelevantSection";
import CustomSection from "@/lib/components/landing/CustomSection";
import ContactUs from "@/lib/components/contactus/indext";
import Faq from "@/lib/components/Faq";

export default function HomePage() {
  const headerTrailing = (
    <div className="hidden md:block w-full">
      <ul className="news-content flex justify-between font-semibold gap-6 lg:gap-12">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>INVEST</li>
        <li>PORTFOLIO</li>
        <li>TRADING COURSES</li>
        <li>ABOUT</li>
      </ul>
    </div>
  );
  return (
    <div className="">
      <Header hasSearch headerTrailing={headerTrailing} />
      <div>
        <HeroSection />
        <CustomSection />
        <Faq />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
