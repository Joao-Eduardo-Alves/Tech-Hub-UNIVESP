import SectionHeader from "@/components/shared/SectionHeader";
import {
  Globe,
  Rocket,
  Cloud,
  Server,
  Upload,
  CheckCircle,
  MonitorSmartphone,
} from "lucide-react";

export default function FreeDeployTools() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Ferramentas"
          title="Deploy Gratuito para Projetos e Portfólio"
          description="Conheça plataformas que permitem publicar seus projetos gratuitamente e criar um portfólio acessível para recrutadores, professores e futuros clientes."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Seu projeto só existe de verdade quando está online
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Muitos estudantes desenvolvem projetos interessantes durante os
              estudos, mas acabam deixando tudo parado no computador. Publicar
              suas aplicações é uma das formas mais simples de se destacar em
              processos seletivos.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Além de demonstrar iniciativa, um projeto publicado permite que
              recrutadores, professores e colegas testem seu trabalho sem
              precisar baixar ou configurar nada.
            </p>
          </section>

          {/* FERRAMENTAS */}
          <div className="grid gap-6">
            {/* VERCEL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Vercel
                </h3>

                <p className="text-muted-foreground">
                  Uma das plataformas mais populares para hospedar aplicações
                  Frontend modernas.
                </p>

                <p className="text-muted-foreground mt-3">
                  Possui integração nativa com GitHub e permite publicar
                  projetos React, Next.js, Vue e outras tecnologias com poucos
                  cliques.
                </p>
              </div>
            </div>

            {/* NETLIFY */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Globe className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Netlify
                </h3>

                <p className="text-muted-foreground">
                  Excelente opção para hospedar sites estáticos e aplicações
                  Frontend.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito utilizada por estudantes por oferecer deploy simples,
                  domínio gratuito e integração com repositórios Git.
                </p>
              </div>
            </div>

            {/* RAILWAY */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Server className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Railway
                </h3>

                <p className="text-muted-foreground">
                  Plataforma focada em aplicações Backend, APIs e bancos de
                  dados.
                </p>

                <p className="text-muted-foreground mt-3">
                  Ideal para quem deseja publicar projetos completos utilizando
                  Node.js, Spring Boot, PostgreSQL e outras tecnologias.
                </p>
              </div>
            </div>

            {/* RENDER */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Cloud className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Render
                </h3>

                <p className="text-muted-foreground">
                  Plataforma bastante utilizada para hospedar APIs, aplicações
                  web e bancos de dados.
                </p>

                <p className="text-muted-foreground mt-3">
                  Possui plano gratuito e costuma ser uma alternativa popular ao
                  Railway para projetos acadêmicos e portfólios.
                </p>
              </div>
            </div>

            {/* GITHUB PAGES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Upload className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  GitHub Pages
                </h3>

                <p className="text-muted-foreground">
                  Serviço gratuito do GitHub para hospedagem de sites estáticos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Uma ótima alternativa para currículos online, landing pages,
                  documentações e projetos simples de portfólio.
                </p>
              </div>
            </div>

            {/* FIREBASE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <MonitorSmartphone className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Firebase Hosting
                </h3>

                <p className="text-muted-foreground">
                  Solução da Google para hospedagem de aplicações web e projetos
                  Frontend.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito utilizada em aplicações integradas ao ecossistema
                  Firebase, incluindo autenticação, banco de dados e analytics.
                </p>
              </div>
            </div>
          </div>

          {/* DICAS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Por onde começar?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Use Vercel para projetos React e Next.js",
                "Utilize Netlify para sites estáticos",
                "Hospede APIs no Railway ou Render",
                "Publique seu portfólio no GitHub Pages",
                "Integre projetos com GitHub",
                "Mantenha seus deploys sempre atualizados",
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
              Publicar projetos é um dos hábitos que mais aceleram o crescimento
              de um desenvolvedor. Além de demonstrar conhecimento técnico, você
              cria um portfólio acessível que pode ser compartilhado em
              currículos, LinkedIn e processos seletivos. Não espere seu projeto
              estar perfeito para colocá-lo no ar: publique, evolua e aprenda
              com cada nova versão.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
