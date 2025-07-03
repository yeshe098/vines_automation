
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find the Perfect
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> AI Voice Agent</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Connect with professional AI voice agents for customer service, virtual assistants, audiobooks, and more. Quality voices, competitive prices, instant delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Browse Voice Agents
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg">
              Start Selling Today
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Users className="w-5 h-5 text-blue-400" />
              <span>10,000+ Agents</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-300">
              <Zap className="w-5 h-5 text-green-400" />
              <span>24/7 Instant Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
