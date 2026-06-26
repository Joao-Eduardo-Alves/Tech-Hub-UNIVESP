import SectionHeader from "@/components/shared/SectionHeader";
import {
  Users,
  MessageCircle,
  CheckCircle,
  Swords,
  Brain,
  Target,
  Trophy,
  Sparkles,
  Mail,
  GlobeIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Xadrez() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Clube de Xadrez"
          title={
            <span className="flex items-center justify-center gap-2">
              <Swords className="text-primary mt-1 shrink-0 w-10 h-10" />
              Clube de Xadrez
            </span>
          }
          description="Uma comunidade para estudantes da UNIVESP que querem evoluir no xadrez, desenvolver raciocínio estratégico e competir de forma saudável."
        />

        <article className="mt-12 space-y-12">
          {/* HERO / INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-primary w-5 h-5" />
              <h2 className="text-2xl font-semibold text-foreground">
                Bem-vindo ao tabuleiro
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              O Clube de Xadrez do TechHub UNIVESP reúne estudantes interessados
              em estratégia, lógica e evolução contínua através do xadrez.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Aqui, cada partida é uma oportunidade de aprendizado — seja você
              iniciante ou avançado, o foco é evoluir jogando, estudando
              aberturas, táticas e decisões de meio-jogo.
            </p>
          </section>

          {/* PILARES VISUAIS */}
          <div className="grid gap-6">
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Brain className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">
                  Raciocínio estratégico
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvimento de pensamento lógico, cálculo de variantes e
                  tomada de decisão sob pressão.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Swords className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Partidas e prática</h3>
                <p className="text-muted-foreground">
                  Jogos amistosos, desafios internos e análises coletivas para
                  evolução constante.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Trophy className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Evolução competitiva</h3>
                <p className="text-muted-foreground">
                  Acompanhamento de progresso, ranking interno e incentivo à
                  melhoria contínua.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Users className="text-primary w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Comunidade ativa</h3>
                <p className="text-muted-foreground">
                  Troca de ideias, estudo em grupo e ajuda mútua entre
                  estudantes de diferentes níveis.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <section className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Target className="text-primary w-5 h-5" />
              <h2 className="text-xl font-semibold">
                Entre para o Clube de Xadrez
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Não importa seu nível — o objetivo é aprender jogando e evoluir
              junto com a comunidade.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Envie um email para o endereço abaixo para solicitar acesso ao
              grupo do Clube.
            </p>

            <div className="mt-4 flex flex-col gap-2 items-start">
              <a className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 mr-1" />
                clubedexadrez.univesp@gmail.com
              </a>
              <Button asChild variant="default" className="mt-4">
                <a
                  href="https://sites.google.com/view/cxeu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIcon className="w-3.5 h-3.5 mr-1" />
                  Acesse o site do clube
                </a>
              </Button>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
