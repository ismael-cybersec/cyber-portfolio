import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

interface NavigationProps {
  onContactClick?: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const navLinks = [
    { label: "À Propos", sectionId: "about" },
    { label: "Compétences", sectionId: "skills" },
    { label: "Projets", sectionId: "projects" },
    { label: "Contact", sectionId: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-accent" />
          <span className="text-xl font-bold text-primary">CyberSec</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.sectionId)}
              className="underline-accent text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>
        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={onContactClick}
          >
            Me Contacter
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-secondary/50 py-4 px-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.sectionId)}
                className="text-foreground hover:text-accent transition-colors py-2 px-4 rounded hover:bg-secondary text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2"
              onClick={() => {
                onContactClick?.();
                setMobileMenuOpen(false);
              }}
            >
              Me Contacter
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
