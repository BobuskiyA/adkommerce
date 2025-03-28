
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-28 pb-20 sm:pt-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight mb-6 font-montserrat">
            <span className="block mb-2">{t('hero.growBusiness')}</span>
            <span className="text-brand-accent">{t('hero.dataDriven')}</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 font-inter">
            {t('hero.subtitle')}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-6 font-medium rounded-md bg-brand-accent hover:bg-brand-accent/90 font-inter"
            >
              {t('hero.getStarted')}
            </Button>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center text-lg font-medium text-brand-accent hover:text-brand-accent/80 gap-2 font-inter transition-colors"
            >
              {t('hero.talkExpert')}
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-10 w-1 bg-brand-accent"></div>
              <p className="font-medium font-inter">{t('hero.feature1')}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-1 bg-brand-accent"></div>
              <p className="font-medium font-inter">{t('hero.feature2')}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-1 bg-brand-accent"></div>
              <p className="font-medium font-inter">{t('hero.feature3')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
