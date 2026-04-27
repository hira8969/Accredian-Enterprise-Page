"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Users, Award, BookOpen, TrendingUp, X } from "lucide-react";

const stats = [
  { icon: Users, value: "15+", label: "Projects Completed" },
  { icon: BookOpen, value: "3+", label: "Years Experience" },
  { icon: Award, value: "10+", label: "Technologies Mastered" },
  { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container-max relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Trusted by 500+ Fortune 500 Companies
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hira Lal Kumar
              </span>{" "}
              <br />
              Web Developer from Bhubaneswar
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              I create modern, responsive web applications using the latest technologies.
              Let's build something amazing together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                id="hero-cta-primary"
                href="#lead-form"
                className="group gradient-bg text-white font-semibold px-8 py-4 rounded-2xl hover:opacity-90 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                id="hero-watch-demo-btn"
                onClick={() => setShowDemo(true)}
                className="group flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                </div>
                View My Work
              </button>
            </div>

            <p className="text-sm text-slate-400 flex items-center gap-2">
              <span className="text-green-400">✓</span> Modern web technologies
              <span className="mx-2 text-slate-600">·</span>
              <span className="text-green-400">✓</span> Responsive design
              <span className="mx-2 text-slate-600">·</span>
              <span className="text-green-400">✓</span> Performance optimized
            </p>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="animate-float">
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Dashboard</p>
                    <p className="text-white font-semibold text-lg">Team Progress Overview</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">Live</div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Enrolled", value: "1,248", color: "text-blue-400" },
                    { label: "Completed", value: "876", color: "text-green-400" },
                    { label: "In Progress", value: "372", color: "text-yellow-400" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <p className={`font-bold text-xl ${s.color}`}>{s.value}</p>
                      <p className="text-slate-400 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    { course: "Data Science & AI", progress: 82, color: "from-blue-500 to-cyan-500" },
                    { course: "Product Management", progress: 65, color: "from-purple-500 to-pink-500" },
                    { course: "Full Stack Dev", progress: 90, color: "from-green-500 to-emerald-500" },
                    { course: "Digital Marketing", progress: 48, color: "from-orange-500 to-yellow-500" },
                  ].map((item) => (
                    <div key={item.course}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-slate-300 text-xs font-medium">{item.course}</span>
                        <span className="text-slate-400 text-xs">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 gradient-bg rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Next Cohort Starts</p>
                    <p className="text-blue-100 text-xs mt-0.5">May 15, 2026 · 48 seats left</p>
                  </div>
                  <Link
                    id="hero-enroll-now-btn"
                    href="#lead-form"
                    className="bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-bold">IIT Certified</p>
                  <p className="text-slate-500 text-xs">All Programs</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-blue-400","bg-purple-400","bg-green-400","bg-yellow-400"].map((c, i) => (
                    <div key={i} className={`w-7 h-7 ${c} rounded-full border-2 border-white`} />
                  ))}
                </div>
                <p className="text-slate-700 text-xs font-semibold ml-1">+320 joined this week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <stat.icon className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Watch Demo Modal */}
      {showDemo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-demo-modal-btn"
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {/* Video placeholder */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center shadow-xl animate-pulse-glow">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
              <p className="text-white font-bold text-xl">Accredian Enterprise Demo</p>
              <p className="text-slate-400 text-sm">2 min overview · No sign-up required</p>
              <div className="mt-4 flex gap-3">
                <Link
                  href="/signup"
                  onClick={() => setShowDemo(false)}
                  className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm flex items-center gap-2"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#lead-form"
                  onClick={() => setShowDemo(false)}
                  className="border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
