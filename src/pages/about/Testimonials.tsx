import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
              Client Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              What Our Clients <span className="text-accent">Say</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our clients about how BITCOG has transformed their 
              businesses and accelerated their success.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12 md:p-16 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="h-12 w-12 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Testimonials
              </h2>
              <p className="text-2xl text-muted-foreground mb-4">
                It will be published soon…
              </p>
              <p className="text-xl text-accent font-semibold mb-8">
                Stay tuned!
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>We're gathering success stories from our clients</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <Card className="service-card">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you transform your business with AI and data science. 
                Contact us today to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-hero">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/consultancy">
                  <Button variant="outline" className="border-primary text-accent px-6 py-3 text-base hover:bg-primary/5 transition-colors">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
