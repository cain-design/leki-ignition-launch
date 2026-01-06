import { Battery, Clock, DollarSign, Car } from "lucide-react";

const benefits = [
  { icon: <Battery className="h-6 w-6" />, value: "160km+", label: "Range. Done." },
  { icon: <Clock className="h-6 w-6" />, value: "4hrs", label: "Plug in. Sleep. Ride." },
  { icon: <DollarSign className="h-6 w-6" />, value: "$2.33", label: "Per Full Charge*" },
  { icon: <Car className="h-6 w-6" />, value: "Lane", label: "Filter. Everywhere." },
];

export function BenefitsStrip() {
  return (
    <section className="py-10 bg-metallic border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-2 group-hover:animate-sparkle transition-all">{benefit.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-chrome">{benefit.value}</div>
              <div className="text-sm text-muted-foreground">{benefit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
