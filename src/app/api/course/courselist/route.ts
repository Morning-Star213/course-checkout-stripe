import { db } from "@/app/_helper/server/db";
import { NextResponse } from "next/server";
const Course = db.Course;
export async function GET() {
  const res = await Course.find({}).sort({ createdAt: -1 });
  console.log("find result------->", res);
  return NextResponse.json({ res });
}
