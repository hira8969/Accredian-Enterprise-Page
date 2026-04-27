import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import TrustSection from "@/sections/TrustSection";
import FeaturesSection from "@/sections/FeaturesSection";
import HowItWorksSection from "@/sections/HowItWorksSection";
import ProgramsSection from "@/sections/ProgramsSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import FAQSection from "@/sections/FAQSection";
import LeadCaptureForm from "@/sections/LeadCaptureForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ProgramsSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <LeadCaptureForm />
      </main>
      <Footer />
    </>
  );
}
