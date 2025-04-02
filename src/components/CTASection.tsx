import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-brand-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
          Ready to Get 10+ New Appointments in 5 Days?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
          Join our clients who are growing their businesses with our risk-free, results-focused marketing solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-brand-accent hover:bg-brand-accent/90 font-inter font-medium text-white"
          >
            <a href="#contact" className="flex items-center text-white font-medium">
              Get Started Today
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-black hover:bg-white/90"
          >
            <a href="#contact" className="font-medium">Schedule a Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
