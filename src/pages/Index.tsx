import { HeroSection } from "@/components/HeroSection";
import { SeniorHelpForm } from "@/components/SeniorHelpForm";
import { VolunteerForm } from "@/components/VolunteerForm";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <SeniorHelpForm />
      <VolunteerForm />
      <Footer />
    </div>
  );
};

export default Index;
