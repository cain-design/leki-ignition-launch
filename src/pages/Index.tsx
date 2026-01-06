import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsStrip } from "@/components/BenefitsStrip";
import { ProductShowcase } from "@/components/ProductShowcase";
import { VideoShowcase } from "@/components/VideoShowcase";
import { WhyElectric } from "@/components/WhyElectric";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsStrip />
        <ProductShowcase />
        <VideoShowcase />
        <WhyElectric />
        <SavingsCalculator />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
