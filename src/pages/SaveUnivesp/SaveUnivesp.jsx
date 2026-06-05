import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Shield,
  GraduationCap,
  Users,
  Megaphone,
  Video,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function SaveUnivesp() {
  const videoSrc = "/videos/saveunivesp.mp4";
  const supportActions = [
    "Assinar a petição online",
    "Participar do grupo oficial",
    "Compartilhar a campanha",
    "Acompanhar atualizações",
    "Convidar colegas da UNIVESP",
    "Fortalecer a mobilização estudantil",
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Mobilização Estudantil"
          title="Salve a UNIVESP"
          description="Uma mobilização de estudantes em defesa da continuidade do ensino a distância nas engenharias e licenciaturas da UNIVESP."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              A educação pública e acessível precisa da nossa voz
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Milhares de estudantes escolheram a UNIVESP pela oportunidade de
              cursar o ensino superior público com flexibilidade, qualidade e
              alcance em todo o estado de São Paulo.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Mudanças regulatórias relacionadas ao ensino a distância podem
              impactar diretamente cursos de engenharia e licenciaturas. Diante
              desse cenário, estudantes estão se organizando para acompanhar o
              tema, compartilhar informações e defender a continuidade do acesso
              ao ensino superior público e inclusivo.
            </p>
          </section>

          {/* CARDS */}
          <div className="grid gap-6">
            {/* O QUE ESTÁ ACONTECENDO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Shield className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. O que está acontecendo?
                </h3>

                <p className="text-muted-foreground">
                  Discussões sobre novas regras para cursos EAD podem afetar
                  diretamente a estrutura de cursos ofertados pela UNIVESP.
                </p>

                <p className="text-muted-foreground mt-3">
                  A comunidade acadêmica acompanha o tema para compreender seus
                  impactos e defender soluções que preservem o acesso à
                  educação.
                </p>
              </div>
            </div>

            {/* IMPACTADOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <GraduationCap className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Quem pode ser impactado?
                </h3>

                <p className="text-muted-foreground">
                  Estudantes atuais, futuros ingressantes e toda a comunidade
                  que depende da educação pública a distância podem sentir os
                  efeitos dessas mudanças.
                </p>

                <p className="text-muted-foreground mt-3">
                  A UNIVESP representa uma oportunidade real de formação para
                  milhares de pessoas em todo o estado de São Paulo.
                </p>
              </div>
            </div>

            {/* MOBILIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Users className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Por que a mobilização é importante?
                </h3>

                <p className="text-muted-foreground">
                  Quando estudantes se unem, conseguem ampliar a visibilidade do
                  tema e fortalecer o diálogo com instituições e órgãos
                  responsáveis.
                </p>

                <p className="text-muted-foreground mt-3">
                  A participação coletiva ajuda a construir soluções e garantir
                  que as necessidades dos alunos sejam ouvidas.
                </p>
              </div>
            </div>
          </div>
          {/* APOIO */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Como apoiar a campanha
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {supportActions.map((item) => (
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

          {/* VÍDEO */}
          <section className="p-6 rounded-2xl border border-border/50 bg-card">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Entenda a situação
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Assista ao vídeo preparado pelo fundador do movimento ABE BRASIL e
              ativista do movimento SOS UNIVESP "Ricardo Holz" para compreender
              melhor o contexto, os possíveis impactos e as ações que estão
              sendo realizadas pela comunidade estudantil.
            </p>

            <div className="mt-6 flex justify-center">
              <div className="inline-block max-w-[420px] rounded-lg overflow-hidden bg-black">
                <video
                  src={videoSrc}
                  controls
                  playsInline
                  className="block w-full h-auto"
                >
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </div>
            </div>
          </section>

          <section className="p-8 rounded-2xl border border-primary/30 bg-primary/10 shadow-lg shadow-primary/10">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-semibold mb-3 text-foreground">
                  Assine a petição agora
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  Assine a petição oficial para mostrar seu apoio à continuidade
                  do ensino a distância na UNIVESP e fortalecer a mobilização
                  estudantil. Esse é o principal passo para ampliar nossa voz e
                  garantir que a causa chegue aos responsáveis.
                </p>
              </div>

              <div>
                <Button className="h-14 rounded-full px-8 text-base" asChild>
                  <a
                    href="https://sosunivesp.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assinar petição
                  </a>
                </Button>
              </div>
            </div>
          </section>
          <section className="p-6 rounded-2xl border border-border/50 bg-card">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Participe do movimento
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Entre no grupo oficial para acompanhar atualizações, ações
              coletivas, comunicados importantes e formas de contribuir com a
              mobilização.
            </p>

            <Button asChild variant="whatsapp">
              <a
                href="https://chat.whatsapp.com/BkpUhYdVLT2AoarTjDBSqN?s=sw&p=a&mlu=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Entrar no grupo oficial
              </a>
            </Button>
          </section>
        </article>
      </div>
    </div>
  );
}
