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
import { Clock, User, Calendar, Share, BookOpen } from 'lucide-react';

interface InsightDetail {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  keyPoints: string[];
}

interface InsightDetailModalProps {
  insight: InsightDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InsightDetailModal: React.FC<InsightDetailModalProps> = ({ 
  insight, 
  isOpen, 
  onClose 
}) => {
  if (!insight) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-primary text-accent-foreground">
              {insight.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-accent">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {insight.readTime}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {insight.publishDate}
              </div>
            </div>
          </div>
          
          <DialogTitle className="text-2xl font-heading font-bold text-accent mb-3">
            {insight.title}
          </DialogTitle>
          
          <div className="flex items-center mb-4">
            <User className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm text-accent">By {insight.author}</span>
          </div>
          
          <DialogDescription className="text-base text-accent">
            {insight.excerpt}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Key Points */}
          <div className="bg-primary/5 rounded-lg p-6">
            <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
              <BookOpen className="h-5 w-5 text-accent mr-2" />
              Key Insights
            </h4>
            <ul className="space-y-2">
              {insight.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-sm text-accent">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-sm max-w-none">
            <div className="text-accent whitespace-pre-line leading-relaxed">
              {insight.content}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button variant="outline" className="flex items-center">
              <Share className="h-4 w-4 mr-2" />
              Share Article
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline">
                Related Articles
              </Button>
              <Button className="bg-secondary text-accent-foreground hover:bg-secondary/90">
                Contact Expert
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};