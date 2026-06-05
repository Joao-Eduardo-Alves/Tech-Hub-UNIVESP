import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Rocket,
  LayoutDashboard,
  BookOpen,
  Users,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function Sugestao() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Comunidade"
          title="Sugerir Melhoria"
          description="Tem uma ideia para tornar o Tech Hub ainda melhor? Compartilhe sugestões, recursos e novas funcionalidades."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Grandes melhorias começam com boas ideias
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O Tech Hub é um projeto em constante evolução. Muitas das
              melhorias planejadas surgem a partir de sugestões da própria
              comunidade, que utiliza a plataforma diariamente.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Se você identificou uma oportunidade de melhoria, uma nova
              funcionalidade ou um recurso que poderia agregar valor aos
              estudantes, sua contribuição será muito bem-vinda.
            </p>
          </section>

          {/* TIPOS DE SUGESTÕES */}
          <div className="grid gap-6">
            {/* FUNCIONALIDADES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Novas funcionalidades
                </h3>

                <p className="text-muted-foreground">
                  Sugira ferramentas, integrações ou recursos que possam tornar
                  a plataforma mais útil para estudantes de tecnologia.
                </p>
              </div>
            </div>

            {/* EXPERIÊNCIA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <LayoutDashboard className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Melhorias de experiência
                </h3>

                <p className="text-muted-foreground">
                  Ideias relacionadas à navegação, organização do conteúdo,
                  acessibilidade ou usabilidade ajudam a tornar a experiência
                  mais agradável para todos.
                </p>
              </div>
            </div>

            {/* CONTEÚDO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Novos conteúdos
                </h3>

                <p className="text-muted-foreground">
                  Dicas de carreira, materiais acadêmicos, recursos para
                  desenvolvimento profissional e conteúdos educacionais são
                  sempre bem-vindos.
                </p>
              </div>
            </div>

            {/* COMUNIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Users className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Recursos para a comunidade
                </h3>

                <p className="text-muted-foreground">
                  Sugestões que fortaleçam a interação entre estudantes,
                  iniciativas colaborativas e compartilhamento de conhecimento
                  podem gerar grande impacto para a comunidade.
                </p>
              </div>
            </div>

            {/* IDEIAS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Lightbulb className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Toda ideia é válida
                </h3>

                <p className="text-muted-foreground">
                  Não importa o tamanho da sugestão. Desde pequenos ajustes até
                  grandes funcionalidades, toda contribuição é analisada e pode
                  ajudar a direcionar futuras melhorias.
                </p>
              </div>
            </div>
          </div>

          {/* EXEMPLOS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Exemplos de sugestões
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Novas ferramentas",
                "Mais conteúdos educativos",
                "Melhor organização das páginas",
                "Novas integrações",
                "Recursos para estudantes",
                "Melhorias de acessibilidade",
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
              O Tech Hub é construído em conjunto
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Embora o projeto seja desenvolvido de forma independente, a
              participação da comunidade desempenha um papel importante em sua
              evolução. Muitas das melhores ideias surgem de quem utiliza a
              plataforma no dia a dia.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Se você tem uma sugestão, ficarei feliz em recebê-la e avaliá-la
              para futuras atualizações do projeto.
            </p>

            <Button asChild>
              <a href="" target="_blank" rel="noopener noreferrer">
                Enviar sugestão
              </a>
            </Button>
          </section>
        </article>
      </div>
    </div>
  );
}
