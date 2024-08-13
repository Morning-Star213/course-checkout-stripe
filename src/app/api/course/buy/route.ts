import { db } from "@/app/_helper/server/db";
import { NextRequest, NextResponse } from "next/server";
const Course = db.Course;

export async function POST(req: NextRequest, res: NextResponse) {
  let { item, buyer } = await req.json();
  const oldcourse = await Course.findOne({ name: item.name });
  if (oldcourse) {
    return NextResponse.json({ err: "Already bought" });
  } else {
    const newCourse = new Course({
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      buyer: buyer,
    });
    console.log("server2---------->", newCourse);
    await newCourse.save();
    return NextResponse.json({ msg: "SUCCESS" });
  }
}
