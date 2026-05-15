import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const { name, email, password } = body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: "User already exists",
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({
      success: true,
      user: newUser,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json({
      success: false,
      message: "Server Error",
    })
  }
}