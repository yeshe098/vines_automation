
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Clock, Globe } from "lucide-react";

const featuredAgents = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Professional Customer Service Voice",
    avatar: "SC",
    rating: 4.9,
    reviews: 127,
    languages: ["English", "Mandarin"],
    price: "$25",
    delivery: "24 hours",
    specialties: ["Customer Support", "Technical Help"],
    description: "Warm, professional voice perfect for customer service applications. Trained on thousands of support conversations.",
    isOnline: true
  },
  {
    id: 2,
    name: "Marcus Johnson",
    title: "Executive Virtual Assistant",
    avatar: "MJ",
    rating: 4.8,
    reviews: 89,
    languages: ["English", "Spanish"],
    price: "$35",
    delivery: "12 hours",
    specialties: ["Business", "Scheduling"],
    description: "Sophisticated business voice for executive-level virtual assistant applications. Clear, authoritative tone.",
    isOnline: true
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Audiobook Narrator Specialist",
    avatar: "ER",
    rating: 5.0,
    reviews: 203,
    languages: ["English", "French"],
    price: "$45",
    delivery: "48 hours",
    specialties: ["Narration", "Storytelling"],
    description: "Captivating storyteller voice with extensive experience in audiobook narration and educational content.",
    isOnline: false
  }
];

export const FeaturedAgents = () => {
  return (
    <section className="py-16 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Voice Agents</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Top-rated AI voice agents ready to bring your projects to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAgents.map((agent) => (
            <Card key={agent.id} className="bg-slate-800/70 border-slate-700 hover:bg-slate-800/90 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {agent.avatar}
                    </div>
                    {agent.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
                    <p className="text-slate-400 text-sm">{agent.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{agent.rating}</span>
                  </div>
                  <span className="text-slate-400 text-sm">({agent.reviews} reviews)</span>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{agent.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{agent.delivery}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{agent.languages.join(", ")}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">
                    {agent.price}
                    <span className="text-sm text-slate-400 font-normal">/project</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  );
};
