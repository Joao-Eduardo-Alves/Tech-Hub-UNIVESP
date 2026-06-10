import SectionHeader from "@/components/shared/SectionHeader";
import {
  Target,
  Briefcase,
  BookOpen,
  Network,
  Rocket,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

export default function StageTips() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica de Carreira"
          title="Como conquistar sua tão sonhada primeira vaga!"
          description="Um guia direto e realista para entrar no mercado tech mesmo sem nunca ter trabalhado na área."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Sim, dá para conquistar sua tão sonhada 1º vaga começando do zero!
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              A maior dúvida de quem está entrando na tecnologia é a clássica:
              “Como vou conseguir minha primeira vaga, se hoje quase ninguém
              contrata mais sem experiência?”. A boa notícia é que você consegue
              contornar a falta de experiência com estratégia, dedicação e as
              dicas certas.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              O segredo não é ter experiência profissional, e sim demonstrar
              potencial, consistência e vontade de aprender. Vamos lá?
            </p>
          </section>

          {/* ETAPAS */}
          <div className="grid gap-6">
            {/* BASE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Construa uma base sólidade conhecimento
                </h3>

                <p className="text-muted-foreground">
                  Antes de aplicar, tenha noções sólidas da sua área (frontend,
                  backend, dados etc.). Não precisa ser um expert — mas precisa
                  saber o que está fazendo.
                </p>

                <p className="text-muted-foreground mt-3">
                  Empresas querem alguém que já tenha dado os primeiros passos e
                  consiga evoluir rápido.
                </p>
              </div>
            </div>

            {/* PORTFÓLIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Briefcase className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Crie projetos simples (mas reais)
                </h3>

                <p className="text-muted-foreground">
                  Um portfólio vale mais do que qualquer currículo vazio.
                  Projetos simples como landing pages, APIs ou dashboards já
                  mostram sua capacidade.
                </p>

                <p className="text-muted-foreground mt-3">
                  O importante não é a complexidade, mas sim mostrar que você
                  sabe construir algo do início ao fim.
                </p>
              </div>
            </div>

            {/* NETWORK */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Network className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Networking abre mais portas do que currículo
                </h3>

                <p className="text-muted-foreground">
                  Muitas vagas nunca são publicadas. Elas são preenchidas por
                  indicação ou contato direto com pessoas da área.
                </p>

                <p className="text-muted-foreground mt-3">
                  Participar de comunidades, eventos e grupos pode acelerar
                  muito sua entrada no mercado.
                </p>
              </div>
            </div>

            {/* INSCRIÇÕES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Target className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Aplique mesmo sem se sentir pronto
                </h3>

                <p className="text-muted-foreground">
                  Esperar “estar pronto” é um dos maiores erros. Você aprende no
                  processo de seleção, entrevistas e testes técnicos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Cada candidatura é um treino que te aproxima da vaga ideal.
                </p>
              </div>
            </div>

            {/* CONSTÂNCIA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Rocket className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Consistência vale mais do que velocidade
                </h3>

                <p className="text-muted-foreground">
                  Entrar na área não acontece da noite para o dia. O diferencial
                  é continuar evoluindo mesmo sem resultados imediatos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Pequenos avanços diários constroem grandes oportunidades ao
                  longo do tempo.
                </p>
              </div>
            </div>
            {/* ESTÁGIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <GraduationCap className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  6. E por fim, mas não menos importante, aproveite o estágio
                  como porta de entrada!
                </h3>

                <p className="text-muted-foreground">
                  Se você tem a oportunidade de estagiar, aproveite. O estágio é
                  a forma mais direta de entrar no mercado sem ter experiência,
                  se desenvolver e mostrar seu valor para a empresa.
                </p>

                <p className="text-muted-foreground mt-3">
                  Mesmo que hoje algumas vagas peçam experiência até para
                  estágio (Um absurdo, não?) hahaha!
                </p>
              </div>
            </div>
          </div>

          {/* DICAS EXTRAS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              O que mais aumenta suas chances
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "GitHub organizado",
                "LinkedIn ativo",
                "Projetos publicados",
                "Participação em comunidades",
                "Currículo simples e direto",
                "Boa comunicação",
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
              Conseguir sua primeira vaga sem experiência não é sobre sorte — é
              sobre estratégia. Quem constrói base, cria projetos e se coloca em
              movimento inevitavelmente se destaca ao longo do tempo.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
