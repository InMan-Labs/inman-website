import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { SecuritySection } from "@/components/SecuritySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <UseCasesSection />
        <SecuritySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
