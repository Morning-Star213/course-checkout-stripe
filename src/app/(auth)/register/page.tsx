"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Input from "@/lib/components/auth/input";
import { authServise } from "@/app/_servise/authServise";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPw] = useState<string>("");
  const [cpw, setCpw] = useState<string>("");
  const [errors, setErr] = useState<any>({});
  const router = useRouter();

  const register = async () => {
    const body: any = { email, password, cpw };
    const res = await authServise().register(body);
    console.log("res------------->", res);
    if (res.status === 400) {
      setErr(res.errors);
    } else {
      console.log(">----------->", res);
      router.push("/login");
    }
  };

  return (
    <div className="">
      <div className="md:section-hero flex grid1 mx-auto justify-center items-center pb-[90px]">
        <div
          className=" sm:w-[33%] bg-white w-[100%] flex flex-col px-[20px] sm:pt-[30px] pt-[200px] pb-[15px] rounded-sm sm:shadow-2xl text-opacity-20"
          style={{
            fontFamily: "NeoGramCondensed",
            letterSpacing: "-0.02rem",
          }}
          onChange={() => setErr({})}
        >
          <div className=" flex justify-center items-center pb-9">
            <Image
              src={"/logo_footer.png"}
              width={250}
              height={40}
              alt="Register"
            />
          </div>
          <div className="text-[16px]">Please sign up to proceed</div>
          <Input
            type="email"
            placeholder="user@example.com"
            onChange={setEmail}
            error={errors?.email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={setPw}
            error={errors?.pw}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={setCpw}
            error={errors?.cpw}
          />
          <div className="text-[16px]">Forget your password?</div>
          <div className="py-[30px]">
            <button
              className={`${
                email === "" || password === "" || cpw === ""
                  ? "bg-[#DFDFDF] text-gray-700"
                  : "bg-[#1c3b68] text-white"
              } w-[100%]  py-[10px] rounded-sm`}
              disabled={
                email === "" || password === "" || cpw === "" ? true : false
              }
              onClick={register}
            >
              SIGN Up
            </button>
          </div>
          <div className="flex justify-between">
            <div>Request Assisance</div>
            <div>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
