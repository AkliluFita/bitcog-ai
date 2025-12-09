import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Calendar, 
  Download, 
  Clock, 
  Users, 
  Award,
  BookOpen,
  ChevronRight,
  FileText,
  Video,
  MapPin,
  Star
} from 'lucide-react';

export const TrainingOverview: React.FC = () => {
  const trainingPrograms = [
    {
      title: 'AI Ethics',
      duration: '4 weeks',
      level: 'Intermediate',
      format: 'Online',
      description: 'Explore the ethical considerations and frameworks for developing and deploying AI systems responsibly.',
      topics: ['Ethical Frameworks', 'Bias and Fairness', 'Privacy Concerns', 'Accountability'],
      nextSession: '2024-03-05',
      enrolled: 25,
      rating: 4.8
    },
    {
      title: 'AI in Healthcare',
      duration: '10 weeks',
      level: 'Advanced',
      format: 'Hybrid',
      description: 'A deep dive into applying AI to healthcare, from diagnostics to patient care and drug discovery.',
      topics: ['Medical Imaging Analysis', 'Genomic Data', 'Predictive Diagnostics', 'Clinical Decision Support'],
      nextSession: '2024-03-15',
      enrolled: 30,
      rating: 4.9
    },
    {
      title: 'AI in Agriculture',
      duration: '6 weeks',
      level: 'Intermediate',
      format: 'Online',
      description: 'Discover how AI is revolutionizing farming through smart automation, crop monitoring, and predictive analytics.',
      topics: ['Precision Agriculture', 'Crop Health Monitoring', 'Automated Farming', 'Supply Chain Analytics'],
      nextSession: '2024-04-01',
      enrolled: 18,
      rating: 4.6
    },
    {
      title: 'AI in Business',
      duration: '5 weeks',
      level: 'Executive',
      format: 'In-Person',
      description: 'Learn strategic implementation of AI to drive business growth, improve efficiency, and enhance customer experience.',
      topics: ['Business Strategy', 'ROI Analysis', 'Customer Experience', 'Operational Efficiency'],
      nextSession: '2024-04-10',
      enrolled: 40,
      rating: 4.7
    },
    {
      title: 'AI in Education',
      duration: '4 weeks',
      level: 'Beginner',
      format: 'Online',
      description: 'An introductory course on leveraging AI tools to personalize learning, automate tasks, and analyze student performance.',
      topics: ['Personalized Learning', 'Intelligent Tutoring Systems', 'Curriculum Design', 'Student Analytics'],
      nextSession: '2024-04-20',
      enrolled: 55,
      rating: 4.8
    },
    {
      title: 'AI in Engineering and Manufacturing',
      duration: '12 weeks',
      level: 'Advanced',
      format: 'Hybrid',
      description: 'Apply AI techniques to optimize engineering design, automate manufacturing processes, and perform predictive maintenance.',
      topics: ['Generative Design', 'Predictive Maintenance', 'Robotics and Automation', 'Quality Control'],
      nextSession: '2024-05-01',
      enrolled: 22,
      rating: 4.9
    }
  ];

  const upcomingSessions = [
    {
      title: 'Python for Data Analysis Bootcamp',
      date: '2024-02-10',
      time: '9:00 AM - 5:00 PM',
      location: 'Virtual',
      instructor: 'Dr. Sarah Chen',
      spots: 15,
      category: 'Bootcamp'
    },
    {
      title: 'AI Ethics and Governance Workshop',
      date: '2024-02-18',
      time: '2:00 PM - 6:00 PM',
      location: 'New York Office',
      instructor: 'Dr. Michael Rodriguez',
      spots: 8,
      category: 'Workshop'
    },
    {
      title: 'Deep Learning Masterclass',
      date: '2024-02-22',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual',
      instructor: 'Dr. Ahmed Hassan',
      spots: 20,
      category: 'Masterclass'
    }
  ];
  const resources = [
    {
      title: 'Complete Training Catalog 2024',
      type: 'Catalog',
      format: 'PDF',
      size: '2.3 MB',
      description: 'Comprehensive overview of all training programs, schedules, and pricing',
      icon: BookOpen
    },
    {
      title: 'Data Science Career Guide',
      type: 'Guide',
      format: 'PDF',
      size: '1.8 MB',
      description: 'Essential roadmap for building a successful career in data science',
      icon: GraduationCap
    },
    {
      title: 'AI Implementation Checklist',
      type: 'Checklist',
      format: 'PDF',
      size: '0.5 MB',
      description: 'Step-by-step guide for implementing AI solutions in your organization',
      icon: FileText
    },
    {
      title: 'Sample Training Sessions',
      type: 'Videos',
      format: 'MP4',
      size: '125 MB',
      description: 'Preview our teaching style with sample sessions from popular courses',
      icon: Video
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            Professional Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Training  <span className="text-accent">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advance your skills with our comprehensive training programs in data
            science, AI, and emerging technologies. Learn from industry experts
            and hands-on projects.
          </p>
        </div>

        {/* Training Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <Card
              key={index}
              className="service-card hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {program.level}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {program.format}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-accent">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {program.rating}
                  </div>
                </div>
                <CardTitle className="text-xl font-heading group-hover:text-accent transition-colors">
                  {program.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {program.enrolled} enrolled
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {program.nextSession}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {program.topics.map((topic, topicIndex) => (
                    <Badge
                      key={topicIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full group">
                  View Details & Enroll
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-background rounded-3xl p-8 shadow-lg mb-16 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-2">
                Upcoming <span className="text-accent">Sessions</span>
              </h3>
              <p className="text-muted-foreground">
                Don't miss these special training opportunities
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Sessions
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingSessions.map((session, index) => (
              <Card
                key={index}
                className="card-hover border-l-4 border-l-primary group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="text-xs w-fit mb-2">
                    {session.category}
                  </Badge>
                  <CardTitle className="text-lg font-heading group-hover:text-accent transition-colors">
                    {session.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {session.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      {session.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      {session.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-2" />
                      {session.spots} spots left
                    </div>
                  </div>
                  <p className="text-xs text-accent mb-3">
                    Instructor: {session.instructor}
                  </p>
                  <Button size="sm" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources & Downloads */}
        <div className="bg-background rounded-3xl p-8 shadow-lg animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-2">
              Training <span className="text-accent">Resources</span>
            </h3>
            <p className="text-muted-foreground">
              Download brochures, schedules, and additional learning materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card
                  key={index}
                  className="card-hover group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-heading font-semibold mb-2 group-hover:text-accent transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-xs text-accent mb-4">
                      <Badge variant="outline" className="text-xs">
                        {resource.format}
                      </Badge>
                      <span>{resource.size}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full group"
                    >
                      <Download className="h-3 w-3 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <Award className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Advance Your Career?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their
                careers through our expert-led training programs and workshops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Browse All Programs
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};