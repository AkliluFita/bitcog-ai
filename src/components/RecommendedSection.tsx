import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import { ServiceDetailModal } from './ServiceDetailModal';

export const RecommendedSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recommendations = [
    {
      icon: Users,
      title: 'Expert Consultancy',
      description: 'Get personalized guidance from our team of data science and AI experts to transform your business operations.',
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Consultancy',
      features: ['1-on-1 Expert Sessions', 'Custom Solutions', 'Industry Best Practices'],
      longDescription: 'Transform your business with our expert consultancy services. Our experienced team provides strategic guidance, implementation support, and ongoing optimization to help you leverage AI and data science for competitive advantage.',
      benefits: ['Increased operational efficiency', 'Data-driven decision making', 'Competitive market advantage', 'ROI optimization'],
      processSteps: ['Initial assessment and goal setting', 'Strategy development and planning', 'Implementation and integration', 'Performance monitoring and optimization'],
      deliverables: ['Comprehensive strategy document', 'Implementation roadmap', 'Performance metrics dashboard', 'Ongoing support and maintenance'],
      tags: ['AI Strategy', 'Data Science', 'Digital Transformation']
    },
    {
      icon: BookOpen,
      title: 'Professional Training',
      description: 'Enhance your team\'s capabilities with comprehensive training programs in AI, data science, and digital transformation.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Training',
      features: ['Certified Programs', 'Hands-on Learning', 'Industry Recognition'],
      longDescription: 'Empower your team with cutting-edge training programs designed by industry experts. Our comprehensive curricula cover the latest technologies and methodologies in AI, machine learning, and data science.',
      benefits: ['Enhanced team capabilities', 'Industry-recognized certifications', 'Practical hands-on experience', 'Continuous learning support'],
      processSteps: ['Skills assessment and program selection', 'Customized curriculum development', 'Interactive training delivery', 'Certification and ongoing support'],
      deliverables: ['Training materials and resources', 'Hands-on project portfolio', 'Industry certifications', 'Post-training mentorship'],
      tags: ['Machine Learning', 'Data Analytics', 'Professional Development']
    },
    {
      icon: Award,
      title: 'Research Publication',
      description: 'Contribute to the global knowledge base by publishing your research in our peer-reviewed journal.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Journal',
      features: ['Peer Review', 'Global Reach', 'Academic Recognition'],
      longDescription: 'Share your groundbreaking research with the global scientific community through our prestigious peer-reviewed journal. We provide comprehensive support throughout the publication process.',
      benefits: ['Academic recognition and credibility', 'Global research visibility', 'Networking opportunities', 'Citation potential'],
      processSteps: ['Manuscript submission and review', 'Peer review process coordination', 'Revision and final approval', 'Publication and distribution'],
      deliverables: ['Published research article', 'DOI assignment', 'Global distribution', 'Citation tracking'],
      tags: ['Research', 'Publication', 'Academic Excellence']
    }
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-accent-foreground border-primary/20">
            Recommended for You
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Discover Our{' '}
            <span className="text-accent">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of services designed to accelerate your journey in AI and data science.
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {recommendations.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="service-card group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary text-accent-foreground">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                          <Icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-accent">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleLearnMore(item)} 
                      className="w-full text-accent group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};