import SectionHeader from "@/components/shared/SectionHeader";
import {
  Bot,
  Sparkles,
  Rocket,
  Brain,
  Wand2,
  LayoutTemplate,
  CheckCircle,
} from "lucide-react";

export default function Automacao() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Ferramentas"
          title="Automação, IA e Produtividade"
          description="Conheça ferramentas que ajudam a aprender mais rápido, criar projetos em menos tempo e aumentar sua produtividade nos estudos e no desenvolvimento."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Trabalhe de forma mais inteligente, não mais difícil
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              A tecnologia evoluiu muito nos últimos anos. Hoje existem
              ferramentas capazes de acelerar estudos, gerar código, criar
              interfaces, organizar tarefas e até construir aplicações quase
              completas em poucos minutos.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Saber utilizar essas ferramentas não substitui conhecimento
              técnico, mas pode aumentar significativamente sua produtividade e
              acelerar seu aprendizado, algo muito valorizado atualmente no
              mercado de trabalho.
            </p>
          </section>

          {/* FERRAMENTAS */}
          <div className="grid gap-6">
            {/* CHATGPT */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Bot className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  ChatGPT
                </h3>

                <p className="text-muted-foreground">
                  Um dos assistentes de IA mais populares da atualidade.
                </p>

                <p className="text-muted-foreground mt-3">
                  Pode ajudar a aprender conceitos, revisar código, gerar
                  exemplos, explicar erros, criar documentação e auxiliar em
                  praticamente qualquer etapa dos estudos.
                </p>
              </div>
            </div>

            {/* CLAUDE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Brain className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Claude
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta de IA muito conhecida pela capacidade de analisar
                  textos extensos e projetos completos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Excelente para revisar documentos, analisar códigos grandes e
                  obter explicações detalhadas sobre sistemas complexos.
                </p>
              </div>
            </div>

            {/* BASE44 */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <LayoutTemplate className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Base44
                </h3>

                <p className="text-muted-foreground">
                  Plataforma que utiliza IA para gerar aplicações e estruturas
                  completas a partir de descrições em linguagem natural.
                </p>

                <p className="text-muted-foreground mt-3">
                  Uma ótima forma de aprender como projetos reais são
                  estruturados, validar ideias rapidamente e acelerar o processo
                  de desenvolvimento.
                </p>
              </div>
            </div>

            {/* BOLT */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Bolt.new
                </h3>

                <p className="text-muted-foreground">
                  Plataforma que permite criar aplicações web completas usando
                  apenas prompts.
                </p>

                <p className="text-muted-foreground mt-3">
                  Ideal para prototipação rápida, estudos e validação de ideias
                  sem precisar configurar um ambiente de desenvolvimento.
                </p>
              </div>
            </div>

            {/* LOVABLE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Sparkles className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Lovable
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta focada na criação de aplicações e interfaces por
                  meio de inteligência artificial.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito utilizada para gerar MVPs, landing pages e aplicações
                  modernas com rapidez.
                </p>
              </div>
            </div>

            {/* NOTEBOOKLM */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Wand2 className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  NotebookLM
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta do Google que transforma documentos, PDFs e
                  materiais de estudo em uma base de conhecimento interativa.
                </p>

                <p className="text-muted-foreground mt-3">
                  Excelente para resumir conteúdos, tirar dúvidas e revisar
                  materiais acadêmicos.
                </p>
              </div>
            </div>
          </div>

          {/* RECOMENDAÇÕES */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Como utilizar essas ferramentas da forma correta
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Use IA para aprender, não apenas copiar",
                "Valide ideias rapidamente com Base44 ou Bolt",
                "Peça explicações detalhadas ao ChatGPT",
                "Utilize o NotebookLM para estudar de forma mais eficiente",
                "Analise projetos completos com Claude",
                "Combine produtividade com prática real",
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
              Ferramentas de IA e automação podem acelerar significativamente o
              aprendizado e o desenvolvimento de projetos. Porém, o verdadeiro
              diferencial continua sendo entender os conceitos por trás das
              soluções geradas. Use essas tecnologias como aceleradores de
              conhecimento e produtividade, não como substitutas do aprendizado.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
