
import { Hero } from "@/components/Hero";
import { FeaturedAgents } from "@/components/FeaturedAgents";
import { Categories } from "@/components/Categories";
import { HowItWorks } from "@/components/HowItWorks";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Categories />
      <FeaturedAgents />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
