import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, Clock, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pricing
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparent pricing for your AI calling agent solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* One-Time Setup Fee */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">One-Time Setup Fee</h3>
              </div>
              
              <p className="text-slate-300 mb-6">
                This is a custom development fee to build your AI calling agent from scratch.
              </p>

              <div className="space-y-3 text-slate-300">
                <h4 className="text-white font-semibold mb-3">Includes:</h4>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full customization for your business</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Workflow design & scripting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All integrations (CRM, calendar, WhatsApp, etc.)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Voice setup, testing, and agent optimization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Final deployment & launch</span>
                </div>
              </div>
            </div>

            {/* Monthly Maintenance Fee */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Monthly Maintenance Fee</h3>
              </div>
              
              <p className="text-slate-300 mb-6">
                Ongoing monthly support to keep your agent running smoothly.
              </p>

              <div className="space-y-3 text-slate-300">
                <h4 className="text-white font-semibold mb-3">Covers:</h4>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hosting & infrastructure</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Small updates or adjustments to flows</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monitoring, performance optimization, and improvements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Support access and optional agent upgrades</span>
                </div>
              </div>
            </div>

            {/* Per-Minute Usage Cost */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Euro className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Per-Minute Usage Cost</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-green-400 mb-2">Starting from €0.10</div>
                <p className="text-slate-300">per minute</p>
              </div>

              <p className="text-slate-300 mb-4">
                Charged only when your AI agent is actively on a call.
              </p>

              <div className="space-y-3 text-slate-300">
                <h4 className="text-white font-semibold mb-3">Price may vary depending on:</h4>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Call volume</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Call complexity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Type of workflow (basic support vs. sales qualification)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg"
              onClick={() => navigate('/quote')}
            >
              📩 Get Your Custom Quote
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;