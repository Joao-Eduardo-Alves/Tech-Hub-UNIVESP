import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Bug,
  Link,
  Smartphone,
  AlertTriangle,
  Search,
  CheckCircle,
} from "lucide-react";

export default function Report() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Suporte"
          title="Reportar um Problema"
          description="Encontrou algum erro, informação incorreta ou comportamento inesperado? Seu feedback ajuda a melhorar o Tech Hub."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Sua ajuda faz diferença
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Mesmo com testes e revisões constantes, problemas podem acontecer.
              Se você encontrou algum erro durante a navegação, agradeceremos
              muito se puder reportá-lo.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Quanto mais detalhes forem fornecidos, mais fácil será identificar
              a causa do problema e implementar uma correção.
            </p>
          </section>

          {/* TIPOS DE PROBLEMAS */}
          <div className="grid gap-6">
            {/* LINKS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Link className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Links quebrados
                </h3>

                <p className="text-muted-foreground">
                  Encontrou uma página que não abre, um botão que não funciona
                  ou um link que direciona para um destino incorreto? Informe o
                  problema para que ele possa ser corrigido.
                </p>
              </div>
            </div>

            {/* VISUAL */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Smartphone className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Problemas em dispositivos móveis
                </h3>

                <p className="text-muted-foreground">
                  Caso algum elemento esteja desalinhado, cortado ou
                  apresentando comportamento estranho em celulares e tablets,
                  relate a situação para análise.
                </p>
              </div>
            </div>

            {/* INFORMAÇÃO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <AlertTriangle className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Informações incorretas
                </h3>

                <p className="text-muted-foreground">
                  Se você identificar conteúdos desatualizados, informações
                  incorretas ou qualquer dado que precise de revisão, seu aviso
                  será muito importante.
                </p>
              </div>
            </div>

            {/* BUGS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Bug className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Erros e falhas inesperadas
                </h3>

                <p className="text-muted-foreground">
                  Mensagens de erro, travamentos, páginas em branco ou qualquer
                  comportamento inesperado devem ser reportados sempre que
                  possível.
                </p>
              </div>
            </div>

            {/* DETALHES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Search className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Como ajudar na identificação
                </h3>

                <p className="text-muted-foreground">
                  Ao reportar um problema, tente informar a página onde ocorreu,
                  o dispositivo utilizado e os passos realizados antes do erro
                  aparecer.
                </p>
              </div>
            </div>
          </div>

          {/* EXEMPLOS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Exemplos de problemas que podem ser reportados
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Links que não funcionam",
                "Conteúdo desatualizado",
                "Erro ao carregar páginas",
                "Problemas em celulares",
                "Erro/Falha de navegação",
                "Informações incorretas",
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
              Obrigado por contribuir
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Cada problema reportado ajuda a tornar o Tech Hub mais estável,
              confiável e útil para toda a comunidade. Sua participação é
              fundamental para a evolução contínua da plataforma.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Caso queira relatar um problema, utilize o link abaixo.
            </p>
            <Button asChild>
              <a
                href="https://forms.gle/AtLqCqriUk9c8j9E9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reportar problema
              </a>
            </Button>
          </section>
        </article>
      </div>
    </div>
  );
}
