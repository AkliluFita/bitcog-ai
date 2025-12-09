import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';
import { RecommendedSection } from '@/components/RecommendedSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { HeroSection } from '@/components';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling navigation
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Section */}
     <HeroSection/>

      {/* Recommended Section */}
      <RecommendedSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;