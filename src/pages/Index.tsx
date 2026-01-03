import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import MentorSection from "@/components/MentorSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <MentorSection />
        <OpportunitiesSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;