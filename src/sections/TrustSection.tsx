"use client";

const companies = [
  { name: "Google", abbr: "G" },
  { name: "Microsoft", abbr: "Ms" },
  { name: "Amazon", abbr: "Am" },
  { name: "Flipkart", abbr: "Fk" },
  { name: "Infosys", abbr: "If" },
  { name: "Wipro", abbr: "Wi" },
  { name: "TCS", abbr: "TC" },
  { name: "Deloitte", abbr: "De" },
  { name: "Accenture", abbr: "Ac" },
  { name: "HDFC Bank", abbr: "HB" },
];

const colors = [
  "from-blue-500 to-blue-700",
  "from-sky-500 to-blue-600",
  "from-orange-500 to-yellow-500",
  "from-yellow-400 to-orange-400",
  "from-indigo-500 to-purple-600",
  "from-purple-500 to-pink-500",
  "from-teal-500 to-cyan-500",
  "from-green-500 to-emerald-600",
  "from-violet-500 to-purple-700",
  "from-blue-600 to-cyan-500",
];

export default function TrustSection() {
  const doubled = [...companies, ...companies];

  return (
    <section id="trust" className="section-padding bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Trusted Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Powering learning at India's{" "}
            <span className="gradient-text">top organizations</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Over 500 enterprises trust Accredian to upskill their teams with
            industry-relevant, accredited programs.
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {doubled.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex-shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm px-6 py-4 flex items-center gap-3 hover:border-blue-300 hover:shadow-md transition-all duration-200 group cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                    colors[i % colors.length]
                  } flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {company.abbr}
                </div>
                <span className="text-slate-700 font-semibold whitespace-nowrap text-sm">
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10" />
        </div>

        {/* Certifications Row */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["IIT Delhi", "IIT Guwahati", "IIM Ahmedabad", "Great Lakes", "IMT Ghaziabad"].map(
            (inst) => (
              <div
                key={inst}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:border-blue-300 transition-colors"
              >
                <div className="w-5 h-5 gradient-bg rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">✓</span>
                </div>
                <span className="text-slate-700 text-sm font-medium">{inst}</span>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
