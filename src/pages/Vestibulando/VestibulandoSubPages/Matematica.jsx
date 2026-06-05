import SectionHeader from "@/components/shared/SectionHeader";
import {
  Calculator,
  Brain,
  Sigma,
  Clock,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function Matematica() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica para Vestibulando"
          title="Matemática no vestibular: como estudar de forma eficiente"
          description="Descubra estratégias simples para melhorar seu desempenho em matemática e ganhar mais confiança na hora da prova."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Matemática é prática e constância
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Muitos estudantes enxergam a matemática como uma das disciplinas
              mais difíceis do vestibular. Porém, diferente de matérias que
              exigem grande volume de memorização, a matemática é desenvolvida
              principalmente por meio da prática.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Quanto mais exercícios você resolve, maior se torna sua capacidade
              de identificar padrões, interpretar problemas e chegar às soluções
              com mais rapidez.
            </p>
          </section>

          {/* DICAS */}
          <div className="grid gap-6">
            {/* FUNDAMENTOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Fortaleça os conceitos básicos
                </h3>

                <p className="text-muted-foreground">
                  Antes de avançar para conteúdos mais complexos, é importante
                  dominar operações básicas, porcentagem, frações, razão e
                  proporção.
                </p>

                <p className="text-muted-foreground mt-3">
                  Uma base sólida facilita o aprendizado dos demais assuntos e
                  reduz erros em questões mais avançadas.
                </p>
              </div>
            </div>

            {/* EXERCÍCIOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Calculator className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Resolva muitos exercícios
                </h3>

                <p className="text-muted-foreground">
                  A teoria é importante, mas a evolução acontece quando você
                  coloca o conhecimento em prática.
                </p>

                <p className="text-muted-foreground mt-3">
                  Resolver exercícios regularmente ajuda a identificar dúvidas,
                  fixar fórmulas e desenvolver raciocínio lógico.
                </p>
              </div>
            </div>

            {/* ERROS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Brain className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Aprenda com seus erros
                </h3>

                <p className="text-muted-foreground">
                  Errar faz parte do processo de aprendizagem. O importante é
                  entender por que o erro aconteceu.
                </p>

                <p className="text-muted-foreground mt-3">
                  Revisar questões incorretas é uma das formas mais eficientes
                  de melhorar seu desempenho.
                </p>
              </div>
            </div>

            {/* FÓRMULAS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Sigma className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Entenda as fórmulas, não apenas decore
                </h3>

                <p className="text-muted-foreground">
                  Decorar fórmulas sem compreender sua aplicação pode gerar
                  dificuldades durante a prova.
                </p>

                <p className="text-muted-foreground mt-3">
                  Procure entender o significado de cada fórmula e em quais
                  situações ela deve ser utilizada.
                </p>
              </div>
            </div>

            {/* TEMPO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Clock className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Treine a gestão do tempo
                </h3>

                <p className="text-muted-foreground">
                  Além de saber resolver questões, é importante conseguir fazer
                  isso dentro do tempo disponível.
                </p>

                <p className="text-muted-foreground mt-3">
                  Simulados ajudam a desenvolver velocidade e aumentam sua
                  confiança para o dia do vestibular.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Checklist de estudos em matemática
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Revisar conteúdos básicos",
                "Resolver exercícios diariamente",
                "Analisar questões erradas",
                "Praticar interpretação de problemas",
                "Revisar fórmulas importantes",
                "Fazer simulados regularmente",
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
              O sucesso em matemática não depende apenas de talento, mas de
              dedicação e prática constante. Ao fortalecer sua base, resolver
              exercícios com frequência e aprender com seus erros, você estará
              muito mais preparado para enfrentar as questões do vestibular com
              segurança.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
