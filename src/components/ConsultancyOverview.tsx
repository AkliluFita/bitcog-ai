import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  BarChart3, 
  Database, 
  Zap, 
  TrendingUp, 
  Users, 
  Target,
  ChevronRight,
  Calendar,
  Award,
  Microscope
} from 'lucide-react';

export const ConsultancyOverview: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, deep learning, and neural networks',
      highlights: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics'],
      bgColor: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      icon: BarChart3,
      title: 'Machine Learning',
      description: 'Custom ML models and algorithms tailored to your business needs',
      highlights: ['Classification Models', 'Regression Analysis', 'Clustering Solutions'],
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Database,
      title: 'Big Data Solutions',
      description: 'Scalable data processing and analytics for large-scale operations',
      highlights: ['Data Warehousing', 'Real-time Processing', 'Cloud Architecture'],
      bgColor: 'from-purple-500/10 to-violet-500/10'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul to modernize your business processes',
      highlights: ['Process Automation', 'System Integration', 'Digital Strategy'],
      bgColor: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: Microscope,
      title: 'Research & Development',
      description: 'Cutting-edge research solutions across multiple domains and industries',
      highlights: ['Healthcare & Life Sciences', 'Agriculture & Food Systems', 'Education & Learning Sciences', "Business & Economics", "Environment & Sustainability", "Social Sciences & Policy", "Engineering & Manufacturing"],
      bgColor: 'from-pink-500/10 to-rose-500/10'
    }
  ];

  const industryNews = [
    {
      type: 'Industry Trend',
      title: 'AI Adoption Accelerates Across Healthcare Sector',
      date: '2024-01-15',
      summary: 'Healthcare organizations are rapidly implementing AI-driven diagnostic tools, with a 340% increase in adoption rate.',
      category: 'Healthcare AI'
    },
    {
      type: 'Client Success',
      title: 'Manufacturing Giant Achieves 45% Cost Reduction',
      date: '2024-01-10',
      summary: 'Our predictive maintenance solution helped a Fortune 500 manufacturer reduce operational costs significantly.',
      category: 'Manufacturing'
    },
    {
      type: 'Industry Trend',
      title: 'Generative AI Transforms Content Creation',
      date: '2024-01-08',
      summary: 'Businesses are leveraging generative AI to create personalized content at scale, improving engagement by 60%.',
      category: 'Content AI'
    },
    {
      type: 'Client Success',
      title: 'Retail Chain Boosts Sales by 28% with AI Analytics',
      date: '2024-01-05',
      summary: 'Implementation of our customer behavior analytics platform resulted in substantial revenue growth.',
      category: 'Retail Analytics'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            Comprehensive Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="text-accent">Services</span> 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI strategy to implementation, we provide end-to-end
            consultancy services that transform your business through
            cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="service-card hover-scale group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-accent">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center text-xs">
                        <Target className="h-3 w-3 text-accent mr-2" />
                        <span className="text-accent">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industry Insights & Client Success */}
        <div className="bg-background rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-2">
                Industry <span className="text-accent">Insights</span> & Success
                Stories
              </h3>
              <p className="text-muted-foreground">
                Stay updated with the latest trends and our client achievements
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Updates
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industryNews.map((news, index) => (
              <Card
                key={index}
                className="card-hover border-l-4 border-l-primary group cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                       variant={
                        news.type === "Client Success" ? "default" : "outline"
                      }
                      className="text-xs"
                    >
                      {news.type === "Client Success" ? (
                        <Award className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      )}
                      {news.type}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-heading group-hover:text-accent transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {news.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {news.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-xs p-2">
                      Read More
                      <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">
              View All Updates
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <Users className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have successfully implemented AI
                and data-driven solutions with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Download Case Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};