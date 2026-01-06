import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "hello@leki.com.au",
    href: "mailto:hello@leki.com.au"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "1300 LEKI AU",
    href: "tel:1300535428"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Headquarters",
    value: "Sydney, Australia",
    href: null
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Support Hours",
    value: "Mon-Fri 9am-6pm AEST",
    href: null
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-6">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-chrome">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question? We're here to help. Reach out and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="animate-slide-up">
                  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={info.label}
                        className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-primary mt-0.5">{info.icon}</div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-primary/10 rounded-xl border border-primary/20 animate-slide-up animation-delay-300">
                  <h3 className="font-semibold mb-2">Looking to book a test ride?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience the LEKI in person at one of our test ride locations.
                  </p>
                  <a 
                    href="/test-ride"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Book a Test Ride →
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 animate-slide-up animation-delay-200">
                {submitted ? (
                  <div className="bg-secondary/20 rounded-2xl p-8 border border-border text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-chrome">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-secondary/20 rounded-2xl p-6 md:p-8 border border-border">
                    <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                      >
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="What's this about?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="service">Service & Maintenance</SelectItem>
                          <SelectItem value="parts">Parts & Accessories</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 mb-6">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required
                        rows={6}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
