import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { blogPosts } from "./Blog";
import { Button } from "@/components/ui/button";

// Placeholder content for blog posts - in a real app, this would come from a CMS
const postContent: Record<string, string> = {
  "why-electric-motorcycles-are-the-future": `
    <p>The transportation landscape is shifting rapidly, and electric motorcycles are at the forefront of this revolution. For daily commuters, the benefits are becoming impossible to ignore.</p>
    
    <h2>Zero Emissions, Maximum Impact</h2>
    <p>Electric motorcycles produce zero direct emissions. In urban environments where air quality is a growing concern, this makes a significant difference. Every kilometer ridden on an electric motorcycle is a kilometer that doesn't contribute to local air pollution.</p>
    
    <h2>The Economics Make Sense</h2>
    <p>When you factor in fuel costs, maintenance, and servicing, electric motorcycles offer substantial savings over their petrol counterparts. The average commuter can save thousands of dollars annually by making the switch.</p>
    
    <h2>A Quieter Commute</h2>
    <p>One of the most underrated benefits of electric motorcycles is the quiet ride. No engine noise means a more peaceful commute, less noise pollution in residential areas, and the ability to leave for early morning rides without waking the neighborhood.</p>
    
    <h2>The Technology is Ready</h2>
    <p>Modern electric motorcycles like the LEKI E1 offer ranges that comfortably cover daily commuting needs. With 160km+ on a single charge, range anxiety is becoming a thing of the past for most riders.</p>
    
    <p>The future of commuting is electric, and that future is here now.</p>
  `,
  "leki-e1-first-look": `
    <p>The LEKI E1 represents a new chapter in Australian motorcycling. Designed specifically for our roads and conditions, it combines practical commuting features with the thrill of electric power.</p>
    
    <h2>Specifications at a Glance</h2>
    <ul>
      <li>Range: 160km+ on a single charge</li>
      <li>Top Speed: 110 km/h</li>
      <li>Charge Time: 4 hours (standard outlet)</li>
      <li>Motor: High-torque electric with regenerative braking</li>
    </ul>
    
    <h2>Built for Australian Conditions</h2>
    <p>Every aspect of the LEKI E1 has been designed with Australian riders in mind. From the suspension tuned for our road surfaces to the thermal management system optimized for our climate, this is a motorcycle that understands local conditions.</p>
    
    <h2>ADR Approved & Road Legal</h2>
    <p>The LEKI E1 is fully ADR (Australian Design Rules) approved, meaning it meets all the safety and compliance standards required for road use in Australia. This isn't an imported conversion or a grey market import—it's a legitimate, road-legal motorcycle.</p>
    
    <h2>The Riding Experience</h2>
    <p>Twist the throttle and the E1 delivers instant, smooth acceleration. There's no clutch to worry about, no gears to shift—just pure, responsive power delivery that makes city riding a joy.</p>
  `,
  "electric-vs-petrol-true-cost": `
    <p>When comparing electric and petrol motorcycles, the sticker price only tells part of the story. Let's break down the true cost of ownership over a typical 5-year period.</p>
    
    <h2>Fuel vs Electricity</h2>
    <p>Based on average Australian commuting patterns of 40km per day:</p>
    <ul>
      <li>Petrol motorcycle (4L/100km at $2.00/L): ~$1,170/year</li>
      <li>Electric motorcycle: ~$120/year</li>
      <li>Annual savings: ~$1,050</li>
    </ul>
    
    <h2>Maintenance Costs</h2>
    <p>Electric motorcycles have fewer moving parts—no oil changes, no spark plugs, no air filters, no clutch plates. Over 5 years, this can save $2,000-$3,000 in maintenance costs.</p>
    
    <h2>Insurance & Registration</h2>
    <p>Many insurers offer discounts for electric vehicles. Registration fees for electric vehicles are also often lower, as they're calculated based on emissions or engine capacity.</p>
    
    <h2>The 5-Year Picture</h2>
    <p>When you add up fuel savings, reduced maintenance, and potential insurance discounts, an electric motorcycle can save you $8,000-$12,000 over 5 years compared to a petrol equivalent.</p>
  `,
  "charging-your-electric-motorcycle": `
    <p>One of the most common questions about electric motorcycles is about charging. Here's everything you need to know to keep your LEKI topped up and ready to ride.</p>
    
    <h2>Home Charging</h2>
    <p>The simplest option is charging at home. The LEKI E1 comes with a portable charger that plugs into any standard 240V household outlet. A full charge takes approximately 4 hours, making overnight charging the perfect routine.</p>
    
    <h2>Workplace Charging</h2>
    <p>Many workplaces now offer EV charging facilities. Even a standard outlet in the company car park can be enough to top up during the workday. Talk to your employer about EV charging options.</p>
    
    <h2>Maximizing Battery Life</h2>
    <p>To get the most out of your battery:</p>
    <ul>
      <li>Avoid regularly charging to 100% if not needed</li>
      <li>Don't let the battery drop below 20% regularly</li>
      <li>Store the bike with 50-80% charge if not riding for extended periods</li>
      <li>Keep the battery at moderate temperatures when possible</li>
    </ul>
    
    <h2>Public Charging</h2>
    <p>Australia's EV charging network is growing rapidly. While most electric motorcycle owners charge at home, public charging stations can be useful for longer trips or top-ups during the day.</p>
  `,
  "australian-ev-infrastructure": `
    <p>Australia's EV infrastructure has seen remarkable growth over the past few years, and the momentum is only increasing. Here's what electric motorcycle riders need to know.</p>
    
    <h2>The Current State</h2>
    <p>Australia now has thousands of public charging stations across the country, with coverage expanding rapidly in metropolitan areas and along major highways.</p>
    
    <h2>Key Charging Networks</h2>
    <p>Several major networks operate across Australia, including Chargefox, NRMA, and various local providers. Many of these stations support the standard charging cables compatible with electric motorcycles.</p>
    
    <h2>Home Charging Dominates</h2>
    <p>For most electric motorcycle riders, home charging remains the primary method. With ranges exceeding typical daily commute distances, most riders simply plug in overnight and start each day with a full charge.</p>
    
    <h2>The Future is Bright</h2>
    <p>Government initiatives and private investment are driving rapid expansion of Australia's charging infrastructure. For electric motorcycle riders, this means increasing convenience and flexibility for longer rides and adventures.</p>
  `
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const content = postContent[slug || ""] || "<p>Content coming soon...</p>";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4">
          {/* Back link */}
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-6 text-chrome">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-AU', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up animation-delay-100">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center">
              <span className="text-8xl opacity-30">⚡</span>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="max-w-3xl mx-auto prose prose-invert prose-lg animate-slide-up animation-delay-200"
            style={{
              '--tw-prose-body': 'hsl(var(--muted-foreground))',
              '--tw-prose-headings': 'hsl(var(--foreground))',
              '--tw-prose-links': 'hsl(var(--primary))',
              '--tw-prose-bold': 'hsl(var(--foreground))',
              '--tw-prose-bullets': 'hsl(var(--primary))',
            } as React.CSSProperties}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: content }}
              className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-foreground [&>p]:mb-6 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>ul]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:text-muted-foreground"
            />
          </div>

          {/* Share & CTA */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button variant="outline" className="border-border">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <Link to="/test-ride">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book a Test Ride
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">More from LEKI Journal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group p-6 bg-secondary/20 rounded-xl border border-border hover:border-primary/30 transition-all"
                >
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
