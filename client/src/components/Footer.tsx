import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

/**
 * Footer Component
 * Design: Warm Minimalism - Organized footer with multiple sections
 * Features: Navigation links, social media, newsletter signup
 */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-display">
                🐾
              </div>
              <span className="font-display text-lg text-foreground">
                Patinhas de Amor
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body">
              Transformando vidas através da adoção responsável de pets.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-foreground">Navegação</h3>
            <Link href="/">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline">
                Início
              </a>
            </Link>
            <Link href="/adotar">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline">
                Adotar
              </a>
            </Link>
            <Link href="/como-funciona">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline">
                Como Funciona
              </a>
            </Link>
            <Link href="/sobre">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline">
                Sobre Nós
              </a>
            </Link>
            <Link href="/donation">
              <a className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline">
                Doações
              </a>
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-foreground">Suporte</h3>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Perguntas Frequentes
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Contato
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Política de Privacidade
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-foreground">Newsletter</h3>
            <p className="text-muted-foreground text-sm font-body">
              Receba notícias sobre novos pets disponíveis para adoção.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="p-2 bg-primary hover:bg-primary/90 rounded-lg transition-colors text-white">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © 2024 Patinhas de Amor. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Termos
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-body no-underline"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
