
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";

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
          <Card className="bg-white shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="text-xl bg-brand-accent text-white">KH</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">{t('team.member1.name')}</h3>
              <p className="text-brand-accent mb-2 font-inter">{t('team.member1.position')}</p>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">New York</span>
              </div>
              <p className="text-gray-600 font-inter">{t('team.member1.bio')}</p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="text-xl bg-brand-accent text-white">OB</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">{t('team.member2.name')}</h3>
              <p className="text-brand-accent mb-2 font-inter">{t('team.member2.position')}</p>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">Warsaw</span>
              </div>
              <p className="text-gray-600 font-inter">{t('team.member2.bio')}</p>
            </CardHeader>
          </Card>
          
          <Card className="bg-white shadow-md overflow-hidden">
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <div className="flex items-center justify-center h-64 bg-gray-200 text-gray-400">
                <Avatar className="h-32 w-32">
                  <AvatarFallback className="text-xl bg-brand-accent text-white">AK</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardHeader className="p-6">
              <h3 className="text-xl font-bold text-brand-primary mb-1 font-montserrat">{t('team.member3.name')}</h3>
              <p className="text-brand-accent mb-2 font-inter">{t('team.member3.position')}</p>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">New York</span>
              </div>
              <p className="text-gray-600 font-inter">{t('team.member3.bio')}</p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
