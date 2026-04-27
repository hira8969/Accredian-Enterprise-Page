"use client";
import {
  BarChart2,
  Cpu,
  Users2,
  ShieldCheck,
  Globe,
  Headphones,
  LayoutDashboard,
  Zap,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BarChart2,
    title: "Real-Time Analytics",
    description:
      "Track learner progress, engagement, and ROI with powerful dashboards. Make data-driven L&D decisions that actually move the needle.",
    color: "from-blue-500 to-blue-700",
    highlight: true,
  },
  {
    icon: Cpu,
    title: "AI-Powered Learning Paths",
    description:
      "Personalized curriculum tailored to each employee's role, experience, and learning goals using adaptive AI algorithms.",
    color: "from-purple-500 to-violet-700",
    highlight: false,
  },
  {
    icon: Users2,
    title: "Cohort-Based Learning",
    description:
      "Foster collaboration through peer learning, live sessions with IIT faculty, and group capstone projects.",
    color: "from-cyan-500 to-teal-600",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Accredited Certifications",
    description:
      "All programs are backed by IITs, IIMs, and top global universities — certifications your employees will be proud to showcase.",
    color: "from-green-500 to-emerald-600",
    highlight: false,
  },
  {
    icon: Globe,
    title: "Global Content Library",
    description:
      "Access 200+ programs across Data Science, Product Management, Tech, Marketing, Finance, and more in 10+ languages.",
    color: "from-orange-500 to-yellow-500",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "Dedicated L&D Manager",
    description:
      "A dedicated Learning & Development manager ensures smooth rollout, engagement, and measurable outcomes for your team.",
    color: "from-pink-500 to-rose-600",
    highlight: false,
  },
  {
    icon: LayoutDashboard,
    title: "Custom LMS Integration",
    description:
      "Seamlessly integrate with your existing HRMS, LMS (SAP, Workday, Cornerstone) or deploy our white-label platform.",
    color: "from-indigo-500 to-blue-600",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    description:
      "Launch your enterprise learning program in under 48 hours with our battle-tested implementation framework.",
    color: "from-yellow-500 to-orange-600",
    highlight: false,
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper
      id="features"
      className="bg-white dark:bg-slate-900"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          Enterprise Solutions
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white max-w-3xl mx-auto">
          Everything you need to build a{" "}
          <span className="gradient-text">learning organization</span>
        </h2>
        <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          From personalized learning paths to real-time analytics, Accredian gives
          your L&D team the full toolkit to drive measurable growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={feature.title}
            className={`group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
              feature.highlight
                ? "bg-gradient-to-br from-blue-600 to-blue-800 border-transparent text-white shadow-lg shadow-blue-500/20 dark:from-blue-700 dark:to-blue-900"
                : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600"
            }`}
          >
            <CardHeader>
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  feature.highlight
                    ? "bg-white/20"
                    : `bg-gradient-to-br ${feature.color}`
                }`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <CardTitle
                className={`font-bold text-lg mb-2 ${
                  feature.highlight ? "text-white" : "text-slate-900 dark:text-white"
                }`}
              >
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {feature.description}
              </p>

              {/* Hover accent */}
              {!feature.highlight && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <Button>
          <a href="#lead-form" className="flex items-center gap-2">
            Explore All Features
            <Zap className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
