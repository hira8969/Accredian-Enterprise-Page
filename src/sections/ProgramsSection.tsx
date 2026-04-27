"use client";
import { useState } from "react";
import { ArrowRight, Clock, Users, Award, TrendingUp } from "lucide-react";

const categories = ["All", "Technology", "Business", "Marketing", "Finance"];

const programs = [
  {
    title: "Post Graduate Program in Data Science & AI",
    category: "Technology",
    partner: "IIT Guwahati",
    duration: "11 months",
    learners: "12K+",
    rating: 4.8,
    level: "Advanced",
    color: "from-blue-500 to-cyan-500",
    tag: "Most Popular",
    tagColor: "bg-blue-100 text-blue-700",
    skills: ["Python", "ML", "Deep Learning", "NLP"],
  },
  {
    title: "Executive Program in Product Management",
    category: "Business",
    partner: "IIT Delhi",
    duration: "6 months",
    learners: "8K+",
    rating: 4.9,
    level: "Intermediate",
    color: "from-purple-500 to-violet-600",
    tag: "Bestseller",
    tagColor: "bg-purple-100 text-purple-700",
    skills: ["Strategy", "Roadmapping", "Agile", "UX"],
  },
  {
    title: "Full Stack Development Bootcamp",
    category: "Technology",
    partner: "Accredian",
    duration: "9 months",
    learners: "15K+",
    rating: 4.7,
    level: "Beginner",
    color: "from-green-500 to-teal-600",
    tag: "New Cohort",
    tagColor: "bg-green-100 text-green-700",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "MBA in Business Analytics",
    category: "Business",
    partner: "Great Lakes",
    duration: "18 months",
    learners: "5K+",
    rating: 4.8,
    level: "Advanced",
    color: "from-orange-500 to-yellow-500",
    tag: "MBA",
    tagColor: "bg-orange-100 text-orange-700",
    skills: ["Statistics", "Excel", "Tableau", "SQL"],
  },
  {
    title: "Digital Marketing & Growth Hacking",
    category: "Marketing",
    partner: "IIM Ahmedabad",
    duration: "4 months",
    learners: "9K+",
    rating: 4.6,
    level: "Intermediate",
    color: "from-pink-500 to-rose-600",
    tag: "Fast-Track",
    tagColor: "bg-pink-100 text-pink-700",
    skills: ["SEO", "Paid Ads", "Analytics", "Content"],
  },
  {
    title: "FinTech & Blockchain Fundamentals",
    category: "Finance",
    partner: "IIT Bombay",
    duration: "5 months",
    learners: "3K+",
    rating: 4.7,
    level: "Intermediate",
    color: "from-indigo-500 to-blue-600",
    tag: "Trending",
    tagColor: "bg-indigo-100 text-indigo-700",
    skills: ["DeFi", "Smart Contracts", "Web3", "Risk"],
  },
];

export default function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Program Catalogue
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            World-class programs for{" "}
            <span className="gradient-text">every team</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            200+ programs across 20+ domains — all backed by India's top universities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`program-filter-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "gradient-bg text-white shadow-lg shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.title}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${prog.color} p-6 relative`}>
                <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white`}>
                  {prog.tag}
                </span>
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  {prog.category}
                </p>
                <h3 className="text-white font-bold text-lg leading-snug">
                  {prog.title}
                </h3>
                <p className="text-white/70 text-sm mt-2 font-medium">
                  with {prog.partner}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {prog.learners} enrolled
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {prog.level}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(prog.rating) ? "text-yellow-400" : "text-slate-200"}`}>★</span>
                  ))}
                  <span className="text-sm font-semibold text-slate-700 ml-1">{prog.rating}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5 flex-1">
                  {prog.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#lead-form"
                  className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2.5 rounded-xl text-sm hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Enroll Your Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            View all 200+ programs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
