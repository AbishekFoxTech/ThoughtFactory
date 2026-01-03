import { useState } from "react";
import { Briefcase, Calendar, FolderKanban, GraduationCap, ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "internships", label: "Internships", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "events", label: "Events", icon: Calendar },
  { id: "workshops", label: "Workshops", icon: GraduationCap },
];

const opportunities = [
  {
    id: 1,
    type: "internships",
    title: "Frontend Developer Intern",
    company: "TechStartup X",
    location: "Remote",
    duration: "3 months",
    description: "Work on real React projects with mentorship from senior developers.",
    tag: "Hot",
    tagColor: "bg-destructive text-destructive-foreground",
  },
  {
    id: 2,
    type: "projects",
    title: "Mobile App Development",
    company: "Community Project",
    location: "Hybrid",
    duration: "6 weeks",
    description: "Build a mobile app for a local NGO with a team of fellow students.",
    tag: "New",
    tagColor: "bg-primary text-primary-foreground",
  },
  {
    id: 3,
    type: "events",
    title: "Industry Leaders Summit",
    company: "Though Factory",
    location: "Bangalore",
    duration: "Jan 15, 2026",
    description: "Network with 50+ industry professionals and fellow students.",
    tag: "Upcoming",
    tagColor: "bg-success text-success-light",
  },
  {
    id: 4,
    type: "workshops",
    title: "UI/UX Design Bootcamp",
    company: "Design Masters",
    location: "Online",
    duration: "2 days",
    description: "Intensive hands-on workshop on modern design principles and Figma.",
    tag: "Limited Seats",
    tagColor: "bg-orange-dark text-primary-foreground",
  },
  {
    id: 5,
    type: "internships",
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Mumbai",
    duration: "4 months",
    description: "Work with real datasets and build ML models under expert guidance.",
    tag: "Stipend",
    tagColor: "bg-success text-success-light",
  },
  {
    id: 6,
    type: "projects",
    title: "Open Source Contribution",
    company: "Community",
    location: "Remote",
    duration: "Ongoing",
    description: "Contribute to popular open source projects with mentor guidance.",
    tag: "Flexible",
    tagColor: "bg-charcoal text-primary-foreground",
  },
];

const OpportunitiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredOpportunities = activeCategory === "all" 
    ? opportunities 
    : opportunities.filter(opp => opp.type === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
            Opportunities Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Your next big{" "}
            <span className="text-gradient">opportunity</span> awaits
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover internships, projects, events, and workshops curated for students like you.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "gradient-orange text-primary-foreground shadow-orange"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {category.icon && <category.icon className="h-4 w-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Opportunities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow-hover transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${opp.tagColor}`}>
                  {opp.tag}
                </span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {opp.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-3">{opp.company}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {opp.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {opp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {opp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-orange hover-lift text-primary-foreground rounded-full font-semibold gap-2 shadow-orange">
            View All Opportunities
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;