import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { sendQuoteRequest } from '@/lib/emailService';

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessType: '',
    email: '',
    phone: '',
    language: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.description) {
      toast({
        title: "Please fill in required fields",
        description: "Full name, email, and description are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendQuoteRequest(formData);
      
      if (success) {
        toast({
          title: "Quote request submitted!",
          description: "We'll contact you shortly with a custom offer.",
        });
        setSubmitted(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly at yahtzee.en.zonen@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16">
        <Card className="max-w-2xl mx-auto bg-slate-800/90 border-slate-600">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-white text-center">Thank You!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-slate-200 mb-4 sm:mb-6 text-sm sm:text-base">
              Thanks! We'll contact you shortly with a custom offer based on your business needs.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
              Tell Us What You Need – Get a Custom AI Voice Agent for Your Business
            </h1>
          </div>

          <Card className="bg-slate-800/90 border-slate-600">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-slate-200 text-sm sm:text-base">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-slate-200 text-sm sm:text-base">Company Name</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-slate-200 text-sm sm:text-base">Business Type</Label>
                  <Input
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-200 text-sm sm:text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-200 text-sm sm:text-base">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-200 text-sm sm:text-base">Preferred Language</Label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white text-sm sm:text-base">
                      <SelectValue placeholder="Select preferred language" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="english" className="text-white">🇬🇧 English</SelectItem>
                      <SelectItem value="dutch" className="text-white">🇳🇱 Dutch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-slate-200 text-sm sm:text-base">
                    Describe exactly what you want your AI agent to do *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="What kind of calls? Customer service, appointment setting, cold calling? What kind of business is it for?"
                    className="bg-slate-700 border-slate-600 text-white min-h-24 sm:min-h-32 text-sm sm:text-base"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2.5 sm:py-3 text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quote;