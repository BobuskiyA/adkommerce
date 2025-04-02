import { useState } from "react";
import { Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_dcx69y3", // Замініть на свій EmailJS service ID
          template_id: "template_rq19q0z", // Замініть на свій EmailJS template ID
          user_id: "sir88GhhoYRxjgHX1", // Замініть на свій EmailJS public key
          template_params: {
            to_email: "kiril.homoki@gmail.com", 
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Request Submitted",
          description: "Your message has been sent successfully. We'll contact you within 24 hours.",
        });

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
          });
        }, 3000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form and one of our marketing experts will contact you within 24 hours to discuss how we can help you get 10+ new appointments in just 5 days.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Submit Your Information</h3>
                  <p className="mt-1 text-gray-600">Quick form, takes less than 2 minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Free Strategy Consultation</h3>
                  <p className="mt-1 text-gray-600">We'll analyze your business and create a custom plan.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Start Seeing Results</h3>
                  <p className="mt-1 text-gray-600">Get your first appointments within 5 days.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Inc."
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your business
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are your business goals? What challenges are you facing?"
                    className="w-full"
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    variant="destructive"
                    disabled={loading || submitted}
                  >
                    {loading ? (
                      "Submitting..."
                    ) : submitted ? (
                      <span className="flex items-center justify-center">
                        <Check size={20} className="mr-2" />
                        Submitted
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send size={20} className="mr-2" />
                        Submit Request
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
