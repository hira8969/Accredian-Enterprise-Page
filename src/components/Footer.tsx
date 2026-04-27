"use client";
import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Solutions: [
    { label: "Enterprise Learning", href: "#features" },
    { label: "Team Upskilling", href: "#features" },
    { label: "Leadership Programs", href: "#features" },
    { label: "Custom Programs", href: "#lead-form" },
  ],
  Programs: [
    { label: "Data Science & AI", href: "#programs" },
    { label: "Product Management", href: "#programs" },
    { label: "Full Stack Development", href: "#programs" },
    { label: "Digital Marketing", href: "#programs" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Sales", href: "#lead-form" },
    { label: "Status Page", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-max pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Accre<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">dian</span>
              </span>
              <span className="text-xs font-semibold bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded-full">
                Enterprise
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              India's leading enterprise learning platform. Partner with us to
              upskill your workforce with IIT-backed programs that deliver
              measurable business outcomes.
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400" />
                enterprise@accredian.com
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-blue-400" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                Bengaluru · Delhi · Mumbai
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter/X",
                  href: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <p className="text-xs text-slate-500 text-center mb-4">
            Academic Partners & Accreditations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["IIT Delhi", "IIT Guwahati", "IIM Ahmedabad", "Great Lakes", "IMT Ghaziabad", "Manipal University"].map(
              (inst) => (
                <div
                  key={inst}
                  className="bg-slate-800 border border-slate-700 text-slate-400 text-xs px-3 py-1.5 rounded-full hover:border-blue-600 hover:text-white transition-all"
                >
                  {inst}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
