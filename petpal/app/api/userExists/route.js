import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { username, email } = await req.json();
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    return NextResponse.json({ user: existingUser !== null }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while checking user existence." },
      { status: 500 }
    );
  }
}
