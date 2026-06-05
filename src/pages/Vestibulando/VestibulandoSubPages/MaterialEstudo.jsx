import SectionHeader from "@/components/shared/SectionHeader";
import {
  BookOpen,
  Laptop,
  FileText,
  Library,
  Search,
  CheckCircle,
} from "lucide-react";

export default function StudyMaterialsTips() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Dica para Vestibulando"
          title="Materiais de estudo: como escolher os recursos certos para o vestibular"
          description="Conheça estratégias para selecionar materiais de qualidade e tornar seus estudos mais eficientes e organizados."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Nem sempre mais material significa mais aprendizado
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Um dos erros mais comuns entre vestibulandos é acumular apostilas,
              livros, vídeos e resumos sem conseguir utilizar tudo de forma
              eficiente.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Escolher bons materiais e manter uma rotina organizada costuma ser
              muito mais produtivo do que tentar estudar por dezenas de fontes
              diferentes ao mesmo tempo.
            </p>
          </section>

          {/* DICAS */}
          <div className="grid gap-6">
            {/* QUALIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Search className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  1. Priorize materiais confiáveis
                </h3>

                <p className="text-muted-foreground">
                  Escolha conteúdos produzidos por instituições reconhecidas,
                  professores especializados e plataformas educacionais de
                  qualidade.
                </p>

                <p className="text-muted-foreground mt-3">
                  Materiais confiáveis ajudam a evitar informações incorretas e
                  tornam o aprendizado mais seguro.
                </p>
              </div>
            </div>

            {/* LIVROS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  2. Utilize livros e apostilas como base
                </h3>

                <p className="text-muted-foreground">
                  Livros didáticos e apostilas costumam apresentar os conteúdos
                  de forma organizada e progressiva.
                </p>

                <p className="text-muted-foreground mt-3">
                  Eles podem servir como referência principal para seus estudos,
                  especialmente nos temas mais cobrados em vestibulares.
                </p>
              </div>
            </div>

            {/* DIGITAL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Laptop className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  3. Aproveite recursos digitais
                </h3>

                <p className="text-muted-foreground">
                  Videoaulas, simulados online e plataformas educacionais podem
                  complementar seus estudos de forma prática e dinâmica.
                </p>

                <p className="text-muted-foreground mt-3">
                  Utilize esses recursos para reforçar conteúdos que exigem mais
                  atenção ou aprofundamento.
                </p>
              </div>
            </div>

            {/* RESUMOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <FileText className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  4. Produza seus próprios resumos
                </h3>

                <p className="text-muted-foreground">
                  Escrever resumos ajuda a organizar informações importantes e
                  reforça a aprendizagem.
                </p>

                <p className="text-muted-foreground mt-3">
                  Além disso, eles se tornam excelentes materiais de revisão nas
                  semanas que antecedem a prova.
                </p>
              </div>
            </div>

            {/* ORGANIZAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Library className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  5. Organize seus materiais
                </h3>

                <p className="text-muted-foreground">
                  Manter livros, anotações e arquivos digitais organizados
                  facilita a rotina de estudos.
                </p>

                <p className="text-muted-foreground mt-3">
                  Quando tudo está bem estruturado, você perde menos tempo
                  procurando conteúdo e ganha mais tempo aprendendo.
                </p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Checklist de bons materiais de estudo
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Utilizar fontes confiáveis",
                "Ter uma apostila ou livro principal",
                "Complementar com videoaulas",
                "Criar resumos próprios",
                "Resolver exercícios regularmente",
                "Manter materiais organizados",
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
              A qualidade dos materiais utilizados influencia diretamente a
              eficiência dos estudos. Escolher boas fontes, organizar os
              conteúdos e utilizar diferentes formatos de aprendizagem pode
              tornar sua preparação para o vestibular muito mais produtiva e
              tranquila.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
