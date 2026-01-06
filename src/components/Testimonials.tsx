import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mitch G.",
    location: "Sydney, NSW",
    rating: 5,
    text: "Pulls Hard – Thought electric might feel soft. It's not. Sport mode is wild, you twist and it just goes.",
    bike: "E1 10000W"
  },
  {
    name: "Sarah T.",
    location: "Melbourne, VIC",
    rating: 5,
    text: "Just twist and ride... smoother than my last scooter and twice as fun. No gears to worry about, just pure enjoyment.",
    bike: "E1 5000W"
  },
  {
    name: "Chris L.",
    location: "Brisbane, QLD",
    rating: 5,
    text: "Surprisingly powerful. This bike moves. Sport mode is exactly what I needed for highway merging. The torque is instant.",
    bike: "E1 10000W"
  },
  {
    name: "Jess M.",
    location: "Perth, WA",
    rating: 5,
    text: "Feels like the future is here. Neighbours used to complain about my old bike. Now they wave as I silently cruise past!",
    bike: "E1 5000W"
  },
  {
    name: "Alex B.",
    location: "Adelaide, SA",
    rating: 5,
    text: "The build quality is fantastic. Australian roads can be tough but this thing handles everything. Customer service was excellent too.",
    bike: "E1 10000W"
  },
  {
    name: "Emma L.",
    location: "Gold Coast, QLD",
    rating: 5,
    text: "Perfect learner bike. No clutch, no stalling, just pure confidence. Saving about $200 a month on fuel is the cherry on top.",
    bike: "E1 5000W"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Real Riders. Real Reviews.</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Riders <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't take our word for it. Hear from the LEKI community.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-lg font-medium">4.9 out of 5</span>
          <span className="text-muted-foreground">from 21+ verified riders</span>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border transition-all duration-300 hover:border-primary/30"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <Badge variant="secondary">{testimonial.bike}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
