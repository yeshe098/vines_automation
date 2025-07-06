
import { Mic, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 sm:py-12 px-3 sm:px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Vines Calling Agents</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm sm:text-base max-w-md">
              Professional AI-powered voice agents for your business. Handle customer service, cold calls, appointment scheduling, and more with our advanced calling agents.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-400 cursor-default" />
              <Github className="w-5 h-5 text-slate-400 cursor-default" />
              <Linkedin className="w-5 h-5 text-slate-400 cursor-default" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li><span className="cursor-default">Customer Service</span></li>
              <li><span className="cursor-default">Appointment Scheduling</span></li>
              <li><span className="cursor-default">Cold Calling</span></li>
              <li><span className="cursor-default">Reminders & Follow-ups</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li><span className="cursor-default">Contact Us</span></li>
              <li><span className="cursor-default">Documentation</span></li>
              <li><span className="cursor-default">Help Center</span></li>
              <li><span className="cursor-default">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 sm:pt-8 text-center text-slate-400 text-sm sm:text-base">
          <p>&copy; 2024 Vines Calling Agents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
