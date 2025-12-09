import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  FileText,
  Users,
  Award,
  Globe,
  CheckCircle,
  Upload,
  Mail,
  Calendar,
  Star,
  BarChart3,
  Target
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const JournalOverview: React.FC = () => {
  const journalStats = [
    { label: 'Impact Factor', value: '4.2', icon: BarChart3 },
    { label: 'Articles Published', value: '150+', icon: FileText },
    { label: 'Review Time', value: '6 weeks', icon: Calendar },
    { label: 'Acceptance Rate', value: '35%', icon: Target }
  ];

  const submissionGuidelines = [
    {
      title: 'Manuscript Requirements',
      content: `
        • Original research articles, review papers, or technical reports
        • Length: 3,000-8,000 words for research articles, up to 12,000 for reviews
        • Format: Double-spaced, 12pt Times New Roman font
        • Include abstract (250 words max), keywords (3-8 terms)
        • References should follow APA style guidelines
        • All submissions must be in English
      `
    },
    {
      title: 'Submission Format',
      content: `
        • Submit manuscripts in PDF or DOCX format
        • Maximum file size: 10MB
        • Include all figures and tables within the document
        • Supplementary materials should be submitted separately
        • Ensure all author information is complete and accurate
        • Include conflict of interest statements
      `
    },
    {
      title: 'Review Process',
      content: `
        • Initial editorial screening within 2 weeks
        • Double-blind peer review by at least 2 expert reviewers
        • Peer review process: 4-6 weeks for most manuscripts
        • Authors receive detailed feedback and revision requests
        • Final decision communicated within 8-10 weeks
        • Fast-track option available for exceptional submissions
      `
    },
    {
      title: 'Publication Ethics',
      content: `
        • All submissions must be original and not published elsewhere
        • Proper attribution of sources and avoiding plagiarism
        • Declaration of conflicts of interest required
        • Adherence to ethical standards in research methodology
        • Data availability and reproducibility requirements
        • Authors retain copyright with Creative Commons licensing
      `
    }
  ];

  const journalFeatures = [
    {
      icon: Globe,
      title: 'Open Access',
      description: 'Free access to all published articles for the global research community'
    },
    {
      icon: Users,
      title: 'Expert Review Board',
      description: 'International editorial board of leading researchers and practitioners'
    },
    {
      icon: Award,
      title: 'High Impact',
      description: 'Indexed in major databases including PubMed, Scopus, and Web of Science'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Rigorous peer review process ensuring publication excellence'
    }
  ];

  const submissionProcess = [
    {
      step: 1,
      title: 'Manuscript Preparation',
      description: 'Prepare your manuscript according to our guidelines and formatting requirements'
    },
    {
      step: 2,
      title: 'Online Submission',
      description: 'Submit through our online portal with all required information and files'
    },
    {
      step: 3,
      title: 'Editorial Review',
      description: 'Initial screening by editorial team for scope and quality assessment'
    },
    {
      step: 4,
      title: 'Peer Review',
      description: 'Double-blind review by expert reviewers in your field'
    },
    {
      step: 5,
      title: 'Revision & Decision',
      description: 'Author revisions based on reviewer feedback and final editorial decision'
    },
    {
      step: 6,
      title: 'Publication',
      description: 'Accepted manuscripts are published online and indexed in major databases'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            BITCOG Journal of AI &  <span className="text-accent">Data scienc</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The BITCOG Journal of AI and Data Science is an international, peer-reviewed scholarly journal dedicated to advancing knowledge and fostering innovation in artificial intelligence and data-driven research. The journal serves as a platform for academics, researchers,
            and practitioners to share novel methodologies, empirical studies, and critical insights that shape the future of AI and its societal impact.
          </p>
        </div>

        {/* Journal Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {journalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="service-card hover-scale text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About the Journal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BookOpen className="h-6 w-6 mr-3 text-accent" />
                  About the Journal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  The Bitcog Insightive Journal is a leading publication in the field of artificial intelligence,
                  machine learning, and data science. We publish high-quality research that advances theoretical
                  understanding and practical applications in computational intelligence.
                </p>

                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-lg">Publication Focus Areas:</h4>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Machine Learning & Deep Learning',
                      'Natural Language Processing',
                      'Computer Vision & Image Processing',
                      'Data Mining & Analytics',
                      'AI Ethics & Explainable AI',
                      'Computational Intelligence',
                      'Big Data Technologies',
                      'AI Applications in Industry'
                    ].map((area, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Journal Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {journalFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submission Process */}
        <div className="bg-background rounded-3xl p-8 shadow-lg mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Submission <span className="text-accent">Process</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined submission process ensures efficient handling of your manuscript
              from submission to publication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {submissionProcess.map((process, index) => (
              <Card
                key={index}
                className="card-hover border-t-4 border-t-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-accent-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-heading font-semibold mb-3">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <div className="bg-background rounded-3xl p-8 shadow-lg mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Submission <span className="text-accent">Guidelines</span>
            </h3>
            <p className="text-muted-foreground">
              Please review our comprehensive guidelines before submitting your manuscript
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {submissionGuidelines.map((guideline, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-heading font-semibold">
                  {guideline.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-sm text-muted-foreground whitespace-pre-line bg-background-secondary p-4 rounded-lg">
                    {guideline.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Quick Submission Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Upload className="h-8 w-8 text-green-500 mr-3" />
                <h4 className="font-heading font-semibold">Easy Submission</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Submit your manuscript through our user-friendly online portal with step-by-step guidance.
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Start Submission
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-blue-500 mr-3" />
                <h4 className="font-heading font-semibold">Editorial Support</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Get support from our editorial team throughout the submission and review process.
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Contact Editors
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-purple-500 mr-3" />
                <h4 className="font-heading font-semibold">Template Downloads</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Download manuscript templates and style guides to ensure proper formatting.
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Download Templates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <Award className="h-12 w-12 text-accent mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold mb-4">
                Ready to Share Your Research?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the global community of researchers advancing the field of artificial intelligence
                and data science through quality academic publication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  Submit Manuscript
                </Button>
                <Button size="lg" variant="outline">
                  Browse Published Articles
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};