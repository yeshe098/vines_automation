import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.askQuote': 'Ask for a Quote',
    'header.account': 'Account',
    'header.dashboard': 'Dashboard',
    'header.signOut': 'Sign Out',
    'header.signIn': 'Sign In',

    // Hero Section
    'hero.title.1': 'We create a perfect',
    'hero.title.2': 'AI calling agent',
    'hero.title.3': 'specifically for your business needs.',
    'hero.subtitle': "We'll build your AI agent exactly how you want it – personalized to your company, your use case, and your workflow.",
    'hero.featuresButton': 'What Our AI Agents Can Do',
    'hero.pricingButton': 'View Pricing',
    'hero.whyTitle': 'Why Use AI Calling Agents?',
    'hero.feature1': 'Handles both inbound and outbound calls',
    'hero.feature2': 'No customer waiting times',
    'hero.feature3': 'Schedules appointments directly into your calendar',
    'hero.feature4': 'Provides 24/7 support for customers',
    'hero.feature5': 'Sends reminders and follow-up calls',
    'hero.feature6': 'Replaces large parts of your call center',
    'hero.feature7': 'Cuts costs by up to 50%',
    'hero.feature8': 'Supports multiple languages (English & Dutch)',

    // Features Page
    'features.title': 'What Our AI Agents Can Do',
    'features.subtitle': 'Discover the full range of capabilities our AI calling agents offer for your business',
    'features.coldCalling': 'Cold Calling',
    'features.coldCallingDesc': 'Call leads, follow smart scripts, qualify them live',
    'features.appointments': 'Appointment Scheduling',
    'features.appointmentsDesc': 'Syncs with Google or Outlook Calendar. Books, confirms, and reschedules automatically',
    'features.customerService': 'Customer Service',
    'features.customerServiceDesc': 'Answers FAQs, supports customers, 24/7. Can route complex cases to a human',
    'features.reminders': 'Reminders & Follow-Ups',
    'features.remindersDesc': 'Automated calls for appointments, invoices, after-sales, etc.',
    'features.leadQualification': 'Lead Qualification',
    'features.leadQualificationDesc': 'Screens potential customers with intelligent questions. Updates CRM automatically',
    'features.inboundReception': 'Inbound Reception',
    'features.inboundReceptionDesc': 'Acts as a digital receptionist for all inbound calls',
    'features.outboundNotifications': 'Outbound Notifications',
    'features.outboundNotificationsDesc': 'Call existing clients with updates, policy changes, or promotions',
    'features.customWorkflows': 'Custom Workflows',
    'features.customWorkflowsDesc': 'Build any custom logic per business or sector (clinics, agencies, services, etc.)',
    'features.dashboard': '📊 Integrated Agent Dashboard',
    'features.dashboardDesc': 'View all agent activity: inbound/outbound calls, call duration, and conversion stats. Full call history, analytics, and performance tracking. Access to call transcripts or summaries. Dashboard is account-specific: each user only sees their own data. Accessible after login via the website',
    'features.integrationsTitle': 'Connects With Over 5,000+ Tools',
    'features.integrationsSubtitle': 'Our AI agents integrate with over 5,000+ apps and tools via Zapier, Make.com, or API.',
    'features.calendars': 'Calendars',
    'features.crms': 'CRMs & Sales Tools',
    'features.messaging': 'Messaging & Communication',
    'features.otherTools': 'Other Useful Tools',

    // Pricing Page
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent pricing for your AI calling agent solution',
    'pricing.setupFee': 'One-Time Setup Fee',
    'pricing.setupFeeDesc': 'This is a custom development fee to build your AI calling agent from scratch.',
    'pricing.setupIncludes': 'Includes:',
    'pricing.setupFeature1': 'Full customization for your business',
    'pricing.setupFeature2': 'Workflow design & scripting',
    'pricing.setupFeature3': 'All integrations (CRM, calendar, WhatsApp, etc.)',
    'pricing.setupFeature4': 'Voice setup, testing, and agent optimization',
    'pricing.setupFeature5': 'Final deployment & launch',
    'pricing.maintenanceFee': 'Monthly Maintenance Fee',
    'pricing.maintenanceFeeDesc': 'Ongoing monthly support to keep your agent running smoothly.',
    'pricing.maintenanceCovers': 'Covers:',
    'pricing.maintenanceFeature1': 'Hosting & infrastructure',
    'pricing.maintenanceFeature2': 'Small updates or adjustments to flows',
    'pricing.maintenanceFeature3': 'Monitoring, performance optimization, and improvements',
    'pricing.maintenanceFeature4': 'Support access and optional agent upgrades',
    'pricing.usageCost': 'Per-Minute Usage Cost',
    'pricing.startingFrom': 'Starting from €0.10',
    'pricing.perMinute': 'per minute',
    'pricing.usageCostDesc': 'Charged only when your AI agent is actively on a call.',
    'pricing.priceVaries': 'Price may vary depending on:',
    'pricing.variableFeature1': 'Call volume',
    'pricing.variableFeature2': 'Call complexity',
    'pricing.variableFeature3': 'Type of workflow (basic support vs. sales qualification)',
    'pricing.getQuote': '📩 Get Your Custom Quote',

    // Quote Page
    'quote.title': 'Tell Us What You Need – Get a Custom AI Voice Agent for Your Business',
    'quote.fullName': 'Full Name',
    'quote.companyName': 'Company Name',
    'quote.businessType': 'Business Type',
    'quote.email': 'Email Address',
    'quote.phone': 'Phone Number (optional)',
    'quote.language': 'Preferred Language',
    'quote.description': 'Describe exactly what you want your AI agent to do',
    'quote.descriptionPlaceholder': 'What kind of calls? Customer service, appointment setting, cold calling? What kind of business is it for?',
    'quote.submit': 'Submit Request',
    'quote.submitting': 'Sending Request...',
    'quote.thankYou': 'Thank You!',
    'quote.thankYouMessage': "Thanks! We'll contact you shortly with a custom offer based on your business needs.",
    'quote.backHome': 'Back to Home',
    'quote.selectLanguage': 'Select preferred language',
    'quote.english': '🇬🇧 English',
    'quote.dutch': '🇳🇱 Dutch',
    'quote.required': '*',

    // Auth Page
    'auth.welcome': 'Welcome',
    'auth.subtitle': 'Sign in to your account or create a new one',
    'auth.signIn': 'Sign In',
    'auth.signUp': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.fullName': 'Full Name',
    'auth.signingIn': 'Signing in...',
    'auth.creatingAccount': 'Creating account...',

    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.subtitle': 'Manage your voice agents and account settings',
    'dashboard.myAgents': 'My Voice Agents',
    'dashboard.purchaseHistory': 'Purchase History',
    'dashboard.activeAgents': 'Active Agents',
    'dashboard.settingUp': 'Setting Up',
    'dashboard.totalPurchases': 'Total Purchases',
    'dashboard.totalInvested': 'Total Invested',
    'dashboard.noAgents': 'No voice agents yet',
    'dashboard.noAgentsDesc': 'Contact us to get started with your AI voice agents',
    'dashboard.noPurchases': 'No purchases yet',
    'dashboard.noPurchasesDesc': 'Your purchase history will appear here',
    'dashboard.orderNumber': 'Order #',
    'dashboard.agent': 'Agent:',
    'dashboard.purchased': 'Purchased:',
    'dashboard.details': 'Details',
    'dashboard.active': 'Active',
    'dashboard.cancelled': 'Cancelled',

    // Footer
    'footer.description': 'Professional AI-powered voice agents for your business. Handle customer service, cold calls, appointment scheduling, and more with our advanced calling agents.',
    'footer.services': 'Services',
    'footer.customerService': 'Customer Service',
    'footer.appointmentScheduling': 'Appointment Scheduling',
    'footer.coldCalling': 'Cold Calling',
    'footer.reminders': 'Reminders & Follow-ups',
    'footer.support': 'Support',
    'footer.contactUs': 'Contact Us',
    'footer.documentation': 'Documentation',
    'footer.helpCenter': 'Help Center',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.copyright': '© 2024 Vines Calling Agents. All rights reserved.',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  nl: {
    // Header
    'header.askQuote': 'Vraag een Offerte',
    'header.account': 'Account',
    'header.dashboard': 'Dashboard',
    'header.signOut': 'Uitloggen',
    'header.signIn': 'Inloggen',

    // Hero Section
    'hero.title.1': 'Wij creëren een perfecte',
    'hero.title.2': 'AI bel-agent',
    'hero.title.3': 'specifiek voor uw bedrijfsbehoeften.',
    'hero.subtitle': 'Wij bouwen uw AI-agent precies zoals u het wilt - gepersonaliseerd voor uw bedrijf, uw use case en uw workflow.',
    'hero.featuresButton': 'Wat Onze AI Agenten Kunnen Doen',
    'hero.pricingButton': 'Bekijk Prijzen',
    'hero.whyTitle': 'Waarom AI Bel-Agenten Gebruiken?',
    'hero.feature1': 'Behandelt zowel inkomende als uitgaande gesprekken',
    'hero.feature2': 'Geen wachttijden voor klanten',
    'hero.feature3': 'Plant afspraken direct in uw agenda',
    'hero.feature4': 'Biedt 24/7 ondersteuning aan klanten',
    'hero.feature5': 'Stuurt herinneringen en follow-up gesprekken',
    'hero.feature6': 'Vervangt grote delen van uw callcenter',
    'hero.feature7': 'Bespaart tot 50% kosten',
    'hero.feature8': 'Ondersteunt meerdere talen (Engels & Nederlands)',

    // Features Page
    'features.title': 'Wat Onze AI Agenten Kunnen Doen',
    'features.subtitle': 'Ontdek het volledige scala aan mogelijkheden die onze AI bel-agenten bieden voor uw bedrijf',
    'features.coldCalling': 'Cold Calling',
    'features.coldCallingDesc': 'Belt leads, volgt slimme scripts, kwalificeert ze live',
    'features.appointments': 'Afspraken Plannen',
    'features.appointmentsDesc': 'Synchroniseert met Google of Outlook Agenda. Boekt, bevestigt en plant automatisch opnieuw',
    'features.customerService': 'Klantenservice',
    'features.customerServiceDesc': 'Beantwoordt FAQ\'s, ondersteunt klanten, 24/7. Kan complexe zaken doorverwijzen naar een mens',
    'features.reminders': 'Herinneringen & Follow-ups',
    'features.remindersDesc': 'Geautomatiseerde gesprekken voor afspraken, facturen, after-sales, etc.',
    'features.leadQualification': 'Lead Kwalificatie',
    'features.leadQualificationDesc': 'Screent potentiële klanten met intelligente vragen. Werkt CRM automatisch bij',
    'features.inboundReception': 'Inkomende Receptie',
    'features.inboundReceptionDesc': 'Fungeert als digitale receptionist voor alle inkomende gesprekken',
    'features.outboundNotifications': 'Uitgaande Meldingen',
    'features.outboundNotificationsDesc': 'Belt bestaande klanten met updates, beleidswijzigingen of promoties',
    'features.customWorkflows': 'Aangepaste Workflows',
    'features.customWorkflowsDesc': 'Bouw elke aangepaste logica per bedrijf of sector (klinieken, bureaus, diensten, etc.)',
    'features.dashboard': '📊 Geïntegreerd Agent Dashboard',
    'features.dashboardDesc': 'Bekijk alle agent activiteit: inkomende/uitgaande gesprekken, gespreksduur en conversie statistieken. Volledige gespreksgeschiedenis, analytics en prestatie tracking. Toegang tot gesprekstranscripties of samenvattingen. Dashboard is account-specifiek: elke gebruiker ziet alleen zijn eigen data. Toegankelijk na inloggen via de website',
    'features.integrationsTitle': 'Verbindt Met Meer Dan 5.000+ Tools',
    'features.integrationsSubtitle': 'Onze AI agenten integreren met meer dan 5.000+ apps en tools via Zapier, Make.com of API.',
    'features.calendars': 'Agenda\'s',
    'features.crms': 'CRM\'s & Verkoop Tools',
    'features.messaging': 'Berichten & Communicatie',
    'features.otherTools': 'Andere Nuttige Tools',

    // Pricing Page
    'pricing.title': 'Prijzen',
    'pricing.subtitle': 'Transparante prijzen voor uw AI bel-agent oplossing',
    'pricing.setupFee': 'Eenmalige Opzet Kosten',
    'pricing.setupFeeDesc': 'Dit is een aangepaste ontwikkelingskosten om uw AI bel-agent vanaf nul op te bouwen.',
    'pricing.setupIncludes': 'Inclusief:',
    'pricing.setupFeature1': 'Volledige maatwerk voor uw bedrijf',
    'pricing.setupFeature2': 'Workflow ontwerp & scripting',
    'pricing.setupFeature3': 'Alle integraties (CRM, agenda, WhatsApp, etc.)',
    'pricing.setupFeature4': 'Stem setup, testen en agent optimalisatie',
    'pricing.setupFeature5': 'Definitieve implementatie & lancering',
    'pricing.maintenanceFee': 'Maandelijkse Onderhoudskosten',
    'pricing.maintenanceFeeDesc': 'Doorlopende maandelijkse ondersteuning om uw agent soepel draaiende te houden.',
    'pricing.maintenanceCovers': 'Omvat:',
    'pricing.maintenanceFeature1': 'Hosting & infrastructuur',
    'pricing.maintenanceFeature2': 'Kleine updates of aanpassingen aan flows',
    'pricing.maintenanceFeature3': 'Monitoring, prestatie optimalisatie en verbeteringen',
    'pricing.maintenanceFeature4': 'Ondersteuning toegang en optionele agent upgrades',
    'pricing.usageCost': 'Kosten Per Minuut Gebruik',
    'pricing.startingFrom': 'Vanaf €0,10',
    'pricing.perMinute': 'per minuut',
    'pricing.usageCostDesc': 'Alleen in rekening gebracht wanneer uw AI agent actief aan het bellen is.',
    'pricing.priceVaries': 'Prijs kan variëren afhankelijk van:',
    'pricing.variableFeature1': 'Gesprek volume',
    'pricing.variableFeature2': 'Gesprek complexiteit',
    'pricing.variableFeature3': 'Type workflow (basis ondersteuning vs. verkoop kwalificatie)',
    'pricing.getQuote': '📩 Krijg Uw Aangepaste Offerte',

    // Quote Page
    'quote.title': 'Vertel Ons Wat U Nodig Heeft – Krijg Een Aangepaste AI Stem Agent Voor Uw Bedrijf',
    'quote.fullName': 'Volledige Naam',
    'quote.companyName': 'Bedrijfsnaam',
    'quote.businessType': 'Bedrijfstype',
    'quote.email': 'E-mailadres',
    'quote.phone': 'Telefoonnummer (optioneel)',
    'quote.language': 'Voorkeurstaal',
    'quote.description': 'Beschrijf exact wat u wilt dat uw AI agent doet',
    'quote.descriptionPlaceholder': 'Wat voor soort gesprekken? Klantenservice, afspraken maken, cold calling? Voor wat voor bedrijf is het?',
    'quote.submit': 'Verzoek Indienen',
    'quote.submitting': 'Verzoek Versturen...',
    'quote.thankYou': 'Dank Je Wel!',
    'quote.thankYouMessage': 'Bedankt! Wij nemen binnenkort contact met u op met een aangepast aanbod gebaseerd op uw bedrijfsbehoeften.',
    'quote.backHome': 'Terug naar Home',
    'quote.selectLanguage': 'Selecteer voorkeurstaal',
    'quote.english': '🇬🇧 Engels',
    'quote.dutch': '🇳🇱 Nederlands',
    'quote.required': '*',

    // Auth Page
    'auth.welcome': 'Welkom',
    'auth.subtitle': 'Log in op uw account of maak een nieuwe aan',
    'auth.signIn': 'Inloggen',
    'auth.signUp': 'Registreren',
    'auth.email': 'E-mail',
    'auth.password': 'Wachtwoord',
    'auth.fullName': 'Volledige Naam',
    'auth.signingIn': 'Inloggen...',
    'auth.creatingAccount': 'Account aanmaken...',

    // Dashboard
    'dashboard.welcome': 'Welkom terug',
    'dashboard.subtitle': 'Beheer uw stem agenten en account instellingen',
    'dashboard.myAgents': 'Mijn Stem Agenten',
    'dashboard.purchaseHistory': 'Aankoopgeschiedenis',
    'dashboard.activeAgents': 'Actieve Agenten',
    'dashboard.settingUp': 'Instellen',
    'dashboard.totalPurchases': 'Totaal Aankopen',
    'dashboard.totalInvested': 'Totaal Geïnvesteerd',
    'dashboard.noAgents': 'Nog geen stem agenten',
    'dashboard.noAgentsDesc': 'Neem contact met ons op om te beginnen met uw AI stem agenten',
    'dashboard.noPurchases': 'Nog geen aankopen',
    'dashboard.noPurchasesDesc': 'Uw aankoopgeschiedenis zal hier verschijnen',
    'dashboard.orderNumber': 'Bestelling #',
    'dashboard.agent': 'Agent:',
    'dashboard.purchased': 'Gekocht:',
    'dashboard.details': 'Details',
    'dashboard.active': 'Actief',
    'dashboard.cancelled': 'Geannuleerd',

    // Footer
    'footer.description': 'Professionele AI-aangedreven spraakagenten voor uw bedrijf. Behandel klantenservice, cold calls, afspraken plannen en meer met onze geavanceerde belagenten.',
    'footer.services': 'Diensten',
    'footer.customerService': 'Klantenservice',
    'footer.appointmentScheduling': 'Afspraken Plannen',
    'footer.coldCalling': 'Cold Calling',
    'footer.reminders': 'Herinneringen & Follow-ups',
    'footer.support': 'Ondersteuning',
    'footer.contactUs': 'Contact Opnemen',
    'footer.documentation': 'Documentatie',
    'footer.helpCenter': 'Helpcentrum',
    'footer.privacyPolicy': 'Privacybeleid',
    'footer.copyright': '© 2024 Vines Calling Agents. Alle rechten voorbehouden.',

    // Common
    'common.loading': 'Laden...',
    'common.error': 'Fout',
    'common.success': 'Succes',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
