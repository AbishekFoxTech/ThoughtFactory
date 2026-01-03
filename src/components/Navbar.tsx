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

type NavItem = {
  label: string;
  href?: string;
  disabled?: boolean;
  children?: {
    label: string;
    href?: string;
    disabled?: boolean;
  }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    children: [
      { label: "Events & Webinars", href: "/events" },
      { label: "Internships", disabled: true },
      { label: "Workshops", disabled: true },
      { label: "Mentorship", disabled: true },
    ],
  },
  { label: "Community", disabled: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none">Though</span>
              <span className="text-xl font-bold text-gradient leading-none">
                Factory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-primary">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="start" className="w-48">
                      {item.children.map((child) =>
                        child.disabled ? (
                          <DropdownMenuItem
                            key={child.label}
                            className="cursor-not-allowed text-muted-foreground"
                          >
                            {child.label}
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem key={child.label} asChild>
                            <Link to={child.href!}>{child.label}</Link>
                          </DropdownMenuItem>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : item.disabled ? (
                  <span className="font-medium text-muted-foreground cursor-not-allowed">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href!}
                    className="font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" disabled>
              Login
            </Button>
            <Button className="gradient-orange text-primary-foreground" disabled>
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="font-medium">{item.label}</span>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) =>
                          child.disabled ? (
                            <span
                              key={child.label}
                              className="block text-muted-foreground cursor-not-allowed"
                            >
                              {child.label}
                            </span>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.href!}
                              className="block hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ) : item.disabled ? (
                    <span className="block text-muted-foreground cursor-not-allowed">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.href!}
                      className="block hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="outline" disabled>
                  Login
                </Button>
                <Button className="gradient-orange text-primary-foreground" disabled>
                  Join Community
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
