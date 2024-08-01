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
    <div className="hidden md:block max-w-[20%] w-full">
      <ul className="news-content flex justify-between font-semibold lg:gap-10">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>Team</li>
        <li>Porfolio</li>
        <li>Contact</li>
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
