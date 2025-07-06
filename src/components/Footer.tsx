
import { Twitter, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 sm:py-12 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.jpeg" 
                alt="Vines Calling Agents Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg sm:text-xl font-bold text-white">Vines Calling Agents</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm sm:text-base max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-400 cursor-default" />
              <Github className="w-5 h-5 text-slate-400 cursor-default" />
              <Linkedin className="w-5 h-5 text-slate-400 cursor-default" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.services')}</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li><span className="cursor-default">{t('footer.customerService')}</span></li>
              <li><span className="cursor-default">{t('footer.appointmentScheduling')}</span></li>
              <li><span className="cursor-default">{t('footer.coldCalling')}</span></li>
              <li><span className="cursor-default">{t('footer.reminders')}</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t('footer.support')}</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li><span className="cursor-default">{t('footer.contactUs')}</span></li>
              <li><span className="cursor-default">{t('footer.documentation')}</span></li>
              <li><span className="cursor-default">{t('footer.helpCenter')}</span></li>
              <li><span className="cursor-default">{t('footer.privacyPolicy')}</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-slate-400 text-sm sm:text-base">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
