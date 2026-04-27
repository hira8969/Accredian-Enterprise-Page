import { NextRequest, NextResponse } from "next/server";

// In-memory store (replace with a DB in production)
const leads: unknown[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic server-side validation
    const { name, email, phone, company } = body;

    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully. Our team will contact you within 24 hours.",
        data: { id: lead.id },
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

export async function GET() {
  // Protected endpoint — in production, add authentication
  return NextResponse.json(
    { success: true, count: leads.length, leads },
    { status: 200 }
  );
}
