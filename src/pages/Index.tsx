import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { ROICalculatorSection } from "@/components/ROICalculatorSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { SecuritySection } from "@/components/SecuritySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <ROICalculatorSection />
        <UseCasesSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
