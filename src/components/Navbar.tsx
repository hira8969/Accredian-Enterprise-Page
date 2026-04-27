"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#features" },
  { label: "Projects", href: "#how-it-works" },
  { label: "Contact", href: "#lead-form" },
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
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 dark:bg-slate-900/95 dark:border-slate-700"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Accre<span className="gradient-text">dian</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-1 dark:bg-blue-900 dark:text-blue-300">
            Enterprise
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            id="nav-login-btn"
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
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
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl dark:bg-slate-900 dark:border-slate-700">
          <ul className="container-max py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-slate-100 flex flex-col gap-2 dark:border-slate-700">
              <Link
                id="mobile-login-btn"
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-600 py-2.5 px-4 rounded-lg hover:bg-slate-50 transition-colors text-center border border-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:border-slate-600"
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
