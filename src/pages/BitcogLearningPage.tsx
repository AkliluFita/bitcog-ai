import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Play, 
  Download, 
  Star,
  Clock,
  Calendar,
  ChevronRight,
  GraduationCap,
  Brain,
  Target,
  Lightbulb,
  Zap,
  Award
} from 'lucide-react';

const BitcogLearningPage: React.FC = () => {
  const learningPrograms = [
    {
      icon: Brain,
      title: 'AI Fundamentals',
      level: 'Beginner',
      duration: '8 weeks',
      students: '1,200+',
      rating: 4.9,
      description: 'Master the foundations of artificial intelligence and machine learning',
      modules: ['Neural Networks', 'Deep Learning', 'Computer Vision', 'NLP Basics'],
      bgColor: 'from-blue-500/10 to-indigo-500/10',
      price: '$299'
    },
    {
      icon: Target,
      title: 'Advanced Machine Learning',
      level: 'Intermediate',
      duration: '12 weeks',
      students: '850+',
      rating: 4.8,
      description: 'Advanced techniques in ML algorithms and model optimization',
      modules: ['Advanced Algorithms', 'Feature Engineering', 'Model Deployment', 'MLOps'],
      bgColor: 'from-green-500/10 to-emerald-500/10',
      price: '$499'
    },
    {
      icon: Zap,
      title: 'Data Science Bootcamp',
      level: 'All Levels',
      duration: '16 weeks',
      students: '2,100+',
      rating: 4.9,
      description: 'Complete data science program from basics to advanced analytics',
      modules: ['Python/R', 'Statistics', 'Data Visualization', 'Big Data Tools'],
      bgColor: 'from-purple-500/10 to-violet-500/10',
      price: '$799'
    },
    {
      icon: Lightbulb,
      title: 'AI for Business Leaders',
      level: 'Executive',
      duration: '4 weeks',
      students: '650+',
      rating: 4.7,
      description: 'Strategic AI implementation for business transformation',
      modules: ['AI Strategy', 'ROI Analysis', 'Implementation', 'Case Studies'],
      bgColor: 'from-orange-500/10 to-red-500/10',
      price: '$199'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI in Healthcare Webinar',
      credits: 3
    },
    {
      title: 'Machine Learning Workshop',
      credits: 5
    },
    {
      title: 'Data Science Career Panel',
      credits: 2
    }
  ];

  const achievements = [
    { number: '10K+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Job Placement Rate', icon: Trophy },
    { number: '50+', label: 'Expert Instructors', icon: GraduationCap },
    { number: '4.8/5', label: 'Average Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
                <GraduationCap className="w-5 h-5 mr-2" />
                Bitcog Learning Platform
              </Badge>
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Training  <span className="text-accent">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advance your skills with our comprehensive training programs in data
            science, AI, and emerging technologies. Learn from industry experts
            and hands-on projects.
          </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button size="lg" className="btn-hero text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning Today
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Catalog
                </Button>
              </div>
              
              {/* Achievements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index} 
                      className="text-center animate-fade-in hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="h-8 w-8 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-accent mb-2">{achievement.number}</p>
                      <p className="text-sm text-muted-foreground">{achievement.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Programs */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Premium Courses
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Choose Your <span className="text-accent">Learning Path</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From beginner-friendly introductions to advanced specializations, 
                find the perfect program to accelerate your career in AI and data science.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {learningPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <Card 
                    key={index}
                    className="group hover-scale cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-2">
                            {program.level}
                          </Badge>
                          <p className="text-2xl font-bold text-accent">{program.price}</p>
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-heading group-hover:text-accent transition-colors">
                        {program.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.students}
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-500" />
                          {program.rating}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-sm font-semibold mb-2">Course Modules:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {program.modules.map((module, mIndex) => (
                            <div key={mIndex} className="flex items-center text-xs">
                              <Target className="h-3 w-3 text-accent mr-2" />
                              <span>{module}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        Enroll Now
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding bg-background-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
                  Live Events
                </Badge>
                <h2 className="text-4xl font-heading font-bold mb-6">
                  Join Our <span className="text-accent">Live Sessions</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Participate in interactive webinars, workshops, and panel discussions 
                  with industry leaders and expert practitioners.
                </p>
                <Button size="lg" className="btn-hero">
                  <Calendar className="mr-2 h-5 w-5" />
                  View All Events
                </Button>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card 
                    key={index}
                    className="card-hover border-l-4 border-l-accent group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors">
                          {event.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {event.credits} Credits
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Resources Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
                Training Resources
              </Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Learning <span className="text-accent">Materials</span>
              </h2>
            </div>
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
                <p className="text-xl text-muted-foreground">
                  It will be published soon… Stay tuned!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background-secondary">
          <div className="container-custom">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
              <CardContent className="p-12 text-center">
                <Award className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="text-4xl font-heading font-bold mb-4">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals who have accelerated their careers 
                  through our comprehensive learning programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="btn-hero">
                    Start Your Journey
                  </Button>
                  <Button size="lg" variant="outline">
                    Talk to an Advisor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <ContactSection />
      </div>
    </div>
  );
};

export default BitcogLearningPage;