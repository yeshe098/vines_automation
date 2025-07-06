import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, Calendar, Phone, Bell, Users, UserCheck, PhoneIncoming, Megaphone, Settings, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Phone,
      title: t('features.coldCalling'),
      description: t('features.coldCallingDesc')
    },
    {
      icon: Calendar,
      title: t('features.appointments'),
      description: t('features.appointmentsDesc')
    },
    {
      icon: Users,
      title: t('features.customerService'), 
      description: t('features.customerServiceDesc')
    },
    {
      icon: Bell,
      title: t('features.reminders'),
      description: t('features.remindersDesc')
    },
    {
      icon: UserCheck,
      title: t('features.leadQualification'),
      description: t('features.leadQualificationDesc')
    },
    {
      icon: PhoneIncoming,
      title: t('features.inboundReception'),
      description: t('features.inboundReceptionDesc')
    },
    {
      icon: Megaphone,
      title: t('features.outboundNotifications'),
      description: t('features.outboundNotificationsDesc')
    },
    {
      icon: Settings,
      title: t('features.customWorkflows'),
      description: t('features.customWorkflowsDesc')
    },
    {
      icon: BarChart3,
      title: t('features.dashboard'),
      description: t('features.dashboardDesc')
    }
  ];

  const integrations = [
    {
      category: t('features.calendars'),
      tools: ["Google Calendar", "Outlook", "Apple Calendar", "Microsoft 365"]
    },
    {
      category: t('features.crms'), 
      tools: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Monday.com", "Notion", "Airtable"]
    },
    {
      category: t('features.messaging'),
      tools: ["WhatsApp", "Slack", "Gmail & Outlook", "SMS via Twilio"]
    },
    {
      category: t('features.otherTools'),
      tools: ["Stripe", "Shopify", "Google Sheets", "Calendly", "Custom Webhooks"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              {t('features.title')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-2">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 sm:p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-slate-300 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
                {t('features.integrationsTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 px-2">
                {t('features.integrationsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {integrations.map((category, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-start text-slate-300 text-sm sm:text-base">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="break-words">{tool}</span>
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