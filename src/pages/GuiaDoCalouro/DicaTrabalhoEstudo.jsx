import SectionHeader from "@/components/shared/SectionHeader";
import { Clock, Calendar, Target, Flame, CheckCircle } from "lucide-react";

export default function DicaTrabalhoEstudo() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Boas-vindas"
          title="Dicas para Conciliar Trabalho e Estudo"
          description="Dicas práticas para quem trabalha em tempo integral e precisa organizar a rotina acadêmica."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              A realidade de muitos alunos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Muitos estudantes da Univesp trabalham durante o dia e precisam
              encaixar os estudos na rotina. A boa notícia é que não é
              necessário estudar horas seguidas para evoluir. Organização e
              constância valem mais do que intensidade ocasional.
            </p>
          </section>

          {/* DICAS */}
          <div className="grid gap-6">
            {/* CARD 1 */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Clock className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Defina horários fixos
                </h3>
                <p className="text-muted-foreground">
                  Escolha períodos realistas. Mesmo 1 hora por dia gera
                  resultado quando mantida com frequência.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Target className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Estude em blocos curtos
                </h3>
                <p className="text-muted-foreground">
                  Sessões de 30 a 50 minutos aumentam foco e reduzem o cansaço.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Calendar className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Use o fim de semana com estratégia
                </h3>
                <p className="text-muted-foreground">
                  Revise conteúdos, organize a semana e antecipe tarefas
                  importantes.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Flame className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Não espere motivação perfeita
                </h3>
                <p className="text-muted-foreground">
                  Em semanas corridas, fazer o básico ainda mantém você
                  evoluindo.
                </p>
              </div>
            </div>
          </div>

          {/* FERRAMENTAS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Ferramentas úteis
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {["Google Agenda", "Trello", "Notion", "Pomodoro Timer"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card"
                  >
                    <CheckCircle className="text-primary w-5 h-5" />
                    <span className="text-foreground font-medium">{tool}</span>
                  </div>
                ),
              )}
            </div>
          </section>

          {/* RESUMO */}
          <section className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              Resumo final
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhar e estudar ao mesmo tempo é desafiador, mas totalmente
              possível. Com rotina simples, metas pequenas e constância, os
              resultados aparecem.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
