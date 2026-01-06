import { Badge } from "@/components/ui/badge";
import { Zap, Volume2, Wrench, GraduationCap, Leaf, Gauge } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant Torque",
    description: "Maximum power from the moment you twist the throttle. No lag, no waiting."
  },
  {
    icon: <Volume2 className="h-8 w-8" />,
    title: "Silent Power",
    description: "Cruise through neighbourhoods without waking anyone. Pure, quiet performance."
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Low Maintenance",
    description: "No oil changes, no spark plugs, no clutch. Just charge and ride."
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Learner Approved",
    description: "LAMS approved for new riders. Perfect for building your confidence."
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Zero Emissions",
    description: "Ride guilt-free knowing you're not contributing to air pollution."
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Twist & Go",
    description: "No gears to learn. Just twist the throttle and go. It's that simple."
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
