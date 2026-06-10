import SectionHeader from "@/components/shared/SectionHeader";
import {
  Database,
  BarChart3,
  Sigma,
  FileSpreadsheet,
  Workflow,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function DataRoadmap() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Roadmap Dados"
          title="Como se Tornar um Profissional de Dados"
          description="Um guia direto e prático para entender como transformar dados em decisões, insights e valor real para empresas."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O poder dos dados no mundo moderno
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Dados estão por trás de praticamente tudo que usamos hoje: redes
              sociais, bancos, e-commerces e até sistemas de transporte. O
              profissional de dados é quem transforma esse volume gigantesco de
              informações em decisões inteligentes.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Trabalhar com dados não é apenas analisar números, mas sim
              encontrar padrões, prever comportamentos e ajudar empresas a agir
              com mais precisão.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* BASE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <FileSpreadsheet className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Fundamentos de dados e lógica analítica
                </h3>

                <p className="text-muted-foreground">
                  O primeiro passo é entender como dados são estruturados,
                  organizados e armazenados. Isso inclui tabelas, registros,
                  colunas e tipos de informação.
                </p>

                <p className="text-muted-foreground mt-3">
                  Aqui também entra o pensamento analítico: saber fazer as
                  perguntas certas aos dados.
                </p>
              </div>
            </div>

            {/* SQL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Database className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Bancos de dados e SQL
                </h3>

                <p className="text-muted-foreground">
                  SQL é a linguagem essencial para quem trabalha com dados. Ela
                  permite consultar, filtrar, agrupar e manipular informações em
                  bancos de dados relacionais.
                </p>

                <p className="text-muted-foreground mt-3">
                  Dominar SQL é praticamente obrigatório em qualquer vaga da
                  área de dados.
                </p>
              </div>
            </div>

            {/* ESTATÍSTICA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Sigma className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Estatística e probabilidade
                </h3>

                <p className="text-muted-foreground">
                  Para interpretar dados corretamente, é essencial entender
                  conceitos como média, mediana, desvio padrão e correlação.
                </p>

                <p className="text-muted-foreground mt-3">
                  Isso evita conclusões erradas e melhora a qualidade das
                  análises.
                </p>
              </div>
            </div>

            {/* ANALYTICS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BarChart3 className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Análise e visualização de dados
                </h3>

                <p className="text-muted-foreground">
                  Dados sozinhos não dizem muito — eles precisam ser
                  interpretados. Aqui entram gráficos, dashboards e ferramentas
                  de visualização.
                </p>

                <p className="text-muted-foreground mt-3">
                  O objetivo é transformar números complexos em informações
                  simples e claras para tomada de decisão.
                </p>
              </div>
            </div>

            {/* PIPELINE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Workflow className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Engenharia de dados e pipelines
                </h3>

                <p className="text-muted-foreground">
                  Em níveis mais avançados, o profissional de dados trabalha com
                  pipelines — processos que coletam, transformam e entregam
                  dados de forma automatizada.
                </p>

                <p className="text-muted-foreground mt-3">
                  Isso garante que os dados estejam sempre limpos, organizados e
                  prontos para uso.
                </p>
              </div>
            </div>

            {/* APLICAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  6. Aplicação prática e projetos reais
                </h3>

                <p className="text-muted-foreground">
                  O aprendizado se consolida quando você trabalha com projetos
                  reais: análise de vendas, comportamento de usuários ou
                  previsões de mercado.
                </p>

                <p className="text-muted-foreground mt-3">
                  É aqui que você começa a construir portfólio e ganhar
                  experiência prática.
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
                "SQL",
                "Excel / Google Sheets",
                "Power BI",
                "Tableau",
                "Python (Pandas)",
                "Jupyter Notebook",
                "BigQuery",
                "PostgreSQL",
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
              A área de dados é uma das mais estratégicas da tecnologia. Ela une
              lógica, análise e impacto direto em decisões de negócio. Com
              prática constante e base sólida, é possível construir uma carreira
              extremamente sólida e valorizada.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
