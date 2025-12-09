import React from 'react';
import { Search, BookOpen, Users, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import journalCover from '@/assets/Journal of AI and DS cover.png';

export const JournalHeader: React.FC = () => {
  return (
    <div className="bg-accent text-white">
      {/* Main Header */}
      <div className="container-custom py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
          {/* Journal Info & Cover */}
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 sm:gap-6">
            {/* Journal Cover */}
            <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src={journalCover}
                alt="Bitcog Journal of AI and Data Science Cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Journal Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2 px-2 lg:px-0">
                BITCOG Journal of AI and Data Science
              </h1>
              <Badge className="mb-3 sm:mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Open Access
              </Badge>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
                The BITCOG Journal of AI and Data Science is an international, peer-reviewed scholarly journal dedicated to advancing knowledge and fostering innovation in artificial intelligence and data-driven research.
                The journal serves as a platform for academics, researchers, and practitioners to share novel methodologies, empirical studies, and critical insights that shape the future of AI and its societal impact.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-8">
            <div className="bg-white/10 rounded-lg p-2 sm:p-3 md:p-4 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">2.8</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/70">CiteScore</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-3 md:p-4 min-w-[80px] sm:min-w-[100px] md:min-w-[120px] text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">3.3</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/70">Impact Factor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Hidden on mobile, shown on larger screens */}
      <div className="bg-white/10 backdrop-blur-sm hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <nav className="flex space-x-4 lg:space-x-8">
              <button className="text-white hover:text-white/80 transition-colors flex items-center space-x-1 text-sm lg:text-base">
                <BookOpen className="h-4 w-4" />
                <span>Articles & Issues</span>
              </button>
              <button className="text-white hover:text-white/80 transition-colors text-sm lg:text-base">
                About
              </button>
              <button className="text-white hover:text-white/80 transition-colors text-sm lg:text-base">
                Publish
              </button>
            </nav>

            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search in this journal"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs lg:text-sm">
                Submit article
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 text-xs lg:text-sm">
                Guide for authors
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-white/10 backdrop-blur-sm md:hidden">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-2 py-3">
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs">
              <BookOpen className="h-3 w-3 mr-1" />
              Articles
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs">
              Submit
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs">
              Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};