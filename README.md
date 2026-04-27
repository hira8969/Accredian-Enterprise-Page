# Accredian Enterprise Landing Page Clone

> A professional, fully responsive enterprise SaaS landing page clone built with Next.js 15, React, and Tailwind CSS — designed to showcase modern web development skills.

![Preview](https://enterprise.accredian.com/favicon.ico)

## 🎯 Project Overview

This project is a high-fidelity clone of [enterprise.accredian.com](https://enterprise.accredian.com/) — India's leading enterprise learning platform. The goal was to recreate the core landing page with modern best practices, a clean architecture, and a production-ready codebase.

**Live Demo:** Deploy to Vercel in one click (see Deployment section).

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** (App Router) | React framework with SSR/SSG |
| **React 19** | UI component library |
| **TypeScript** | Type safety throughout |
| **Tailwind CSS v4** | Utility-first styling |
| **Lucide React** | Icon library |
| **Next.js API Routes** | Mock backend for leads & testimonials |

---

## 📁 Folder Structure

```
accredian-enterprise/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── leads/route.ts          # POST: capture lead, GET: list leads
│   │   │   └── testimonials/route.ts   # GET: fetch testimonials
│   │   ├── globals.css                 # Global styles & design tokens
│   │   ├── layout.tsx                  # Root layout with SEO metadata
│   │   └── page.tsx                    # Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.tsx                  # Sticky header with mobile drawer
│   │   └── Footer.tsx                  # Rich footer with links & social
│   └── sections/
│       ├── HeroSection.tsx             # Hero with animated dashboard mockup
│       ├── TrustSection.tsx            # Infinite scroll company logos
│       ├── FeaturesSection.tsx         # 8-feature grid
│       ├── HowItWorksSection.tsx       # 4-step process section
│       ├── ProgramsSection.tsx         # Filterable program cards
│       ├── TestimonialsSection.tsx     # Interactive carousel + mini-cards
│       ├── CTASection.tsx              # Full-width gradient CTA
│       ├── FAQSection.tsx              # Accordion FAQ (8 questions)
│       └── LeadCaptureForm.tsx         # Lead form with validation
├── public/
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## ⚡ Setup Instructions

### Prerequisites
- Node.js 18.17+ 
- npm / yarn / pnpm

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd accredian-enterprise
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

### 4. Lint & Type Check
```bash
npm run lint
npx tsc --noEmit
```

---

## 📄 Pages & Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky, scrolled glass effect, mobile hamburger menu |
| **Hero** | Dark gradient, animated dashboard mockup, stat counters |
| **Trust** | Infinite marquee of company logos, institution badges |
| **Features** | 8-card grid with hover effects and icon colors |
| **How It Works** | 4-step process with connector line |
| **Programs** | Filterable cards by category (Tech, Business, etc.) |
| **Testimonials** | Carousel with side panel mini-cards |
| **CTA** | Full-width gradient with benefit checklist |
| **FAQ** | Accordion with 8 enterprise questions |
| **Lead Form** | Full validated form with API submission |
| **Footer** | 4-column links, social icons, partner badges |

---

## 🔌 API Routes

### `POST /api/leads`
Captures enterprise lead form submissions.

**Request Body:**
```json
{
  "name": "Priya Sharma",
  "email": "priya@company.com",
  "phone": "9876543210",
  "company": "Infosys",
  "teamSize": "201-1000",
  "message": "Looking to upskill 300 engineers in AI/ML"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Lead captured successfully.",
  "data": { "id": 1714200000000 }
}
```

### `GET /api/testimonials`
Returns all testimonials data.

**Response (200):**
```json
{
  "success": true,
  "count": 4,
  "testimonials": [...]
}
```

> **Production Note:** Replace the in-memory `leads[]` array with a database (PostgreSQL via Prisma, MongoDB via Mongoose, or a CMS like Sanity).

---

## ✅ Functional Requirements

- [x] Fully responsive (mobile-first with Tailwind)
- [x] Smooth scrolling navigation
- [x] Reusable components with clear separation of concerns
- [x] SEO-friendly (title tags, meta descriptions, semantic HTML)
- [x] Unique IDs on all interactive elements
- [x] Lead capture form with client & server-side validation
- [x] API route integration (`/api/leads`, `/api/testimonials`)
- [x] Zero build errors
- [x] Vercel deployment ready

---

## 🤖 AI Usage Explanation

### Parts AI Generated
- **Initial component scaffolding**: The base structure of all 9 sections was AI-generated, providing a starting architecture with TypeScript types and Tailwind classes.
- **Mock data**: Company names, testimonials, FAQ questions/answers, and program details were AI-generated and then reviewed for realism.
- **API route boilerplate**: The basic request/response structure for `/api/leads` and `/api/testimonials`.

### What Was Manually Improved
- **Design decisions**: Color palette selection (slate-900 + blue-600 + cyan-500 gradient), typography scale, and spacing system were refined manually.
- **Animation system**: The floating hero mockup, infinite marquee, and accordion transitions were hand-tuned for performance and feel.
- **Icon compatibility fix**: Resolved `Linkedin`, `Twitter`, `Youtube` not existing in the installed lucide-react version — replaced with inline SVG paths.
- **Form validation logic**: Phone number regex (`^[6-9]\d{9}$`), email validation, and error display UX were manually written and tested.
- **Responsive breakpoints**: All `sm:`, `md:`, `lg:` Tailwind variants were manually verified against actual screen sizes.
- **Next.js config**: Added `optimizePackageImports` for lucide-react and image remote patterns.

### Optimizations Added
- `"use client"` directives only on interactive components (minimizes client bundle)
- `Inter` font via `next/font/google` for zero layout shift
- CSS custom properties for design tokens (easy theming)
- Passive scroll event listeners in Navbar
- `flex-shrink-0` and `w-max` on infinite marquee to prevent reflow

---

## 🚀 Deployment (Vercel)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option 2: CLI Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables
No environment variables are required for the basic setup. For production, add:

```env
# Optional: Database connection (replace in-memory store)
DATABASE_URL=postgresql://...

# Optional: Email notifications for new leads
RESEND_API_KEY=re_...
```

---

## 🔮 Future Improvements

1. **Database Integration**: Replace in-memory lead store with PostgreSQL (via Prisma) or MongoDB
2. **Email Notifications**: Send automated emails to leads using Resend or SendGrid
3. **Authentication**: Add admin dashboard with NextAuth.js to view/manage leads
4. **CMS Integration**: Connect Sanity or Contentful for dynamic content management
5. **Analytics**: Add Vercel Analytics or Plausible for privacy-friendly tracking
6. **A/B Testing**: Test different hero headlines and CTA copy with Vercel Edge Config
7. **i18n**: Add Hindi language support with `next-intl`
8. **Framer Motion**: Add page-level scroll animations with intersection observers
9. **WhatsApp Integration**: Auto-send WhatsApp message to sales team on lead capture
10. **Pricing Page**: Build a dedicated `/pricing` page with comparison table

---

## 📊 Performance

| Metric | Value |
|---|---|
| Build Time | ~2.5s |
| TypeScript | ✅ No errors |
| ESLint | ✅ No warnings |
| API Routes | 2 (leads, testimonials) |
| Bundle Strategy | Static page + dynamic API |

---

## 👨‍💻 Author

Built as an enterprise-grade portfolio project demonstrating:
- Next.js App Router architecture
- Tailwind CSS design systems
- TypeScript with React
- API-first backend design
- Mobile-first responsive development

---

*Made with ❤️ using Next.js & Tailwind CSS*
