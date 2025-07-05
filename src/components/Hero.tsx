
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> AI Calling Agent</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Your AI-powered voice agent for customer service, cold calls, inbound and outbound communication, appointment scheduling, reminders, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg"
            >
              🎙️ Talk to the Voice Agent Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg"
              onClick={() => navigate('/personalized')}
            >
              🤖 Try Your Own Personalized Voice Agent
            </Button>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Why Use AI Calling Agents?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Handles both inbound and outbound calls</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">No customer waiting times</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Schedules appointments directly into your calendar</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Provides 24/7 support for customers</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Sends reminders and follow-up calls</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Replaces large parts of your call center</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Cuts costs by up to 50%</span>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="text-green-400 text-xl">✅</div>
                <span className="text-slate-300">Supports multiple languages (English & Dutch)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
