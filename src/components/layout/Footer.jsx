import React from "react";
import { Link } from "react-router-dom";
import { Github, Instagram, Heart, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Home", path: "/" },
      { label: "Cursos", path: "/cursos" },
      { label: "Carreira Tech", path: "/carreira" },
      { label: "Produtos", path: "/produtos" },
    ],
  },
  {
    title: "Guias",
    links: [
      { label: "Vestibulando", path: "/vestibulando" },
      { label: "Calouro", path: "/calouro" },
      { label: "Guia de Polos", path: "/polos" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Sobre", path: "#" },
      { label: "Contato", path: "#" },
      { label: "Política de Privacidade", path: "#" },
      { label: "Termos de Uso", path: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">
                  TH
                </span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Tech Hub <span className="text-primary">UNIVESP</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hub independente criado para apoiar estudantes da UNIVESP e
              interessados em tecnologia. Conteúdo prático, dicas reais e
              recursos úteis.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tech Hub Univesp. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
            para a comunidade UNIVESP
          </p>
        </div>
      </div>
    </footer>
  );
}
