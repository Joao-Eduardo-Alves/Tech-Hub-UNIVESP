import SectionHeader from "@/components/shared/SectionHeader";
import {
  Linkedin,
  User,
  FileText,
  Network,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function LinkedinForBeginners() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica de Carreira"
          title="LinkedIn para iniciantes: como se destacar do zero"
          description="Um guia simples e direto para criar um perfil forte no LinkedIn e começar a chamar atenção no mercado de tecnologia."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              O LinkedIn é mais importante do que parece
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Para quem está começando na tecnologia, o LinkedIn não é apenas
              uma rede social — é um portfólio vivo. Ele mostra sua evolução,
              seus projetos e principalmente sua intenção de entrar no mercado.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Mesmo sem experiência profissional, é totalmente possível criar um
              perfil forte e atrativo desde o início da jornada.
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* PERFIL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <User className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Capriche no básico do perfil
                </h3>

                <p className="text-muted-foreground">
                  Foto profissional, nome claro e um título objetivo já fazem
                  muita diferença na primeira impressão.
                </p>

                <p className="text-muted-foreground mt-3">
                  Evite exageros. Seja direto sobre o que você está estudando ou
                  buscando na área de tecnologia.
                </p>
              </div>
            </div>

            {/* SOBRE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <FileText className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Escreva um “Sobre” simples e autêntico
                </h3>

                <p className="text-muted-foreground">
                  A seção “Sobre” é onde você conta sua história de forma breve:
                  o que você estuda, o que está aprendendo e seus objetivos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Não precisa ser formal demais — clareza e sinceridade
                  funcionam melhor do que frases complexas.
                </p>
              </div>
            </div>

            {/* ATIVIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <TrendingUp className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Mostre evolução, mesmo sem emprego
                </h3>

                <p className="text-muted-foreground">
                  Você não precisa de experiência formal para ser ativo. Posts
                  sobre estudos, projetos e aprendizados já mostram evolução.
                </p>

                <p className="text-muted-foreground mt-3">
                  O importante é mostrar consistência e interesse pela área.
                </p>
              </div>
            </div>

            {/* NETWORK */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Network className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Construa conexões reais
                </h3>

                <p className="text-muted-foreground">
                  O LinkedIn funciona melhor quando você interage. Conectar com
                  profissionais da área, colegas e recrutadores aumenta sua
                  visibilidade.
                </p>

                <p className="text-muted-foreground mt-3">
                  Networking não é sobre quantidade, mas sobre qualidade das
                  conexões.
                </p>
              </div>
            </div>

            {/* CONSISTÊNCIA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Linkedin className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Consistência vale mais que perfeição
                </h3>

                <p className="text-muted-foreground">
                  Você não precisa postar todos os dias, mas precisa manter
                  presença. Pequenas atualizações já fazem diferença ao longo do
                  tempo.
                </p>

                <p className="text-muted-foreground mt-3">
                  O LinkedIn recompensa quem é constante.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              O que não pode faltar no seu LinkedIn
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Foto profissional",
                "Título claro (ex: estudante de tecnologia)",
                "Descrição no 'Sobre'",
                "Projetos adicionados",
                "Conexões na área",
                "Atividade constante",
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
              O LinkedIn é uma das ferramentas mais poderosas para quem está
              começando na tecnologia. Um perfil bem construído, mesmo simples,
              já pode abrir portas para oportunidades reais.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
