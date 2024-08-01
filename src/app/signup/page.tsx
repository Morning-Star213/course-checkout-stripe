"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";

import { Tag } from "@/lib/components/landing/RelevantSection";
import { topics } from "@/lib/components/landing/RelevantSection";

const InputField = ({
  label,
  id,
  className,
}: {
  label: string;
  id?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "xl:max-w-[400px] 2xl:max-w-[500px] flex items-center justify-between",
        className
      )}
    >
      <span className="w-[90px] text-[12px]">{label}</span>
      <input
        id={id}
        className="grow p-1 border-[1px] border-border-gray rounded-md focus:outline-none"
        type="text"
      />
    </div>
  );
};

export default function SignupForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const curStep: number = parseInt(searchParams.get("step") as string);

  const disabledStyle: React.CSSProperties = {
    color: "#CCCCCC",
    pointerEvents: "none",
    opacity: 0.5,
  };

  const ProcceedButton = ({ step }: { step: number }) => {
    const onClick = () => {
      if (step < 4) {
        router.push(`/signup?step=${step + 1}`);
      } else {
        router.push("/home");
      }
    };

    return (
      <button
        className={`${
          curStep !== step ? "hidden" : "block"
        } px-4 py-2 bg-[#273A8C] text-white rounded-lg`}
        onClick={onClick}
      >
        Save & Procceed
      </button>
    );
  };

  return (
    <div className="px-4 lg:max-w-[80%] mx-auto my-6 flex flex-col gap-4">
      <div style={curStep !== 1 ? disabledStyle : undefined}>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="lg:mr-20">
            <Image
              className="w-full max-w-[150px] mx-auto"
              src="/avatar.svg"
              width={100}
              height={100}
              alt="Avatar"
            />
          </div>
          <div className="lg:max-w-[80%] w-full">
            <div className="flex items-center gap-2">
              <h2 className="underline">Personal Information</h2>
              <Icon
                icon="mdi:edit-outline"
                className={curStep == 1 ? "hidden" : "block"}
                width={18}
                height={18}
                onClick={() => router.push("/signup?step=1")}
              />
            </div>
            <div className={curStep == 1 ? "block" : "hidden md:block"}>
              <div className="flex justify-end mt-2">
                <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[90%] gap-6">
                  <div className="flex flex-col gap-2 lg:max-w-[45%] w-full">
                    <InputField label="Name" />
                    <InputField label="Birth Date" />
                    <InputField label="Gender" />
                    <InputField label="Language" />
                  </div>
                  <div className="flex gap-3 lg:max-w-[50%] w-full">
                    <p>Biography</p>
                    <textarea className="w-full min-h-[150px] !h-full border-[1px] border-border-gray rounded-md focus:outline-none resize-none"></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ProcceedButton step={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={curStep !== 2 ? disabledStyle : undefined}>
        <div className="flex justify-between">
          <div className="lg:mr-20"></div>
          <div className="lg:max-w-[80%] w-full">
            <div className="flex items-center gap-2">
              <h2 className="underline">Address Information</h2>
              <Icon
                icon="mdi:edit-outline"
                className={curStep == 2 ? "hidden" : "block"}
                width={18}
                height={18}
                onClick={() => router.push("/signup?step=2")}
              />
            </div>
            <div className={curStep == 2 ? "block" : "hidden md:block"}>
              <div className="flex justify-end mt-2">
                <div className="flex justify-between w-full lg:w-[90%]">
                  <div className="flex flex-col gap-2 mt-2 w-full">
                    <div className="flex flex-col lg:flex-row justify-between gap-2">
                      <InputField label="Country" className="w-full" />
                      <InputField label="Zipcode" className="w-full" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-2">
                      <InputField label="City" className="w-full" />
                      <InputField label="District" className="w-full" />
                    </div>
                    <InputField
                      label="Address #1"
                      className="!max-w-[100%] w-full"
                    />
                    <InputField
                      label="Address #2"
                      className="!max-w-[100%] w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ProcceedButton step={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={curStep !== 3 ? disabledStyle : undefined}>
        <div className="flex justify-between">
          <div className="lg:mr-20"></div>
          <div className="lg:max-w-[80%] w-full">
            <div className="flex items-center gap-2">
              <h2 className="underline">CONTACT AND LOGIN</h2>
              <Icon
                icon="mdi:edit-outline"
                className={curStep == 3 ? "hidden" : "block"}
                width={18}
                height={18}
                onClick={() => router.push("/signup?step=3")}
              />
            </div>
            <div className={curStep == 3 ? "block" : "hidden md:block"}>
              <div className="flex justify-end mt-2">
                <div className="lg:w-[90%] w-full flex flex-col gap-2 mt-2">
                  <InputField label="E-mail" className="w-full" />
                  <InputField label="Phone" className="w-full" />
                  <div className="flex items-center gap-10">
                    <span>Sync other social media:</span>
                    <div className="flex gap-2">
                      <span className="p-2 border-[1px] rounded-lg hover:cursor-pointer active:bg-gray-100">
                        <Image
                          src="/google.svg"
                          width={20}
                          height={20}
                          alt="Google"
                        />
                      </span>
                      <span className="p-2 border-[1px] rounded-lg hover:cursor-pointer active:bg-gray-100">
                        <Image
                          src="/facebook.svg"
                          width={20}
                          height={20}
                          alt="Google"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-6">
                <ProcceedButton step={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={curStep !== 4 ? disabledStyle : undefined}>
        <div className="flex justify-between">
          <div className="lg:mr-20"></div>
          <div className="lg:max-w-[80%] w-full">
            <div className="flex items-center gap-2">
              <h2 className="underline">CUSTOMIZE YOUR EXPERIENCE</h2>
              <Icon
                icon="mdi:edit-outline"
                className={curStep == 4 ? "hidden" : "block"}
                width={18}
                height={18}
                onClick={() => router.push("/signup?step=4")}
              />
            </div>
            <div className={`${curStep == 4 ? "block" : "hidden md:block"}`}>
              <p className="news-title font-medium leading-[24px]">
                Select your favourite categories and keep up to date with what
                matters to you
              </p>
              <div className="py-2 flex md:justify-start justify-center flex-wrap gap-[10px]">
                {topics.map((topic) => {
                  return <Tag key={topic} topic={topic} />;
                })}
              </div>
              <div className="flex justify-center my-6">
                <ProcceedButton step={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
