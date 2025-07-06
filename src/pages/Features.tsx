import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, Calendar, Phone, Bell, Users, UserCheck, PhoneIncoming, Megaphone, Settings, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "Cold Calling",
      description: "Call leads, follow smart scripts, qualify them live"
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Syncs with Google or Outlook Calendar. Books, confirms, and reschedules automatically"
    },
    {
      icon: Users,
      title: "Customer Service", 
      description: "Answers FAQs, supports customers, 24/7. Can route complex cases to a human"
    },
    {
      icon: Bell,
      title: "Reminders & Follow-Ups",
      description: "Automated calls for appointments, invoices, after-sales, etc."
    },
    {
      icon: UserCheck,
      title: "Lead Qualification",
      description: "Screens potential customers with intelligent questions. Updates CRM automatically"
    },
    {
      icon: PhoneIncoming,
      title: "Inbound Reception",
      description: "Acts as a digital receptionist for all inbound calls"
    },
    {
      icon: Megaphone,
      title: "Outbound Notifications",
      description: "Call existing clients with updates, policy changes, or promotions"
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Build any custom logic per business or sector (clinics, agencies, services, etc.)"
    },
    {
      icon: BarChart3,
      title: "📊 Integrated Agent Dashboard",
      description: "View all agent activity: inbound/outbound calls, call duration, and conversion stats. Full call history, analytics, and performance tracking. Access to call transcripts or summaries. Dashboard is account-specific: each user only sees their own data. Accessible after login via the website"
    }
  ];

  const integrations = [
    {
      category: "Calendars",
      tools: ["Google Calendar", "Outlook", "Apple Calendar", "Microsoft 365"]
    },
    {
      category: "CRMs & Sales Tools", 
      tools: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Monday.com", "Notion", "Airtable"]
    },
    {
      category: "Messaging & Communication",
      tools: ["WhatsApp", "Slack", "Gmail & Outlook", "SMS via Twilio"]
    },
    {
      category: "Other Useful Tools",
      tools: ["Stripe", "Shopify", "Google Sheets", "Calendly", "Custom Webhooks"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What Our AI Agents Can Do
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the full range of capabilities our AI calling agents offer for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connects With Over 5,000+ Tools
              </h2>
              <p className="text-xl text-slate-300">
                Our AI agents integrate with over 5,000+ apps and tools via Zapier, Make.com, or API.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((category, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;