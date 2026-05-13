import SectionHeader from "@/components/shared/SectionHeader";
import {
  Code2,
  Palette,
  Layers3,
  ShieldCheck,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function FrontendRoadmap() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Roadmap Frontend"
          title="Como se Tornar um Desenvolvedor Frontend"
          description="Um guia prático e moderno para entender quais habilidades estudar, em qual ordem aprender e como evoluir no desenvolvimento de interfaces web."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O que faz um desenvolvedor frontend?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O frontend é a área responsável por transformar ideias, layouts e
              funcionalidades em experiências visuais reais dentro do navegador.
              É o que o usuário vê, clica, navega e interage diariamente em
              sites, sistemas e aplicativos web.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Mais do que apenas “fazer telas bonitas”, um bom desenvolvedor
              frontend precisa entender estrutura, performance, acessibilidade,
              experiência do usuário e organização de código. A boa notícia é
              que existe uma sequência muito clara de aprendizado para começar.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* HTML CSS JS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Code2 className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Domine HTML, CSS e JavaScript
                </h3>

                <p className="text-muted-foreground">
                  Essa é a base de absolutamente tudo no frontend. O HTML cria a
                  estrutura da página, o CSS cuida do visual e o JavaScript
                  adiciona lógica e interatividade.
                </p>

                <p className="text-muted-foreground mt-3">
                  Antes de aprender frameworks modernos, é importante entender
                  muito bem como essas tecnologias funcionam sozinhas. Quem pula
                  essa etapa geralmente encontra dificuldades mais pra frente.
                </p>
              </div>
            </div>

            {/* RESPONSIVIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Palette className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Aprenda Responsividade e Acessibilidade
                </h3>

                <p className="text-muted-foreground">
                  Hoje, um site precisa funcionar bem em celulares, tablets,
                  notebooks e monitores ultrawide. Responsividade deixou de ser
                  diferencial há muito tempo.
                </p>

                <p className="text-muted-foreground mt-3">
                  Além disso, acessibilidade significa criar aplicações que
                  possam ser utilizadas por todos os usuários, incluindo pessoas
                  com limitações visuais, motoras ou cognitivas.
                </p>
              </div>
            </div>

            {/* FRAMEWORKS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Layers3 className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Escolha um framework moderno: React ou Vue
                </h3>

                <p className="text-muted-foreground">
                  Depois de construir uma base sólida, chega o momento de entrar
                  no ecossistema moderno do frontend. Frameworks e bibliotecas
                  ajudam a criar aplicações escaláveis, organizadas e muito mais
                  dinâmicas.
                </p>

                <p className="text-muted-foreground mt-3">
                  O React é atualmente uma das tecnologias mais utilizadas pelo
                  mercado, enquanto o Vue.js é conhecido pela simplicidade e
                  facilidade de aprendizado.
                </p>
              </div>
            </div>

            {/* TYPESCRIPT */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <ShieldCheck className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Evolua para TypeScript
                </h3>

                <p className="text-muted-foreground">
                  O TypeScript adiciona tipagem ao JavaScript e ajuda a prevenir
                  erros antes mesmo da aplicação rodar.
                </p>

                <p className="text-muted-foreground mt-3">
                  Em projetos maiores, ele melhora organização, manutenção e
                  produtividade. Atualmente, grande parte das vagas frontend já
                  considera TypeScript um requisito importante.
                </p>
              </div>
            </div>

            {/* TESTES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Aprenda Testes e Deploy
                </h3>

                <p className="text-muted-foreground">
                  Criar aplicações vai além de apenas desenvolver telas. Um
                  frontend profissional também precisa garantir qualidade e ser
                  publicado corretamente.
                </p>

                <p className="text-muted-foreground mt-3">
                  Aprender testes ajuda a evitar bugs e aumentar a confiança no
                  sistema. Já o deploy permite colocar sua aplicação online para
                  que outras pessoas possam acessar e visualizar seus projetos.
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
                "VS Code",
                "Git e GitHub",
                "Figma",
                "Chrome DevTools",
                "Vercel",
                "Netlify",
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
              O desenvolvimento frontend é uma das áreas mais criativas e
              acessíveis da tecnologia. Começando pela base correta e evoluindo
              passo a passo, você consegue construir projetos reais, desenvolver
              portfólio e se preparar para oportunidades profissionais no
              mercado tech.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
