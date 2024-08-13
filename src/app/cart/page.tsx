"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import courseServise from "../_servise/courseServise";

const Cart = () => {
//   const [hover, setHover] = useState<boolean>(false);
//   const [s, setS] = useState<any>({});
  const publishableKey: any = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  const router = useRouter();
  const [status, setStatus] = useState<string>("");
  const servise = courseServise();

  const [item, setItem] = useState({
    name: "Cryptoasset and Blockchain Certificate",
    description:
      "ACAMS has developed three crypto certificates to help AFC professionals understand the crypto landscape and mitigate theassociated risks. This Cryptoasset and Blockchain Certificate is the most technology-focused of our cryptocurrency courses.",
    // image: "",
    quantity: 1,
    price: 795.0,
  });
  const save = async () => {
    const buyer: any = localStorage.getItem("loginStatus");
    const res = await servise.buy({ item, buyer });
    // console.log("STORE-------------------", res.msg);
    // setS(res);
  };

  useEffect(() => {
    // Check if the status is present in the URL
    const { searchParams } = new URL(window.location.href);
    const status = searchParams.get("status");

    if (status) {
      setStatus(status);
      if (status === "success") {
        save();
      }
    }
  }, [router]);

  const createCheckOutSession = async () => {
    const checkoutSession = await fetch("/api/create-stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const res = await checkoutSession.json();
    router.push(res.url);
  };

  return (
    <div className="grid-x md:section-hero sm:px-[80px] flex flex-col md:justify-between md:gap-10 mx-auto">
      <div className="flex md:flex-row flex-col  md:justify-between md:gap-10 ">
        <div className="bg-white md:p-7 p-3 md:py-10 py-5 rounded-lg">
          <div className="course-title md:pb-10 pb-5">
            <span className="text-[#002368]">Your Cart</span>
          </div>
          <div className="flex md:flex-row flex-col md:justify-between md:gap-3">
            <div>
              <Image
                src="/cart.webp"
                width={200}
                height={200}
                alt="cart-product"
              />
            </div>
            <div className="course-text">
              <div className="text-[25px] font-bold leading-[30px]">
                AML Foundations for Private Banking and Wealth Management
                Certificate - ENG - English{" "}
              </div>
              <div className="py-3">
                Understand the fundamentals of anti-money laundering in the
                context of private banking and wealth management.
              </div>
              <div className="text-[25px] font-bold leading-[30px]">
                $795.00
              </div>
            </div>
            {/* <div>
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="hover:cursor-pointer"
              >
                <FaTrash color={hover ? "gray" : "red"} size={30} />
              </div>
            </div> */}
          </div>
        </div>
        <div className="bg-white md:p-7 p-3 md:py-10 py-5 basis-1/3 rounded-lg">
          <div className="course-title">
            <span className="text-[25px] font-bold leading-[30px] text-[#1c3b68]">
              Total
            </span>
          </div>
          <div className="border-[#1c3b68] border-b-[1px] course-text md:pb-5 pb-3 flex flex-col justify-end items-end">
            <div>Subtotal &nbsp; &nbsp; $795.00</div>
            <div>Tax Not Yet Calculated</div>
            <div className="font-bold">Total &nbsp; &nbsp; $795.00</div>
          </div>
          <div className="flex md:pt-10 pb-6">
            <button
              onClick={createCheckOutSession}
              className="bg-[#1c3b68] bottom-3 mx-auto  text-white w-[80%]  py-[10px] md:py-[17px] md:text-[20px] rounded-sm"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="flex mx-auto">
        {status && status === "success" && (
          <div className="bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700">
            Payment Successful
          </div>
        )}
        {status && status === "cancel" && (
          <div className="bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700">
            Payment Unsuccessful
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
