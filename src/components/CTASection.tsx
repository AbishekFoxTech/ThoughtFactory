import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, Handshake } from "lucide-react";

const roles = [
  {
    icon: Users,
    title: "Students",
    description: "Join a community of ambitious peers and get industry-ready before graduation.",
    cta: "Join as Student",
  },
  {
    icon: Building2,
    title: "Mentors",
    description: "Share your experience and shape the next generation of professionals.",
    cta: "Become a Mentor",
  },
  {
    icon: Handshake,
    title: "Partners",
    description: "Collaborate with us to create opportunities and access top student talent.",
    cta: "Partner with Us",
  },
];

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-glow via-background to-background overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary/20 rounded-full" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rotate-45" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
            Join the Movement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to be part of
            <br />
            <span className="text-gradient">something bigger</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a student seeking growth, a professional wanting to give back, 
            or an organization looking to connect with talent—there's a place for you here.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="group p-8 rounded-3xl bg-card border border-border card-shadow-hover transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <role.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{role.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {role.description}
              </p>
              <Button 
                className="gradient-orange hover-lift text-primary-foreground rounded-full font-semibold gap-2 shadow-orange w-full"
              >
                {role.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 lg:p-12 rounded-3xl gradient-orange shadow-orange-glow">
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-4">
            Have questions? Let's talk!
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            We'd love to hear from you. Reach out for collaborations, queries, or just to say hello.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="rounded-full font-semibold px-8 gap-2"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;