import React from 'react';
import { JournalHeader } from '@/components/JournalHeader';
import { JournalContent } from '@/components/JournalContent';
import { JournalSection } from '@/components/JournalSection';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <JournalHeader />
        <JournalContent />
        <JournalSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default JournalPage;