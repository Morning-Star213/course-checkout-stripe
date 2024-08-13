"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/lib/components/auth/input";
import { authServise } from "../_servise/authServise";
const Account = () => {
  const auth = authServise();
  const [currentpw, setCurrentpw] = useState<string>("");
  const [newpw, setNewpw] = useState<string>("");
  const [cnpw, setCnpw] = useState<string>("");
  const [errors, setErrors] = useState<any>({});

  const change = async () => {
    let email: any = localStorage.getItem("loginStatus");
    const res = await auth.changePassword(currentpw, newpw, cnpw, email);
    if (res.status === 400) {
      setErrors(res.errors);
    } else {
      console.log("success >---200--->", res.msg);
    }
  };

  return (
    <div className="grid-x md:pt-[100px] flex mx-auto flex-col">
      <div className="bg-[#f0f4f7] w-[100%] pb-5 flex md:flex-row flex-col outpadding md:gap-16 gap-5">
        <div className="flex my-auto">
          <Image
            src="/account.webp"
            height={250}
            width={250}
            alt="My account"
          />
        </div>
        <div className="flex my-auto flex-col ">
          <div className="course-title">
            <span className="text-[#002368]">My Account</span>
          </div>
          <div className="course-text ">
            <span className="text-[#002368]">
              Manage your personal information and view your transaction
              history.
            </span>
          </div>
        </div>
      </div>
      <div className="md:py-[50px] py-[25px] outpadding flex md:flex-row md:justify-between md:gap-10 gap-5 flex-col">
        <div className="course-title basis-1/3">
          <span className="text-[#002368] text-[30px]">Change password:</span>
        </div>
        <div className="flex flex-col w-[70%] pt-[30px] mx-auto">
          <div className="bg-white border-[1px] flex flex-col outpadding py-[10px] md:py-[30px] justify-between">
            <div className="course-text" onChange={() => setErrors({})}>
              <div className="text-[#002368]">Current Password:</div>
              <div>
                <Input
                  type="text"
                  placeholder="Current Password"
                  onChange={setCurrentpw}
                  error={errors?.currentpw}
                />
              </div>
            </div>
            <div className="course-text">
              <div className="text-[#002368]">New Password:</div>
              <div>
                <Input
                  type="password"
                  placeholder="New Password"
                  onChange={setNewpw}
                  error={errors?.newpw}
                />
              </div>
            </div>
            <div className="course-text">
              <div className="text-[#002368]">Confirm Password:</div>
              <div className="pb-10">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={setCnpw}
                  error={errors?.cnpw}
                />
              </div>
            </div>
            <div>
              <button
                className={`${
                  currentpw === "" || newpw === "" || cnpw === ""
                    ? "bg-[#DFDFDF] text-gray-700"
                    : "bg-[#1c3b68] text-white"
                } w-[100%]  py-[10px] rounded-sm`}
                disabled={
                  currentpw === "" || newpw === "" || cnpw === "" ? true : false
                }
                onClick={change}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
