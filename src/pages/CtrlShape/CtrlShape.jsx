import SectionHeader from "@/components/shared/SectionHeader";
import {
  Dumbbell,
  Users,
  Heart,
  Trophy,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CtrlShape() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Comunidade Fitness"
          title={
            <span className="flex items-center justify-center gap-2">
              <Dumbbell className="text-primary mt-1 shrink-0 w-10 h-10" />
              Ctrl + Shape
            </span>
          }
          description="Uma comunidade criada para estudantes da UNIVESP que desejam evoluir na saúde, nos treinos e construir hábitos mais consistentes."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Mais do que treinar, evoluir em conjunto
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O Ctrl + Shape nasceu com um objetivo simples: reunir estudantes
              da UNIVESP interessados em musculação, corrida, esportes,
              alimentação saudável e desenvolvimento pessoal.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Estudar tecnologia exige disciplina, mas cuidar da saúde física e
              mental também faz parte da jornada. A comunidade foi criada para
              incentivar hábitos mais saudáveis, troca de experiências e apoio
              mútuo entre estudantes que compartilham objetivos semelhantes.
            </p>
          </section>

          {/* PILARES */}
          <div className="grid gap-6">
            {/* TREINOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Dumbbell className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Treinos e evolução física
                </h3>

                <p className="text-muted-foreground">
                  Compartilhe metas, conquistas, dificuldades e experiências
                  relacionadas à musculação, corrida, esportes ou qualquer
                  atividade física que faça parte da sua rotina.
                </p>
              </div>
            </div>

            {/* COMUNIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Users className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Comunidade e motivação
                </h3>

                <p className="text-muted-foreground">
                  Manter a consistência é mais fácil quando você está cercado de
                  pessoas que possuem objetivos parecidos. A ideia é criar um
                  ambiente positivo e acolhedor para todos.
                </p>
              </div>
            </div>

            {/* SAÚDE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Heart className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Saúde e qualidade de vida
                </h3>

                <p className="text-muted-foreground">
                  O foco não está apenas na estética. Saúde física, bem-estar,
                  energia para estudar e hábitos sustentáveis também fazem parte
                  da proposta da comunidade.
                </p>
              </div>
            </div>

            {/* METAS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Trophy className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Metas e desafios
                </h3>

                <p className="text-muted-foreground">
                  Seja ganhar massa muscular, perder peso, melhorar o
                  condicionamento físico ou simplesmente criar uma rotina mais
                  saudável, toda meta merece incentivo.
                </p>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <MessageCircle className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Grupo exclusivo no WhatsApp
                </h3>

                <p className="text-muted-foreground">
                  A principal forma de interação da comunidade acontece através
                  de um grupo no WhatsApp, onde estudantes compartilham
                  experiências, tiram dúvidas e acompanham a evolução uns dos
                  outros.
                </p>
              </div>
            </div>
          </div>

          {/* BENEFÍCIOS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              O que você encontrará na comunidade
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Troca de experiências",
                "Motivação diária",
                "Apoio emocional",
                "Desafios e metas no GymRats",
                "Dicas de treinos e alimentação",
                "Networking entre estudantes",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card"
                >
                  <CheckCircle className="text-primary w-5 h-5" />

                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              Faça parte do Ctrl + Shape
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Não importa se você está começando agora ou já possui experiência
              com treinos. O objetivo é criar um ambiente onde estudantes possam
              evoluir juntos, compartilhando conhecimento, motivação e hábitos
              mais saudáveis.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Entre no grupo e venha construir uma versão mais forte, saudável e
              disciplinada de si mesmo ao lado da comunidade.
            </p>

            {/* Botão opcional */}

            <Button asChild variant="whatsapp">
              <a
                href="https://chat.whatsapp.com/BTmLDfTg2tQDyMaRqN4iil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1" />
                Entrar no Grupo
              </a>
            </Button>
          </section>
        </article>
      </div>
    </div>
  );
}
