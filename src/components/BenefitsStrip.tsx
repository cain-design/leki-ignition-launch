import { Battery, Clock, DollarSign, Gauge } from "lucide-react";

const benefits = [
  { icon: <Battery className="h-6 w-6" />, value: "160km+", label: "Range" },
  { icon: <Clock className="h-6 w-6" />, value: "4hrs", label: "Full Charge" },
  { icon: <DollarSign className="h-6 w-6" />, value: "$2.33", label: "Per Charge" },
  { icon: <Gauge className="h-6 w-6" />, value: "110km/h", label: "Top Speed" },
];

export function BenefitsStrip() {
  return (
    <section className="py-8 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-2">{benefit.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">{benefit.value}</div>
              <div className="text-sm text-muted-foreground">{benefit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
