import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  processSteps: string[];
  deliverables: string[];
  tags: string[];
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ 
  service, 
  isOpen, 
  onClose 
}) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            {service.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <DialogTitle className="text-2xl font-heading font-bold text-accent">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {service.longDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Features & Benefits */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                <Award className="h-5 w-5 text-accent mr-2" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-accent">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                <Users className="h-5 w-5 text-accent mr-2" />
                Benefits
              </h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-accent">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process & Deliverables */}
          <div className="space-y-6">
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                <Clock className="h-5 w-5 text-accent mr-2" />
                Our Process
              </h4>
              <div className="space-y-3">
                {service.processSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-accent-foreground rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm text-accent">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">
                Deliverables
              </h4>
              <ul className="space-y-2 mb-6">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-accent">{deliverable}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-secondary text-accent hover:bg-secondary/90 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};