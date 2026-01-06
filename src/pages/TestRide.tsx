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
import { Calendar, MapPin, Bike, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const locations = [
  { id: "sydney", name: "Sydney - Alexandria", address: "123 Bike Lane, Alexandria NSW 2015" },
  { id: "melbourne", name: "Melbourne - Richmond", address: "456 Electric Ave, Richmond VIC 3121" },
  { id: "brisbane", name: "Brisbane - Fortitude Valley", address: "789 Volt Street, Fortitude Valley QLD 4006" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export default function TestRide() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    date: "",
    time: "",
    licenseType: "",
    experience: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setSubmitted(true);
    toast.success("Test ride booked!", {
      description: "We'll send you a confirmation email shortly."
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center animate-slide-up">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-chrome">You're All Set!</h1>
              <p className="text-muted-foreground mb-8">
                Your test ride has been booked. We've sent a confirmation to your email 
                with all the details. See you soon!
              </p>
              <div className="bg-secondary/30 rounded-xl p-6 border border-border mb-8">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{locations.find(l => l.id === formData.location)?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-medium">{formData.date} at {formData.time}</p>
                  </div>
                </div>
              </div>
              <a 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-6">
              <Bike className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Experience the Future</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-chrome">
              Book a Test Ride
            </h1>
            <p className="text-xl text-muted-foreground">
              Feel the silent power of electric. Book your free test ride today.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Locations Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {locations.map((location, index) => (
                <div 
                  key={location.id}
                  className="p-4 bg-secondary/30 rounded-xl border border-border animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MapPin className="h-5 w-5 text-primary mb-2" />
                  <h3 className="font-semibold text-sm">{location.name}</h3>
                  <p className="text-xs text-muted-foreground">{location.address}</p>
                </div>
              ))}
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up animation-delay-200">
              <div className="bg-secondary/20 rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-semibold mb-6">Your Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="licenseType">License Type *</Label>
                  <Select 
                    value={formData.licenseType} 
                    onValueChange={(value) => setFormData({...formData, licenseType: value})}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select your license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="learner">Learner</SelectItem>
                      <SelectItem value="provisional">Provisional</SelectItem>
                      <SelectItem value="full">Full License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Riding Experience</Label>
                  <Select 
                    value={formData.experience} 
                    onValueChange={(value) => setFormData({...formData, experience: value})}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="How long have you been riding?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New rider (less than 1 year)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-5 years)</SelectItem>
                      <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-2xl p-6 md:p-8 border border-border">
                <h2 className="text-xl font-semibold mb-6">Schedule Your Ride</h2>
                
                <div className="space-y-2 mb-6">
                  <Label htmlFor="location">Location *</Label>
                  <Select 
                    value={formData.location} 
                    onValueChange={(value) => setFormData({...formData, location: value})}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Choose a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc.id} value={loc.id}>{loc.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select 
                      value={formData.time} 
                      onValueChange={(value) => setFormData({...formData, time: value})}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Anything else you'd like us to know?"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book My Test Ride
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
