import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CtaSection from "@/components/CtaSection";
import WhyParkaneSection from "@/components/WhyParkaneSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <CtaSection />
      <WhyParkaneSection />
      <FooterSection />
    </div>
  );
};

export default Index;
