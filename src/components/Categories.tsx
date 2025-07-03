
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, MessageSquare, Mic, Phone, Radio, Volume2 } from "lucide-react";

const categories = [
  {
    icon: MessageSquare,
    title: "Customer Service",
    description: "Professional customer support voices",
    count: "2,500+ agents"
  },
  {
    icon: Phone,
    title: "Virtual Assistants",
    description: "Personal and business AI assistants",
    count: "1,800+ agents"
  },
  {
    icon: Radio,
    title: "Narration & Audiobooks",
    description: "Storytelling and educational content",
    count: "3,200+ agents"
  },
  {
    icon: Volume2,
    title: "Commercials & Ads",
    description: "Marketing and promotional voices",
    count: "900+ agents"
  },
  {
    icon: Headphones,
    title: "Podcasts & Media",
    description: "Broadcasting and entertainment",
    count: "1,100+ agents"
  },
  {
    icon: Mic,
    title: "Voice Overs",
    description: "General voice over services",
    count: "2,800+ agents"
  }
];

export const Categories = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find specialized AI voice agents for your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{category.description}</p>
                    <span className="text-blue-400 text-sm font-medium">{category.count}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
