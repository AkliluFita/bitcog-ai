import React from 'react';
import { TrainingSection } from '@/components/TrainingSection';
import { TrainingOverview } from '@/components/TrainingOverview';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <TrainingOverview />
        {/* <TrainingSection /> */}
        <ContactSection />
      </div>
    </div>
  );
};

export default TrainingPage;