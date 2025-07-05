
import { Mic, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Vines Calling Agents</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Professional AI-powered voice agents for your business. Handle customer service, cold calls, appointment scheduling, and more with our advanced calling agents.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appointment Scheduling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cold Calling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reminders & Follow-ups</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Vines Calling Agents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
