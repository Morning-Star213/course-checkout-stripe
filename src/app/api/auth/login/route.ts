import { db } from "@/app/_helper/server/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
const User=db.User;
export async function POST(req: NextRequest, res: NextResponse) {
  let { email, password } = await req.json();
  let errors: any = {};

  if (!email.includes("@") || !email.includes("."))
    errors.email = "Not email type. Must include @, .";

  if (Object.keys(errors).length > 0)
    return NextResponse.json({ errors, status: 400 });

  const user = await User.findOne({ email: email });
  if (user) {
    if (await bcrypt.compare(password, user.password))
      return NextResponse.json({ msg: { email }, status: 200 });
    else {
      errors.password = "Wrong password";
      return NextResponse.json({ errors, status: 400 });
    }
  } else
    return NextResponse.json({ msg: "First, please register.", status: 400 });
}
