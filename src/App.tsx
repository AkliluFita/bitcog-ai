import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ConsultancyPage from "./pages/ConsultancyPage";
import TrainingPage from "./pages/TrainingPage";
import JournalPage from "./pages/JournalPage";
import BitcogLearningPage from "./pages/BitcogLearningPage";
import History from "./pages/about/History";
import MissionVision from "./pages/about/MissionVision";
import Team from "./pages/about/Team";
import Testimonials from "./pages/about/Testimonials";
import JoinOurTeam from "./pages/about/JoinOurTeam";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PWAInstallPrompt />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultancy" element={<ConsultancyPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/bitcog-learning" element={<BitcogLearningPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          <Route path="/about/join-our-team" element={<JoinOurTeam />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
