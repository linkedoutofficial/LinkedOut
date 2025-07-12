import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import CommunityPartners from "@/components/CommunityPartners";
import Testimonials from "@/components/Testimonials";
import JoinUs from "@/components/JoinUs";
import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import LiquidBackground from "@/components/LiquidBackground";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-poppins relative">
      <LiquidBackground />
      <Navigation />
      <Hero />
      <About />
      <Events />
      <CommunityPartners />
      <Testimonials />
      <FAQ />
      <JoinUs />
      <Footer />
      
    </div>
  );
};

export default Index;
