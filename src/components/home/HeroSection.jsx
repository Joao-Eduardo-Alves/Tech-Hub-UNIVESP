import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Code2,
  TrendingUp,
  PhoneCall,
  PhoneForwarded,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Cursos Tech", value: "4" },
  { label: "Polos Ativos", value: "460+" },
  { label: "Cidades", value: "390+" },
];

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.08),transparent_50%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Seu hub completo para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                vencer na UNIVESP
              </span>{" "}
              e crescer na tecnologia
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Conteúdo prático, dicas reais, carreira tech, organização
              acadêmica, produtos e recursos úteis para estudantes da UNIVESP.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="rounded-xl text-base h-12 px-8 gap-2 group"
              >
                <Link to="/calouro">
                  Guia do calouro
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl text-base h-12 px-8"
              >
                <Link to="/vestibulando">Guia do Vestibulando</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative hidden lg:block"
          >
            <div
              className="relative"
              style={{ transform: `translateY(${scrollY * -0.08}px)` }}
            >
              {/* Floating cards */}
              <div className="relative w-full h-[500px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-64 p-5 rounded-2xl bg-card border border-border shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-violet-500" />
                    </div>
                    <div>
                      <Link to="/produtos">
                        <div className="text-sm font-semibold">Produtos</div>
                        <div className="text-xs text-muted-foreground">
                          Identidade visual exclusiva e recursos úteis para
                          estudantes.
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2"></div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Vestuário e itens personalizados
                    </span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Itens tech
                    </span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Melhores ofertas para estudantes
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-32 left-0 w-64 p-5 rounded-2xl bg-card border border-border shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <Link to="/carreira">
                        <div className="text-sm font-semibold">
                          Carreira Tech
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Como iniciar e alavancar na área de tecnologia.
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Stacks
                    </span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Dicas
                    </span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Ferramentas
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-16 right-8 w-64 p-5 rounded-2xl bg-card border border-border shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <PhoneForwarded className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <Link to="/polos">
                        <div className="text-sm font-semibold">
                          Polos e DRPs
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Encontre pessoas, crie conexões e faça amizades!
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Grupos
                    </span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Polos
                    </span>
                    <span className="px-2 py-1 bg-muted rounded-md text-xs">
                      Amizades
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
