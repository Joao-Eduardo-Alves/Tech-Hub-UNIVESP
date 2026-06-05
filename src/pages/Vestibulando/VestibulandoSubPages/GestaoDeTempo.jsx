import SectionHeader from "@/components/shared/SectionHeader";
import {
  Clock,
  Calendar,
  Target,
  BookOpen,
  CheckSquare,
  CheckCircle,
} from "lucide-react";

export default function GestaoDeTempo() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica para Vestibulando"
          title="Gestão de tempo: como organizar seus estudos para o vestibular"
          description="Aprenda estratégias simples para aproveitar melhor seu tempo, manter a consistência nos estudos e chegar mais preparado para a prova."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Estudar mais nem sempre significa estudar melhor
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Muitos vestibulandos acreditam que precisam passar horas seguidas
              estudando para obter bons resultados. Na prática, a organização e
              a qualidade do estudo costumam ter um impacto ainda maior.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Uma boa gestão de tempo ajuda a manter a disciplina, evitar a
              procrastinação e criar uma rotina sustentável até o dia da prova.
            </p>
          </section>

          {/* DICAS */}
          <div className="grid gap-6">
            {/* PLANEJAMENTO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Calendar className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Monte um cronograma realista
                </h3>

                <p className="text-muted-foreground">
                  Organize os horários de estudo de acordo com sua rotina e sua
                  disponibilidade diária.
                </p>

                <p className="text-muted-foreground mt-3">
                  Evite criar metas impossíveis de cumprir. Um planejamento
                  realista aumenta as chances de manter a constância ao longo do
                  tempo.
                </p>
              </div>
            </div>

            {/* PRIORIDADES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Target className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Priorize as matérias com mais dificuldade
                </h3>

                <p className="text-muted-foreground">
                  É natural dedicar mais atenção aos conteúdos que apresentam
                  maior desafio.
                </p>

                <p className="text-muted-foreground mt-3">
                  Identifique seus pontos fracos e distribua mais tempo para
                  essas disciplinas sem abandonar as demais.
                </p>
              </div>
            </div>

            {/* BLOCOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Clock className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Estude em blocos de tempo
                </h3>

                <p className="text-muted-foreground">
                  Dividir os estudos em períodos menores pode ajudar na
                  concentração e reduzir o cansaço mental.
                </p>

                <p className="text-muted-foreground mt-3">
                  Faça pequenas pausas entre os blocos para descansar e manter a
                  produtividade durante o dia.
                </p>
              </div>
            </div>

            {/* REVISÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Reserve tempo para revisões
                </h3>

                <p className="text-muted-foreground">
                  Revisar conteúdos regularmente ajuda a fortalecer a memória e
                  evitar que o conhecimento seja esquecido.
                </p>

                <p className="text-muted-foreground mt-3">
                  Não deixe toda a revisão para os dias próximos ao vestibular.
                </p>
              </div>
            </div>

            {/* ACOMPANHAMENTO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <CheckSquare className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Acompanhe seu progresso
                </h3>

                <p className="text-muted-foreground">
                  Registrar o que foi estudado ajuda a visualizar sua evolução e
                  identificar conteúdos que ainda precisam de atenção.
                </p>

                <p className="text-muted-foreground mt-3">
                  Pequenos avanços diários geram grandes resultados ao longo dos
                  meses de preparação.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Checklist para organizar seus estudos
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Criar um cronograma semanal",
                "Definir metas de estudo",
                "Priorizar disciplinas difíceis",
                "Fazer pausas durante os estudos",
                "Separar tempo para revisão",
                "Monitorar o próprio progresso",
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

          {/* FINAL */}
          <section className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              Resumo final
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Uma boa gestão de tempo permite estudar com mais eficiência e
              reduzir a sensação de sobrecarga. Com planejamento, disciplina e
              revisões constantes, você consegue aproveitar melhor cada hora de
              estudo e aumentar sua preparação para o vestibular.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
