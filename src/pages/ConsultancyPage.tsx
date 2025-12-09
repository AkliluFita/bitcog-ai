import React from "react";
import { ConsultancySection } from "@/components/ConsultancySection";
import { ConsultancyOverview } from "@/components/ConsultancyOverview";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";

const ConsultancyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ConsultancyOverview />
        <ConsultancySection />
        <ProcessSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default ConsultancyPage;
