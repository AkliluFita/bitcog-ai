import React from 'react';
import { Search, BookOpen, Users, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import journalCover from '@/assets/journal-header.png';

export const JournalHeader: React.FC = () => {
  return (
    <div className="bg-blue-400 text-white">
      {/* Main Header */}
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Journal Info & Cover */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 mb-8 md:mb-0">
            {/* Journal Cover */}
            <div className="w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={journalCover}
                alt="Bitcog Journal of AI and Data Science Cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Journal Info */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
                BITCOG Journal of AI and Data Science
              </h1>
              <Badge className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Open Access
              </Badge>
              <p className="text-sm sm:text-lg text- max-w-2xl mx-auto sm:mx-0">
                The BITCOG Journal of AI and Data Science is an international, peer-reviewed scholarly journal dedicated to advancing knowledge and fostering innovation in artificial intelligence and data-driven research.
                The journal serves as a platform for academics, researchers, and practitioners to share novel methodologies, empirical studies, and critical insights that shape the future of AI and its societal impact.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-8 text-center">
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 min-w-[100px] sm:min-w-[120px]">
              <div className="text-2xl sm:text-3xl font-bold">2.8</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70">CiteScore</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 min-w-[100px] sm:min-w-[120px]">
              <div className="text-2xl sm:text-3xl font-bold">3.3</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70">Impact Factor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <nav className="flex space-x-8">
              <button className="text-white hover:text-primary-foreground/80 transition-colors flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>Articles & Issues</span>
              </button>
              <button className="text-white hover:text-primary-foreground/80 transition-colors">
                About
              </button>
              <button className="text-white hover:text-primary-foreground/80 transition-colors">
                Publish
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search in this journal"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-primary-foreground/70"
                />
              </div>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Submit your article
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Guide for authors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};