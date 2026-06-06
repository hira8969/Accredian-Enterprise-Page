"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Eye, EyeOff, Loader2, ArrowRight, Lock, Mail, User, Building2, CheckCircle } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid work email";
    if (!form.company.trim()) e.company = "Company name is required";
    if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    setApiError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, company: form.company, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard");
      } else {
        setApiError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = (pw: string) => {
    if (pw.length === 0) return null;
    if (pw.length < 6) return { label: "Weak", color: "bg-red-500", width: "w-1/4" };
    if (pw.length < 8) return { label: "Fair", color: "bg-yellow-500", width: "w-2/4" };
    if (pw.match(/[A-Z]/) && pw.match(/[0-9]/)) return { label: "Strong", color: "bg-green-500", width: "w-full" };
    return { label: "Good", color: "bg-blue-500", width: "w-3/4" };
  };
  const strength = passwordStrength(form.password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Accre<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">dian</span>
            </span>
            <span className="text-xs font-semibold bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded-full">
              Enterprise
            </span>
          </Link>
          <p className="text-slate-400 text-sm mt-2">Start your free 14-day pilot today</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-slate-400 text-sm mb-8">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign in →
            </Link>
          </p>

          {apiError && (
            <div className="mb-5 bg-red-500/10 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl">
              ⚠ {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} id="signup-form" className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="signup-name" className="block text-sm font-semibold text-slate-300 mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Hira lal Kumar"
                  className={`w-full pl-10 pr-4 py-3.5 rounded-xl text-sm transition-all outline-none bg-white/5 text-white placeholder-slate-500 border focus:ring-2 ${
                    errors.name ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-400/50 focus:ring-blue-400/10"
                  }`}
                />
              </div>
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="signup-email" className="block text-sm font-semibold text-slate-300 mb-2">
                Work Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={`w-full pl-10 pr-4 py-3.5 rounded-xl text-sm transition-all outline-none bg-white/5 text-white placeholder-slate-500 border focus:ring-2 ${
                    errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-400/50 focus:ring-blue-400/10"
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="signup-company" className="block text-sm font-semibold text-slate-300 mb-2">
                Company Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="signup-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Infosys"
                  className={`w-full pl-10 pr-4 py-3.5 rounded-xl text-sm transition-all outline-none bg-white/5 text-white placeholder-slate-500 border focus:ring-2 ${
                    errors.company ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-400/50 focus:ring-blue-400/10"
                  }`}
                />
              </div>
              {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="signup-password" className="block text-sm font-semibold text-slate-300 mb-2">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className={`w-full pl-10 pr-12 py-3.5 rounded-xl text-sm transition-all outline-none bg-white/5 text-white placeholder-slate-500 border focus:ring-2 ${
                    errors.password ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-400/50 focus:ring-blue-400/10"
                  }`}
                />
                <button
                  type="button"
                  id="toggle-signup-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {strength && (
                <div className="mt-2">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${strength.color} ${strength.width} rounded-full transition-all`} />
                  </div>
                  <p className={`text-xs mt-1 ${strength.color.replace("bg-", "text-")}`}>
                    {strength.label} password
                  </p>
                </div>
              )}
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="signup-confirm" className="block text-sm font-semibold text-slate-300 mb-2">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="signup-confirm"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat password"
                  className={`w-full pl-10 pr-12 py-3.5 rounded-xl text-sm transition-all outline-none bg-white/5 text-white placeholder-slate-500 border focus:ring-2 ${
                    errors.confirmPassword ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-400/50 focus:ring-blue-400/10"
                  }`}
                />
                <button
                  type="button"
                  id="toggle-confirm-password-btn"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <input
                id="agree-terms"
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 rounded accent-blue-500 bg-white/5 border-white/20 cursor-pointer"
              />
              <label htmlFor="agree-terms" className="text-xs text-slate-400 cursor-pointer leading-relaxed">
                I agree to Accredian's{" "}
                <Link href="/" className="text-blue-400 hover:underline">Terms of Service</Link>
                {" and "}
                <Link href="/" className="text-blue-400 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            {/* Submit */}
            <button
              id="signup-submit-btn"
              type="submit"
              disabled={isLoading}
              className="w-full gradient-bg text-white font-bold py-3.5 rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Create Free Account
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-500 text-xs mt-6">
          By signing up, you agree to our{" "}
          <Link href="/" className="text-slate-400 hover:text-white">Terms</Link> &amp;{" "}
          <Link href="/" className="text-slate-400 hover:text-white">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
