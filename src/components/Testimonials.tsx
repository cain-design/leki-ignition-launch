import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    location: "Sydney, NSW",
    rating: 5,
    text: "Absolute game changer. I was skeptical about electric but the torque and power delivery is incredible. No more fuel costs and I love being able to charge at home.",
    bike: "E1 10000W"
  },
  {
    name: "Sarah T.",
    location: "Melbourne, VIC",
    rating: 5,
    text: "Perfect for my daily commute. Silent, powerful, and so easy to ride. As a learner, the twist-and-go made learning so much less stressful.",
    bike: "E1 5000W"
  },
  {
    name: "James K.",
    location: "Brisbane, QLD",
    rating: 5,
    text: "The build quality is fantastic. Australian roads can be tough but this thing handles everything. Customer service was excellent too.",
    bike: "E1 10000W"
  },
  {
    name: "Emma L.",
    location: "Perth, WA",
    rating: 5,
    text: "Neighbours used to complain about my old bike. Now they wave as I silently cruise past. Plus I'm saving about $200 a month on fuel!",
    bike: "E1 5000W"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Riders Love <span className="text-gradient">LEKI</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of happy riders across Australia.
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
          <span className="text-muted-foreground">from 21+ reviews</span>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
