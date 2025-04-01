
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 font-montserrat">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            The passionate professionals behind AdKommerce's success stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <img 
                src="/lovable-uploads/1380d9bd-5fbd-40e7-8fe0-3e6c50026714.png" 
                alt="Kyryl Homoki" 
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">Kyryl Homoki</h3>
              <p className="text-brand-accent mb-2 font-inter">Marketing Director</p>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">New York</span>
              </div>
              <p className="text-gray-600 font-inter">
                Leading our marketing department from New York, Kyryl brings innovative strategies and deep industry knowledge to help our clients succeed.
              </p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <img 
                src="/lovable-uploads/dda9b17a-5623-4ce0-828e-f9dd17cff672.png" 
                alt="Oleksandr Bobuskyi" 
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">Oleksandr Bobuskyi</h3>
              <p className="text-brand-accent mb-2 font-inter">Web Development Director</p>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">Warsaw</span>
              </div>
              <p className="text-gray-600 font-inter">
                Based in Warsaw, Oleksandr leads our web development team, creating high-converting websites and digital experiences.
              </p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <img 
                src="/lovable-uploads/7d94528c-6ed3-46ac-8044-8749d9ada8bb.png" 
                alt="Alan Khamroev" 
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">Alan Khamroev</h3>
              <p className="text-brand-accent mb-2 font-inter">Chief Manager</p>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">New York</span>
              </div>
              <p className="text-gray-600 font-inter">
                Operating from New York, Alan oversees project management and ensures flawless execution of every client strategy.
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
