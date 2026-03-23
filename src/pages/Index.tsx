import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CtaSection from "@/components/CtaSection";
import WhyIparkingSection from "@/components/WhyIparkingSection";
import MediaSection from "@/components/MediaSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <CtaSection />
      <WhyIparkingSection />
      <MediaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
