
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
  Plus,
  Edit,
  Eye
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

interface AgentStats {
  id: string;
  name: string;
  title: string;
  rating: number;
  review_count: number;
  is_active: boolean;
  orders_count: number;
  total_earnings: number;
}

interface Profile {
  id: string;
  full_name: string;
  is_seller: boolean;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [agentStats, setAgentStats] = useState<AgentStats[]>([]);
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
      const { data: profileData } = await supabase
        .from('profiles' as any)
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
      }

      // Fetch orders (as buyer)
      const { data: ordersData } = await supabase
        .from('orders' as any)
        .select(`
          *,
          voice_agents (name, title, delivery_time)
        `)
        .eq('buyer_id', user.id)
        .order('created_at', { ascending: false });

      setOrders(ordersData || []);

      // If user is a seller, fetch their agent stats
      if (profileData?.is_seller) {
        const { data: agentsData } = await supabase
          .from('voice_agents' as any)
          .select('*')
          .eq('seller_id', user.id);

        if (agentsData) {
          const statsPromises = agentsData.map(async (agent: any) => {
            const { data: ordersData } = await supabase
              .from('orders' as any)
              .select('amount')
              .eq('agent_id', agent.id);

            const ordersCount = ordersData?.length || 0;
            const totalEarnings = ordersData?.reduce((sum: number, order: any) => sum + Number(order.amount), 0) || 0;

            return {
              ...agent,
              orders_count: ordersCount,
              total_earnings: totalEarnings,
            };
          });

          const stats = await Promise.all(statsPromises);
          setAgentStats(stats);
        }
      }
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
          <p className="text-slate-300">Manage your orders and voice agents</p>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="orders" className="text-white data-[state=active]:bg-slate-700">
              <ShoppingBag className="w-4 h-4 mr-2" />
              My Orders
            </TabsTrigger>
            {profile?.is_seller && (
              <TabsTrigger value="agents" className="text-white data-[state=active]:bg-slate-700">
                <Star className="w-4 h-4 mr-2" />
                My Agents
              </TabsTrigger>
            )}
            <TabsTrigger value="become-seller" className="text-white data-[state=active]:bg-slate-700">
              <Plus className="w-4 h-4 mr-2" />
              {profile?.is_seller ? 'Add Agent' : 'Become Seller'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Total Orders</p>
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
                      <p className="text-slate-400 text-sm">Completed</p>
                      <p className="text-2xl font-bold text-white">
                        {orders.filter(o => o.status === 'completed').length}
                      </p>
                    </div>
                    <Star className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">Pending</p>
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
                      <p className="text-slate-400 text-sm">Total Spent</p>
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
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-slate-300 text-sm mb-2">
                          {order.voice_agents.title}
                        </p>
                        {order.requirements && (
                          <p className="text-slate-400 text-sm">
                            Requirements: {order.requirements}
                          </p>
                        )}
                        <p className="text-slate-500 text-xs mt-2">
                          Ordered on {new Date(order.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-2">
                          ${order.amount}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Eye className="w-4 h-4" />
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
                    <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-white text-lg font-semibold mb-2">No orders yet</h3>
                    <p className="text-slate-400 mb-4">Start browsing voice agents to place your first order</p>
                    <Button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => navigate('/agents')}
                    >
                      Browse Agents
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {profile?.is_seller && (
            <TabsContent value="agents" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Active Agents</p>
                        <p className="text-2xl font-bold text-white">
                          {agentStats.filter(a => a.is_active).length}
                        </p>
                      </div>
                      <Star className="w-8 h-8 text-yellow-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Total Orders</p>
                        <p className="text-2xl font-bold text-white">
                          {agentStats.reduce((sum, agent) => sum + agent.orders_count, 0)}
                        </p>
                      </div>
                      <ShoppingBag className="w-8 h-8 text-blue-400" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Total Earnings</p>
                        <p className="text-2xl font-bold text-white">
                          ${agentStats.reduce((sum, agent) => sum + agent.total_earnings, 0)}
                        </p>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {agentStats.map((agent) => (
                  <Card key={agent.id} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-white font-semibold">{agent.name}</h3>
                            <Badge variant={agent.is_active ? "default" : "secondary"}>
                              {agent.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <p className="text-slate-300 text-sm mb-2">{agent.title}</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-400">
                            <span>⭐ {agent.rating} ({agent.review_count} reviews)</span>
                            <span>📦 {agent.orders_count} orders</span>
                            <span>💰 ${agent.total_earnings} earned</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}

          <TabsContent value="become-seller">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">
                  {profile?.is_seller ? 'Add New Voice Agent' : 'Become a Seller'}
                </CardTitle>
                <CardDescription className="text-slate-300">
                  {profile?.is_seller 
                    ? 'Create a new voice agent listing to expand your services'
                    : 'Start earning by offering your AI voice services to customers'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Plus className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {profile?.is_seller ? 'Add Your Next Voice Agent' : 'Ready to Start Selling?'}
                  </h3>
                  <p className="text-slate-400 mb-6 max-w-md mx-auto">
                    {profile?.is_seller 
                      ? 'Create professional voice agent listings and start receiving orders from customers worldwide.'
                      : 'Join thousands of voice professionals earning money by providing AI voice services.'
                    }
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => navigate('/create-agent')}
                  >
                    {profile?.is_seller ? 'Create New Agent' : 'Get Started'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
