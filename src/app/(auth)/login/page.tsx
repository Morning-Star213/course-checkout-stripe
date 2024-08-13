"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/lib/components/auth/input";
import { authServise } from "@/app/_servise/authServise";
import { useAtom } from "jotai";
import { loginstatusAtom } from "@/lib/store/index";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPw] = useState<string>("");
  const [errors, setErr] = useState<any>({});
  const router = useRouter();
  const [loginstatus, setloginstatus] = useAtom(loginstatusAtom);

  const login = async () => {
    const body: any = { email, password };
    const res = await authServise().login(body);
    if (res.status === 400) {
      setErr(res.errors);
    } else {
      setloginstatus(true);
      localStorage.setItem("loginStatus", res.msg.email);
      router.push("/home");
    }
  };
  return (
    <div className="">
      <div className="md:section-hero flex grid1 mx-auto justify-center items-center pb-[90px]">
        <div
          className=" sm:w-[33%]   bg-white w-[100%] flex flex-col px-[20px] sm:pt-[30px] pt-[200px] pb-[15px] rounded-sm sm:shadow-2xl text-opacity-20"
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
              alt="LOGIN"
            />
          </div>
          <div className="text-[16px]">
            Please enter your email and password to proceed
          </div>
          <Input
            type="email"
            placeholder="user@example.com"
            error={errors?.email}
            onChange={setEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={setPw}
            error={errors?.password}
          />
          <div className="text-[16px]">Forget your password?</div>
          <div className="py-[30px]">
            <button
              className={`${
                email === "" || password === ""
                  ? "bg-[#DFDFDF] text-gray-700"
                  : "bg-[#1c3b68] text-white"
              } w-[100%]  py-[10px] rounded-sm`}
              disabled={email === "" || password === "" ? true : false}
              onClick={login}
            >
              SIGN IN
            </button>
          </div>
          <div className="flex justify-between">
            <div>Request Assisance</div>
            <div>
              <Link href="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
