import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CtaSection from "@/components/CtaSection";
import WhyIParkUSection from "@/components/WhyIParkUSection";
import MediaSection from "@/components/MediaSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <CtaSection />
      <WhyIParkUSection />
      <MediaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
