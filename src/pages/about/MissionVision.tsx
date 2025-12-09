import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Lightbulb, Users, Globe } from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and deliverables.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and data science.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership and collaborative problem-solving.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We strive to create meaningful, positive change through our work and solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative  flex items-center justify-center overflow-hidden " >
    
  
        <div className="relative z-20 container-custom text-center text-white  ">
          <Badge className="mb-4 bg-primary text-accent-foreground border-primary/20">
            Our Purpose
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            Empowering Knowledge, Driving{' '}
            <span className="text-accent">
              Innovation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide expert consultancy, training, and journal publishing to transform your business through AI and data science.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <Card className="service-card group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                      <Target className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-heading font-bold mb-6 text-accent">Our Mission</h2>
                    <p className="text-lg text-accent leading-relaxed mb-6">
                      To empower organizations and individuals with transformative AI and data science solutions 
                      that unlock insights, drive innovation, and create sustainable competitive advantages in 
                      an increasingly data-driven world.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-accent">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        Deliver cutting-edge AI solutions
                      </div>
                      <div className="flex items-center text-accent">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        Provide world-class training and education
                      </div>
                      <div className="flex items-center text-accent">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        Foster innovation through research
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="service-card group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                      <Eye className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-heading font-bold mb-6 text-accent">Our Vision</h2>
                    <p className="text-lg text-accent leading-relaxed mb-6">
                      To be the global leader in AI and data science innovation, creating a future where 
                      intelligent technologies seamlessly integrate with human expertise to solve the 
                      world's most complex challenges and improve lives everywhere.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-accent">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                        Shape the future of AI technology
                      </div>
                      <div className="flex items-center text-accent">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                        Bridge the gap between research and practice
                      </div>
                      <div className="flex items-center text-accent">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                        Create positive global impact
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-accent-foreground">
              Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-accent">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              Our values shape our culture, guide our decisions, and define how we work with clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="service-card group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/80 transition-colors">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 text-accent">{value.title}</h3>
                    <p className="text-accent">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/5 border-primary/20">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-heading italic text-accent mb-6">
                "Our commitment is not just to deliver solutions, but to transform the way organizations 
                think about and interact with their data."
              </blockquote>
              <div className="text-lg text-accent">
                — Bitcog Insightive Leadership Team
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;