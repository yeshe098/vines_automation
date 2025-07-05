import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

const Personalized = () => {
  const [prompt, setPrompt] = useState('');
  const [agentGenerated, setAgentGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate agent generation
    setTimeout(() => {
      setAgentGenerated(true);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Try Your Own Personalized Voice Agent
            </h1>
            <p className="text-slate-200 text-lg">
              Describe your business and what you want the agent to do. We'll generate a tailored AI voice agent for you to test instantly.
            </p>
          </div>

          <Card className="bg-slate-800/90 border-slate-600 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Describe Your Business Needs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-slate-200">
                  What do you want your AI agent to do?
                </Label>
                <Textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: I run a dental practice and need an AI agent to handle appointment bookings, answer basic questions about services, and remind patients about upcoming appointments..."
                  className="bg-slate-700 border-slate-600 text-white min-h-32"
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3"
              >
                {isGenerating ? 'Generating Your Agent...' : '🤖 Generate My Personalized Agent'}
              </Button>
            </CardContent>
          </Card>

          {agentGenerated && (
            <Card className="bg-slate-800/90 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  Your Personalized Agent is Ready!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Agent Summary:</h3>
                  <p className="text-slate-200 text-sm">
                    Based on your description, we've created a specialized AI agent that can handle your specific business needs. 
                    This agent is trained to understand your industry context and provide appropriate responses.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Test Your Agent Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-slate-500 text-slate-200 hover:bg-slate-700"
                    onClick={() => window.location.href = '/quote'}
                  >
                    Get Full Implementation Quote
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-slate-300 text-sm">
                    Like what you see? Contact us to implement this agent for your business with full customization and integration.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Personalized;