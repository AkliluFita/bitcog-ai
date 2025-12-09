import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Award, Building, Globe, Lightbulb, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2020',
      title: 'KDR Consult Founded',
      description: 'Our journey began as KDR Consult in North Cyprus, Europe, focusing on research, capacity building, and digital consultancy.',
      icon: Building
    },
    {
      year: '2020-2023',
      title: 'Building Strong Foundations',
      description: 'As KDR Consult, we laid a strong foundation through research and digital consultancy work that would evolve into something bigger.',
      icon: Lightbulb
    },
    {
      year: '2024',
      title: 'Rebranded to BITCOG',
      description: 'We rebranded and expanded into BITCOG, reflecting our commitment to driving intelligence-powered growth and global knowledge exchange.',
      icon: Award
    },
    {
      year: '2025',
      title: 'BITCOG Officially Founded',
      description: 'BITCOG was officially established as a forward-looking hub for innovation, research, and professional development in AI, Data Science, and digital transformation.',
      icon: Globe
    }
  ];

  const branches = [
    {
      title: 'BITCOG Consultancy',
      description: 'Delivering data-driven solutions, digital transformation strategies, and expert advisory services.',
      icon: Briefcase
    },
    {
      title: 'BITCOG Journal of AI & Data Science',
      description: 'An international peer-reviewed scholarly platform advancing cutting-edge research.',
      icon: BookOpen
    },
    {
      title: 'BITCOG Learning',
      description: 'Offering training, upskilling, and knowledge-sharing programs for the next generation of AI and Data Science practitioners.',
      icon: GraduationCap
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
              Our Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-accent">History</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From our roots in Europe and Ethiopia to our global vision today, 
              discover the milestones that shaped BITCOG.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <Card className="service-card mb-12">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
                The <span className="text-accent">BITCOG</span> Story
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  <strong className="text-foreground">BITCOG</strong> was officially founded in <strong className="text-accent">2025</strong> as a forward-looking hub for innovation, research, and professional development in Artificial Intelligence, Data Science, and digital transformation. But our journey began much earlier.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Before becoming BITCOG, the organization operated under the name <strong className="text-foreground">KDR Consult</strong> in North Cyprus, Europe, starting in <strong className="text-accent">2020</strong>. As KDR Consult, our work focused on research, capacity building, and digital consultancy—laying a strong foundation for what would evolve into a broader, more ambitious ecosystem.
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  In <strong className="text-accent">2024</strong>, we rebranded and expanded into <strong className="text-foreground">BITCOG</strong>, reflecting our commitment to driving intelligence-powered growth and global knowledge exchange.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Three Branches */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
              Today, BITCOG operates through <span className="text-accent">three complementary branches</span>:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {branches.map((branch, index) => {
                const Icon = branch.icon;
                return (
                  <Card key={index} className="service-card h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h4 className="text-lg font-heading font-bold mb-3">{branch.title}</h4>
                      <p className="text-sm text-muted-foreground">{branch.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Vision Statement */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Globe className="h-12 w-12 text-accent mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                "From our roots in Europe and Ethiopia to our global vision today, BITCOG continues to expand its impact—<strong className="text-foreground not-italic">bridging research, practice, and learning</strong> to shape the future of intelligent innovation."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Key <span className="text-accent">Milestones</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {timeline.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card key={index} className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge variant="outline" className="text-accent border-primary">
                            {event.year}
                          </Badge>
                          <h3 className="text-xl font-heading font-bold">{event.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
