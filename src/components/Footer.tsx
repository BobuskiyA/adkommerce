
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">AdKommerce</div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  {t('navbar.services')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-white transition-colors">
                  {t('navbar.whyUs')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('navbar.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@adkommerce.com</li>
              <li>{t('contact.phone')}: +1 (555) 123-4567</li>
              <li>New York & Warsaw</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>{t('footer.rights').replace('2023', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
