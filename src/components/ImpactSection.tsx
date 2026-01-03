import { useEffect, useState, useRef } from "react";
import { Users, Calendar, UserCheck, FolderKanban } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Students Impacted",
    description: "Across 50+ colleges",
  },
  {
    icon: Calendar,
    value: 120,
    suffix: "+",
    label: "Events Conducted",
    description: "Webinars, workshops & more",
  },
  {
    icon: UserCheck,
    value: 75,
    suffix: "+",
    label: "Mentors Onboarded",
    description: "Industry professionals",
  },
  {
    icon: FolderKanban,
    value: 200,
    suffix: "+",
    label: "Projects Guided",
    description: "Real-world experience",
  },
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="text-5xl lg:text-6xl font-display font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 gradient-dark overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-sm font-medium text-primary-foreground mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Building the future,{" "}
            <span className="text-primary">one student at a time</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Numbers that reflect our commitment to student success and industry connection.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-charcoal-light/50 backdrop-blur border border-primary-foreground/10 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-primary-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <h3 className="font-display font-bold text-primary-foreground text-lg mb-1">
                {stat.label}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;