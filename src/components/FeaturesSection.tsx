import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Globe, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Unlock powerful insights with our cutting-edge analytics platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      benefits: ['Real-time data processing', 'Predictive modeling', 'Custom dashboards']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security ensuring your data remains protected',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      benefits: ['End-to-end encryption', 'Compliance ready', 'Regular security audits']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock expert support whenever you need assistance',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      benefits: ['Instant chat support', 'Expert consultation', 'Priority response']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
    { number: '5+', label: 'Global Partners', icon: Globe },
    { number: '24/7', label: 'Expert Support', icon: Users }
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-accent-foreground">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-accent">Modern Enterprises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of advanced AI and data science solutions
            designed to scale with your business needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="service-card group h-full">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center text-sm text-accent"
                        >
                          <CheckCircle className="h-4 w-4 text-accent mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-accent-foreground">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-accent">
                    {stat.number}
                  </div>
                  <div className="text-accent">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-primary text-accent-foreground hover:bg-primary/90 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};