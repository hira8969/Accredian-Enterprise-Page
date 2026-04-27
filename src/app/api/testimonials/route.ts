import { NextResponse } from "next/server";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "VP of Human Resources",
    company: "Infosys",
    rating: 5,
    text: "Accredian transformed how we approach L&D at Infosys. The data science program saw a 92% completion rate — far beyond any previous initiative.",
    metric: "92% completion rate",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Chief People Officer",
    company: "Flipkart",
    rating: 5,
    text: "We onboarded 800 employees across 3 cities in under a week. The IIT-backed certification gave our teams instant credibility.",
    metric: "800 employees onboarded",
    avatar: "RM",
  },
  {
    id: 3,
    name: "Anita Krishnamurthy",
    role: "Head of L&D",
    company: "Deloitte India",
    rating: 5,
    text: "The ROI from Accredian's Product Management program was evident within 2 months. Our product teams shipped 35% faster.",
    metric: "35% faster product delivery",
    avatar: "AK",
  },
  {
    id: 4,
    name: "Vikram Nair",
    role: "CTO",
    company: "HDFC Bank",
    rating: 5,
    text: "Upskilling 1,200+ tech professionals across AI and cloud was a massive challenge. Accredian's blended learning approach worked perfectly.",
    metric: "1,200+ professionals upskilled",
    avatar: "VN",
  },
];

export async function GET() {
  return NextResponse.json(
    { success: true, count: testimonials.length, testimonials },
    { status: 200 }
  );
}
