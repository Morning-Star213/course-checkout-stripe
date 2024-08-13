import bcrypt from "bcryptjs";
import { db } from "@/app/_helper/server/db";
import { NextRequest, NextResponse } from "next/server";
const User = db.User;
export async function POST(req: NextRequest, res: NextResponse) {
  let { email, password, cpw } = await req.json();
  let errors: any = {};
  if (!email.includes("@") || !email.includes("."))
    errors.email = "Not email type. Must include @, .";
  if (password != cpw) errors.cpw = "Please match the password.";
  if (Object.keys(errors).length > 0)
    return NextResponse.json({ errors, status: 400 });

  const newUser = new User({ email, password });
  const user = await User.findOne({ email: email });
  if (user) {
    errors.email = "The email already exists.";
    console.log("server1>------>", errors);
    return NextResponse.json({ errors, status: 400 });
  } else {
    if (newUser.password) {
      newUser.password = await bcrypt.hash(newUser.password, 10);
    }
    await newUser.save();
    console.log(newUser);
    return NextResponse.json({ msg: "Success register.", status: 200 });
  }
}
