
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 font-montserrat">
            {t('team.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            {t('team.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team member placeholders - will be replaced with actual team data */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              {/* Placeholder for team member photo */}
              <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                {t('team.photoPlaceholder')}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">{t('team.member1.name')}</h3>
              <p className="text-brand-accent mb-3 font-inter">{t('team.member1.position')}</p>
              <p className="text-gray-600 font-inter">{t('team.member1.bio')}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              {/* Placeholder for team member photo */}
              <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                {t('team.photoPlaceholder')}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">{t('team.member2.name')}</h3>
              <p className="text-brand-accent mb-3 font-inter">{t('team.member2.position')}</p>
              <p className="text-gray-600 font-inter">{t('team.member2.bio')}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              {/* Placeholder for team member photo */}
              <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                {t('team.photoPlaceholder')}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">{t('team.member3.name')}</h3>
              <p className="text-brand-accent mb-3 font-inter">{t('team.member3.position')}</p>
              <p className="text-gray-600 font-inter">{t('team.member3.bio')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
