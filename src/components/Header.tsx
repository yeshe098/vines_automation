
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
    navigate('/');
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Vines Calling Agents</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => navigate('/features')}
            className="text-slate-300 hover:text-white transition-colors"
          >
            What Our AI Agents Can Do
          </button>
          <button 
            onClick={() => navigate('/pricing')}
            className="text-slate-300 hover:text-white transition-colors"
          >
            Pricing
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
            onClick={() => navigate('/quote')}
          >
            📩 Ask for a Quote
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  <User className="w-4 h-4 mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
                <DropdownMenuItem 
                  className="text-white hover:bg-slate-700"
                  onClick={() => navigate('/dashboard')}
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
              variant="outline" 
              className="border-slate-600 text-white hover:bg-slate-800"
              onClick={() => navigate('/auth')}
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
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
