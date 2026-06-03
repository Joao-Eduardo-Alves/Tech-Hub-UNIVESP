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
          description="Uma plataforma criada para reunir recursos, informações e oportunidades que auxiliam estudantes de tecnologia durante sua jornada acadêmica e profissional."
        />
        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Um projeto feito por estudante para estudantes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O Tech Hub nasceu da necessidade de centralizar conteúdos,
              recursos e informações que frequentemente ficam espalhados entre
              grupos, redes sociais e diferentes plataformas.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4" />A
            proposta é simples: facilitar o acesso a conteúdos úteis para
            estudantes de tecnologia da UNIVESP, reunindo materiais, iniciativas
            da comunidade, dicas de carreira e recursos que possam contribuir
            para o desenvolvimento acadêmico e profissional.
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
                  ao longo da graduação.
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
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Briefcase className="text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Foco em desenvolvimento profissional
                </h3>
                <p className="text-muted-foreground">
                  Além da formação acadêmica, o projeto também busca apoiar
                  estudantes na preparação para estágios, processos seletivos e
                  primeiros passos no mercado de tecnologia.
                </p>
              </div>
            </div>
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
                  continuamente para ampliar seu impacto e utilidade.
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
                "Dicas de carreira",
                "Conteúdos para estudantes",
                "Projetos da comunidade",
                "Informações sobre DRPs",
                "Recursos acadêmicos",
                "Oportunidades de desenvolvimento",
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
