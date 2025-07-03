
-- Create tables for the bot service platform
CREATE TABLE public.voice_agents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  delivery_time INTEGER NOT NULL DEFAULT 24,
  languages TEXT[] NOT NULL DEFAULT '{}',
  specialties TEXT[] NOT NULL DEFAULT '{}',
  rating DECIMAL(3,2) NOT NULL DEFAULT 5.0,
  review_count INTEGER NOT NULL DEFAULT 0,
  is_online BOOLEAN NOT NULL DEFAULT true,
  is_active BOOLEAN NOT NULL DEFAULT true,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create orders table for bot purchases
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  buyer_id UUID REFERENCES auth.users NOT NULL,
  agent_id UUID REFERENCES public.voice_agents NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  requirements TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  agent_id UUID REFERENCES public.voice_agents NOT NULL,
  reviewer_id UUID REFERENCES auth.users NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  is_seller BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.voice_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS policies for voice_agents (publicly readable)
CREATE POLICY "Anyone can view active voice agents" 
  ON public.voice_agents 
  FOR SELECT 
  USING (is_active = true);

-- RLS policies for orders
CREATE POLICY "Users can view their own orders" 
  ON public.orders 
  FOR SELECT 
  USING (auth.uid() = buyer_id);

CREATE POLICY "Users can create their own orders" 
  ON public.orders 
  FOR INSERT 
  WITH CHECK (auth.uid() = buyer_id);

-- RLS policies for reviews
CREATE POLICY "Anyone can view reviews" 
  ON public.reviews 
  FOR SELECT 
  USING (true);

CREATE POLICY "Users can create reviews" 
  ON public.reviews 
  FOR INSERT 
  WITH CHECK (auth.uid() = reviewer_id);

-- RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Insert your 6 voice agents
INSERT INTO public.voice_agents (name, title, description, category, price, languages, specialties) VALUES
('Main Language Router', 'Multi-language Customer Service Agent', 'Intelligent routing agent that asks for preferred language (English or Dutch) and seamlessly transfers to appropriate specialists for optimal customer experience.', 'customer_service', 29.99, ARRAY['English', 'Dutch'], ARRAY['Language Detection', 'Call Routing', 'Customer Service']),

('English Assistant', 'Professional English Support Agent', 'Dedicated English-speaking agent for home maintenance and voice service appointments. Handles booking, rescheduling, and cancellations with professional courtesy.', 'virtual_assistant', 39.99, ARRAY['English'], ARRAY['Appointment Booking', 'Home Maintenance', 'Customer Support']),

('Dutch Assistant', 'Professional Dutch Support Agent', 'Native Dutch-speaking agent specializing in home maintenance services and voice selling appointments. Provides culturally appropriate customer service.', 'virtual_assistant', 39.99, ARRAY['Dutch'], ARRAY['Appointment Booking', 'Home Maintenance', 'Customer Support']),

('Voice Selling Specialist', 'Sales & Appointment Expert', 'Specialized agent for voice selling services with advanced sales techniques. Handles appointment booking, product demonstrations, and customer conversion.', 'commercial_ads', 49.99, ARRAY['English', 'Dutch'], ARRAY['Sales', 'Voice Selling', 'Appointment Booking', 'Lead Conversion']),

('Home Maintenance Reminder', 'Proactive Service Reminder Agent', 'Outbound calling agent that contacts customers 1 day before home maintenance appointments. Handles confirmations, rescheduling, cancellations, and human transfers.', 'customer_service', 34.99, ARRAY['English', 'Dutch'], ARRAY['Outbound Calls', 'Appointment Reminders', 'Home Maintenance', 'Call Transfer']),

('Voice Service Reminder', 'Voice Sales Follow-up Agent', 'Specialized outbound agent for voice selling service reminders. Contacts prospects before appointments and manages rescheduling, cancellations, and escalations to human agents.', 'voice_over', 34.99, ARRAY['English', 'Dutch'], ARRAY['Outbound Calls', 'Sales Follow-up', 'Voice Services', 'Lead Management']);
