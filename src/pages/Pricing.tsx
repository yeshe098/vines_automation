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
      
      <main className="py-8 sm:py-12 md:py-16 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
              Pricing
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-2">
              Transparent pricing for your AI calling agent solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* One-Time Setup Fee */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-slate-800/70 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">One-Time Setup Fee</h3>
              </div>
              
              <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                This is a custom development fee to build your AI calling agent from scratch.
              </p>

              <div className="space-y-2 sm:space-y-3 text-slate-300">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Includes:</h4>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Full customization for your business</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Workflow design & scripting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">All integrations (CRM, calendar, WhatsApp, etc.)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Voice setup, testing, and agent optimization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Final deployment & launch</span>
                </div>
              </div>
            </div>

            {/* Monthly Maintenance Fee */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-slate-800/70 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Monthly Maintenance Fee</h3>
              </div>
              
              <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Ongoing monthly support to keep your agent running smoothly.
              </p>

              <div className="space-y-2 sm:space-y-3 text-slate-300">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Covers:</h4>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Hosting & infrastructure</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Small updates or adjustments to flows</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Monitoring, performance optimization, and improvements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Support access and optional agent upgrades</span>
                </div>
              </div>
            </div>

            {/* Per-Minute Usage Cost */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-slate-800/70 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <Euro className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Per-Minute Usage Cost</h3>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">Starting from €0.10</div>
                <p className="text-slate-300 text-sm sm:text-base">per minute</p>
              </div>

              <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Charged only when your AI agent is actively on a call.
              </p>

              <div className="space-y-2 sm:space-y-3 text-slate-300">
                <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Price may vary depending on:</h4>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Call volume</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Call complexity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Type of workflow (basic support vs. sales qualification)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
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