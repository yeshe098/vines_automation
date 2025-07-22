
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Zap, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import VapiWidget from "@/components/VoiceAgent";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-3 sm:px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
            {t('hero.title.1')}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> {t('hero.title.2')} </span>
            {t('hero.title.3')}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-2 sm:px-4">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-2">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/features')}
            >
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>{t('hero.featuresButton')}</span>
            </Button>

            <VapiWidget
              apiKey="85201fac-9071-45b5-8d62-1f63c772ddf4"
              assistantId="a3e700ee-cd83-4e90-9ec0-81a198a629fe"
            />

            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/pricing')}
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('hero.pricingButton')}
            </Button>

          </div>

          <div className="mt-4 sm:mt-6 md:mt-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 px-2">{t('hero.whyTitle')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature1')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature2')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature3')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature4')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature5')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature6')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature7')}</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</div>
                <span className="text-slate-300 text-sm sm:text-base">{t('hero.feature8')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
