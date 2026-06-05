import SectionHeader from "@/components/shared/SectionHeader";
import {
  CheckCircle,
  Send,
  Moon,
  BookOpen,
  Zap,
  Boxes,
  FileJson,
} from "lucide-react";

export default function TesteApis() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Ferramentas"
          title="Teste de APIs"
          description="Conheça plataformas que permitem testar e documentar suas APIs de forma simples e eficiente."
        />

        <article className="mt-12 space-y-12">
          {/* INTRO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Para começar, o que são APIs?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              APIs (Application Programming Interfaces) são mecanismos que
              permitem que diferentes sistemas e aplicações se comuniquem entre
              si. Sempre que um aplicativo busca informações em um servidor,
              realiza um login ou exibe dados atualizados, existe uma grande
              chance de uma API estar envolvida.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Aprender a trabalhar com APIs é uma habilidade fundamental para
              desenvolvedores Frontend, Backend, Mobile e até profissionais de
              Dados, já que grande parte das aplicações modernas depende dessa
              comunicação para funcionar.
            </p>
          </section>

          {/* FERRAMENTAS */}
          <div className="grid gap-6">
            {/* POSTMAN */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Send className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Postman
                </h3>

                <p className="text-muted-foreground">
                  Uma das ferramentas mais populares para testes e consumo de
                  APIs. Permite enviar requisições HTTP, visualizar respostas,
                  trabalhar com autenticação e organizar coleções de endpoints.
                </p>

                <p className="text-muted-foreground mt-3">
                  É amplamente utilizada por desenvolvedores Frontend e Backend
                  para validar integrações, testar funcionalidades e entender
                  como sistemas diferentes se comunicam.
                </p>
              </div>
            </div>

            {/* INSOMNIA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Moon className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Insomnia
                </h3>

                <p className="text-muted-foreground">
                  Cliente de APIs conhecido pela interface simples e intuitiva.
                  Permite criar requisições, gerenciar variáveis de ambiente e
                  testar endpoints de forma rápida.
                </p>

                <p className="text-muted-foreground mt-3">
                  É uma excelente alternativa ao Postman para quem prefere uma
                  experiência mais leve e focada em produtividade durante o
                  desenvolvimento.
                </p>
              </div>
            </div>

            {/* SWAGGER */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Swagger/OpenAPI
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta amplamente utilizada para documentar APIs e
                  facilitar a comunicação entre equipes de desenvolvimento.
                </p>

                <p className="text-muted-foreground mt-3">
                  Além de servir como documentação, permite visualizar
                  endpoints, parâmetros e respostas, possibilitando testes
                  diretamente pelo navegador em muitos projetos.
                </p>
              </div>
            </div>

            {/* HOPPSCOTCH */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Zap className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Hoppscotch
                </h3>

                <p className="text-muted-foreground">
                  Plataforma online gratuita para testes de APIs sem necessidade
                  de instalação. Possui suporte a diferentes métodos HTTP e
                  recursos essenciais para desenvolvimento.
                </p>

                <p className="text-muted-foreground mt-3">
                  É ideal para estudantes e desenvolvedores que precisam
                  realizar testes rápidos ou acessar APIs a partir de qualquer
                  dispositivo conectado à internet.
                </p>
              </div>
            </div>

            {/* BRUNO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Boxes className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">Bruno</h3>

                <p className="text-muted-foreground">
                  Ferramenta open source para testes de APIs que armazena
                  coleções localmente em arquivos simples dentro do projeto.
                </p>

                <p className="text-muted-foreground mt-3">
                  Seu principal diferencial é a integração natural com Git,
                  facilitando o versionamento e o compartilhamento de
                  configurações entre equipes de desenvolvimento.
                </p>
              </div>
            </div>

            {/* JSONs */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <FileJson className="text-primary mt-1" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  JSON Formatter / JSON Viewer
                </h3>

                <p className="text-muted-foreground">
                  Ferramenta utilizada para formatar, organizar e validar
                  arquivos e respostas no formato JSON, um dos mais utilizados
                  em APIs modernas.
                </p>

                <p className="text-muted-foreground mt-3">
                  Ajuda a visualizar estruturas complexas de dados de maneira
                  mais clara, tornando a análise e o entendimento das respostas
                  muito mais simples.
                </p>
              </div>
            </div>
          </div>

          {/* RECOMENDAÇÕES */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Um caminho simples para começar a trabalhar com APIs
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Entenda o ciclo requisição e resposta",
                  description:
                    "Antes de utilizar qualquer ferramenta, compreenda como clientes e servidores trocam informações através de APIs.",
                },
                {
                  title: "Aprenda os métodos HTTP",
                  description:
                    "Familiarize-se com GET, POST, PUT, PATCH e DELETE, pois eles aparecem em praticamente todas as APIs modernas.",
                },
                {
                  title: "Comece utilizando o Postman",
                  description:
                    "O Postman permite enviar requisições e visualizar respostas sem precisar escrever código.",
                },
                {
                  title: "Leia documentações",
                  description:
                    "Documentações bem escritas ensinam como utilizar uma API e são uma habilidade essencial para desenvolvedores.",
                },
                {
                  title: "Pratique com APIs públicas",
                  description:
                    "Existem diversas APIs gratuitas disponíveis para estudo, permitindo criar projetos reais sem custos.",
                },
                {
                  title: "Observe os dados retornados",
                  description:
                    "Aprenda a interpretar respostas JSON, pois esse é um dos formatos mais utilizados na comunicação entre sistemas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card"
                >
                  <CheckCircle className="text-primary shrink-0 mt-1 w-5 h-5" />

                  <div>
                    <h3 className="font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
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
              Compreender APIs e saber testá-las é uma das habilidades mais
              importantes para qualquer pessoa que deseja trabalhar com
              tecnologia. Quanto mais cedo você aprender conceitos como
              requisições, respostas, autenticação e documentação, mais fácil
              será desenvolver aplicações modernas e integrar sistemas no
              futuro.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
