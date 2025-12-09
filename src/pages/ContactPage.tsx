import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ResourcesSection } from "@/components/ResourcesSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Calendar,
  Handshake,
  Globe,
  CheckCircle2,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ContactSection } from "@/components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@bitcoginsightive.com",
      subDetails: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+251913012630",
      subDetails: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, Tech City, TC 12345",
      subDetails: "By appointment only",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
    { day: "Holidays", hours: "Closed" },
  ];

  const connectionOptions = [
    {
      icon: Calendar,
      title: "Schedule a Consultation",
      description:
        "Book a free 30-minute consultation to discuss your AI and data science needs.",
      action: "Schedule Now",
    },
    {
      icon: MessageSquare,
      title: "Request a Demo",
      description:
        "See our solutions in action with a personalized demo tailored to your industry.",
      action: "Request Demo",
    },
    {
      icon: Handshake,
      title: "Partnership Inquiry",
      description:
        "Explore partnership opportunities and collaboration possibilities.",
      action: "Learn More",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Contact Form & Info */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Visit our headquarters or schedule a virtual meeting
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-[16/9] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBbGlleCBBBgwYBBAQIELCBCwg!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bitcog Insightive Office Location"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Connection Options */}
      {/* <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">More Ways to Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to engage with our team based on your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {connectionOptions.map((option, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <option.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <Button className="btn-hero">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
