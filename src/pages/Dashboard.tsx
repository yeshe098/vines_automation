
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
  DollarSign, 
  MessageCircle,
  Eye,
  Settings,
  Phone
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
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
      const { data: profileData } = await (supabase as any)
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
      }

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
        return t('dashboard.active');
      case 'pending':
        return t('dashboard.settingUp');
      case 'cancelled':
        return t('dashboard.cancelled');
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
      
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            {t('dashboard.welcome')}, {profile?.full_name || user?.email}!
          </h1>
          <p className="text-slate-200 text-sm sm:text-base">{t('dashboard.subtitle')}</p>
        </div>

        <Tabs defaultValue="agents" className="space-y-4 sm:space-y-6">
          <TabsList className="bg-slate-800/90 border-slate-600 flex flex-col sm:flex-row w-full sm:w-auto">
            <TabsTrigger value="agents" className="text-white data-[state=active]:bg-slate-700 w-full sm:w-auto text-sm sm:text-base">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              {t('dashboard.myAgents')}
            </TabsTrigger>
            <TabsTrigger value="orders" className="text-white data-[state=active]:bg-slate-700 w-full sm:w-auto text-sm sm:text-base">
              <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              {t('dashboard.purchaseHistory')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <Card className="bg-slate-800/90 border-slate-600">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-200 text-xs sm:text-sm">{t('dashboard.activeAgents')}</p>
                      <p className="text-xl sm:text-2xl font-bold text-white">
                        {orders.filter(o => o.status === 'completed').length}
                      </p>
                    </div>
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border-slate-600">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-200 text-xs sm:text-sm">{t('dashboard.settingUp')}</p>
                      <p className="text-xl sm:text-2xl font-bold text-white">
                        {orders.filter(o => o.status === 'pending').length}
                      </p>
                    </div>
                    <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border-slate-600">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-200 text-xs sm:text-sm">{t('dashboard.totalPurchases')}</p>
                      <p className="text-xl sm:text-2xl font-bold text-white">{orders.length}</p>
                    </div>
                    <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border-slate-600">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-200 text-xs sm:text-sm">{t('dashboard.totalInvested')}</p>
                      <p className="text-xl sm:text-2xl font-bold text-white">
                        ${orders.reduce((sum, order) => sum + Number(order.amount), 0)}
                      </p>
                    </div>
                    <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-800/90 border-slate-600">
                <CardContent className="p-8 sm:p-12 text-center">
                  <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-white text-lg font-semibold mb-2">{t('dashboard.noAgents')}</h3>
                  <p className="text-slate-200 mb-4 text-sm sm:text-base">{t('dashboard.noAgentsDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4 sm:space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{t('dashboard.purchaseHistory')}</h2>
              
              {orders.map((order) => (
                <Card key={order.id} className="bg-slate-800/90 border-slate-600">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <h3 className="text-white font-semibold text-sm sm:text-base">
                            {t('dashboard.orderNumber')}{order.id.slice(0, 8)}
                          </h3>
                          <Badge className={`${getStatusColor(order.status)} text-white text-xs sm:text-sm`}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        <p className="text-slate-200 text-xs sm:text-sm mb-1">
                          {t('dashboard.agent')} {order.voice_agents.name}
                        </p>
                        <p className="text-slate-300 text-xs sm:text-sm mb-2">
                          {order.voice_agents.title}
                        </p>
                        <p className="text-slate-400 text-xs">
                          {t('dashboard.purchased')} {new Date(order.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-left sm:text-right w-full sm:w-auto">
                        <div className="text-lg sm:text-xl font-bold text-white mb-2">
                          ${order.amount}
                        </div>
                        <Button variant="outline" size="sm" className="border-slate-500 text-slate-200 w-full sm:w-auto">
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          {t('dashboard.details')}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {orders.length === 0 && (
                <Card className="bg-slate-800/90 border-slate-600">
                  <CardContent className="p-8 sm:p-12 text-center">
                    <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-white text-lg font-semibold mb-2">{t('dashboard.noPurchases')}</h3>
                    <p className="text-slate-200 text-sm sm:text-base">{t('dashboard.noPurchasesDesc')}</p>
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
