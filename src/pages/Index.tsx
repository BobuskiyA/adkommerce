
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TestimonialSection />
        <WhyUsSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
