import SectionHeader from "@/components/shared/SectionHeader";
import {
  Database,
  Server,
  ShieldCheck,
  Workflow,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function BackendRoadmap() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Roadmap Backend"
          title="Como se Tornar um Desenvolvedor Backend"
          description="Um guia prático para entender como funcionam as aplicações por trás das telas, APIs, bancos de dados e a lógica que move a web."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O que faz um desenvolvedor backend?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O backend é a parte “invisível” das aplicações — mas também a mais
              essencial. É ele que cuida da lógica, regras de negócio,
              segurança, autenticação, comunicação com bancos de dados e
              integração entre sistemas.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Enquanto o frontend mostra tudo para o usuário, o backend garante
              que tudo funcione corretamente por trás dos panos, de forma
              rápida, segura e escalável.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* BASE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Server className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Entenda a base da programação e da web
                </h3>

                <p className="text-muted-foreground">
                  Antes de qualquer framework, é essencial dominar lógica de
                  programação, estruturas de dados básicas e como a web
                  funciona: requisições HTTP, cliente e servidor.
                </p>

                <p className="text-muted-foreground mt-3">
                  Esse entendimento evita que você apenas “decore ferramentas” e
                  te dá autonomia para construir qualquer tipo de sistema.
                </p>
              </div>
            </div>

            {/* LINGUAGEM */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Workflow className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Escolha uma linguagem de backend
                </h3>

                <p className="text-muted-foreground">
                  O backend pode ser construído com várias linguagens, como
                  JavaScript (Node.js), Java, C#, Python ou Go.
                </p>

                <p className="text-muted-foreground mt-3">
                  O mais importante não é a linguagem em si, mas entender bem
                  como construir APIs, manipular dados e estruturar aplicações.
                </p>
              </div>
            </div>

            {/* BANCO DE DADOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Database className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Bancos de dados e persistência de dados
                </h3>

                <p className="text-muted-foreground">
                  Nenhum sistema existe sem dados. Aqui entram os bancos de
                  dados relacionais (como PostgreSQL e MySQL) e não relacionais
                  (como MongoDB).
                </p>

                <p className="text-muted-foreground mt-3">
                  Você aprende como armazenar, consultar, organizar e relacionar
                  informações de forma eficiente e segura.
                </p>
              </div>
            </div>

            {/* SEGURANÇA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <ShieldCheck className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Segurança, autenticação e regras de negócio
                </h3>

                <p className="text-muted-foreground">
                  Um backend profissional precisa proteger dados e controlar
                  acessos. Isso envolve autenticação, autorização, tokens e boas
                  práticas de segurança.
                </p>

                <p className="text-muted-foreground mt-3">
                  Além disso, aqui você implementa as regras reais do sistema —
                  aquilo que define como a aplicação realmente funciona.
                </p>
              </div>
            </div>

            {/* DEPLOY */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Deploy e escalabilidade
                </h3>

                <p className="text-muted-foreground">
                  Depois de construir sua aplicação, ela precisa sair da sua
                  máquina e ir para o mundo real. Isso envolve deploy,
                  servidores, containers e serviços em nuvem.
                </p>

                <p className="text-muted-foreground mt-3">
                  Aqui também entra o conceito de escalabilidade — fazer o
                  sistema suportar mais usuários sem perder performance.
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
                "Postman / Insomnia",
                "Docker",
                "Git e GitHub",
                "PostgreSQL",
                "MongoDB",
                "Swagger",
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
              O backend é o coração de qualquer aplicação moderna. Ele exige
              lógica, organização e pensamento estruturado, mas em troca te dá
              enorme poder para criar sistemas completos, seguros e escaláveis.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
