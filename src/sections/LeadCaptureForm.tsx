"use client";
import { useState } from "react";
import { CheckCircle, Loader2, Send, Users, Building2, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  teamSize: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "Hira Lal Kumar",
    email: "",
    phone: "",
    company: "Freelance Web Developer",
    teamSize: "1-50",
    message: "Hi, I'm Hira Lal Kumar, a passionate web developer based in Bhubaneswar. I'm looking to discuss potential web development projects and collaboration opportunities. I specialize in modern web technologies and have experience in creating responsive, user-friendly applications.",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email address";
    if (!formData.phone.match(/^[6-9]\d{9}$/))
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="section-padding bg-slate-50">
        <div className="container-max flex justify-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 text-center max-w-md w-full">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Message sent successfully! 🎉
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Thanks for reaching out! I'll review your project details and get back to you within{" "}
              <span className="font-semibold text-blue-600">24 hours</span> to discuss how we can work together.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Info */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Let's Connect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Request a{" "}
              <span className="gradient-text">free consultation</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              I'm Hira Lal Kumar, a web developer from Bhubaneswar. Let's discuss your project requirements and how I can help bring your ideas to life.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Users,
                  title: "Personalized Approach",
                  desc: "Tailored solutions based on your specific project needs",
                },
                {
                  icon: Building2,
                  title: "Modern Technologies",
                  desc: "Latest web technologies including React, Next.js, and more",
                },
                {
                  icon: Phone,
                  title: "Direct Communication",
                  desc: "Clear communication and regular updates throughout the project",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Let's discuss your project
            </h3>

            <form onSubmit={handleSubmit} id="enterprise-lead-form" className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Priya Sharma"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-300 focus:ring-red-200 bg-red-50"
                      : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="priya@company.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:ring-red-200 bg-red-50"
                      : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-300 focus:ring-red-200 bg-red-50"
                      : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Organization/Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company or Project Name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none focus:ring-2 ${
                    errors.company
                      ? "border-red-300 focus:ring-red-200 bg-red-50"
                      : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                  }`}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="teamSize" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Scope
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all outline-none focus:ring-2 focus:border-blue-400 focus:ring-blue-100 text-slate-700 bg-white"
                >
                  <option value="">Select project scope</option>
                  <option value="1-50">Small project (landing page, portfolio)</option>
                  <option value="51-200">Medium project (web app, e-commerce)</option>
                  <option value="201-1000">Large project (complex application)</option>
                  <option value="1000+">Enterprise solution</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell me about your project requirements, timeline, and any specific technologies you prefer..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all outline-none focus:ring-2 focus:border-blue-400 focus:ring-blue-100 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                id="lead-form-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white font-bold py-4 rounded-2xl hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Free Consultation
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
