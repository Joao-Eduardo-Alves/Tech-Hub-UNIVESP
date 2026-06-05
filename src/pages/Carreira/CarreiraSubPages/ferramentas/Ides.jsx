import SectionHeader from "@/components/shared/SectionHeader";
import {
  Code2,
  Laptop,
  Zap,
  Terminal,
  Database,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function IdeGuide() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Ferramentas"
          title="IDEs para Programação"
          description="Conheça algumas das IDEs e editores de código mais utilizados no mercado e descubra qual faz mais sentido para seus estudos e projetos."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O que é uma IDE?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              IDE significa <strong>Integrated Development Environment</strong>
              (Ambiente Integrado de Desenvolvimento). É o software utilizado
              para escrever, executar, depurar e organizar código.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Algumas IDEs são focadas em produtividade, enquanto outras
              oferecem recursos específicos para determinadas linguagens ou
              áreas de atuação.
            </p>
          </section>

          {/* IDEs */}
          <div className="grid gap-6">
            {/* VS CODE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Code2 className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Visual Studio Code
                </h3>

                <p className="text-muted-foreground">
                  O editor mais popular entre desenvolvedores. Leve, gratuito,
                  altamente personalizável e com milhares de extensões.
                </p>

                <p className="text-muted-foreground mt-3">
                  Excelente para iniciantes e profissionais que trabalham com
                  Frontend, Backend, Mobile e diversas outras áreas.
                </p>
              </div>
            </div>

            {/* INTELLIJ */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Cpu className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  IntelliJ IDEA
                </h3>

                <p className="text-muted-foreground">
                  Uma das IDEs mais completas para desenvolvimento Java.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito utilizada em projetos Spring Boot, oferecendo recursos
                  avançados de produtividade e análise de código.
                </p>
              </div>
            </div>

            {/* VISUAL STUDIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Laptop className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Visual Studio
                </h3>

                <p className="text-muted-foreground">
                  Ambiente robusto voltado principalmente para desenvolvimento
                  com C#, .NET e aplicações desktop.
                </p>

                <p className="text-muted-foreground mt-3">
                  Muito utilizado em empresas que trabalham com tecnologias da
                  Microsoft.
                </p>
              </div>
            </div>

            {/* PYCHARM */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Zap className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  PyCharm
                </h3>

                <p className="text-muted-foreground">
                  IDE especializada em Python, desenvolvida pela JetBrains.
                </p>

                <p className="text-muted-foreground mt-3">
                  Bastante utilizada em automação, desenvolvimento web, análise
                  de dados, inteligência artificial e machine learning.
                </p>
              </div>
            </div>

            {/* ANDROID STUDIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Terminal className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Android Studio
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta oficial para desenvolvimento de aplicativos
                  Android.
                </p>

                <p className="text-muted-foreground mt-3">
                  Possui emuladores, ferramentas de testes e integração completa
                  com o ecossistema Android.
                </p>
              </div>
            </div>

            {/* DBeaver */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Database className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  DBeaver
                </h3>

                <p className="text-muted-foreground">
                  Embora não seja uma IDE tradicional, é uma ferramenta de
                  inteface gráfica para gerenciamento de bancos de dados. Muito
                  útil para rabalhar com SQL de forma visual e intuitiva.
                </p>

                <p className="text-muted-foreground mt-3">
                  Compatível com MySQL, PostgreSQL, Oracle, SQL Server e muitos
                  outros sistemas.
                </p>
              </div>
            </div>
          </div>

          {/* RECOMENDAÇÕES */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Qual IDE escolher?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "VS Code para iniciantes e projetos diversos",
                "IntelliJ para Java",
                "PyCharm para Python",
                "Android Studio para Mobile",
                "Visual Studio para .NET",
                "DBeaver para bancos de dados",
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
              Não existe uma IDE perfeita para todas as situações. O mais
              importante é escolher uma ferramenta adequada para a tecnologia
              que você está estudando e dominar seu fluxo de trabalho. Com o
              tempo, você naturalmente conhecerá outras opções e descobrirá as
              que melhor se adaptam ao seu perfil.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
