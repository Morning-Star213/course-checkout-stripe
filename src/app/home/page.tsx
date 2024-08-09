import Link from "next/link";
import Footer from "@/lib/components/layout/Footer";
import HeroSection from "@/lib/components/landing/HeroSection";
import InvestmentTypeSection from "@/lib/components/landing/InvestmentTypeSection";
import SmoothScroll from "@/lib/components/scroll";
import ScrollButton from "@/lib/components/scrollButton/page";

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
    <div>
      {/* <FloatingNav /> */}
      <SmoothScroll>
        <div>
          <HeroSection />
          <ScrollButton />
          <InvestmentTypeSection />
        </div>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
