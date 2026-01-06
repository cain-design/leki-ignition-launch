import { Button } from "@/components/ui/button";
import { Zap, Shield, Battery, Volume2, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/leki-hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>
      
      {/* Animated silver glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] animate-pulse z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse animation-delay-500 z-[1]" />
      
      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {[...Array(6)].map((_, i) => (
          <Sparkles 
            key={i} 
            className="absolute text-primary/40 animate-sparkle" 
            style={{ 
              top: `${15 + i * 15}%`, 
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.4}s`,
              width: 16 + (i % 3) * 6,
              height: 16 + (i % 3) * 6
            }} 
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-8 animate-slide-up shimmer">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">ADR Approved • Road Legal • Australian Owned</span>
          </div>
          
          {/* Main headline - commute focused */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-up animation-delay-100">
            <span className="text-chrome">The New Way</span>
            <br />
            <span className="text-silver">To Commute.</span>
          </h1>
          
          {/* Subtitle - commute benefits */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Skip the traffic. Skip the petrol station. Skip the noise.
            <br />
            <span className="text-primary font-medium">Silent, electric commuting</span> from just <span className="text-chrome font-semibold">$7,999</span>
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-300">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-sparkle shimmer"
            >
              <Zap className="mr-2 h-5 w-5" />
              Build Your LEKI
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
            >
              Book a Test Ride
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 animate-slide-up animation-delay-400">
            <TrustBadge icon={<Battery className="h-5 w-5" />} label="160km+ Range" />
            <TrustBadge icon={<Zap className="h-5 w-5" />} label="4hr Fast Charge" />
            <TrustBadge icon={<Volume2 className="h-5 w-5" />} label="Silent Commute" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground group">
      <div className="text-primary group-hover:animate-sparkle transition-all">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
