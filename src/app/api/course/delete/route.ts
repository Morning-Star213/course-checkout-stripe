import { db } from "@/app/_helper/server/db";
import { NextRequest, NextResponse } from "next/server";
const Course = db.Course;

export async function POST(req: NextRequest) {
  let id = await req.json();
  await Course.findByIdAndDelete(id);
  return NextResponse.json({ msg: "DELETE SECCUSS" });
}
