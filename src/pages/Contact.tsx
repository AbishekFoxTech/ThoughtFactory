import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-glow via-background to-background">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Let's start a
                <br />
                <span className="text-gradient">conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions, ideas, or want to collaborate? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="p-8 rounded-3xl bg-card border border-border">
                <h2 className="text-2xl font-display font-bold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="What's this about?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Tell us more..." rows={5} />
                  </div>
                  <Button className="gradient-orange text-primary-foreground rounded-full gap-2 w-full">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">hello@thoughfactory.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-accent">
                  <h3 className="font-display font-bold mb-2">Looking to partner?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you're a company interested in connecting with student talent or a professional 
                    wanting to mentor, we have dedicated programs for you.
                  </p>
                  <Button variant="outline" className="rounded-full">
                    Partnership Inquiries
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;