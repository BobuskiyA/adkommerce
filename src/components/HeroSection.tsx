
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-white pt-24 pb-16 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white pointer-events-none" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            <span className="block">Grow Your Business with</span>
            <span className="text-blue-600">Data-Driven Marketing</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
            Get your first 10 qualified appointments in just 5 days, starting at $0 with our risk-free marketing solutions.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="destructive" size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
            <a href="#contact" className="inline-flex items-center justify-center text-lg font-medium text-blue-600 hover:text-blue-500 gap-2">
              Talk to an Expert
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 bg-blue-600"></div>
              <p className="font-medium">Results in 5 Days</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 bg-blue-600"></div>
              <p className="font-medium">US-Based Businesses</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 bg-blue-600"></div>
              <p className="font-medium">Risk-Free Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
