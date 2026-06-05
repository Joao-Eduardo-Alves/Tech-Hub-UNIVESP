import SectionHeader from "@/components/shared/SectionHeader";
import {
  PenSquare,
  BookOpen,
  Lightbulb,
  FileCheck,
  Target,
  CheckCircle,
} from "lucide-react";

export default function Redacao() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica para Vestibulando"
          title="Dicas para redação: como escrever melhor no vestibular"
          description="Aprenda estratégias simples para desenvolver uma redação mais organizada, clara e preparada para os desafios dos vestibulares."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              A redação pode fazer toda a diferença
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Em muitos vestibulares, a redação possui um peso importante na
              nota final. Uma boa escrita demonstra capacidade de argumentação,
              organização de ideias e domínio da língua portuguesa.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              A boa notícia é que escrever bem não depende apenas de talento.
              Com prática e método, qualquer estudante pode evoluir e ganhar
              mais confiança na hora da prova.
            </p>
          </section>

          {/* DICAS */}
          <div className="grid gap-6">
            {/* LEITURA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Leia sobre assuntos atuais
                </h3>

                <p className="text-muted-foreground">
                  Muitos temas de redação estão relacionados a questões sociais,
                  tecnológicas, ambientais ou educacionais.
                </p>

                <p className="text-muted-foreground mt-3">
                  Manter-se informado ajuda a construir argumentos mais fortes e
                  aumenta seu repertório para defender suas ideias.
                </p>
              </div>
            </div>

            {/* INTERPRETAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Target className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Entenda exatamente o tema proposto
                </h3>

                <p className="text-muted-foreground">
                  Antes de começar a escrever, leia a proposta com atenção e
                  identifique o problema central que deve ser discutido.
                </p>

                <p className="text-muted-foreground mt-3">
                  Fugir do tema é um dos erros que mais prejudicam a nota dos
                  candidatos.
                </p>
              </div>
            </div>

            {/* PLANEJAMENTO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Lightbulb className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Faça um pequeno planejamento
                </h3>

                <p className="text-muted-foreground">
                  Reserve alguns minutos para organizar suas ideias antes de
                  escrever.
                </p>

                <p className="text-muted-foreground mt-3">
                  Defina sua tese, os argumentos principais e a conclusão. Isso
                  torna o texto mais coerente e fácil de desenvolver.
                </p>
              </div>
            </div>

            {/* ESTRUTURA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <PenSquare className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Utilize uma estrutura organizada
                </h3>

                <p className="text-muted-foreground">
                  Uma redação bem estruturada normalmente apresenta introdução,
                  desenvolvimento e conclusão.
                </p>

                <p className="text-muted-foreground mt-3">
                  Essa organização facilita a leitura e ajuda a transmitir suas
                  ideias de forma clara.
                </p>
              </div>
            </div>

            {/* REVISÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <FileCheck className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Sempre revise seu texto
                </h3>

                <p className="text-muted-foreground">
                  Após terminar a redação, releia com atenção para identificar
                  erros gramaticais, repetições e problemas de coerência.
                </p>

                <p className="text-muted-foreground mt-3">
                  Pequenos ajustes podem melhorar significativamente a qualidade
                  da sua redação.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Checklist para uma boa redação
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Compreendi o tema corretamente",
                "Defini minha tese principal",
                "Usei argumentos consistentes",
                "Mantive a organização do texto",
                "Revisei ortografia e gramática",
                "Concluí retomando a ideia principal",
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
              Uma boa redação é resultado de preparação constante. Ler,
              praticar, planejar e revisar são hábitos que ajudam qualquer
              vestibulando a desenvolver textos mais claros, argumentativos e
              alinhados com o que as bancas avaliadoras esperam.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
