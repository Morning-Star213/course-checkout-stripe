import { db } from "@/app/_helper/server/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const User=db.User;

export async function POST(req: NextRequest, res: NextResponse) {
  const { currentpw, newpw, cnpw, email } = await req.json();
  console.log("server1 >-------->", currentpw, newpw, cnpw, email);
  let errors: any = {};
  if (newpw != cnpw) {
    errors.cnpw = "Please match the password.";
    return NextResponse.json({ errors, status: 400 });
  }
  const user = await User.findOne({ email: email });
  if (user) {
    if (await bcrypt.compare(currentpw, user.password)) {
      let newPassword = await bcrypt.hash(newpw, 10);
      console.log(newPassword);
      user.password = newPassword;
      await user.save();
      return NextResponse.json({ msg: "Change password!", status: 200 });
    } else {
      errors.currentpw = "The current password is invalid.";
      return NextResponse.json({ errors, status: 400 });
    }
  } else {
    return NextResponse.json({ msg: "First, please must login.", status: 400 });
  }
}
