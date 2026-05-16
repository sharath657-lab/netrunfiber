import { NextResponse } from "next/server"
import connectDB from "../../../lib/mongodb"
import User from "../../../models/User"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const { name, email, password } = body

    console.log(name, email)

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
  } catch (error: any) {
  console.log("SIGNUP ERROR:", error)

  return NextResponse.json({
    success: false,
    message: error.message,
  })
}