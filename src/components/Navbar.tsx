
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/lovable-uploads/e69cde7f-2383-4b10-84ac-de8597479760.png" alt="AdKommerce Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-bold text-brand-primary font-montserrat">AdKommerce</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              Why Us
            </a>
            <a href="#team" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              Our Team
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              Contact
            </a>
            <Button variant="default" className="ml-4 font-medium font-inter bg-brand-accent hover:bg-brand-accent/90">
              Get Started
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-accent focus:outline-none ml-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="mt-4 px-3">
              <Button variant="default" className="w-full font-medium font-inter bg-brand-accent hover:bg-brand-accent/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
