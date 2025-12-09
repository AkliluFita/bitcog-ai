import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const divisions = [
    {
      title: 'Consultancy Division',
      description: 'Dedicated experts providing research, advisory, and technical support services.',
      icon: Briefcase
    },
    {
      title: 'E-Learning Division',
      description: 'Skilled tutors, instructors, and content developers delivering high-quality digital learning experiences.',
      icon: GraduationCap
    },
    {
      title: 'Journal Division',
      description: 'Professional editors, reviewers, and academic contributors ensuring rigorous peer review and scholarly excellence.',
      icon: BookOpen
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
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              The People Behind <span className="text-accent">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BITCOG brings together a multidisciplinary team built around our three core branches.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="text-accent">Divisions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BITCOG brings together a multidisciplinary team built around our three core branches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <Card key={index} className="service-card h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{division.title}</h3>
                    <p className="text-muted-foreground text-lg">{division.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Full Team Profiles
              </h2>
              <p className="text-2xl text-muted-foreground mb-2">
                Full team profiles will be published soon…
              </p>
              <p className="text-xl text-accent font-semibold">
                Stay tuned!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <Card className="service-card">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for AI and data science. 
                Explore opportunities to make a meaningful impact.
              </p>
              <Link to="/about/join-our-team">
                <Button size="lg" className="btn-hero">
                  View Career Opportunities
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Team;
