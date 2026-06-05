import SectionHeader from "@/components/shared/SectionHeader";
import {
  Figma,
  PenTool,
  Palette,
  Layout,
  Users,
  Workflow,
  CheckCircle,
} from "lucide-react";

export default function DesignUx() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Ferramentas"
          title="Design e UI/UX"
          description="Conheça ferramentas utilizadas por designers, desenvolvedores e product designers para criar interfaces, protótipos e experiências digitais."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Para começar, o que é de UI/UX?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              UI (Interface do Usuário) e UX (Experiência do Usuário) são áreas
              complementares essenciais para criar produtos digitais. A UI cuida
              da estética e dos elementos visuais (como botões e cores). O UX
              foca na funcionalidade, na facilidade de uso e nos sentimentos do
              usuário durante a jornada.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Felizmente, hoje existem diversas ferramentas gratuitas que ajudam
              desde a criação de wireframes (esqueleto ou planta baixa de um
              projeto digital) ,até protótipos completos e sistemas de design.
            </p>
          </section>

          {/* FERRAMENTAS */}
          <div className="grid gap-6">
            {/* FIGMA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Figma className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">Figma</h3>

                <p className="text-muted-foreground">
                  A principal ferramenta de design de interfaces do mercado.
                  Permite criar layouts, protótipos, sistemas de design e
                  colaborar em tempo real com outras pessoas.
                </p>

                <p className="text-muted-foreground mt-3">
                  É praticamente um padrão para equipes de Produto, UX e
                  Desenvolvimento Frontend.
                </p>
              </div>
            </div>

            {/* EXCALIDRAW */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <PenTool className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Excalidraw
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta simples para criar esboços, fluxos de navegação,
                  diagramas e wireframes rápidos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Excelente para validar ideias antes de partir para o design
                  detalhado.
                </p>
              </div>
            </div>

            {/* COOLORS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Palette className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Coolors
                </h3>

                <p className="text-muted-foreground">
                  Gerador de paletas de cores utilizado por designers para criar
                  combinações harmoniosas rapidamente.
                </p>

                <p className="text-muted-foreground mt-3">
                  Uma ótima ferramenta para quem tem dificuldade em escolher
                  cores para seus projetos.
                </p>
              </div>
            </div>

            {/* WHIMSICAL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Layout className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Whimsical
                </h3>

                <p className="text-muted-foreground">
                  Plataforma para criação de wireframes, fluxogramas, mapas
                  mentais e jornadas de usuário.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito utilizada durante etapas de planejamento e descoberta de
                  produtos.
                </p>
              </div>
            </div>

            {/* MIRO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Users className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">Miro</h3>

                <p className="text-muted-foreground">
                  Quadro colaborativo online utilizado para brainstorming,
                  workshops, planejamento de produtos e mapeamento de processos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Ideal para trabalho em equipe e colaboração remota.
                </p>
              </div>
            </div>

            {/* DIAGRAMS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Workflow className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Draw.io (Diagrams.net)
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta gratuita para criação de diagramas, fluxos,
                  arquiteturas e mapeamento de sistemas.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito útil para documentar aplicações e visualizar jornadas de
                  usuários.
                </p>
              </div>
            </div>
          </div>

          {/* RECOMENDAÇÕES */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Um caminho simples para começar em UI/UX
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Observe produtos que você já utiliza",
                  description:
                    "Analise aplicativos, sites e sistemas que fazem parte do seu dia a dia. Repare em menus, formulários, botões e fluxos de navegação.",
                },
                {
                  title: "Comece pelo problema, não pelo visual",
                  description:
                    "Antes de escolher cores ou fontes, defina o objetivo da interface e o que o usuário precisa realizar dentro dela.",
                },
                {
                  title: "Crie wireframes simples",
                  description:
                    "Faça rascunhos das telas para organizar conteúdo, navegação e funcionalidades antes de investir tempo em detalhes visuais.",
                },
                {
                  title: "Priorize clareza e usabilidade",
                  description:
                    "Interfaces simples e intuitivas costumam gerar melhores resultados do que layouts visualmente complexos.",
                },
                {
                  title: "Busque referências constantemente",
                  description:
                    "Analisar plataformas e sites ajudam a entender padrões utilizados por profissionais do mercado.",
                },
                {
                  title: "Pratique recriando interfaces reais",
                  description:
                    "Tente reproduzir telas de aplicativos conhecidos. É uma ótima forma de aprender hierarquia visual, espaçamento e componentes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card"
                >
                  <CheckCircle className="text-primary shrink-0 mt-1 w-5 h-5" />

                  <div>
                    <h3 className="font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
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
              Aprender Design e UX não é apenas para designers. Desenvolvedores
              que entendem princípios de usabilidade, acessibilidade e
              experiência do usuário conseguem criar aplicações mais intuitivas,
              profissionais e alinhadas às necessidades reais das pessoas.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
