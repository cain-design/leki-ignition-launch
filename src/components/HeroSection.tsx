import { Button } from "@/components/ui/button";
import { Zap, Shield, Battery, Volume2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-slide-up">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">ADR Approved • Road Legal • Australian Owned</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up animation-delay-100">
            A Real Motorbike.
            <br />
            <span className="text-gradient">Just Electric.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            No petrol. No gears. No noise. Just twist and go.
            <br />
            Experience the future of riding from <span className="text-primary font-semibold">$7,999</span>
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-300">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              <Zap className="mr-2 h-5 w-5" />
              Build Your LEKI
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
            >
              Book a Test Ride
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 animate-slide-up animation-delay-400">
            <TrustBadge icon={<Battery className="h-5 w-5" />} label="160km+ Range" />
            <TrustBadge icon={<Zap className="h-5 w-5" />} label="4hr Fast Charge" />
            <TrustBadge icon={<Volume2 className="h-5 w-5" />} label="Silent Ride" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="text-primary">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
