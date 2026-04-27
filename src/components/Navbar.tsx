"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Programs", href: "#programs" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">
            Accre<span className="gradient-text">dian</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-1">
            Enterprise
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            id="nav-login-btn"
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Log in
          </Link>
          <Link
            id="nav-cta-btn"
            href="/signup"
            className="gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 active:scale-95"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <ul className="container-max py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                id="mobile-login-btn"
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 py-2.5 px-4 rounded-lg hover:bg-slate-50 transition-colors text-center border border-slate-200"
              >
                Log in
              </Link>
              <Link
                id="mobile-signup-btn"
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="gradient-bg text-white text-sm font-semibold px-4 py-3 rounded-xl text-center hover:opacity-90 transition-opacity"
              >
                Get Started Free
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
