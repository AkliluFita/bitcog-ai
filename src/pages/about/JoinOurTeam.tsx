import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, FileText, Briefcase, BookOpen, GraduationCap } from 'lucide-react';

const JoinOurTeam = () => {
  const positions = [
    {
      title: 'BITCOG Consultancy',
      description: 'Join our consultancy division to work on cutting-edge AI and data science projects, delivering digital transformation strategies and expert advisory services to clients worldwide.',
      icon: Briefcase,
      areas: ['Data Scientists', 'AI Engineers', 'Business Analysts', 'Project Managers']
    },
    {
      title: 'BITCOG Journal',
      description: 'Contribute to our international peer-reviewed scholarly platform as an editor, reviewer, or academic contributor advancing cutting-edge research in AI and Data Science.',
      icon: BookOpen,
      areas: ['Editors', 'Peer Reviewers', 'Academic Contributors', 'Research Associates']
    },
    {
      title: 'BITCOG Learning',
      description: 'Help shape the next generation of AI and Data Science practitioners through training, upskilling, and knowledge-sharing programs.',
      icon: GraduationCap,
      areas: ['Instructors', 'Content Developers', 'Tutors', 'Curriculum Designers']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-background-secondary">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
              Career Opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of a forward-looking hub for innovation, research, and professional development 
              in Artificial Intelligence, Data Science, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="text-accent">Divisions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're looking for talented individuals to join one of our three core branches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {positions.map((position, index) => {
              const Icon = position.icon;
              return (
                <Card key={index} className="service-card h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{position.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{position.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-accent mb-3">Roles we're looking for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.areas.map((area, areaIndex) => (
                          <Badge key={areaIndex} variant="primary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  How to Apply
                </h2>
                <p className="text-xl text-muted-foreground">
                  Ready to join BITCOG? Here's how to get started:
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Compose your email</h4>
                    <p className="text-muted-foreground">
                      Send your job application to <a href="mailto:info@bitcogi.com" className="text-accent font-semibold hover:underline">info@bitcogi.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Specify your interest</h4>
                    <p className="text-muted-foreground">
                      Clearly mention which division you'd like to join: <strong>Consultancy</strong>, <strong>Journal</strong>, or <strong>Learning</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Attach your CV</h4>
                    <p className="text-muted-foreground">
                      Please include your CV/Resume as an attachment to your email. PDF format is preferred.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="btn-hero"
                  onClick={() => window.location.href = 'mailto:info@bitcogi.com?subject=Job Application - BITCOG&body=Dear BITCOG Team,%0D%0A%0D%0AI am interested in joining your team in the [Consultancy/Journal/Learning] division.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0ABest regards,'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Application Email
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Email: <a href="mailto:info@bitcogi.com" className="text-accent hover:underline">info@bitcogi.com</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Join <span className="text-accent">BITCOG?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Global Impact', desc: 'Work on projects that shape the future of AI worldwide' },
              { title: 'Innovation First', desc: 'Be at the forefront of AI and data science innovation' },
              { title: 'Growth Opportunities', desc: 'Continuous learning and professional development' },
              { title: 'Collaborative Culture', desc: 'Join a multidisciplinary team of experts' }
            ].map((item, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurTeam;
