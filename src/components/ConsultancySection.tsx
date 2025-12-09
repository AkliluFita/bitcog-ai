import React, { useState } from 'react';
import { Brain, BarChart3, Cpu, Zap, Users, TrendingUp, Database, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { InsightDetailModal } from '@/components/InsightDetailModal';
import consultancyImage from '@/assets/consultancy-service.jpg';

export const ConsultancySection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isInsightModalOpen, setIsInsightModalOpen] = useState(false);
  const services = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Custom AI solutions including machine learning models, natural language processing, and computer vision implementations.',
      tags: ['ML Models', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Comprehensive data analysis, visualization, and business intelligence solutions to drive data-driven decision making.',
      tags: ['Business Intelligence', 'Data Visualization', 'Statistical Analysis']
    },
    {
      icon: Database,
      title: 'Big Data Solutions',
      description: 'Scalable data infrastructure, data engineering pipelines, and cloud-based analytics platforms.',
      tags: ['Data Engineering', 'Cloud Analytics', 'ETL Pipelines']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies, automation, and modernization of business processes.',
      tags: ['Process Automation', 'Cloud Migration', 'Digital Strategy']
    }
  ];

  const caseStudies = [
    {
      client: 'Fortune 500 Retailer',
      challenge: 'Inventory optimization using predictive analytics',
      result: '25% reduction in inventory costs, 15% increase in customer satisfaction',
      industry: 'Retail'
    },
    {
      client: 'Healthcare Network',
      challenge: 'Patient outcome prediction and resource allocation',
      result: '30% improvement in patient care efficiency, $2M annual savings',
      industry: 'Healthcare'
    },
    {
      client: 'Financial Services',
      challenge: 'Fraud detection and risk assessment automation',
      result: '40% reduction in false positives, 95% accuracy in fraud detection',
      industry: 'Finance'
    }
  ];

  const serviceDetails = {
    'Artificial Intelligence': {
      title: 'Artificial Intelligence',
      description: 'Custom AI solutions including machine learning models, natural language processing, and computer vision implementations.',
      longDescription: 'Transform your business with cutting-edge AI technologies. Our comprehensive AI solutions include custom machine learning models, natural language processing, computer vision, and automated decision-making systems tailored to your specific industry needs.',
      features: [
        'Custom Machine Learning Models',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automated Decision Systems',
        'AI Model Deployment & Monitoring'
      ],
      benefits: [
        'Increase operational efficiency by 40-60%',
        'Reduce manual processing time',
        'Improve decision accuracy',
        'Scale intelligent automation',
        'Generate actionable insights from data'
      ],
      processSteps: [
        'Business Requirements Analysis',
        'Data Assessment & Preparation',
        'Model Development & Training',
        'Testing & Validation',
        'Deployment & Integration',
        'Ongoing Support & Optimization'
      ],
      deliverables: [
        'Custom AI/ML Models',
        'Integration Documentation',
        'Performance Reports',
        'Training Materials',
        'Ongoing Support Plan'
      ],
      tags: ['ML Models', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    'Data Analytics': {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis, visualization, and business intelligence solutions to drive data-driven decision making.',
      longDescription: 'Unlock the power of your data with comprehensive analytics solutions. We help organizations transform raw data into actionable insights through advanced statistical analysis, interactive visualizations, and business intelligence platforms.',
      features: [
        'Advanced Statistical Analysis',
        'Interactive Data Visualizations',
        'Business Intelligence Dashboards',
        'Predictive Modeling',
        'Data Mining & Pattern Recognition',
        'Real-time Analytics'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify hidden business opportunities',
        'Optimize operational performance',
        'Reduce costs through insights',
        'Improve customer understanding'
      ],
      processSteps: [
        'Data Discovery & Assessment',
        'Analytics Strategy Development',
        'Data Pipeline Creation',
        'Analysis & Modeling',
        'Visualization Development',
        'Training & Knowledge Transfer'
      ],
      deliverables: [
        'Interactive Dashboards',
        'Statistical Analysis Reports',
        'Data Pipeline Documentation',
        'Training Sessions',
        'Maintenance Guidelines'
      ],
      tags: ['Business Intelligence', 'Data Visualization', 'Statistical Analysis']
    },
    'Big Data Solutions': {
      title: 'Big Data Solutions',
      description: 'Scalable data infrastructure, data engineering pipelines, and cloud-based analytics platforms.',
      longDescription: 'Handle massive volumes of data with our scalable big data solutions. We design and implement robust data infrastructure, efficient ETL pipelines, and cloud-native analytics platforms that can process and analyze petabytes of data.',
      features: [
        'Scalable Data Architecture',
        'Cloud-Native Solutions',
        'Real-time Data Processing',
        'ETL Pipeline Development',
        'Data Lake Implementation',
        'Distributed Computing Solutions'
      ],
      benefits: [
        'Process unlimited data volumes',
        'Reduce infrastructure costs',
        'Enable real-time analytics',
        'Improve data accessibility',
        'Scale on demand'
      ],
      processSteps: [
        'Infrastructure Assessment',
        'Architecture Design',
        'Platform Setup & Configuration',
        'Pipeline Development',
        'Testing & Optimization',
        'Migration & Go-Live'
      ],
      deliverables: [
        'Scalable Data Platform',
        'ETL/ELT Pipelines',
        'Architecture Documentation',
        'Migration Plan',
        'Performance Monitoring Setup'
      ],
      tags: ['Data Engineering', 'Cloud Analytics', 'ETL Pipelines']
    },
    'Digital Transformation': {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation strategies, automation, and modernization of business processes.',
      longDescription: 'Accelerate your digital journey with comprehensive transformation strategies. We help organizations modernize their technology stack, automate business processes, and create digital-first customer experiences.',
      features: [
        'Digital Strategy Development',
        'Process Automation',
        'Legacy System Modernization',
        'Cloud Migration',
        'Digital Customer Experience',
        'Change Management Support'
      ],
      benefits: [
        'Accelerate time-to-market',
        'Reduce operational costs',
        'Improve customer satisfaction',
        'Enable remote work capabilities',
        'Future-proof your business'
      ],
      processSteps: [
        'Digital Maturity Assessment',
        'Transformation Roadmap',
        'Technology Selection',
        'Implementation Planning',
        'Phased Execution',
        'Change Management & Training'
      ],
      deliverables: [
        'Digital Transformation Strategy',
        'Implementation Roadmap',
        'Technology Architecture',
        'Process Documentation',
        'Training Programs'
      ],
      tags: ['Process Automation', 'Cloud Migration', 'Digital Strategy']
    }
  };

  const insightDetails = {
    'The Future of AI in Enterprise': {
      title: 'The Future of AI in Enterprise',
      excerpt: 'Exploring how generative AI is transforming business operations and creating new opportunities for growth.',
      content: `The enterprise AI landscape is undergoing a revolutionary transformation. As generative AI technologies mature, organizations are discovering unprecedented opportunities to enhance productivity, streamline operations, and create innovative customer experiences.

Key areas where AI is making significant impact include:

Customer Service Automation: AI-powered chatbots and virtual assistants are handling increasingly complex customer inquiries, reducing response times and improving satisfaction rates.

Process Optimization: Machine learning algorithms are identifying inefficiencies in business processes, enabling organizations to optimize workflows and reduce operational costs.

Predictive Maintenance: AI systems are analyzing equipment data to predict failures before they occur, minimizing downtime and maintenance costs.

Content Generation: Generative AI is revolutionizing content creation, from marketing materials to technical documentation, enabling teams to focus on higher-value activities.

The integration of AI into enterprise workflows is not just about technology adoption—it's about reimagining how work gets done. Organizations that successfully implement AI solutions are seeing improvements in efficiency, accuracy, and employee satisfaction.

However, successful AI implementation requires careful planning, proper data governance, and a commitment to ongoing learning and adaptation. The future belongs to organizations that can effectively balance automation with human creativity and insight.`,
      author: 'Dr. Sarah Johnson',
      publishDate: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI Trends',
      tags: ['Artificial Intelligence', 'Enterprise', 'Automation', 'Digital Transformation'],
      keyPoints: [
        'Generative AI is transforming traditional business operations',
        'Customer service automation is improving satisfaction rates',
        'Predictive maintenance reduces operational costs significantly',
        'Successful implementation requires strategic planning and governance'
      ]
    },
    'Data Governance Best Practices': {
      title: 'Data Governance Best Practices',
      excerpt: 'Essential strategies for implementing robust data governance frameworks in modern organizations.',
      content: `Data governance has become a critical component of modern business strategy. As organizations generate and collect increasing amounts of data, the need for structured approaches to data management, quality, and security has never been more important.

Effective data governance encompasses several key areas:

Data Quality Management: Establishing processes to ensure data accuracy, completeness, and consistency across all systems and applications.

Privacy and Compliance: Implementing frameworks to meet regulatory requirements such as GDPR, CCPA, and industry-specific standards.

Data Lineage and Cataloging: Creating comprehensive documentation of data sources, transformations, and usage patterns to improve transparency and trust.

Access Control and Security: Defining clear policies for data access, sharing, and protection to prevent breaches and unauthorized usage.

Organizations that excel in data governance typically follow these best practices:

1. Establish clear data ownership and accountability structures
2. Implement automated data quality monitoring and alerting
3. Create self-service data discovery tools for business users
4. Develop comprehensive data classification schemes
5. Regular auditing and compliance monitoring

The benefits of strong data governance extend beyond compliance—they include improved decision-making, increased operational efficiency, and enhanced customer trust. Organizations with mature data governance programs report 25% faster time-to-insight and 30% improvement in data-driven decision accuracy.`,
      author: 'Michael Chen',
      publishDate: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Data Strategy',
      tags: ['Data Governance', 'Compliance', 'Data Quality', 'Privacy'],
      keyPoints: [
        'Data governance is essential for regulatory compliance and business success',
        'Quality management ensures accuracy and consistency across systems',
        'Clear ownership structures improve accountability and decision-making',
        'Automated monitoring reduces manual oversight requirements'
      ]
    },
    'ROI of Digital Transformation': {
      title: 'ROI of Digital Transformation',
      excerpt: 'Measuring and maximizing the return on investment for digital transformation initiatives.',
      content: `Digital transformation initiatives represent significant investments for organizations, making ROI measurement crucial for justifying and optimizing these efforts. Understanding how to measure and maximize returns can mean the difference between successful transformation and costly failures.

Key ROI Metrics for Digital Transformation:

Cost Reduction: Measuring savings from process automation, reduced manual labor, and operational efficiencies. Organizations typically see 15-30% reduction in operational costs within the first year.

Revenue Growth: Tracking new revenue streams, improved customer acquisition, and enhanced customer lifetime value. Digital-first companies often experience 20-40% faster revenue growth.

Productivity Improvements: Quantifying employee productivity gains through improved tools, processes, and automation. Studies show 25-35% productivity improvements in digitally transformed teams.

Customer Experience Enhancement: Measuring improvements in customer satisfaction, retention rates, and Net Promoter Scores. Digital transformation can improve customer satisfaction by 20-50%.

Time-to-Market Acceleration: Tracking how quickly new products or services can be brought to market. Digital processes often reduce time-to-market by 30-60%.

Best Practices for Maximizing ROI:

1. Start with clear baseline measurements before transformation begins
2. Focus on high-impact, low-complexity initiatives first
3. Implement robust change management processes
4. Invest in employee training and adoption programs
5. Continuously monitor and adjust strategies based on results

Organizations that follow these practices typically achieve full ROI within 18-24 months, with continued benefits scaling over time. The key is maintaining focus on measurable outcomes while building capabilities for sustained innovation.`,
      author: 'Jennifer Rodriguez',
      publishDate: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Business Value',
      tags: ['ROI', 'Digital Transformation', 'Business Metrics', 'Performance'],
      keyPoints: [
        'ROI measurement is crucial for digital transformation success',
        'Cost reduction and revenue growth are primary value drivers',
        'Productivity improvements can reach 25-35% in transformed teams',
        'Full ROI typically achieved within 18-24 months with proper planning'
      ]
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceDetails[serviceTitle as keyof typeof serviceDetails]);
    setIsServiceModalOpen(true);
  };

  const handleInsightClick = (insightTitle: string) => {
    setSelectedInsight(insightDetails[insightTitle as keyof typeof insightDetails]);
    setIsInsightModalOpen(true);
  };

  const insights = [
    {
      title: 'The Future of AI in Enterprise',
      excerpt: 'Exploring how generative AI is transforming business operations and creating new opportunities for growth.',
      readTime: '5 min read',
      category: 'AI Trends'
    },
    {
      title: 'Data Governance Best Practices',
      excerpt: 'Essential strategies for implementing robust data governance frameworks in modern organizations.',
      readTime: '7 min read',
      category: 'Data Strategy'
    },
    {
      title: 'ROI of Digital Transformation',
      excerpt: 'Measuring and maximizing the return on investment for digital transformation initiatives.',
      readTime: '6 min read',
      category: 'Business Value'
    }
  ];

  return (
    <section id="consultancy" className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-accent border-primary/20">
            Expert Consultancy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Transform Your Business with{' '}
            <span className="text-accent">AI & Data Science</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help organizations unlock the power of their data through cutting-edge AI solutions, 
            strategic consulting, and innovative technology implementations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="service-card group cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                          <Icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold mb-3 text-accent">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="default"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-accent border-secondary hover:bg-primary hover:text-accent-foreground"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 text-center">
            <CardContent className="p-12">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Industry Insights & Success Stories
              </h3>
              <p className="text-xl text-muted-foreground">
                It will be published soon… Stay tuned!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modals */}
      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
      />

      {/* Insight Detail Modal */}
      <InsightDetailModal 
        insight={selectedInsight}
        isOpen={isInsightModalOpen}
        onClose={() => setIsInsightModalOpen(false)}
      />
    </section>
  );
};