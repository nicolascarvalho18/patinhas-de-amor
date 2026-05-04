import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, PawPrint } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Adotar", href: "/adotar" },
    { label: "Como Ajudar", href: "/como-funciona" },
    { label: "Depoimentos", href: "/depoimentos" },
    { label: "Sobre", href: "/sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 no-underline group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg text-primary">
              Patinhas de Amor
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-body no-underline transition-colors pb-0.5 ${
                  location === link.href
                    ? "text-primary border-b-2 border-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link href="/donation">
            <a className="no-underline">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6">
                Doe Agora
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-foreground hover:text-primary transition-colors font-body text-sm no-underline py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/donation">
              <a className="no-underline w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-2">
                  Doe Agora
                </Button>
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
