import React, { useState } from 'react';
import { Download, FileText, Calendar, Award, Users, Building, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export const ResourcesSection: React.FC = () => {
  const [downloadingItems, setDownloadingItems] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const resources = [
    {
      id: 'course-brochure',
      title: 'Complete Course Brochure',
      description: 'Comprehensive overview of all our training programs, schedules, and pricing.',
      type: 'PDF',
      size: '2.3 MB',
      icon: BookOpen,
      category: 'Training',
      downloadUrl: 'https://example.com/brochures/complete-course-brochure.pdf'
    },
    {
      id: 'training-schedule',
      title: '2024 Training Schedule',
      description: 'Full calendar of upcoming training sessions, workshops, and certification programs.',
      type: 'PDF',
      size: '1.8 MB',
      icon: Calendar,
      category: 'Training',
      downloadUrl: 'https://example.com/schedules/2024-training-schedule.pdf'
    },
    {
      id: 'certification-info',
      title: 'Certification & Accreditation Info',
      description: 'Details about our industry-recognized certifications and accreditation partners.',
      type: 'PDF',
      size: '1.5 MB',
      icon: Award,
      category: 'Certification',
      downloadUrl: 'https://example.com/certifications/certification-guide.pdf'
    },
    {
      id: 'corporate-training',
      title: 'Corporate Training Solutions',
      description: 'Customized training programs designed for enterprise teams and organizations.',
      type: 'PDF',
      size: '2.1 MB',
      icon: Users,
      category: 'Corporate',
      downloadUrl: 'https://example.com/corporate/corporate-training.pdf'
    },
    {
      id: 'ai-whitepaper',
      title: 'AI Implementation Whitepaper',
      description: 'Strategic guide for implementing AI solutions in enterprise environments.',
      type: 'PDF',
      size: '3.2 MB',
      icon: TrendingUp,
      category: 'Research',
      downloadUrl: 'https://example.com/whitepapers/ai-implementation.pdf'
    },
    {
      id: 'data-governance',
      title: 'Data Governance Framework',
      description: 'Best practices and templates for implementing data governance in your organization.',
      type: 'PDF',
      size: '2.7 MB',
      icon: Building,
      category: 'Governance',
      downloadUrl: 'https://example.com/frameworks/data-governance.pdf'
    },
    {
      id: 'case-studies',
      title: 'Success Stories & Case Studies',
      description: 'Real-world examples of successful AI and data science implementations.',
      type: 'PDF',
      size: '4.1 MB',
      icon: FileText,
      category: 'Case Studies',
      downloadUrl: 'https://example.com/case-studies/success-stories.pdf'
    },
    {
      id: 'roi-calculator',
      title: 'AI ROI Calculator Tool',
      description: 'Interactive tool to calculate potential return on investment for AI projects.',
      type: 'XLSX',
      size: '0.8 MB',
      icon: TrendingUp,
      category: 'Tools',
      downloadUrl: 'https://example.com/tools/ai-roi-calculator.xlsx'
    }
  ];

  const categories = ['All', 'Training', 'Corporate', 'Research', 'Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const handleDownload = async (resource: any) => {
    // Start download animation
    setDownloadingItems(prev => new Set([...prev, resource.id]));
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would fetch the actual file
      // const response = await fetch(resource.downloadUrl);
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      
      // For demo purposes, we'll create a dummy download
      const link = document.createElement('a');
      link.href = '#'; // In real app: link.href = url;
      link.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}.${resource.type.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started",
        description: `${resource.title} is being downloaded.`,
      });
      
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the file. Please try again.",
        variant: "destructive"
      });
    } finally {
      // End download animation
      setDownloadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(resource.id);
        return newSet;
      });
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            Resources & Downloads
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Resources & <span className="text-accent">Brochures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive collection of guides, brochures, and tools to help you 
            on your AI and data science journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;
            const isDownloading = downloadingItems.has(resource.id);
            
            return (
              <Card key={resource.id} className="service-card group h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs mb-1">
                        {resource.category}
                      </Badge>
                      <div className="text-xs text-accent">
                        {resource.type} • {resource.size}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold mb-2 text-sm">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full mt-auto"
                    onClick={() => handleDownload(resource)}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Need Something Specific?
              </h3>
              <p className="text-accent mb-6">
                Can't find what you're looking for? Contact us for custom resources 
                or additional materials tailored to your needs.
              </p>
              <Button className="btn-hero">
                Request Custom Resources
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};