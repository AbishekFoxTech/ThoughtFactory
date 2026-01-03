import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    children: [
      { label: "Events & Webinars", href: "/events" },
      { label: "Internships", href: "/internships" },
      { label: "Workshops", href: "/workshops" },
      { label: "Mentorship", href: "/mentors" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-foreground leading-none">Though</span>
              <span className="text-xl font-display font-bold text-gradient leading-none">Factory</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.label} asChild>
                          <Link to={child.href} className="cursor-pointer">{child.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="gradient-orange text-primary-foreground hover-lift shadow-orange" asChild>
              <Link to="/join">Join Community</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="gradient-orange text-primary-foreground" asChild>
                  <Link to="/join">Join Community</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;