import { NextRequest, NextResponse } from "next/server";

// Mock user database — replace with real DB in production
const users = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@accredian.com",
    password: "demo1234", // plain text for demo — use bcrypt in production
    company: "Accredian",
    role: "L&D Manager",
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password. Try demo@accredian.com / demo1234" },
        { status: 401 }
      );
    }

    // Generate a mock JWT-like token (use real JWT in production)
    const token = Buffer.from(
      JSON.stringify({ userId: user.id, email: user.email, exp: Date.now() + 86400000 })
    ).toString("base64");

    return NextResponse.json(
      {
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
