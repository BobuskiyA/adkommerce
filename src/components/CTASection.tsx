
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-brand-accent text-white hover:bg-brand-accent/90 font-inter"
          >
            <a href="#contact" className="flex items-center">
              {t('cta.getStarted')}
              <ArrowRight size={20} className="ml-2" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-white border-white hover:bg-white/10 font-inter font-medium"
          >
            <a href="#contact" className="text-white">{t('cta.scheduleCall')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
