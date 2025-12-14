import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import journalCover from '@/assets/Journal of AI and DS cover.png';

export const JournalHeader: React.FC = () => {
  return (
    <div className="bg-[#1976D2] text-white mt-14   ">
      {/* Main Header - Compact horizontal layout like reference */}
      <div className="container-custom py-4 px-6 sm:px-6  md:h-[10rem] md:relative">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10">
          {/* Journal Cover - Left side */}
          <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-[9rem] md:h-[12rem] flex-shrink-0 shadow-lg border-2 border-black/20 md:absolute top-[-2rem] bottom-0 left-[-2rem]">
            <img
              src={journalCover}
              alt="Bitcog Journal of AI and Data Science Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Journal Info - Center */}
          <div className="flex-1 text-center sm:text-left md:ml-[6rem]">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-1">
              BITCOG Journal of AI and Data Science
            </h1>
            <p className="text-sm sm:text-base text-white/90">
              Open access
            </p>
          </div>

          {/* Metrics - Right side */}
          <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            {/* <div className="text-center border-r border-white/30 pr-4 sm:pr-6">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">TBA</div>
              <div className="text-xs sm:text-sm text-white/80">CiteScore</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold">TBA</div>
              <div className="text-xs sm:text-sm text-white/80">Impact Factor</div>
            </div> */}
            <div className="text-[0.8rem] md:text-[1.3rem] text-white/70"> Journal Metrics (IF, CiteScore): TBA – Coming Soon!</div>
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
