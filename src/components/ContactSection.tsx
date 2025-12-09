import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@bitcogi.com',
      subDetails: 'We typically respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+251913012630',
      subDetails: 'Mon-Fri, 9:00 AM - 6:00 PM EST'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: '123 Innovation Drive, Suite 500',
      subDetails: 'San Francisco, CA 94105, USA'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-accent border-secondary/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Let's Start a{' '}
            <span className="text-accent">Conversation</span> 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your data into actionable insights? We're here to help you navigate 
            your AI and data science journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold mb-1">{info.title}</h3>
                          <p className="text-sm font-medium mb-1">{info.details}</p>
                          <p className="text-xs text-muted-foreground">{info.subDetails}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-accent" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{schedule.day}</span>
                    <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Serving clients worldwide with remote and on-site consulting services.
                </p>
                <Badge className="bg-primary/20 text-accent">
                  24/7 Emergency Support Available
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2 text-accent" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@domain.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What can we help you with?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your project or inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-8">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg overflow-hidden">
                  <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004540.5812332772!2d38.24416656748087!3d9.010793399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1696359200000!5m2!1sen!2sus"                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bitcog Insightive Office Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-heading font-bold mb-8">
            Other Ways to Connect
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-heading font-semibold mb-2">Schedule a Consultation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a free 30-minute strategy session with our experts.
                </p>
                <Button variant="outline" size="sm">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-heading font-semibold mb-2">Request a Demo</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  See our solutions in action with a personalized demo.
                </p>
                <Button variant="outline" size="sm">
                  Request Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-heading font-semibold mb-2">Partnership Inquiry</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore partnership opportunities and collaborations.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};