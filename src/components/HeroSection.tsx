import React from 'react';
import { ArrowRight, PlayCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
         <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80 z-10"></div>
          <img
            src={heroImage}
            alt="AI and Data Science"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 leading-tight px-2">
              Where Data Becomes{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 font-medium max-w-3xl mx-auto px-4">
              Bitcog Insightive leads the way in shaping the digital future, offering visionary consultancy, transformative training, and a pioneering hub for AI and data science research.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="btn-hero group w-full sm:w-auto sm:min-w-[200px]"
              >
                <Link to="/consultancy">
                  BITCOG Consult
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="btn-secondary w-full sm:w-auto sm:min-w-[200px] bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-accent"
              >
                <Link to="/training">BITCOG Learning</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="btn-secondary w-full sm:w-auto sm:min-w-[200px] bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-accent"
              >
                <Link to="/journal">BITCOG Journal</Link>
              </Button>
            </div>

            <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">20+</div>
                <div className="text-xs sm:text-base text-white/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-base text-white/80">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-base text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};