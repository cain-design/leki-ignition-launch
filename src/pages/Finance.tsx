import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  Check, 
  Clock, 
  CreditCard, 
  FileText,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";

const financeOptions = [
  {
    name: "Zip Money",
    description: "Interest-free payment plans up to 24 months on approved purchases.",
    features: ["No deposit required", "Weekly or fortnightly payments", "Instant online approval"],
    link: "https://zip.co"
  },
  {
    name: "Humm",
    description: "Flexible payment plans with little to no interest options available.",
    features: ["Buy now, pay later", "Up to 60 months terms", "Simple online application"],
    link: "https://humm.com"
  },
  {
    name: "Latitude",
    description: "Personal loans and credit options with competitive rates.",
    features: ["Fixed repayments", "Flexible terms", "Rate tailored to you"],
    link: "https://latitudefinancial.com.au"
  }
];

export default function Finance() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4">Flexible Payment Options</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Finance Your <span className="text-gradient">LEKI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Don't let budget hold you back. We've partnered with Australia's leading finance providers 
              to make owning a LEKI more accessible than ever.
            </p>
          </div>

          {/* Example payment */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">From just $65/week*</h2>
                <p className="text-muted-foreground mb-4">
                  Own a LEKI E1 5000W with affordable weekly payments
                </p>
                <p className="text-sm text-muted-foreground">
                  *Based on $7,999 over 36 months with approved finance. Comparison rate and fees may vary.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Finance Partners */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Finance Partners</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {financeOptions.map((option, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={option.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How Finance Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Choose Your LEKI</h3>
                <p className="text-muted-foreground text-sm">Select the model that suits your riding needs.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Select Finance</h3>
                <p className="text-muted-foreground text-sm">Choose your preferred finance partner at checkout.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Get Approved</h3>
                <p className="text-muted-foreground text-sm">Quick online application with instant decisions.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold mb-2">Start Riding</h3>
                <p className="text-muted-foreground text-sm">Your LEKI is on its way. Ride now, pay later.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Instant Decisions</h3>
                    <p className="text-muted-foreground text-sm">Most applications are approved within minutes. No lengthy waits.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <CreditCard className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Flexible Terms</h3>
                    <p className="text-muted-foreground text-sm">Choose weekly, fortnightly, or monthly payments that suit your budget.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">No Hidden Fees</h3>
                    <p className="text-muted-foreground text-sm">Transparent pricing with all costs explained upfront.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Easy Application</h3>
                    <p className="text-muted-foreground text-sm">Simple online forms. Just ID and income details required.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <Card className="bg-secondary/50 border-border">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  Browse our bikes and select your preferred finance option at checkout. 
                  Questions? Our team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/#bikes">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Zap className="mr-2 h-5 w-5" />
                      Shop Bikes
                    </Button>
                  </a>
                  <a href="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
