
import { BadgeCheck } from "lucide-react";

const benefits = [
  {
    title: "No Upfront Costs",
    description: "Start with our risk-free model - you only pay when we deliver results."
  },
  {
    title: "Fast Implementation",
    description: "Our streamlined process gets your campaigns live in days, not weeks or months."
  },
  {
    title: "10 Appointments Guarantee",
    description: "We guarantee at least 10 qualified appointments within your first 5 days."
  },
  {
    title: "US Market Specialists",
    description: "Our team specializes in the unique aspects of the American business landscape."
  },
  {
    title: "Transparent Reporting",
    description: "Clear, jargon-free reporting shows exactly what you're getting for your investment."
  },
  {
    title: "Dedicated Account Manager",
    description: "Work directly with an experienced marketing professional who knows your business."
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose AdKomemerce
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver tangible results, not vague promises. Our performance-based approach ensures your marketing investment generates real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <BadgeCheck size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
