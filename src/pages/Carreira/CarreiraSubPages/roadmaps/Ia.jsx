import SectionHeader from "@/components/shared/SectionHeader";
import {
  Brain,
  Sigma,
  Code2,
  Bot,
  Cpu,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function AIRoadmap() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Roadmap IA"
          title="Como se Tornar um Desenvolvedor de Inteligência Artificial"
          description="Um guia prático para entender como máquinas aprendem, como modelos são criados e como construir soluções reais com IA."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O que é trabalhar com Inteligência Artificial?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Trabalhar com Inteligência Artificial é ensinar máquinas a
              aprender com dados para tomar decisões, reconhecer padrões e até
              gerar conteúdos. É uma das áreas mais poderosas e transformadoras
              da tecnologia atual.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Por trás de sistemas como recomendação de vídeos, chatbots e
              carros autônomos, existe uma combinação de matemática, programação
              e modelos estatísticos trabalhando juntos.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* BASE MATEMÁTICA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Sigma className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Base matemática e pensamento analítico
                </h3>

                <p className="text-muted-foreground">
                  IA não é só código — é estatística, álgebra linear e
                  probabilidade. Esses conceitos ajudam a entender como os
                  algoritmos “pensam”.
                </p>

                <p className="text-muted-foreground mt-3">
                  Você não precisa ser um gênio da matemática, mas precisa
                  entender o suficiente para interpretar modelos e resultados.
                </p>
              </div>
            </div>

            {/* PYTHON */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Code2 className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Aprenda Python e manipulação de dados
                </h3>

                <p className="text-muted-foreground">
                  Python é a principal linguagem da área de IA. Simples,
                  poderosa e com uma enorme quantidade de bibliotecas para
                  ciência de dados.
                </p>

                <p className="text-muted-foreground mt-3">
                  Aqui você aprende a lidar com dados, limpar informações e
                  preparar tudo para alimentar modelos inteligentes.
                </p>
              </div>
            </div>

            {/* MACHINE LEARNING */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Brain className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Machine Learning (aprendizado de máquina)
                </h3>

                <p className="text-muted-foreground">
                  Aqui começa a “inteligência” de fato. O Machine Learning
                  ensina modelos a aprender padrões com dados históricos e fazer
                  previsões.
                </p>

                <p className="text-muted-foreground mt-3">
                  Exemplos incluem prever preços, classificar imagens e
                  recomendar conteúdos automaticamente.
                </p>
              </div>
            </div>

            {/* DEEP LEARNING */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Bot className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Deep Learning e redes neurais
                </h3>

                <p className="text-muted-foreground">
                  O Deep Learning é uma evolução do Machine Learning, inspirado
                  no funcionamento do cérebro humano através de redes neurais.
                </p>

                <p className="text-muted-foreground mt-3">
                  Ele é responsável por avanços como reconhecimento de imagem,
                  voz e modelos generativos modernos.
                </p>
              </div>
            </div>

            {/* MLOPS / DEPLOY */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Deploy, APIs e MLOps
                </h3>

                <p className="text-muted-foreground">
                  Criar modelos é só parte do processo. O verdadeiro impacto
                  acontece quando eles são colocados em produção e usados por
                  aplicações reais.
                </p>

                <p className="text-muted-foreground mt-3">
                  Aqui entram APIs, containers, monitoramento e o conceito de
                  MLOps — que garante que modelos continuem funcionando bem ao
                  longo do tempo.
                </p>
              </div>
            </div>
          </div>

          {/* FERRAMENTAS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Ferramentas importantes nessa jornada
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Python",
                "Jupyter Notebook",
                "Scikit-learn",
                "TensorFlow",
                "PyTorch",
                "Hugging Face",
                "Pandas / NumPy",
                "Docker",
              ].map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card"
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-foreground font-medium">{tool}</span>
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
              A Inteligência Artificial é uma das áreas mais promissoras da
              tecnologia moderna. Apesar de parecer complexa no início, ela se
              torna muito mais clara quando estudada passo a passo, com base
              sólida e prática constante.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
