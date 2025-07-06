interface QuoteRequest {
  fullName: string;
  companyName: string;
  businessType: string;
  email: string;
  phone: string;
  language: string;
  description: string;
}

export const sendQuoteRequest = async (formData: QuoteRequest): Promise<boolean> => {
  try {
    // For now, we'll use a simple fetch to a service like Formspree or EmailJS
    // You can replace this with your preferred email service
    
    const emailData = {
      to: 'yahtzee.en.zonen@gmail.com',
      subject: `New Quote Request from ${formData.fullName}`,
      message: `
New Quote Request Details:

Full Name: ${formData.fullName}
Company: ${formData.companyName || 'Not provided'}
Business Type: ${formData.businessType || 'Not provided'}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Preferred Language: ${formData.language || 'Not specified'}

Description:
${formData.description}

Submitted on: ${new Date().toLocaleString()}
      `
    };

    // This is a placeholder - in a real app, you would use:
    // 1. EmailJS for client-side email sending
    // 2. A backend API with nodemailer or similar
    // 3. A service like Formspree, Netlify Forms, or Vercel Forms
    
    console.log('Email would be sent with data:', emailData);
    
    // For demonstration, we'll always return true
    // In reality, this would make an actual API call
    return true;
    
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Alternative implementation using EmailJS (commented out)
/*
import emailjs from '@emailjs/browser';

export const sendQuoteRequestEmailJS = async (formData: QuoteRequest): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'yahtzee.en.zonen@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      company_name: formData.companyName,
      business_type: formData.businessType,
      phone: formData.phone,
      language: formData.language,
      message: formData.description,
      submit_date: new Date().toLocaleString()
    };

    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    );
    
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
*/
