
import { Calendar, CreditCard, LineChart, PenTool, Search, Users } from "lucide-react";

const services = [
  {
    title: "Paid Advertising",
    description: "Targeted paid campaigns on Google, Facebook, and Instagram that deliver qualified leads at optimal cost.",
    icon: CreditCard
  },
  {
    title: "Search Engine Optimization",
    description: "Sustainable organic traffic growth with strategic SEO optimization focused on your target market.",
    icon: Search
  },
  {
    title: "Social Media Marketing",
    description: "Engage audiences and build relationships with consistent, strategic social media presence.",
    icon: Users
  },
  {
    title: "Content Marketing",
    description: "Valuable, industry-specific content that positions your brand as a thought leader and drives conversions.",
    icon: PenTool
  },
  {
    title: "Analytics & Reporting",
    description: "Data-focused performance tracking with clear, actionable insights and transparent reporting.",
    icon: LineChart
  },
  {
    title: "Appointment Scheduling",
    description: "Automated scheduling systems that convert interested prospects into booked appointments.",
    icon: Calendar
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Data-Driven Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Customized marketing strategies for US businesses that deliver measurable results and grow your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg text-blue-600 mb-5">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
