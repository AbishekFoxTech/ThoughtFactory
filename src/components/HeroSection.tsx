import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-glow via-background to-background">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 geometric-bg opacity-50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary/20 rounded-full floating opacity-60" />
      <div className="absolute top-40 right-40 w-16 h-16 bg-primary/10 rotate-45 floating-delayed" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-primary/15 rounded-lg rotate-12 floating" />
      <div className="absolute top-60 left-20 w-8 h-8 bg-primary/20 rounded-full floating-delayed" />
      
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-wide relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Student-Led Initiative</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-balance">
              Where Students Meet
              <br />
              <span className="text-gradient">Industry</span> Before
              <br />
              Graduation
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
              Bridging the gap between academia and industry through meaningful exposure, 
              hands-on learning, mentorship, and community-driven growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="gradient-orange hover-lift text-primary-foreground px-8 rounded-full font-semibold shadow-orange gap-2"
              >
                Join the Community
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full font-semibold px-8 border-2"
              >
                Explore Opportunities
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-dark border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-display font-bold text-foreground">500+ Students</p>
                <p className="text-sm text-muted-foreground">Already part of the movement</p>
              </div>
            </div>
          </div>

          {/* Right - Abstract illustration */}
          <div className="relative animate-fade-in-up-delayed">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main geometric composition */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central large circle */}
                <div className="w-72 h-72 rounded-full gradient-orange shadow-orange-glow animate-pulse-glow" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-8 right-8 bg-card rounded-2xl shadow-large p-4 floating z-10 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center">
                    <span className="text-lg">🎯</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Project Matched!</p>
                    <p className="text-xs text-muted-foreground">Real industry work</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-12 left-4 bg-card rounded-2xl shadow-large p-4 floating-delayed z-10 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">New Internship</p>
                    <p className="text-xs text-muted-foreground">Tech startup hiring</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 bg-card rounded-2xl shadow-large p-3 floating z-10 border border-border">
                <div className="flex items-center gap-2">
                  <span className="text-lg">👋</span>
                  <span className="text-sm font-medium">Mentor connected!</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-16 w-16 h-16 border-4 border-primary/30 rounded-full" />
              <div className="absolute top-16 left-16 w-8 h-8 bg-primary/20 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;