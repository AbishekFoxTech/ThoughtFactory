import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Student-First",
    description: "Everything we do starts with understanding what students actually need—not what we think they need.",
  },
  {
    icon: Target,
    title: "Action-Oriented",
    description: "We don't just talk about opportunities. We create them, curate them, and connect students to them.",
  },
  {
    icon: Heart,
    title: "Community-Driven",
    description: "We grow together. Every success story inspires the next, and every member lifts the community.",
  },
  {
    icon: Rocket,
    title: "Future-Focused",
    description: "We prepare students for careers that exist today and the ones that haven't been invented yet.",
  },
];

const team = [
  { name: "Arjun Kumar", role: "Founder & Lead", avatar: "AK" },
  { name: "Sneha Reddy", role: "Community Head", avatar: "SR" },
  { name: "Vikram Singh", role: "Partnerships", avatar: "VS" },
  { name: "Priya Nair", role: "Events & Content", avatar: "PN" },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-glow via-background to-background">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                We're building bridges
                <br />
                <span className="text-gradient">between dreams and reality</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Though Factory was born from a simple observation: students are capable of incredible things, 
                but often lack the exposure and opportunities to prove it. We're here to change that.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-display font-bold">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  It started in a college hostel room in 2024. A group of students frustrated with the gap 
                  between what they learned in class and what the industry expected decided to do something about it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What began as informal peer-to-peer sessions quickly grew into something bigger. 
                  Industry professionals heard about what we were doing and wanted to help. 
                  Companies reached out to connect with our members.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Though Factory is a thriving community of students, mentors, and partners 
                  united by a common goal: making every student industry-ready before they graduate.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl gradient-orange shadow-orange-glow flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <p className="text-6xl font-display font-bold mb-4">2024</p>
                    <p className="text-xl">The year it all began</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-accent flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                The Team
              </h2>
              <p className="text-muted-foreground">
                Students leading students—that's the Though Factory way
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="p-6 rounded-2xl bg-card border border-border text-center">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-orange flex items-center justify-center mb-4 text-primary-foreground font-display font-bold text-2xl">
                    {member.avatar}
                  </div>
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
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

export default About;