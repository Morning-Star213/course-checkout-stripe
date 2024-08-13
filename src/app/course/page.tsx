import Link from "next/link";
import React from "react";
import Image from "next/image";
import Footer from "@/lib/components/layout/Footer";

const Course = () => {
  return (
    <div>
      <div className="grid-x md:section-hero sm:px-[80px] flex flex-col mx-auto">
        <div className="flex flex-col course-bg">
          <div className="md:pl-[150px] pt-[100px] px-[20px]">
            <div className="course-title2">Cryptoasset and Blockchain</div>
            <div className="course-text2 py-[30px]">
              Course format: self-paced online
            </div>
            <Link href="course/#cart">
              <div className="border-[1px] border-white hover:border-none hover:text-black bg-transparent text-white py-[20px] px-[25px] md:w-[20%] hover:bg-[#E9B737]">
                REGISTER NOW
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-[#002368] flex md:flex-row flex-col py-[20px] gap-10 px-[40px] text-white">
          <div className="hover:text-gray-400">
            <Link href="course/#overview">OVERVIEW</Link>
          </div>
          <div className="hover:text-gray-400">
            <Link href="course/#course-content">COURSE CONTENT</Link>
          </div>
          <div className="hover:text-gray-400">
            <Link href="course/#pricing">PRICING</Link>
          </div>
          <div className="hover:text-gray-400">
            <Link href="course/#course-structure">COURSE STRUCTURE</Link>
          </div>
        </div>
      </div>
      <div
        className="grid-x pt-[100px] outpadding flex flex-col mx-auto"
        id="overview"
      >
        <div className="w-[80%]">
          <div className="course-title">
            Get Started with Cryptoassets and Blockchain
          </div>
          <div className="course-text pt-[30px]">
            <div>
              Decentralized finance, cryptoassets, wallets, tumblers, and
              virtual asset service providers – these are some of the terms
              behind the rapidly evolving technology that’s transforming our
              finance industry. But their speed and global reach can also enable
              criminals to avoid detection and hide the proceeds of illicit
              activities.
            </div>
            <div className="py-[30px]">
              As a financial crime prevention professional, you need to
              understand the basics of cryptoassets, and how they’re used, in
              order to be successful working in the crypto space. This crypto
              training course will give you a high-level introduction to how
              cryptoassets and blockchain work, the fundamentals of crypto
              infrastructure, real world uses, tracing methods, and possible
              avenues for exploitation and illegitimate use.
            </div>
          </div>
          <div className="text-black">
            <button className="border-[1px] border-black py-[25px] px-[25px] hover:bg-[#E9B737]">
              DOWNLOAD SYLLABUS
            </button>
          </div>
        </div>
      </div>
      <div
        className="course-div-bg md:pt-[70px] pt-[50px] md:mt-[70px] mt-[50px] mb-[50px] "
        id="course-content"
      >
        <div className="grid-x outpadding flex flex-col mx-auto">
          <div className="course-title">
            Cryptoasset and Blockchain Certificate: Course Content
          </div>
          <div className="course-text py-[30px]">
            ACAMS has developed three crypto certificates to help AFC
            professionals understand the crypto landscape and mitigate the
            associated risks. This Cryptoasset and Blockchain Certificate is the
            most technology-focused of our cryptocurrency courses. In this
            course, you will learn about the different types of blockchains,
            cryptoassets, and cryptocurrencies, with case studies throughout
            illustrating real-world uses of the technology. You can test your
            knowledge as the training progresses with regular review questions.
          </div>
          <div className="text-black text-[20px] font-bold">
            The Cryptoasset and Blockchain Certificate will help you understand:
          </div>
          <ul className="course-text pt-[30px] md:pb-[70px] pb-[50px] list-disc pl-[25px]">
            <li>
              How a blockchain functions, what cryptoassets are, and how mining
              creates coins
            </li>
            <li>
              The different types of cryptoassets and virtual asset service
              providers
            </li>
            <li>
              How transactions happen on the blockchain, and their purpose and
              types of wallets
            </li>
            <li>
              How to utilize analytics to help protect against blockchain risks
              and assist in cryptoasset tracing and attribution
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-x outpadding flex flex-col mx-auto" id="pricing">
        <div className="course-title">Pricing</div>
        <div className="course-text py-[20px]">
          Prices are subject to local tax.
        </div>
        <div className="flex md:flex-row flex-col gap-10 ">
          {/* <div className="course-div-bg py-[50px] sm:w-[25%]">
            <div className="text-black text-[20px] font-bold text-center">
              ACAMS Members
            </div>
            <div className="text-black text-[20px] font-bold text-center">
              $595.00
            </div>
          </div> */}
          <div className="course-div-bg py-[50px] sm:w-[25%]">
            <div className="text-black text-[20px] font-bold text-center">
              Non Members
            </div>
            <div className="text-black text-[20px] font-bold text-center">
              $795.00
            </div>
          </div>
        </div>
        <div className="pt-[30px] flex mx-auto md:m-0" id="cart">
          <button className="border-[1px] border-black  hover:bg-[#E9B737] py-[25px] px-[25px]">
            <Link href="/cart">ADD TO CART</Link>
          </button>
        </div>
      </div>
      <div
        className="grid-x md:pt-[100px] outpadding flex flex-col mx-auto md:pb-[200px] pb-[50px]"
        id="course-structure"
      >
        <div className="flex md:flex-row flex-col md:justify-between">
          <div className="pt-[50px] md:pt-0">
            <Image
              src={`/course-structure.webp`}
              width={700}
              height={300}
              alt="bg"
              className="w-[80%] -z-50 flex mx-auto md:m-0"
            />
          </div>
          <div className="md:p-[30px]">
            <div className="course-title md:pt-0 pt-[30px]">
              Course structure:
            </div>
            <div>
              <ul className="course-text py-[30px] list-disc pl-[25px]">
                <li>Online and self-pace crypto course</li>
                <li>Four hours of coursework</li>
                <li>Four weeks to complete</li>
                <li>
                  Pass a 20-question final assessment to receive your
                  Cryptoasset and Blockchain Certificate (results available
                  immediately)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
