import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  FileText, 
  Globe, 
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const JournalContent: React.FC = () => {
  const journalStats = [
    { icon: Award, label: 'Impact Factor', value: '3.3', color: 'text-blue-600' },
    { icon: TrendingUp, label: 'CiteScore', value: '2.8', color: 'text-green-600' },
    { icon: Users, label: 'Editorial Board', value: '25+', color: 'text-purple-600' },
    { icon: Clock, label: 'Avg. Review Time', value: '6 weeks', color: 'text-orange-600' },
    { icon: Globe, label: 'Countries', value: '45+', color: 'text-red-600' },
    { icon: FileText, label: 'Articles Published', value: '180+', color: 'text-indigo-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Rigorous Peer Review',
      description: 'Double-blind peer review process ensuring quality and objectivity'
    },
    {
      icon: Globe,
      title: 'Open Access',
      description: 'Free access to all published articles for global research community'
    },
    {
      icon: CheckCircle,
      title: 'Fast Publication',
      description: 'Streamlined review process with average 6-week turnaround'
    },
    {
      icon: Award,
      title: 'Indexed & Recognized',
      description: 'Indexed in major databases including Scopus and Web of Science'
    }
  ];

  return (
    <div className="bg-background">
      <div className="container-custom py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"> 
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the Journal */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">About the journal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Bitcog Insightive Journal</strong> is a peer-reviewed, open access, inter- and 
                  multidisciplinary scientific journal that is dedicated to expanding access to African 
                  research, increasing intra-African scientific collaboration, and building academic 
                  research capacity in Africa. The journal aims to provide a modern platform for 
                  researchers to share their findings and contribute to the global scientific community.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our focus areas include artificial intelligence, machine learning, data science, 
                  digital transformation, and emerging technologies with particular emphasis on 
                  applications relevant to developing economies and African contexts.
                </p>

                <Button variant="outline" className="mt-4">
                  <FileText className="h-4 w-4 mr-2" />
                  View full aims & scope
                </Button>
              </CardContent>
            </Card>

            {/* Journal Statistics */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6">Journal Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {journalStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="text-center hover-scale">
                      <CardContent className="p-4">
                        <Icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                        <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-6">Why Publish With Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="hover-scale">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Article Publishing Option */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Article publishing option
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Open Access</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Article Publishing Charge (APC): USD 720 (excluding taxes).
                  </p>
                  <p className="text-xs text-primary/80">
                    Review <button className="underline hover:no-underline">this journal's open access policy</button>.
                  </p>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <Button className="w-full mb-3 bg-primary hover:bg-primary/90">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Submit Your Article
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Guide for Authors */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Guide for Authors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Manuscript Preparation:</strong> Authors should prepare their manuscripts according to the journal's formatting guidelines. All submissions must be original work not previously published or under consideration elsewhere.
                  </p>
                  <p>
                    <strong className="text-foreground">Submission Requirements:</strong> Manuscripts should include a title page, abstract (250 words max), keywords, main text, references, and any supplementary materials.
                  </p>
                  <p>
                    <strong className="text-foreground">Review Process:</strong> All submissions undergo a double-blind peer review process. Authors will receive feedback within 6 weeks of submission.
                  </p>
                  <p>
                    <strong className="text-foreground">Formatting:</strong> Use Times New Roman 12pt font, double-spaced, with 1-inch margins. References should follow APA 7th edition format.
                  </p>
                  <p>
                    <strong className="text-foreground">Ethics:</strong> Authors must declare any conflicts of interest and ensure proper ethical approval for research involving human subjects.
                  </p>
                </div>
                <div className="pt-4 border-t">
                  <Button 
                    asChild
                    className="w-full bg-primary/10  hover:bg-primary/20"
                  >
                    <a 
                      href="/BITCOG-Author-Guide.pdf" 
                      download="BITCOG-Author-Guide.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Download Full Guide (PDF)
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto">
                  <div className="py-2">
                    <div className="font-medium">Editorial Board</div>
                    <div className="text-xs text-muted-foreground">Meet our expert reviewers</div>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto">
                  <div className="py-2">
                    <div className="font-medium">Recent Articles</div>
                    <div className="text-xs text-muted-foreground">Latest published research</div>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto">
                  <div className="py-2">
                    <div className="font-medium">Special Issues</div>
                    <div className="text-xs text-muted-foreground">Themed research collections</div>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto">
                  <div className="py-2">
                    <div className="font-medium">Reviewer Guidelines</div>
                    <div className="text-xs text-muted-foreground">Information for peer reviewers</div>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Editorial Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> info@bitcogi.com</p>
                  <p><strong>Phone:</strong> +251913012630</p>
                  <p><strong>Response Time:</strong> Within 24-48 hours</p>
                  <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};