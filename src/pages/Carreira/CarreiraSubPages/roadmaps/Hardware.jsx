import SectionHeader from "@/components/shared/SectionHeader";
import {
  Cpu,
  CircuitBoard,
  Wrench,
  Zap,
  ShieldCheck,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function HardwareRoadmap() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Roadmap Hardware"
          title="Como se Tornar um Profissional de Hardware"
          description="Um guia prático para entender como computadores funcionam por dentro e como atuar com montagem, manutenção e arquitetura de sistemas."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O mundo físico por trás da tecnologia
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Enquanto o software cria a lógica e as aplicações, o hardware é o
              que torna tudo isso possível fisicamente. É nele que a computação
              realmente acontece: processamento, memória, armazenamento e
              comunicação entre componentes.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Trabalhar com hardware é entender como cada peça conversa com a
              outra e como montar sistemas eficientes, estáveis e bem
              dimensionados para diferentes necessidades.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* BASE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Cpu className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Fundamentos de arquitetura de computadores
                </h3>

                <p className="text-muted-foreground">
                  O primeiro passo é entender como um computador funciona:
                  processador (CPU), memória RAM, armazenamento e placa-mãe.
                </p>

                <p className="text-muted-foreground mt-3">
                  Essa base é essencial para compreender como o desempenho é
                  construído desde o nível mais baixo.
                </p>
              </div>
            </div>

            {/* COMPONENTES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <CircuitBoard className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Componentes e compatibilidade
                </h3>

                <p className="text-muted-foreground">
                  Cada peça de hardware precisa ser compatível com as demais.
                  Isso inclui soquetes de CPU, tipos de memória, placas de vídeo
                  e fontes de alimentação.
                </p>

                <p className="text-muted-foreground mt-3">
                  Saber montar configurações equilibradas evita desperdício de
                  dinheiro e melhora o desempenho do sistema.
                </p>
              </div>
            </div>

            {/* MONTAGEM */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Wrench className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Montagem e manutenção de computadores
                </h3>

                <p className="text-muted-foreground">
                  Aqui você aprende na prática como montar um PC do zero,
                  instalar componentes corretamente e realizar manutenção
                  preventiva e corretiva.
                </p>

                <p className="text-muted-foreground mt-3">
                  É uma das áreas mais práticas do hardware e muito valorizada
                  no mercado técnico.
                </p>
              </div>
            </div>

            {/* ELETRÔNICA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Zap className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Noções de eletrônica e energia
                </h3>

                <p className="text-muted-foreground">
                  Entender conceitos básicos de eletrônica ajuda a compreender
                  como energia elétrica circula entre os componentes.
                </p>

                <p className="text-muted-foreground mt-3">
                  Isso inclui fontes de alimentação, consumo energético e
                  proteção contra falhas elétricas.
                </p>
              </div>
            </div>

            {/* SEGURANÇA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <ShieldCheck className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Diagnóstico e segurança de sistemas
                </h3>

                <p className="text-muted-foreground">
                  Um profissional de hardware também precisa identificar falhas,
                  trocar peças defeituosas e garantir que o sistema funcione de
                  forma segura e estável.
                </p>

                <p className="text-muted-foreground mt-3">
                  Isso inclui testes de desempenho, monitoramento de temperatura
                  e análise de falhas.
                </p>
              </div>
            </div>

            {/* EVOLUÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  6. Evolução e tendências tecnológicas
                </h3>

                <p className="text-muted-foreground">
                  O hardware evolui constantemente: novos processadores,
                  memórias mais rápidas, armazenamento em estado sólido e
                  eficiência energética.
                </p>

                <p className="text-muted-foreground mt-3">
                  Acompanhar essas mudanças é essencial para se manter relevante
                  na área.
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
                "Multímetro",
                "Chaves de precisão",
                "CPU-Z",
                "HWMonitor",
                "CrystalDiskInfo",
                "Linux (terminal básico)",
                "Windows PE",
                "Software de benchmark",
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
              O hardware é a base física da computação. Entender como os
              componentes funcionam e interagem abre portas para manutenção,
              montagem profissional e até arquitetura de sistemas mais
              avançados. É uma área prática, técnica e essencial na tecnologia.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
