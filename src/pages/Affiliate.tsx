import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { 
  Users, 
  DollarSign, 
  Share2, 
  TrendingUp,
  Check,
  Zap,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Generous Commissions",
    description: "Earn competitive commissions on every sale you refer. The more you sell, the more you earn."
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "Marketing Support",
    description: "Get access to professional marketing materials, images, and content to help you promote LEKI."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Real-Time Tracking",
    description: "Track your referrals and earnings with our easy-to-use affiliate dashboard."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Growing Community",
    description: "Join a community of passionate electric vehicle advocates and motorcycle enthusiasts."
  }
];

export default function Affiliate() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    socialMedia: "",
    audience: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Application submitted!", {
      description: "We'll review your application and get back to you within 48 hours."
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      website: "",
      socialMedia: "",
      audience: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4">Partner With Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Become a <span className="text-gradient">LEKI Affiliate</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Love electric motorcycles? Earn money sharing LEKI with your audience. 
              Join our affiliate program and help accelerate the electric revolution.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-muted-foreground text-sm">Fill out the application form below. We'll review it within 48 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Share</h3>
                <p className="text-muted-foreground text-sm">Get your unique referral link and start sharing with your audience.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Earn</h3>
                <p className="text-muted-foreground text-sm">Earn commission on every sale made through your referral link.</p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Apply Now</h2>
                  <p className="text-muted-foreground">
                    Tell us about yourself and how you'd promote LEKI.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Website or Blog URL</label>
                    <Input
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Social Media Handles</label>
                    <Input
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleChange}
                      placeholder="@instagram, @youtube, @tiktok"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tell us about your audience *</label>
                    <Textarea
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Who is your audience? What niche are you in? How many followers/subscribers do you have?"
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">How would you promote LEKI?</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us your ideas for promoting LEKI to your audience..."
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Trust points */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Free to join
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      No minimum sales
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Monthly payouts
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      Dedicated support
                    </div>
                  </div>
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
