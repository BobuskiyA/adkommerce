
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "We were skeptical about the 10 appointments in 5 days claim, but AdKomemerce delivered 12 qualified leads in the first week. Their approach is refreshingly straightforward and effective.",
    author: "Mykhailo Melnyk",
    role: "CEO, TechSolution Inc.",
    rating: 5
  },
  {
    content: "Working with AdKomemerce transformed our lead generation process. Their data-driven approach eliminated guesswork and delivered consistent results from day one.",
    author: "Jennifer Cooper",
    role: "Marketing Director, GrowFast Services",
    rating: 5
  },
  {
    content: "The $0 upfront model made it an easy decision to try AdKomemerce. What kept us as clients was the consistent ROI and their transparent reporting on every dollar spent.",
    author: "Sarah Malkovicz",
    role: "Owner, Wilson Consulting Group",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We let our results and client experiences speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
