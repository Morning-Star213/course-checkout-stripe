import Link from "next/link";
import Footer from "@/lib/components/layout/Footer";
import HeroSection from "@/lib/components/landing/HeroSection";
import InvestmentTypeSection from "@/lib/components/landing/InvestmentTypeSection";
import SmoothScroll from "@/lib/components/scroll";
import ScrollButton from "@/lib/components/scrollButton/page";

export default function HomePage() {
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
