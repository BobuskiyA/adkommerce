
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "uk", name: "Українська", flag: "🇺🇦" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 px-2 gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block ml-1">{languages.find(l => l.code === i18n.language)?.flag}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 ${
                i18n.language === language.code ? "bg-gray-50" : ""
              }`}
            >
              <span className="mr-2">{language.flag}</span>
              <span>{language.name}</span>
              {i18n.language === language.code && <Check className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;
