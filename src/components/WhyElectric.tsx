import { Badge } from "@/components/ui/badge";
import { Zap, Volume2, Plug, GraduationCap, Shield, Gauge } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "INSTANT TORQUE. SILENT PULL.",
    description: "Full torque from zero. Smooth, punchy acceleration. No revs. No waiting. This is the fun part."
  },
  {
    icon: <Volume2 className="h-8 w-8" />,
    title: "NO NOISE. ALL ATTITUDE.",
    description: "Cruise through neighbourhoods without waking anyone. Your neighbours will wave, not complain."
  },
  {
    icon: <Plug className="h-8 w-8" />,
    title: "CHARGE IT LIKE YOUR PHONE",
    description: "No oil changes, no spark plugs, no fuel stops. Plug in at home. Charge overnight. Ride."
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "ANYONE CAN RIDE A LEKI",
    description: "No clutch. No stalling. Twist & go. Easy in traffic. LAMS approved for new riders."
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "BUILT FOR AUSSIE ROADS",
    description: "ADR approved. VTA064802. Register it like any other bike. Ride it Australia-wide."
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "NOT A TOY. BUT LOTS OF FUN.",
    description: "Up to 340 Nm motor torque. Top speed 140km/h+. This thing moves."
  }
];

export function WhyElectric() {
  return (
    <section id="why-electric" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">The Electric Advantage</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Go <span className="text-gradient">Electric</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            It's not just about saving money. It's about a better riding experience.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
