"use client";
import { MessageSquare, UserCheck, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a 30-minute discovery call to understand your workforce goals, skill gaps, and learning culture.",
    color: "from-blue-500 to-cyan-500",
    detail: "Free consultation · No commitment",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Custom Program Design",
    description:
      "Our curriculum experts design a tailored learning path with the right mix of live sessions, self-paced content, and mentorship.",
    color: "from-purple-500 to-violet-600",
    detail: "Delivered in 5-7 business days",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch & Onboard",
    description:
      "Employees are onboarded to our platform in under 48 hours. Our L&D manager ensures a smooth rollout with high adoption.",
    color: "from-green-500 to-teal-500",
    detail: "48-hour go-live guarantee",
  },
  {
    step: "04",
    icon: BarChart,
    title: "Track & Optimize",
    description:
      "Monitor real-time progress, engagement, and ROI through your enterprise dashboard. We optimize based on data, continuously.",
    color: "from-orange-500 to-rose-500",
    detail: "Monthly executive reports",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto">
            From discovery to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              measurable impact
            </span>{" "}
            in 4 steps
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            We've streamlined enterprise learning deployment so you can focus on
            what matters — your people growing.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-30" />

          {steps.map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Step Number + Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Detail tag */}
                <div
                  className={`mt-5 inline-flex items-center gap-1 bg-gradient-to-r ${step.color} bg-opacity-10 rounded-full px-3 py-1.5`}
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-white text-xs font-medium">{step.detail}</span>
                </div>
              </div>

              {/* Arrow connector (mobile) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2">
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom metric */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "48h", label: "Go-live time" },
            { value: "3x", label: "Faster than competition" },
            { value: "94%", label: "Avg. completion rate" },
            { value: "4.8★", label: "Learner satisfaction" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-white">{m.value}</p>
              <p className="text-slate-400 text-xs mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
