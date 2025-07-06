import { Button } from "@/components/ui/button";
import { Mic, Search, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/lovable-uploads/735ff7a4-de4c-4992-878f-ad89169a9780.png"
            alt="Vines Automations Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-white hidden sm:block">
            Vines Automations
          </span>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-sm px-3 py-2 md:px-4 md:py-2"
            onClick={() => navigate("/quote")}
          >
            <span className="hidden sm:inline">📩 Ask for a Quote</span>
            <span className="sm:hidden">Quote</span>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-slate-700 text-white hover:bg-slate-600 border-slate-600">
                  <User className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                <DropdownMenuItem
                  className="text-white hover:bg-slate-700"
                  onClick={() => navigate("/dashboard")}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-white hover:bg-slate-700"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              className="bg-slate-700 text-white hover:bg-slate-600 border-slate-600"
              onClick={() => navigate("/auth")}
            >
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
          )}

          <select className="bg-slate-800 border border-slate-600 text-white rounded px-3 py-1 text-sm">
            <option value="en">🇬🇧 EN</option>
            <option value="nl">🇳🇱 NL</option>
          </select>
        </div>
      </div>
    </header>
  );
};
