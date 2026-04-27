"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hira lal Kumar",
    role: "Web Developer",
    company: "Infosys",
    avatar: "PS",
    avatarColor: "from-blue-500 to-blue-700",
    rating: 5,
    text: "Accredian transformed how we approach L&D at Infosys. The data science program saw a 92% completion rate — far beyond any previous initiative. The dedicated L&D manager made all the difference in keeping our teams engaged.",
    metric: "92% completion rate",
  },
  {
    name: "Rahul Mehta",
    role: "Chief People Officer",
    company: "Flipkart",
    avatar: "RM",
    avatarColor: "from-yellow-500 to-orange-500",
    rating: 5,
    text: "We onboarded 800 employees across 3 cities in under a week. The IIT-backed certification gave our teams instant credibility. The real-time dashboard helped us identify stragglers early and intervene proactively.",
    metric: "800 employees onboarded",
  },
  {
    name: "Anita Krishnamurthy",
    role: "Head of Learning & Development",
    company: "Deloitte India",
    avatar: "AK",
    avatarColor: "from-green-500 to-teal-600",
    rating: 5,
    text: "The ROI from Accredian's Product Management program was evident within 2 months. Our product teams shipped 35% faster after completing the cohort. I'd recommend this to any L&D leader wanting measurable outcomes.",
    metric: "35% faster product delivery",
  },
  {
    name: "Vikram Nair",
    role: "CTO",
    company: "HDFC Bank",
    avatar: "VN",
    avatarColor: "from-purple-500 to-violet-700",
    rating: 5,
    text: "Upskilling 1,200+ tech professionals across AI and cloud was a massive challenge. Accredian's blended learning approach — live + async — worked perfectly for our distributed workforce. Game-changer for us.",
    metric: "1,200+ tech professionals upskilled",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Trusted by L&D leaders across{" "}
            <span className="gradient-text">500+ enterprises</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Featured Testimonial */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
              {/* Quote decoration */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{t.company}</p>
                </div>
              </div>
            </div>

            {/* Nav buttons */}
            <div className="flex gap-3 mt-6 justify-center">
              <button
                id="testimonial-prev-btn"
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? "bg-blue-600 w-6" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
              <button
                id="testimonial-next-btn"
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* All testimonials mini cards */}
          <div className="space-y-4">
            {testimonials.map((tm, i) => (
              <button
                key={tm.name}
                onClick={() => setCurrent(i)}
                className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 ${
                  i === current
                    ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/20"
                    : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tm.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow`}
                  >
                    {tm.avatar}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        i === current ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {tm.name}
                    </p>
                    <p
                      className={`text-xs ${
                        i === current ? "text-blue-200" : "text-slate-500"
                      }`}
                    >
                      {tm.company}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(tm.rating)].map((_, si) => (
                      <Star
                        key={si}
                        className={`w-3 h-3 fill-current ${
                          i === current ? "text-yellow-300" : "text-yellow-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p
                  className={`text-xs line-clamp-2 ${
                    i === current ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {tm.text}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
