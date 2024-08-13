import { isEmpty } from "@/app/_helper/client/isEmpty";
import React from "react";

type OnChang = (value: any) => void;

const Input = ({
  type,
  placeholder,
  error,
  onChange,
}: {
  type: string;
  placeholder: string;
  error: string;
  onChange: OnChang;
}) => {
  return (
    <div className="py-[10px]">
      <input
        type={type}
        placeholder={placeholder}
        className={`${
          isEmpty(error)
            ? "border-gray-200 border-[1px]"
            : "border-red-600 border-[1px]"
        } bg-gray-50 w-[100%] py-[7px] pl-[10px]`}
        onChange={(e: any) => onChange(e.target.value)}
      />
      <span className="text-red-700 text-[15px]">{error}</span>
    </div>
  );
};

export default Input;
