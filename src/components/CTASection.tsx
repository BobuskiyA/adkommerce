
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get 10+ New Appointments in 5 Days?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join our clients who are growing their businesses with our risk-free, results-focused marketing solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="default" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a href="#contact" className="flex items-center">
              Get Started Today
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-700">
            <a href="#contact">Schedule a Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
