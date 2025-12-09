import React, { useState } from 'react';
import { Calendar, Download, Users, Clock, Award, BookOpen, Code, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import trainingImage from '@/assets/training-programs.jpg';

export const TrainingSection: React.FC = () => {
  const programs = [
    {
      id: 'ai-ethics',
      title: 'AI Ethics',
      icon: BookOpen,
      duration: '8 weeks',
      level: 'All Levels',
      price: '$1,299',
      description: 'Comprehensive program covering ethical AI development, bias detection, and responsible AI practices.',
      highlights: [
        'Ethical AI principles and frameworks',
        'Bias detection and mitigation strategies',
        'Privacy and data protection in AI',
        'Responsible AI deployment',
        'Regulatory compliance and governance'
      ],
      nextSession: '2024-02-15',
      spots: 12
    },
    {
      id: 'ai-healthcare',
      title: 'AI in Healthcare',
      icon: Database,
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$2,499',
      description: 'Specialized training in medical AI applications, healthcare data analysis, and clinical decision support.',
      highlights: [
        'Medical imaging and diagnostics',
        'Electronic health record analysis',
        'Drug discovery and development',
        'Clinical decision support systems',
        'Healthcare data privacy and security'
      ],
      nextSession: '2024-02-28',
      spots: 8
    },
    {
      id: 'ai-agriculture',
      title: 'AI in Agriculture',
      icon: Code,
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$1,799',
      description: 'Learn to apply AI technologies in agriculture for crop monitoring, yield prediction, and smart farming.',
      highlights: [
        'Precision agriculture techniques',
        'Crop monitoring with satellite imagery',
        'Yield prediction models',
        'Smart irrigation systems',
        'Livestock management with AI'
      ],
      nextSession: '2024-03-05',
      spots: 15
    },
    {
      id: 'ai-business',
      title: 'AI in Business',
      icon: Award,
      duration: '4 weeks',
      level: 'Executive Level',
      price: '$2,999',
      description: 'Strategic AI implementation for business leaders focusing on ROI, transformation, and competitive advantage.',
      highlights: [
        'AI strategy and roadmap development',
        'Business process automation',
        'Customer analytics and personalization',
        'AI-driven decision making',
        'Change management for AI adoption'
      ],
      nextSession: '2024-03-10',
      spots: 10
    },
    {
      id: 'ai-education',
      title: 'AI in Education',
      icon: Users,
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      price: '$1,599',
      description: 'Explore AI applications in education including personalized learning, assessment, and educational technology.',
      highlights: [
        'Personalized learning systems',
        'Automated assessment and grading',
        'Intelligent tutoring systems',
        'Educational content generation',
        'Learning analytics and insights'
      ],
      nextSession: '2024-03-20',
      spots: 18
    },
    {
      id: 'ai-engineering',
      title: 'AI in Engineering and Manufacturing',
      icon: Code,
      duration: '8 weeks',
      level: 'Advanced',
      price: '$2,199',
      description: 'Advanced AI applications in engineering and manufacturing including predictive maintenance and quality control.',
      highlights: [
        'Predictive maintenance strategies',
        'Quality control automation',
        'Supply chain optimization',
        'Digital twin technologies',
        'Industrial IoT integration'
      ],
      nextSession: '2024-04-01',
      spots: 14
    }
  ];

  const upcomingSessions = [
    {
      date: '2024-02-15',
      program: 'Data Science Bootcamp',
      type: 'Full Program',
      duration: '12 weeks',
      status: 'Open'
    },
    {
      date: '2024-02-28',
      program: 'AI & ML Workshop',
      type: 'Intensive Workshop',
      duration: '5 days',
      status: 'Limited Spots'
    },
    {
      date: '2024-03-05',
      program: 'Python for Data Analysis',
      type: 'Online Course',
      duration: '6 weeks',
      status: 'Open'
    },
    {
      date: '2024-03-10',
      program: 'Executive AI Strategy',
      type: 'Executive Workshop',
      duration: '2 days',
      status: 'VIP'
    },
    {
      date: '2024-03-20',
      program: 'Deep Learning Fundamentals',
      type: 'Technical Workshop',
      duration: '8 weeks',
      status: 'Open'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Data Scientist at Tech Corp',
      program: 'Data Science Bootcamp',
      quote: 'The bootcamp transformed my career. The hands-on approach and real-world projects gave me the confidence to transition into data science.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'CTO at StartupXYZ',
      program: 'Executive AI Strategy',
      quote: 'Excellent strategic insights. This workshop helped us develop our AI roadmap and avoid common pitfalls in implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'ML Engineer at FinTech Co',
      program: 'AI & ML Workshop',
      quote: 'Incredibly deep technical content. The instructors are industry experts who provide practical, applicable knowledge.',
      rating: 5
    }
  ];

  return (
    <section id="training" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            World-Class Training
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Accelerate Your{" "}
            <span className="text-accent">Data Science Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner bootcamps to executive strategy workshops, our
            comprehensive training programs are designed to empower individuals
            and teams with cutting-edge skills.
          </p>
        </div>

        {/* Programs Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.id} className="service-card group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="font-semibold text-accent">
                      {program.price}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Program Highlights:</h4>
                    <ul className="space-y-1">
                      {program.highlights
                        .slice(0, 3)
                        .map((highlight, index) => (
                          <li
                            key={index}
                            className="text-xs text-accent flex items-start"
                          >
                            <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-accent">Next Session:</span>
                      <span className="text-sm font-medium">
                        {program.nextSession}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-accent">
                        Available Spots:
                      </span>
                      <Badge
                        className={
                          program.spots < 10
                            ? "bg-destructive/10 text-destructive"
                            : "bg-success/10 text-success"
                        }
                      >
                        {program.spots} remaining
                      </Badge>
                    </div>
                    <Button className="w-full" size="sm">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Schedule & Resources */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Upcoming Sessions */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-accent mr-2" />
              Upcoming Sessions
            </h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {upcomingSessions.map((session, index) => (
                    <div
                      key={index}
                      className="p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{session.program}</h4>
                          <div className="flex items-center space-x-4 text-sm text-accent mt-1">
                            <span>{session.date}</span>
                            <span>•</span>
                            <span>{session.duration}</span>
                            <span>•</span>
                            <span>{session.type}</span>
                          </div>
                        </div>
                        <Badge
                          className={
                            session.status === "Limited Spots"
                              ? "bg-destructive/10 text-destructive"
                              : session.status === "VIP"
                              ? "bg-primary/10 text-accent"
                              : "bg-success/10 text-success"
                          }
                        >
                          {session.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Downloadable Resources */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <Download className="h-6 w-6 text-accent mr-2" />
              Resources & Brochures
            </h3>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-foreground hover:text-accent hover:bg-primary/5"
                    size="lg"
                  >
                    <Download className="h-4 w-4 mr-2 text-accent" />
                    Download Complete Course Brochure (PDF)
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-foreground hover:text-accent hover:bg-primary/5"
                    size="lg"
                  >
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    View Full 2024 Training Schedule (PDF)
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-foreground hover:text-accent hover:bg-primary/5"
                    size="lg"
                  >
                    <Award className="h-4 w-4 mr-2 text-accent" />
                    Certification & Accreditation Info (PDF)
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-foreground hover:text-accent hover:bg-primary/5"
                    size="lg"
                  >
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    Corporate Training Solutions (PDF)
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium mb-2">Need Custom Training?</h4>
                  <p className="text-sm text-accent mb-3">
                    We offer tailored corporate training programs designed for
                    your team's specific needs.
                  </p>
                  <Button className="w-full" size="sm">
                    Request Corporate Training Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            What Our Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.program}
                    </Badge>
                  </div>
                  <blockquote className="text-sm italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-medium text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-accent">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};