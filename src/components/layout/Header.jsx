import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Guia do Calouro", path: "/calouro" },
  { label: "Guia de Polos", path: "/polos" },
  { label: "Produtos", path: "/produtos" },
  { label: "Cyber Arena", path: "/cyber-arena" },
  { label: "Ctrl + Shape", path: "/ctrl-shape" },
  { label: "Carreira", path: "/carreira" },
  { label: "Cursos", path: "/cursos" },
  { label: "Guia do Vestibulando", path: "/vestibulando" },
  { label: "Salve a UNIVESP", path: "/salve-a-univesp" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  const isActiveRoute = (path) => {
    // Verifica se a rota atual é exata ou está dentro de uma seção
    if (location.pathname === path) return true;
    // Mantém o destaque para subpages (ex: /calouro, /manual, /dicaTrabalhoEstudo)
    if (
      path === "/calouro" &&
      location.pathname.startsWith("/calouro") &&
      location.pathname !== "/calouro"
    )
      return true;
    if (path === "/carreira" && location.pathname.startsWith("/carreira"))
      return true;
    if (path === "/produtos" && location.pathname.startsWith("/produtos"))
      return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-primary-foreground font-heading font-bold text-sm">
                TH
              </span>
            </div>
            <span className="font-heading font-bold text-base text-foreground">
              Tech Hub <span className="text-primary">UNIVESP</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 flex-nowrap overflow-x-auto">
            {navItems.map((item) => {
              const isCampaign = item.path === "/salve-a-univesp";
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActiveRoute(item.path)
                      ? "text-primary bg-primary/10"
                      : isCampaign
                        ? "text-red-500 bg-red-500/10 hover:bg-red-500/15"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-xl"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isCampaign = item.path === "/salve-a-univesp";
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActiveRoute(item.path)
                        ? "text-primary bg-primary/10"
                        : isCampaign
                          ? "text-red-500 bg-red-500/10 hover:bg-red-500/15"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
