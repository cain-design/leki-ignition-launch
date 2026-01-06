import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Do I need a motorcycle license to ride a LEKI?",
        a: "Yes, LEKI electric motorcycles are ADR approved and road legal, which means you'll need a valid motorcycle license to ride on public roads. The specific license class depends on your state/territory."
      },
      {
        q: "What's included when I purchase a LEKI?",
        a: "Every LEKI comes with the bike, a portable charger, tool kit, owner's manual, and a 3-year comprehensive warranty. We also include a complimentary first service at 1,000km."
      },
      {
        q: "How do I charge my LEKI?",
        a: "Simply plug the included charger into any standard household power outlet (240V). A full charge takes approximately 4 hours. No special installation required."
      }
    ]
  },
  {
    category: "Range & Performance",
    questions: [
      {
        q: "What's the real-world range?",
        a: "The LEKI E1 delivers 160km+ on a single charge under typical commuting conditions. Range varies based on riding style, terrain, and temperature. City commuting typically sees better range than highway riding."
      },
      {
        q: "What's the top speed?",
        a: "The LEKI E1 has a top speed of 110km/h, making it suitable for highway use and perfect for urban commuting."
      },
      {
        q: "How does the regenerative braking work?",
        a: "When you release the throttle or apply the brakes, the motor acts as a generator, converting kinetic energy back into battery power. This extends your range and reduces brake wear."
      }
    ]
  },
  {
    category: "Ownership & Maintenance",
    questions: [
      {
        q: "What maintenance does a LEKI require?",
        a: "Electric motorcycles require significantly less maintenance than petrol bikes. No oil changes, no spark plugs, no fuel filters. Regular maintenance includes brake pads, tyres, and an annual service check."
      },
      {
        q: "What warranty coverage is included?",
        a: "All LEKI motorcycles come with a 3-year comprehensive warranty covering the motor, battery, controller, and all electrical components. The battery is warranted to retain at least 80% capacity for 5 years."
      },
      {
        q: "Where can I get my LEKI serviced?",
        a: "We have a growing network of authorized service partners across Australia. Contact us to find your nearest service location, or we can arrange mobile servicing in many areas."
      }
    ]
  },
  {
    category: "Ordering & Delivery",
    questions: [
      {
        q: "How long does delivery take?",
        a: "Standard delivery within metro areas is 2-4 weeks from order confirmation. Regional deliveries may take slightly longer. We'll keep you updated throughout the process."
      },
      {
        q: "Can I test ride before buying?",
        a: "Absolutely! We encourage all customers to book a test ride. Visit our Test Ride page to schedule a session at a location near you."
      },
      {
        q: "What payment options are available?",
        a: "We accept all major credit cards, bank transfer, and offer financing options through our partner providers. A deposit secures your order, with the balance due before delivery."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-6">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Got Questions?</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-chrome">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about owning and riding a LEKI electric motorcycle.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div 
                key={category.category} 
                className="animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h2 className="text-xl font-semibold text-primary mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.category}-${index}`}
                      className="bg-secondary/30 border border-border rounded-lg px-4 data-[state=open]:bg-secondary/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="text-center mt-16 p-8 bg-secondary/30 rounded-2xl border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors glow-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
