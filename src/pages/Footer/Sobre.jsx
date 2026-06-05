import SectionHeader from "@/components/shared/SectionHeader";
import {
  Target,
  Network,
  BookOpen,
  Briefcase,
  Rocket,
  CheckCircle,
} from "lucide-react";
export default function AboutTechHub() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Sobre o Projeto"
          title="Conheça o Tech Hub"
          description="Uma plataforma criada para gerar conexões, reunir recursos e informações que auxiliam estudantes de tecnologia da UNIVESP durante sua jornada acadêmica e profissional."
        />
        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Um projeto feito por estudantes para estudantes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O Tech Hub UNIVESP nasceu ao observar a dificuldade que muitos
              estudantes da modalidade EAD enfrentam para encontrar informações
              relevantes, dicas de carreira, recursos acadêmicos e conexões com
              outros estudantes da comunidade. A ideia é criar um espaço
              centralizado onde essas informações possam ser facilmente
              acessadas, compartilhadas e atualizadas pela própria comunidade.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4" />A
            proposta é simples: facilitar o acesso a conteúdos úteis para
            estudantes de tecnologia, reunindo materiais, iniciativas da
            comunidade, dicas de carreira e recursos que possam contribuir para
            o desenvolvimento acadêmico e profissional.
          </section>
          {/* PILARES */}
          <div className="grid gap-6">
            {/* MISSÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Target className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Nossa missão
                </h3>
                <p className="text-muted-foreground">
                  Tornar informações e recursos mais acessíveis para estudantes
                  de tecnologia, reduzindo barreiras e facilitando o aprendizado
                  e a integração entre os estudantes da UNIVESP. O Tech Hub
                  busca ser um ponto de encontro ao longo da graduação.
                </p>
              </div>
            </div>
            {/* COMUNIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Network className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Comunidade em primeiro lugar
                </h3>
                <p className="text-muted-foreground">
                  A plataforma valoriza a colaboração entre estudantes,
                  incentivando a troca de experiências, conhecimentos e
                  oportunidades que possam beneficiar toda a comunidade.
                </p>
              </div>
            </div>
            {/* CONHECIMENTO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Compartilhamento de conhecimento
                </h3>
                <p className="text-muted-foreground">
                  O Tech Hub busca reunir conteúdos práticos, dicas de carreira,
                  orientações e materiais que possam ajudar estudantes a se
                  desenvolverem dentro e fora da universidade.
                </p>
              </div>
            </div>
            {/* CARREIRA */}

            {/* EVOLUÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Evolução contínua
                </h3>
                <p className="text-muted-foreground">
                  O Tech Hub está em constante desenvolvimento. Novas
                  funcionalidades, conteúdos e melhorias são implementadas
                  continuamente para ampliar seu impacto e utilidade, e você
                  pode contribuir! Acesse a página "Sugerir Melhoria", no rodapé
                  do site.
                </p>
              </div>
            </div>
          </div>
          {/* DESTAQUES */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              O que você encontra por aqui
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Grupos de alunos por polos e interesses",
                "Conteúdo informativo para calouros",
                "Recomendação de produtos e itens acadêmicos",
                "Conteúdo informativo para vestibulandos",
                "Itens personalizados para cada curso e turma",
                "Dicas de estudos e carreira",
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
          {/* PROJETO INDEPENDENTE */}
          <section className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              Projeto independente
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O Tech Hub é um projeto independente desenvolvido por um estudante
              da comunidade, sem vínculo oficial com a UNIVESP. Seu objetivo é
              contribuir com o compartilhamento de informações, recursos e
              iniciativas que possam gerar valor para outros estudantes de
              tecnologia.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              A plataforma continuará evoluindo conforme novas necessidades,
              sugestões e oportunidades forem surgindo ao longo do tempo.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
