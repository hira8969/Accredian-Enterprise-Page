"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we launch our enterprise program?",
    answer:
      "We guarantee a go-live within 48 hours of signing the agreement. Our implementation team handles everything from platform setup to employee onboarding, so your L&D team doesn't need to worry about technical setup.",
  },
  {
    question: "Can we customize the curriculum for our industry?",
    answer:
      "Absolutely. Every enterprise program is co-designed with your L&D team. We tailor the curriculum, case studies, and capstone projects to match your industry, tech stack, and business goals. We also offer bespoke content creation.",
  },
  {
    question: "What certifications do employees receive?",
    answer:
      "Employees receive joint certifications from Accredian and our academic partners (IIT Delhi, IIT Guwahati, IIM Ahmedabad, Great Lakes, and more). These are industry-recognized credentials that appear on LinkedIn and carry significant career value.",
  },
  {
    question: "How does the pricing work for enterprises?",
    answer:
      "We offer flexible pricing based on team size, program selection, and contract duration. Volume discounts are available for teams of 50+. Contact us for a custom quote — we typically offer a 14-day free pilot before any commitment.",
  },
  {
    question: "Can we integrate Accredian with our existing HRMS/LMS?",
    answer:
      "Yes. We offer native integrations with Workday, SAP SuccessFactors, Cornerstone, Darwinbox, and more. We also support SSO (SAML, OAuth) for seamless employee access. Our API-first approach ensures smooth data flow between systems.",
  },
  {
    question: "What is the average completion rate?",
    answer:
      "Our enterprise programs maintain a 94% average completion rate — significantly higher than the industry average of 15%. This is achieved through cohort-based learning, live sessions, peer accountability, and proactive engagement from our L&D managers.",
  },
  {
    question: "Do you offer programs in regional languages?",
    answer:
      "Yes. Select programs are available in Hindi, Tamil, Telugu, Kannada, and Marathi in addition to English. We're continuously expanding our regional language library based on demand.",
  },
  {
    question: "What kind of support do we get post-launch?",
    answer:
      "You get a dedicated L&D manager for the duration of your program, 24/7 learner support, monthly ROI reports, and quarterly business reviews. We treat your team's learning success as our KPI.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Questions? We've got{" "}
            <span className="gradient-text">answers</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Everything you need to know about Accredian Enterprise. Can't find
            your answer? Reach out to our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-blue-200 bg-blue-50/50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                id={`faq-item-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span
                  className={`font-semibold text-base pr-4 ${
                    open === i ? "text-blue-700" : "text-slate-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  open === i ? "pb-5 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Still have questions?{" "}
            <a
              href="#lead-form"
              className="text-blue-600 font-semibold hover:underline"
            >
              Talk to our enterprise team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
