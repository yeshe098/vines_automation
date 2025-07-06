
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Zap, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We create a perfect 
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> AI calling agent </span>
            specifically for your business needs.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto px-4">
            We'll build your AI agent exactly how you want it – personalized to your company, your use case, and your workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/features')}
            >
              <Settings className="w-5 h-5 mr-2" />
              What Our AI Agents Can Do
            </Button>
            <Button 
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/pricing')}
            >
              <Star className="w-5 h-5 mr-2" />
              View Pricing
            </Button>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Use AI Calling Agents?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Handles both inbound and outbound calls</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">No customer waiting times</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Schedules appointments directly into your calendar</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Provides 24/7 support for customers</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Sends reminders and follow-up calls</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Replaces large parts of your call center</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Cuts costs by up to 50%</span>
              </div>
              <div className="flex items-start space-x-3 text-left p-4 bg-slate-800/30 rounded-lg">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300 text-sm md:text-base">Supports multiple languages (English & Dutch)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
