import { Button } from "@/components/ui/button";
import { Mic, Search, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { user, signOut } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleLanguageChange = (newLanguage: 'en' | 'nl') => {
    setLanguage(newLanguage);
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer min-w-0 flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img
            src="/lovable-uploads/735ff7a4-de4c-4992-878f-ad89169a9780.png"
            alt="Vines Automations Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
          />
          <span className="text-lg sm:text-xl font-bold text-white hidden xs:block truncate">
            Vines Automations
          </span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-shrink-0">
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 whitespace-nowrap"
            onClick={() => navigate("/quote")}
          >
            <span className="hidden sm:inline">📩 {t('header.askQuote')}</span>
            <span className="sm:hidden">📩</span>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-slate-700 text-white hover:bg-slate-600 border-slate-600 text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden md:inline ml-1">{t('header.account')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 w-40">
                <DropdownMenuItem
                  className="text-white hover:bg-slate-700 text-sm"
                  onClick={() => navigate("/dashboard")}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {t('header.dashboard')}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-white hover:bg-slate-700 text-sm"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  {t('header.signOut')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className="bg-slate-700 text-white hover:bg-slate-600 border-slate-600 text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2"
              onClick={() => navigate("/auth")}
            >
              <User className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden md:inline ml-1">{t('header.signIn')}</span>
            </Button>
          )}

          <select 
            className="bg-slate-800 border border-slate-600 text-white rounded px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm min-w-0 flex-shrink-0"
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'nl')}
          >
            <option value="en">🇬🇧 EN</option>
            <option value="nl">🇳🇱 NL</option>
          </select>
        </div>
      </div>
    </header>
  );
};
