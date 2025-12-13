import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  FileText, 
  Upload, 
  Send, 
  CheckCircle, 
  Users, 
  Calendar,
  Award,
  TrendingUp,
  BookOpen,
  PenTool,
  Target,
  Clock,
  Mail,
  User,
  MessageSquare,
  FileCheck
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const JournalSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    manuscriptTitle: '',
    coverMessage: '',
    manuscript: null as File | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, manuscript: 'Please upload a PDF or DOCX file only.' }));
        return;
      }

      if (file.size > maxSize) {
        setErrors(prev => ({ ...prev, manuscript: 'File size must be less than 10MB.' }));
        return;
      }

      setFormData(prev => ({ ...prev, manuscript: file }));
      setErrors(prev => ({ ...prev, manuscript: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.authorName.trim()) newErrors.authorName = 'Author name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!formData.manuscriptTitle.trim()) newErrors.manuscriptTitle = 'Manuscript title is required';
    if (!formData.manuscript) newErrors.manuscript = 'Please upload your manuscript';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Manuscript Submitted Successfully!",
      description: "We'll review your submission and get back to you within 2-3 business days.",
    });
  };

  const submissionGuidelines = [
    {
      title: 'Manuscript Requirements',
      content: 'Manuscripts should be original research papers, review articles, or case studies in AI, machine learning, data science, or related fields. Word count: 3,000-8,000 words including references.'
    },
    {
      title: 'Format & Style',
      content: 'Use standard academic format with clear headings, proper citations (APA style), and high-quality figures/tables. Include abstract (150-250 words) and 4-6 keywords.'
    },
    {
      title: 'Review Process',
      content: 'All submissions undergo double-blind peer review. Initial review takes 2-3 weeks, with full review process completed within 6-8 weeks. Authors receive detailed feedback.'
    },
    {
      title: 'Publication Ethics',
      content: 'Ensure originality, proper attribution, and adherence to research ethics. Conflicts of interest must be declared. Plagiarism screening is conducted on all submissions.'
    }
  ];

  const journalStats = [
    { icon: Award, label: 'Impact Factor', value: '2.8', color: 'text-blue-600' },
    { icon: TrendingUp, label: 'Acceptance Rate', value: '35%', color: 'text-green-600' },
    { icon: Users, label: 'Editorial Board', value: '25+', color: 'text-purple-600' },
    { icon: Calendar, label: 'Avg. Review Time', value: '6 weeks', color: 'text-orange-600' }
  ];

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-background to-background-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-bold mb-4">Thank You!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your manuscript has been successfully submitted to Bitcog Insightive Journal.
              Our editorial team will review your submission and contact you within 2-3 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Manuscript
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-background to-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Academic Publishing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Submit to <span className="text-accent">BITCOG Journal of AI and Data Science</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your cutting-edge research with the global AI and data science community. 
            Our peer-reviewed journal publishes high-impact research that drives innovation forward.
          </p>
        </div>

        {/* Journal Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {journalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Submission Form */}
          <Card className="animate-fade-in border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="flex items-center text-2xl font-heading">
                <PenTool className="mr-3 h-6 w-6 text-accent" />
                Submit Your Manuscript
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="authorName" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Author Name *
                    </Label>
                    <Input
                      id="authorName"
                      placeholder="Dr. Jane Smith"
                      value={formData.authorName}
                      onChange={(e) => handleInputChange('authorName', e.target.value)}
                      className={errors.authorName ? 'border-red-500' : ''}
                    />
                    {errors.authorName && (
                      <p className="text-red-500 text-sm">{errors.authorName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane.smith@university.edu"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manuscriptTitle" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    Manuscript Title *
                  </Label>
                  <Input
                    id="manuscriptTitle"
                    placeholder="Novel Approaches to Deep Learning in Healthcare Applications"
                    value={formData.manuscriptTitle}
                    onChange={(e) => handleInputChange('manuscriptTitle', e.target.value)}
                    className={errors.manuscriptTitle ? 'border-red-500' : ''}
                  />
                  {errors.manuscriptTitle && (
                    <p className="text-red-500 text-sm">{errors.manuscriptTitle}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manuscript" className="flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Manuscript * (PDF or DOCX, max 10MB)
                  </Label>
                  <div className="relative">
                    <Input
                      id="manuscript"
                      type="file"
                      accept=".pdf,.docx"
                      onChange={handleFileChange}
                      className={`file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 ${errors.manuscript ? 'border-red-500' : ''}`}
                    />
                    {formData.manuscript && (
                      <div className="mt-2 flex items-center text-sm text-green-600">
                        <FileCheck className="mr-2 h-4 w-4" />
                        {formData.manuscript.name}
                      </div>
                    )}
                  </div>
                  {errors.manuscript && (
                    <p className="text-red-500 text-sm">{errors.manuscript}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverMessage" className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Cover Message (Optional)
                  </Label>
                  <Textarea
                    id="coverMessage"
                    placeholder="Brief note to the editors about your manuscript, its significance, and why it's suitable for Bitcog Insightive Journal..."
                    value={formData.coverMessage}
                    onChange={(e) => handleInputChange('coverMessage', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Manuscript
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-2 ">
              <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                <CardTitle className="flex items-center">
                  <Target className="mr-3 h-6 w-6 text-accent" />
                  Submission Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {submissionGuidelines.map((guideline, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        {guideline.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {guideline.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-accent" />
                  Editorial Office
                </h3>
                <p className="text-muted-foreground mb-4">
                  For questions about submissions, editorial policies, or technical issues:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> info@bitcogi.com</p>
                  <p><strong>Response Time:</strong> Within 24-48 hours</p>
                  <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};