import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Programs: [
    { label: "Events & Webinars", href: "/events" },
    { label: "Internships",  disabled: true  },
    { label: "Workshops", disabled: true  },
    { label: "Mentorship",  disabled: true },
  ],
  Community: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Success Stories",  disabled: true  },
    { label: "Join Us",  disabled: true  },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", disabled: true  },
    { label: "Privacy Policy",  disabled: true  },
    { label: "Terms of Service",  disabled: true  },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-primary-foreground leading-none">Though</span>
                <span className="text-xl font-display font-bold text-primary leading-none">Factory</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
              A student-led initiative bridging the gap between academia and industry. 
              Join us in building the future workforce, one student at a time.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold mb-4 text-primary-foreground">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-charcoal-light flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@thoughfactory.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Bangalore, India
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-charcoal-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Though Factory. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Made with 🧡 by students, for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;