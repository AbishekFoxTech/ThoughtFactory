import { Video, Wrench, Briefcase, FolderKanban, TrendingUp, UserCheck, Gamepad2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    icon: Video,
    title: "Online & Offline Webinars",
    description: "Learn from industry experts through live sessions covering trending topics, career insights, and technical deep-dives.",
    color: "bg-primary/10 text-primary",
    benefit: "Gain insider knowledge",
  },
  {
    icon: Wrench,
    title: "Technical & Non-Technical Workshops",
    description: "Hands-on sessions on coding, design, communication, leadership, and everything in between.",
    color: "bg-success/10 text-success",
    benefit: "Build real skills",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description: "Curated internship listings from startups to enterprises, matched to your skills and interests.",
    color: "bg-orange-light/20 text-orange-dark",
    benefit: "Kickstart your career",
  },
  {
    icon: FolderKanban,
    title: "Real-World Project Guidance",
    description: "Work on actual projects with mentor support, building a portfolio that speaks to employers.",
    color: "bg-charcoal/10 text-charcoal",
    benefit: "Create impact",
  },
  {
    icon: TrendingUp,
    title: "Upskilling Programs",
    description: "Structured learning paths in emerging technologies, soft skills, and industry-relevant competencies.",
    color: "bg-primary/10 text-primary",
    benefit: "Stay ahead",
  },
  {
    icon: UserCheck,
    title: "Industry Mentor Connects",
    description: "One-on-one and group sessions with professionals who've walked the path you're on.",
    color: "bg-success/10 text-success",
    benefit: "Get guidance",
  },
  {
    icon: Gamepad2,
    title: "Recreational Events & Games",
    description: "Because building community means having fun together—hackathons, game nights, and more.",
    color: "bg-orange-light/20 text-orange-dark",
    benefit: "Connect & unwind",
  },
];

const ActivitiesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Core Community{" "}
            <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From learning to earning, we've got you covered with programs designed 
            to transform your student journey into career readiness.
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group p-6 rounded-2xl bg-card border border-border card-shadow-hover transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${activity.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <activity.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">
                {activity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {activity.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <span>{activity.benefit}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-orange hover-lift text-primary-foreground rounded-full font-semibold gap-2 shadow-orange">
            Explore All Programs
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;