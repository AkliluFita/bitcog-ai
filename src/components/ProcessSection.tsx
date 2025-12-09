import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Target, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business challenges, data landscape, and strategic objectives.',
      details: [
        'Business requirements gathering',
        'Data audit and assessment',
        'Stakeholder interviews',
        'Current state analysis'
      ],
      timeframe: '1-2 weeks',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Target,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your specific needs and business goals.',
      details: [
        'Solution architecture design',
        'Technology stack selection',
        'Project timeline creation',
        'Resource allocation planning'
      ],
      timeframe: '1-2 weeks',
      color: 'bg-purple-500'
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Solution Design',
      description: 'Create detailed technical specifications and prototypes for your custom solution.',
      details: [
        'Technical architecture design',
        'UI/UX wireframes',
        'Data flow diagrams',
        'Proof of concept development'
      ],
      timeframe: '2-3 weeks',
      color: 'bg-green-500'
    },
    {
      id: 4,
      icon: Code,
      title: 'Development',
      description: 'Build and implement your solution using industry best practices and cutting-edge technologies.',
      details: [
        'Agile development methodology',
        'Regular progress updates',
        'Code reviews and quality assurance',
        'Continuous integration/deployment'
      ],
      timeframe: '4-12 weeks',
      color: 'bg-orange-500'
    },
    {
      id: 5,
      icon: TestTube,
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure your solution meets all requirements and performs optimally.',
      details: [
        'Unit and integration testing',
        'Performance optimization',
        'User acceptance testing',
        'Security vulnerability assessment'
      ],
      timeframe: '1-2 weeks',
      color: 'bg-red-500'
    },
    {
      id: 6,
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'Launch your solution and provide ongoing support to ensure continued success.',
      details: [
        'Production deployment',
        'User training and documentation',
        'Performance monitoring',
        'Ongoing maintenance and support'
      ],
      timeframe: 'Ongoing',
      color: 'bg-indigo-500'
    }
  ];

  const benefits = [
    'Proven methodology with 95% success rate',
    'Transparent communication throughout',
    'Flexible approach adapting to your needs',
    'Expert team with 10+ years experience',
    'Post-launch support and optimization',
    'Scalable solutions built for growth'
  ];

  return (
    <section className="section-padding bg-background-secondary"> 
      <div className="container-custom"> 
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            Our Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How We <span className="text-accent">Deliver Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 6-step methodology ensures your AI and data science projects are delivered 
            on time, within budget, and exceed expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 bg-border z-0" />
                )}
                
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Step Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Card className="service-card">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                              <Badge variant="outline" className="text-xs"> 
                                {step.timeframe}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-lg">{step.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-accent">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Step Number/Visual */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center lg:justify-${isEven ? 'end' : 'start'}`}>
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">{step.id}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-full">
                          <ArrowRight className={`h-8 w-8 text-accent ml-4 ${isEven ? 'transform rotate-180 -ml-12' : ''}`} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-6">
              Why Choose Our Approach?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our battle-tested methodology has delivered success for over 500 projects across 
              various industries. We combine agile development practices with rigorous quality 
              assurance to ensure exceptional results.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-accent">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-accent">Success Rate</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-accent">Projects Delivered</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-accent">Support Available</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-accent">Years Experience</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};