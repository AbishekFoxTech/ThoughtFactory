import { Users, Lightbulb, Target, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Student-Led",
    description: "Built by students who understand the challenges of transitioning from campus to career.",
  },
  {
    icon: Lightbulb,
    title: "Industry Exposure",
    description: "Real-world insights and connections while you're still studying, not after.",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description: "Hands-on projects, workshops, and experiences that matter to employers.",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Get ahead of the curve with skills and networks that set you apart.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
              What is{" "}
              <span className="text-gradient">Though Factory</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Though Factory is a student-led initiative designed to bridge the gap between 
              academic learning and industry readiness. We believe that meaningful career 
              preparation shouldn't wait until graduation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through curated experiences, mentorship programs, and a vibrant community, 
              we're creating pathways for students to connect with industry professionals, 
              work on real projects, and develop skills that textbooks can't teach.
            </p>

            {/* Mission statement */}
            <div className="p-6 rounded-2xl bg-accent border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "Our mission is to ensure no student graduates feeling unprepared for the 
                professional world. We're building bridges, not waiting for them to be built."
              </p>
            </div>
          </div>

          {/* Right - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;