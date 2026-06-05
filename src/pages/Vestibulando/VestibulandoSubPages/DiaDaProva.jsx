import SectionHeader from "@/components/shared/SectionHeader";
import {
  Clock,
  MapPin,
  ClipboardCheck,
  Brain,
  Heart,
  CheckCircle,
} from "lucide-react";

export default function DiaDaProva() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica para Vestibulando"
          title="Dia da prova: como se preparar para ter um bom desempenho"
          description="Confira orientações importantes para chegar mais tranquilo, organizado e confiante no dia do vestibular."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              A preparação continua até o momento da prova
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Depois de semanas ou meses de estudo, chega o momento de colocar
              todo o conhecimento em prática. Nesse dia, organização e controle
              emocional podem ser tão importantes quanto o conteúdo estudado.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Pequenos cuidados ajudam a evitar imprevistos e permitem que você
              concentre sua energia no que realmente importa: resolver a prova
              com tranquilidade.
            </p>
          </section>

          {/* DICAS */}
          <div className="grid gap-6">
            {/* HORÁRIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Clock className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Chegue com antecedência
                </h3>

                <p className="text-muted-foreground">
                  Planeje seu deslocamento e considere possíveis atrasos no
                  trânsito ou transporte público.
                </p>

                <p className="text-muted-foreground mt-3">
                  Chegar cedo reduz a ansiedade e evita correr riscos
                  desnecessários antes do início da prova.
                </p>
              </div>
            </div>

            {/* LOCAL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <MapPin className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Confira o local e os documentos
                </h3>

                <p className="text-muted-foreground">
                  Verifique com antecedência o endereço do local de prova e os
                  documentos exigidos pela instituição.
                </p>

                <p className="text-muted-foreground mt-3">
                  Deixar tudo separado no dia anterior ajuda a evitar
                  esquecimentos e preocupações de última hora.
                </p>
              </div>
            </div>

            {/* ORGANIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <ClipboardCheck className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Organize seu tempo durante a prova
                </h3>

                <p className="text-muted-foreground">
                  Leia as instruções com atenção e distribua seu tempo entre as
                  diferentes partes da avaliação.
                </p>

                <p className="text-muted-foreground mt-3">
                  Evite gastar tempo excessivo em uma única questão. Se
                  necessário, avance e retorne depois.
                </p>
              </div>
            </div>

            {/* CALMA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Heart className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Mantenha a calma
                </h3>

                <p className="text-muted-foreground">
                  Sentir nervosismo é normal, mas não deixe que isso atrapalhe
                  sua concentração.
                </p>

                <p className="text-muted-foreground mt-3">
                  Respire fundo, leia cada questão com atenção e confie na
                  preparação que você construiu ao longo dos estudos.
                </p>
              </div>
            </div>

            {/* FOCO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Brain className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Foque na prova, não nos outros candidatos
                </h3>

                <p className="text-muted-foreground">
                  Cada pessoa possui um ritmo diferente de resolução e
                  estratégia de prova.
                </p>

                <p className="text-muted-foreground mt-3">
                  Evite comparações durante o exame e concentre-se apenas no seu
                  desempenho e no gerenciamento do seu tempo.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Checklist para o dia da prova
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Conferir local da prova",
                "Separar documento de identificação",
                "Levar canetas permitidas",
                "Sair com antecedência",
                "Controlar o tempo durante a prova",
                "Manter a calma e a concentração",
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
              O dia da prova é a oportunidade de mostrar tudo o que foi
              aprendido durante sua preparação. Com organização, atenção aos
              detalhes e equilíbrio emocional, você aumenta suas chances de ter
              um bom desempenho e enfrentar o vestibular com mais confiança.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
