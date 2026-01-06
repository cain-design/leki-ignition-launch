import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("klaviyo-subscribe", {
        body: { 
          email,
          source: "website_footer",
        },
      });

      if (error) throw error;

      toast.success("You're in!", {
        description: "Welcome to the LEKI community. Check your inbox soon.",
      });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Subscription failed", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            NO FUEL. NO NOISE. <span className="text-gradient">ALL ATTITUDE.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the electric revolution. Build your LEKI today and experience the future of riding.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              <Zap className="mr-2 h-5 w-5" />
              Build Your LEKI from $7,999
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
            >
              Book a Test Ride
            </Button>
          </div>

          {/* Newsletter */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">WANT MORE INFO? GET THE BOLT.</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              All things LEKI. Updates, tips, and exclusive offers. No spam. Ever.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-secondary border-border"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
              <Button 
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}