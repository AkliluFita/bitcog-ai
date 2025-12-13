import React from 'react';
import { X, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePWAInstall } from '@/hooks/usePWAInstall';

export const PWAInstallPrompt: React.FC = () => {
  const { showPrompt, installApp, dismissPrompt, isInstallable } = usePWAInstall();

  if (!showPrompt || !isInstallable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-fade-in">
      <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-4 relative">
          <button
            onClick={dismissPrompt}
            className="absolute top-3 right-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary-foreground">
                Install BITCOG App
              </h3>
              <p className="text-sm text-primary-foreground/80">
                Get quick access anytime
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            Install our app for a better experience with faster loading, offline access, and easy home screen access.
          </p>

          <div className="flex gap-3">
            <Button
              onClick={installApp}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Download className="h-4 w-4 mr-2" />
              Install App
            </Button>
            <Button
              variant="outline"
              onClick={dismissPrompt}
              className="flex-shrink-0"
            >
              Not Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
