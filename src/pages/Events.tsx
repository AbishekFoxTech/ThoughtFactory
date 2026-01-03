import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "Industry Leaders Summit 2026",
    date: "Jan 15, 2026",
    time: "10:00 AM - 5:00 PM",
    location: "Bangalore",
    type: "Conference",
    attendees: 500,
    description: "Meet 50+ industry leaders, network with peers, and discover opportunities.",
    featured: true,
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    date: "Jan 20-21, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Online",
    type: "Workshop",
    attendees: 200,
    description: "2-day intensive workshop on modern web development with React and Node.js.",
    featured: false,
  },
  {
    id: 3,
    title: "Career Pathways in Tech",
    date: "Jan 25, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Online",
    type: "Webinar",
    attendees: 300,
    description: "Panel discussion with professionals from different tech domains.",
    featured: false,
  },
  {
    id: 4,
    title: "Hackathon: Build for Good",
    date: "Feb 1-2, 2026",
    time: "24 Hours",
    location: "Hybrid",
    type: "Hackathon",
    attendees: 150,
    description: "Build solutions for social impact and win exciting prizes.",
    featured: true,
  },
];

const pastEvents = [
  { title: "Resume Building Workshop", date: "Dec 2025", attendees: 180 },
  { title: "AI/ML Introduction", date: "Nov 2025", attendees: 250 },
  { title: "Startup Stories", date: "Oct 2025", attendees: 200 },
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-glow via-background to-background">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
                Events & Webinars
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Learn, connect, and grow
                <br />
                <span className="text-gradient">together</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From webinars to hackathons, discover events designed to accelerate your growth.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container-wide">
            <h2 className="text-3xl font-display font-bold mb-8">Upcoming Events</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-6 rounded-2xl border card-shadow-hover transition-all hover:-translate-y-1 ${
                    event.featured ? "bg-accent border-primary/30" : "bg-card border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.featured ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                    }`}>
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="text-xs font-medium text-primary">Featured</span>
                    )}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.attendees} expected
                    </span>
                  </div>
                  <Button className="gradient-orange text-primary-foreground rounded-full gap-2">
                    Register Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container-wide">
            <h2 className="text-3xl font-display font-bold mb-8">Past Events</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.title} className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-display font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date} • {event.attendees} attendees</p>
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

export default Events;