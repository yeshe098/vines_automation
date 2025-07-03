
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for agent categories
CREATE TYPE agent_category AS ENUM (
  'customer_service',
  'virtual_assistant',
  'narration_audiobook',
  'commercial_ads',
  'podcast_media',
  'voice_over'
);

-- Create enum for order status
CREATE TYPE order_status AS ENUM (
  'pending',
  'completed',
  'cancelled',
  'refunded'
);

-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  is_seller BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create voice_agents table
CREATE TABLE public.voice_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category agent_category NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  delivery_time INTEGER NOT NULL, -- in hours
  languages TEXT[] DEFAULT '{}',
  specialties TEXT[] DEFAULT '{}',
  sample_audio_url TEXT,
  avatar_url TEXT,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  is_online BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  agent_id UUID REFERENCES public.voice_agents(id) ON DELETE CASCADE NOT NULL,
  status order_status DEFAULT 'pending',
  amount DECIMAL(10,2) NOT NULL,
  requirements TEXT,
  delivery_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  reviewer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  agent_id UUID REFERENCES public.voice_agents(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create messages table for buyer-seller communication
CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  recipient_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voice_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for voice_agents
CREATE POLICY "Voice agents are viewable by everyone" ON public.voice_agents
  FOR SELECT USING (is_active = true);

CREATE POLICY "Sellers can insert their own agents" ON public.voice_agents
  FOR INSERT WITH CHECK (auth.uid() = seller_id);

CREATE POLICY "Sellers can update their own agents" ON public.voice_agents
  FOR UPDATE USING (auth.uid() = seller_id);

CREATE POLICY "Sellers can delete their own agents" ON public.voice_agents
  FOR DELETE USING (auth.uid() = seller_id);

-- RLS Policies for orders
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (
    auth.uid() = buyer_id OR 
    auth.uid() IN (SELECT seller_id FROM public.voice_agents WHERE id = agent_id)
  );

CREATE POLICY "Buyers can create orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = buyer_id);

CREATE POLICY "Buyers and sellers can update orders" ON public.orders
  FOR UPDATE USING (
    auth.uid() = buyer_id OR 
    auth.uid() IN (SELECT seller_id FROM public.voice_agents WHERE id = agent_id)
  );

-- RLS Policies for reviews
CREATE POLICY "Reviews are viewable by everyone" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Buyers can create reviews for their orders" ON public.reviews
  FOR INSERT WITH CHECK (
    auth.uid() = reviewer_id AND
    EXISTS (SELECT 1 FROM public.orders WHERE id = order_id AND buyer_id = auth.uid())
  );

-- RLS Policies for messages
CREATE POLICY "Users can view their own messages" ON public.messages
  FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

CREATE POLICY "Users can send messages" ON public.messages
  FOR INSERT WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Users can update their own messages" ON public.messages
  FOR UPDATE USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update agent ratings
CREATE OR REPLACE FUNCTION public.update_agent_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.voice_agents
  SET 
    rating = (
      SELECT COALESCE(AVG(rating::DECIMAL), 0)
      FROM public.reviews
      WHERE agent_id = NEW.agent_id
    ),
    review_count = (
      SELECT COUNT(*)
      FROM public.reviews
      WHERE agent_id = NEW.agent_id
    )
  WHERE id = NEW.agent_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to update ratings when reviews are added
CREATE TRIGGER on_review_created
  AFTER INSERT ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION public.update_agent_rating();

-- Insert sample data for voice agents
INSERT INTO public.voice_agents (seller_id, name, title, description, category, price, delivery_time, languages, specialties, rating, review_count, is_online) VALUES
-- We'll add sample data after profiles are created
('00000000-0000-0000-0000-000000000000', 'Sarah Chen', 'Professional Customer Service Voice', 'Warm, professional voice perfect for customer service applications. Trained on thousands of support conversations.', 'customer_service', 25.00, 24, ARRAY['English', 'Mandarin'], ARRAY['Customer Support', 'Technical Help'], 4.9, 127, true),
('00000000-0000-0000-0000-000000000000', 'Marcus Johnson', 'Executive Virtual Assistant', 'Sophisticated business voice for executive-level virtual assistant applications. Clear, authoritative tone.', 'virtual_assistant', 35.00, 12, ARRAY['English', 'Spanish'], ARRAY['Business', 'Scheduling'], 4.8, 89, true),
('00000000-0000-0000-0000-000000000000', 'Emma Rodriguez', 'Audiobook Narrator Specialist', 'Captivating storyteller voice with extensive experience in audiobook narration and educational content.', 'narration_audiobook', 45.00, 48, ARRAY['English', 'French'], ARRAY['Narration', 'Storytelling'], 5.0, 203, false);
