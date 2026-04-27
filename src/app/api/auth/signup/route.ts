import { NextRequest, NextResponse } from "next/server";

// In-memory store — replace with a real DB
const registeredUsers: Array<{
  id: number;
  name: string;
  email: string;
  company: string;
  password: string;
  role: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, password } = await request.json();

    if (!name || !email || !company || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check duplicate
    const exists = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return NextResponse.json(
        { success: false, message: "An account with this email already exists. Please log in." },
        { status: 409 }
      );
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      company,
      password, // In production: bcrypt.hash(password, 10)
      role: "L&D Manager",
    };

    registeredUsers.push(newUser);
    console.log("New user registered:", { name, email, company });

    // Generate token
    const token = Buffer.from(
      JSON.stringify({ userId: newUser.id, email: newUser.email, exp: Date.now() + 86400000 })
    ).toString("base64");

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully!",
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          company: newUser.company,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
