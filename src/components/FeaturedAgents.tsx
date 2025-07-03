
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Globe, Play, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface VoiceAgent {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  price: number;
  delivery_time: number;
  languages: string[];
  rating: number;
  review_count: number;
  is_online: boolean;
}

export const FeaturedAgents = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState<VoiceAgent[]>([]);

  useEffect(() => {
    fetchFeaturedAgents();
  }, []);

  const fetchFeaturedAgents = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('voice_agents')
        .select('*')
        .eq('is_active', true)
        .order('rating', { ascending: false })
        .limit(3);

      if (error) throw error;
      setAgents(data || []);
    } catch (error) {
      console.error('Error fetching featured agents:', error);
    }
  };

  const formatCategory = (category: string) => {
    return category.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our AI Voice Agents</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Professional AI voice agents designed for your business needs. From customer service to appointment booking - we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {agents.map((agent) => (
            <Card key={agent.id} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{agent.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        {agent.is_online && (
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        )}
                        <span className="text-slate-400 text-sm">
                          {agent.is_online ? 'Available' : 'Offline'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    {formatCategory(agent.category)}
                  </Badge>
                </div>
                <CardDescription className="text-slate-300">
                  {agent.title}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm line-clamp-2">{agent.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {agent.languages.slice(0, 2).map((lang, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                      <Globe className="w-3 h-3 mr-1" />
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{agent.rating}</span>
                      <span className="text-slate-400 text-sm">({agent.review_count})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Ready</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${agent.price}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try Me
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => navigate(`/agent/${agent.id}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-600 text-white hover:bg-slate-800"
            onClick={() => navigate('/agents')}
          >
            View All Voice Agents
          </Button>
        </div>
      </div>
    </section>
  );
};
