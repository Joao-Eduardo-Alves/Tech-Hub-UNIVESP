import SectionHeader from "@/components/shared/SectionHeader";
import {
  Shield,
  Database,
  Lock,
  Globe,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

export default function PoliticaPrivacidade() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Privacidade"
          title="Política de Privacidade"
          description="Entenda como o Tech Hub trata informações relacionadas ao uso da plataforma e quais medidas são adotadas para preservar sua privacidade."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Transparência e respeito à sua privacidade
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O Tech Hub foi desenvolvido com foco em fornecer conteúdos e
              recursos úteis para estudantes de tecnologia da UNIVESP. A
              privacidade dos visitantes é levada a sério e, por isso, buscamos
              coletar apenas informações estritamente necessárias para o
              funcionamento da plataforma.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Esta página descreve de forma clara quais informações podem ser
              utilizadas, como elas são tratadas e quais são os compromissos do
              projeto em relação à proteção de dados.
            </p>
          </section>

          {/* PRINCÍPIOS */}
          <div className="grid gap-6">
            {/* INFORMAÇÕES COLETADAS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Database className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Informações coletadas
                </h3>

                <p className="text-muted-foreground">
                  O Tech Hub não exige cadastro de usuários e não solicita dados
                  pessoais para navegação comum. Eventualmente, informações
                  técnicas e estatísticas de acesso podem ser registradas para
                  fins de análise e melhoria da plataforma.
                </p>
              </div>
            </div>

            {/* USO DAS INFORMAÇÕES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Shield className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Como as informações são utilizadas
                </h3>

                <p className="text-muted-foreground">
                  Informações de uso podem ser utilizadas para entender o
                  desempenho do site, identificar problemas técnicos e orientar
                  futuras melhorias na experiência dos usuários.
                </p>
              </div>
            </div>

            {/* SERVIÇOS EXTERNOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Globe className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Serviços e links externos
                </h3>

                <p className="text-muted-foreground">
                  Algumas páginas podem conter links para plataformas de
                  terceiros. O Tech Hub não possui controle sobre esses serviços
                  e recomenda que os usuários consultem as respectivas políticas
                  de privacidade ao acessá-los.
                </p>
              </div>
            </div>

            {/* ATUALIZAÇÕES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <RefreshCw className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Atualizações desta política
                </h3>

                <p className="text-muted-foreground">
                  Esta política poderá ser revisada periodicamente para refletir
                  melhorias, novas funcionalidades ou mudanças relacionadas ao
                  funcionamento da plataforma.
                </p>
              </div>
            </div>
          </div>

          {/* RESUMO */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Em resumo
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Sem cadastro obrigatório",
                "Compromisso com transparência",
                "Uso focado em conteúdo",
                "Privacidade como prioridade",
                "Links externos possuem regras próprias",
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

          {/* ENCERRAMENTO */}
          <section className="bg-primary/10 border border-primary/20 p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              Nosso compromisso
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O principal objetivo do Tech Hub é fornecer informações e recursos
              úteis para estudantes de tecnologia, e não coletar dados pessoais.
              Sempre que possível, adotaremos práticas que priorizem a
              simplicidade, a transparência e o respeito à privacidade dos
              visitantes.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Caso tenha dúvidas relacionadas a esta política ou queira entrar
              em contato sobre questões de privacidade, utilize os canais de
              comunicação disponibilizados no rodapé da plataforma.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
