
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#0070F3"/>
                <path d="M14 18.5V29.5H16.5V18.5H14Z" fill="white"/>
                <path d="M21 18.5V29.5H23.5V25.5H27C29.4853 25.5 31.5 23.4853 31.5 21C31.5 18.5147 29.4853 16.5 27 16.5H21V18.5ZM23.5 18.5H27C28.3807 18.5 29.5 19.6193 29.5 21C29.5 22.3807 28.3807 23.5 27 23.5H23.5V18.5Z" fill="white"/>
                <path d="M34 16.5V29.5H36.5V16.5H34Z" fill="white"/>
              </svg>
              <span className="text-2xl font-bold text-brand-primary font-montserrat">AdKommerce</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              {t('navbar.home')}
            </Link>
            <a href="#services" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              {t('navbar.services')}
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              {t('navbar.whyUs')}
            </a>
            <a href="#team" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              {t('navbar.team')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-brand-accent px-3 py-2 text-sm font-medium font-inter transition-colors">
              {t('navbar.contact')}
            </a>
            <LanguageSwitcher />
            <Button variant="default" className="ml-4 font-medium font-inter bg-brand-accent hover:bg-brand-accent/90">
              {t('navbar.getStarted')}
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
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
              {t('navbar.home')}
            </Link>
            <a
              href="#services"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.services')}
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.whyUs')}
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.team')}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-brand-accent block px-3 py-2 text-base font-medium font-inter"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.contact')}
            </a>
            <div className="mt-4 px-3">
              <Button variant="default" className="w-full font-medium font-inter bg-brand-accent hover:bg-brand-accent/90">
                {t('navbar.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
