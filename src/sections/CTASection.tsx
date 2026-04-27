"use client";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free initial consultation with project assessment",
  "No obligation to proceed with development",
  "Transparent pricing and timeline estimates",
  "Modern, scalable solutions using latest technologies",
];

export default function CTASection() {
  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
          <defs>
            <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container-max relative z-10 text-center">
        <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to get started?
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
          Ready to bring your ideas to{" "}
          <span className="text-yellow-300">life?</span>
        </h2>
        <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
          Let's discuss your project vision and create something amazing together.
          I'm Hira Lal Kumar, a web developer from Bhubaneswar ready to help.
        </p>

        {/* Benefits */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2 text-white/90 text-sm">
              <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            id="cta-primary-btn"
            href="#lead-form"
            className="group bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 hover:shadow-xl hover:shadow-black/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
          >
            Request Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            id="cta-secondary-btn"
            href="mailto:hiralalkumar@example.com"
            className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
          >
            Email Me Directly
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {["from-blue-400 to-blue-600","from-purple-400 to-purple-600","from-green-400 to-green-600","from-orange-400 to-orange-600","from-pink-400 to-pink-600"].map((c, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
              >
                {["R","J","S","A","M"][i]}
              </div>
            ))}
          </div>
          <p className="text-white/80 text-sm">
            <span className="font-bold text-white">15+</span> successful projects delivered
          </p>
        </div>
      </div>
    </section>
  );
}
