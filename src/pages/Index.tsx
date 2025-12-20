import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ToolsGrid from "@/components/home/ToolsGrid";
import FeaturesSection from "@/components/home/FeaturesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ToolsGrid />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
