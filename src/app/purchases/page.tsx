"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import courseServise from "../_servise/courseServise";

const Purchases = () => {
  const [hover, setHover] = useState<any>(null);
  const [course, setCourse] = useState<any>({});
  const servise = courseServise();

  const getcourse = async () => {
    const courselist = await servise.getCourselist();
    setCourse(courselist.res);
    console.log("courselist------>", courselist.res);
  };

  useEffect(() => {
    getcourse();
  }, []);

  const del = async (id: any) => {
    console.log("delete=========>", id);
    const res = await servise.deleteCourse(id);
    console.log(res.msg);
    getcourse();
  };
  return (
    <div className="grid-x md:section-hero outpadding flex flex-col gap-5 mx-auto">
      {Object.keys(course).length > 0 ? (
        course.map((value: any, index: number) => {
          return (
            <div className="flex flex-col w-[80%] mx-auto" key={index}>
              <div className="bg-white md:px-10 px-5 md:py-5 py-3 rounded-lg">
                <div className="flex md:flex-row flex-col md:justify-between md:gap-5">
                  <div className="flex my-auto">
                    <Image
                      src="/cart.webp"
                      width={200}
                      height={200}
                      alt="cart-product"
                    />
                  </div>
                  <div className="course-text">
                    <div className="text-[25px] font-bold leading-[30px]">
                      {value.name}
                    </div>
                    <div className="py-3">{value.description}</div>
                    <div className="text-[25px] font-bold leading-[30px]">
                      ${value.price}
                    </div>
                  </div>
                  <div className="flex my-auto">
                    <div
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                      onClick={() => del(value._id)}
                      className="hover:cursor-pointer"
                    >
                      <FaTrash
                        color={hover == index ? "gray" : "red"}
                        size={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col w-[80%] mx-auto">
          <div className="md:px-10 px-5 md:py-5 py-3">
            <div className="course-title">There are no course.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchases;
