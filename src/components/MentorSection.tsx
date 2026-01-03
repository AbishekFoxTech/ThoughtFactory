import { Quote, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mentors = [
  {
    name: "Priya Sharma",
    role: "Senior Engineer",
    company: "Tech Giant Inc.",
    quote: "Mentoring Though Factory students reminds me why I love this industry. Their energy is contagious!",
    avatar: "PS",
  },
  {
    name: "Rahul Mehta",
    role: "Product Manager",
    company: "Startup Hub",
    quote: "These students ask the right questions. They're going to do great things.",
    avatar: "RM",
  },
  {
    name: "Ananya Patel",
    role: "Design Lead",
    company: "Creative Agency",
    quote: "The projects here are real and impactful. It's rewarding to guide fresh talent.",
    avatar: "AP",
  },
];

const companyLogos = [
  "TechCorp", "InnovateLab", "StartupX", "DigitalFirst", "FutureTech", "CloudNine"
];

const MentorSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground">
              Industry Connect
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Learn from those who've
              <br />
              <span className="text-gradient">been there</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mentors are industry professionals who volunteer their time to guide 
              students through career decisions, project feedback, and real-world insights. 
              They're not just advisors—they're your future colleagues and champions.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                "One-on-one mentorship sessions",
                "Career guidance and resume reviews",
                "Project feedback from experts",
                "Networking opportunities",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" variant="outline" className="rounded-full font-semibold gap-2 border-2">
              Become a Mentor
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right - Mentor cards */}
          <div className="space-y-6">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.name}
                className={`p-6 rounded-2xl bg-card border border-border card-shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                  index === 1 ? "ml-8" : ""
                }`}
              >
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-foreground leading-relaxed mb-4 italic">
                  "{mentor.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center text-primary-foreground font-bold">
                    {mentor.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold">{mentor.name}</h4>
                    <p className="text-sm text-muted-foreground">{mentor.role} at {mentor.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">
            Our mentors come from leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companyLogos.map((company) => (
              <div
                key={company}
                className="px-6 py-3 rounded-lg bg-secondary text-muted-foreground font-display font-bold text-lg"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;