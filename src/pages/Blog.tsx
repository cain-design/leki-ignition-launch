import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-electric-motorcycles-are-the-future",
    title: "Why Electric Motorcycles Are the Future of Commuting",
    excerpt: "Discover how electric motorcycles are revolutionizing the daily commute with zero emissions, lower running costs, and a quieter ride.",
    date: "2026-01-05",
    readTime: "5 min read",
    category: "Industry Insights"
  },
  {
    slug: "leki-e1-first-look",
    title: "LEKI E1: A First Look at Australia's New Electric Motorcycle",
    excerpt: "We take an in-depth look at the LEKI E1, its specifications, features, and what makes it perfect for Australian riders.",
    date: "2026-01-02",
    readTime: "8 min read",
    category: "Product"
  },
  {
    slug: "electric-vs-petrol-true-cost",
    title: "Electric vs Petrol: The True Cost of Ownership",
    excerpt: "Breaking down the real numbers behind owning an electric motorcycle versus a traditional petrol bike over 5 years.",
    date: "2025-12-28",
    readTime: "6 min read",
    category: "Guides"
  },
  {
    slug: "charging-your-electric-motorcycle",
    title: "The Complete Guide to Charging Your Electric Motorcycle",
    excerpt: "Everything you need to know about charging at home, on the road, and maximizing your battery life.",
    date: "2025-12-20",
    readTime: "7 min read",
    category: "Guides"
  },
  {
    slug: "australian-ev-infrastructure",
    title: "The State of EV Infrastructure in Australia",
    excerpt: "An overview of Australia's growing EV charging network and what it means for electric motorcycle riders.",
    date: "2025-12-15",
    readTime: "4 min read",
    category: "Industry Insights"
  }
];

export default function Blog() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">LEKI Journal</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-chrome">
              News & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              The latest on electric motorcycles, sustainable transport, and the LEKI journey.
            </p>
          </div>

          {/* Featured Post */}
          <Link 
            to={`/blog/${featuredPost.slug}`}
            className="block mb-16 group animate-slide-up animation-delay-100"
          >
            <article className="bg-secondary/30 rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-6xl opacity-50">⚡</span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-AU', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>

          {/* Recent Posts Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Link 
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <article className="h-full bg-secondary/20 rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:-translate-y-1">
                    <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <span className="text-3xl opacity-30">⚡</span>
                    </div>
                    <div className="p-6">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{new Date(post.date).toLocaleDateString('en-AU', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 md:p-12 bg-metallic rounded-2xl border border-primary/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-chrome">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get the latest LEKI news, riding tips, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
