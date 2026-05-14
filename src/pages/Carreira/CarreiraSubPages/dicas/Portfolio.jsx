import SectionHeader from "@/components/shared/SectionHeader";
import {
  LayoutGrid,
  Code2,
  FolderGit2,
  Rocket,
  Eye,
  CheckCircle,
} from "lucide-react";

export default function PortfolioTips() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica de Carreira"
          title="Como montar um portfólio que realmente chama atenção"
          description="Um guia prático para criar um portfólio forte, profissional e que te ajuda a conseguir oportunidades na área de tecnologia."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Seu portfólio fala por você
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              No mercado de tecnologia, ninguém te contrata só pelo que você diz
              saber — mas sim pelo que você consegue mostrar. O portfólio é a
              forma mais direta de provar suas habilidades.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Ele funciona como uma vitrine do seu conhecimento, onde projetos
              bem construídos valem mais do que qualquer frase no currículo.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* BASE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <FolderGit2 className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Comece simples, mas comece de verdade
                </h3>

                <p className="text-muted-foreground">
                  Você não precisa de um portfólio perfeito para começar. Um
                  site simples com alguns projetos já é suficiente para entrar
                  no mercado.
                </p>

                <p className="text-muted-foreground mt-3">
                  O mais importante é ter algo publicado e acessível.
                </p>
              </div>
            </div>

            {/* PROJETOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Code2 className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Foque em projetos reais, não só tutoriais
                </h3>

                <p className="text-muted-foreground">
                  Copiar tutoriais não é suficiente. O ideal é criar projetos
                  próprios, mesmo que simples, mas que resolvam algum problema.
                </p>

                <p className="text-muted-foreground mt-3">
                  Exemplo: lista de tarefas, dashboard, API simples ou site
                  pessoal.
                </p>
              </div>
            </div>

            {/* ORGANIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <LayoutGrid className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Organização e apresentação importam muito
                </h3>

                <p className="text-muted-foreground">
                  Não é só o projeto que conta — como você apresenta ele também
                  importa. Um portfólio bem organizado passa mais
                  profissionalismo.
                </p>

                <p className="text-muted-foreground mt-3">
                  Use descrições claras, imagens e links para código e deploy.
                </p>
              </div>
            </div>

            {/* DEPLOY */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Coloque seus projetos no ar
                </h3>

                <p className="text-muted-foreground">
                  Um projeto sem link público perde muito valor. Deploy mostra
                  que você sabe ir além do código local.
                </p>

                <p className="text-muted-foreground mt-3">
                  Plataformas como Vercel e Netlify facilitam esse processo.
                </p>
              </div>
            </div>

            {/* VISUAL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Eye className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Design simples, mas bem feito
                </h3>

                <p className="text-muted-foreground">
                  Você não precisa ser designer, mas precisa de bom senso
                  visual. Layout limpo, boa hierarquia e legibilidade já fazem
                  muita diferença.
                </p>

                <p className="text-muted-foreground mt-3">
                  Menos é mais quando se trata de portfólio.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              O que não pode faltar no seu portfólio
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Projetos próprios",
                "Link do GitHub",
                "Deploy online",
                "Descrição clara dos projetos",
                "Tecnologias utilizadas",
                "Contato visível",
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
              Um bom portfólio não precisa ser grande — precisa ser claro,
              honesto e funcional. Ele é sua principal ferramenta para mostrar
              evolução e conquistar oportunidades na área de tecnologia.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
