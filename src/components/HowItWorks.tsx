
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageSquare, Download, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Search",
    description: "Find the perfect AI voice agent for your project using our advanced search and filtering options."
  },
  {
    icon: MessageSquare,
    title: "Connect & Discuss",
    description: "Message agents directly to discuss your requirements and get custom samples before ordering."
  },
  {
    icon: Download,
    title: "Receive & Deploy",
    description: "Get your custom AI voice agent delivered within hours and deploy it to your applications."
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Share your experience and help other buyers find the best voice agents in our community."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get started with AI voice agents in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 text-center group hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-800">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
