
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  ShoppingBag, 
  Star, 
  Clock, 
  DollarSign, 
  MessageCircle,
  Eye,
  Settings,
  Phone
} from 'lucide-react';

interface Order {
  id: string;
  status: string;
  amount: number;
  requirements: string;
  created_at: string;
  voice_agents: {
    name: string;
    title: string;
    delivery_time: number;
  };
}

interface Profile {
  id: string;
  full_name: string;
  email: string;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    } else if (user) {
      fetchDashboardData();
    }
  }, [user, loading, navigate]);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      // Fetch user profile
      const { data: profileData } = await (supabase as any)
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
      }

      // Fetch orders (purchased voice agents)
      const { data: ordersData } = await (supabase as any)
        .from('orders')
        .select(`
          *,
          voice_agents (name, title, delivery_time)
        `)
        .eq('buyer_id', user.id)
        .order('created_at', { ascending: false });

      setOrders(ordersData || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setDashboardLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Active';
      case 'pending':
        return 'Setting Up';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  if (loading || dashboardLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-white text-xl">Loading dashboard...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {profile?.full_name || user?.email}!
          </h1>
          <p className="text-slate-300">Manage your voice agents and account settings</p>
        </div>

        <Tabs defaultValue="agents" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="agents" className="text-white data-[state=active]:bg-slate-700">
              <Phone className="w-4 h-4 mr-2" />
              My Voice Agents
            </TabsTrigger>
            <TabsTrigger value="orders" className="text-white data-[state=active]:bg-slate-700">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Purchase History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Active Agents</p>
                      <p className="text-2xl font-bold text-white">
                        {orders.filter(o => o.status === 'completed').length}
                      </p>
                    </div>
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Setting Up</p>
                      <p className="text-2xl font-bold text-white">
                        {orders.filter(o => o.status === 'pending').length}
                      </p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Purchases</p>
                      <p className="text-2xl font-bold text-white">{orders.length}</p>
                    </div>
                    <ShoppingBag className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Invested</p>
                      <p className="text-2xl font-bold text-white">
                        ${orders.reduce((sum, order) => sum + Number(order.amount), 0)}
                      </p>
                    </div>
                    <DollarSign className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-semibold">
                            {order.voice_agents.name}
                          </h3>
                          <Badge className={`${getStatusColor(order.status)} text-white`}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        <p className="text-slate-300 text-sm mb-2">
                          {order.voice_agents.title}
                        </p>
                        {order.requirements && (
                          <p className="text-slate-400 text-sm">
                            Special Requirements: {order.requirements}
                          </p>
                        )}
                        <p className="text-slate-500 text-xs mt-2">
                          Purchased on {new Date(order.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-2">
                          ${order.amount}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Settings className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {orders.length === 0 && (
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-12 text-center">
                    <Phone className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-white text-lg font-semibold mb-2">No voice agents yet</h3>
                    <p className="text-slate-400 mb-4">Browse our collection of AI voice agents to get started</p>
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => navigate('/agents')}
                    >
                      Browse Voice Agents
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Purchase History</h2>
              
              {orders.map((order) => (
                <Card key={order.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-semibold">
                            Order #{order.id.slice(0, 8)}
                          </h3>
                          <Badge className={`${getStatusColor(order.status)} text-white`}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        <p className="text-slate-300 text-sm mb-1">
                          Agent: {order.voice_agents.name}
                        </p>
                        <p className="text-slate-400 text-sm mb-2">
                          {order.voice_agents.title}
                        </p>
                        <p className="text-slate-500 text-xs">
                          Purchased: {new Date(order.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white mb-2">
                          ${order.amount}
                        </div>
                        <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                          <Eye className="w-4 h-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {orders.length === 0 && (
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-12 text-center">
                    <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-white text-lg font-semibold mb-2">No purchases yet</h3>
                    <p className="text-slate-400">Your purchase history will appear here</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
