import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "How to Land Your First Tech Internship: A Complete Guide",
  excerpt: "Everything you need to know about preparing for, applying to, and succeeding in your first tech internship.",
  author: "Arjun Kumar",
  date: "Dec 28, 2025",
  readTime: "8 min read",
  category: "Career",
};

const posts = [
  {
    title: "5 Skills Every Student Should Learn Before Graduation",
    excerpt: "Beyond textbooks—the skills that actually matter in the workplace.",
    author: "Sneha Reddy",
    date: "Dec 20, 2025",
    category: "Skills",
  },
  {
    title: "Building Your Portfolio: Projects That Impress Recruiters",
    excerpt: "What kinds of projects catch a hiring manager's eye?",
    author: "Vikram Singh",
    date: "Dec 15, 2025",
    category: "Portfolio",
  },
  {
    title: "Networking 101: How to Connect Without Being Awkward",
    excerpt: "Practical tips for introverts and extroverts alike.",
    author: "Priya Nair",
    date: "Dec 10, 2025",
    category: "Networking",
  },
  {
    title: "From Campus to Corporate: What to Expect",
    excerpt: "Real stories from students who made the transition.",
    author: "Community",
    date: "Dec 5, 2025",
    category: "Stories",
  },
  {
    title: "The Power of Side Projects",
    excerpt: "How building things outside class can accelerate your career.",
    author: "Arjun Kumar",
    date: "Nov 28, 2025",
    category: "Projects",
  },
  {
    title: "Mentorship: Finding and Working with a Mentor",
    excerpt: "How to find the right mentor and make the most of the relationship.",
    author: "Sneha Reddy",
    date: "Nov 20, 2025",
    category: "Mentorship",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-glow via-background to-background">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
                Blog
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Stories, insights, and
                <br />
                <span className="text-gradient">practical wisdom</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn from experiences, discover opportunities, and stay updated with the community.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <div className="p-8 lg:p-12 rounded-3xl bg-accent border border-primary/20">
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-4">
                Featured
              </span>
              <h2 className="text-2xl lg:text-4xl font-display font-bold mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Button className="gradient-orange text-primary-foreground rounded-full gap-2">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <h2 className="text-2xl font-display font-bold mb-8">Latest Posts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="group p-6 rounded-2xl bg-card border border-border card-shadow-hover transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;