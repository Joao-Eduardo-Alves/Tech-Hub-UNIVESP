import SectionHeader from "@/components/shared/SectionHeader";
import {
  BookOpen,
  ShieldCheck,
  UserCheck,
  Globe,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

export default function TermosDeUso() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Legal"
          title="Termos de Uso"
          description="Conheça as condições gerais para utilização do Tech Hub e dos conteúdos disponibilizados pela plataforma."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Regras simples para uma experiência transparente
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e utilizar o Tech Hub, você concorda com os termos
              descritos nesta página. Eles existem para garantir transparência
              sobre a finalidade da plataforma, seus limites de responsabilidade
              e a forma como os conteúdos são disponibilizados.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              O objetivo do Tech Hub é compartilhar informações, recursos e
              iniciativas úteis para estudantes de tecnologia da UNIVESP, sempre
              buscando oferecer uma experiência positiva para toda a comunidade.
            </p>
          </section>

          {/* TERMOS */}
          <div className="grid gap-6">
            {/* USO DA PLATAFORMA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <BookOpen className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Uso da plataforma
                </h3>

                <p className="text-muted-foreground">
                  O Tech Hub é disponibilizado gratuitamente para consulta de
                  conteúdos, informações e recursos voltados à comunidade
                  acadêmica e tecnológica.
                </p>
              </div>
            </div>

            {/* CONTEÚDO INFORMATIVO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <ShieldCheck className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Conteúdo com finalidade informativa
                </h3>

                <p className="text-muted-foreground">
                  Todo conteúdo disponibilizado possui caráter informativo e
                  educacional. Embora exista preocupação com a qualidade das
                  informações, não é possível garantir que todo conteúdo esteja
                  permanentemente atualizado ou livre de imprecisões.
                </p>
              </div>
            </div>

            {/* RESPONSABILIDADE DO USUÁRIO */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <UserCheck className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Responsabilidade do usuário
                </h3>

                <p className="text-muted-foreground">
                  O usuário é responsável pela forma como utiliza as informações
                  disponibilizadas na plataforma. Recomenda-se sempre verificar
                  fontes oficiais quando decisões importantes dependerem das
                  informações consultadas.
                </p>
              </div>
            </div>

            {/* LINKS EXTERNOS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Globe className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Links e recursos externos
                </h3>

                <p className="text-muted-foreground">
                  O Tech Hub pode disponibilizar links para sites, plataformas e
                  serviços de terceiros. O conteúdo e as políticas desses
                  serviços são de responsabilidade exclusiva de seus respectivos
                  proprietários.
                </p>
              </div>
            </div>

            {/* ALTERAÇÕES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <RefreshCw className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Alterações nos termos
                </h3>

                <p className="text-muted-foreground">
                  Estes termos poderão ser atualizados sempre que necessário
                  para refletir mudanças no funcionamento da plataforma ou novas
                  funcionalidades implementadas no projeto.
                </p>
              </div>
            </div>
          </div>

          {/* RESUMO */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Principais pontos
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Uso gratuito da plataforma",
                "Conteúdo com finalidade informativa",
                "Responsabilidade compartilhada",
                "Links externos possuem regras próprias",
                "Projeto independente da UNIVESP",
                "Termos sujeitos a atualização",
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
              Importante
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              O Tech Hub é um projeto independente desenvolvido para apoiar
              estudantes de tecnologia. A plataforma não possui vínculo oficial
              com a UNIVESP e não representa institucionalmente a universidade.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Ao continuar utilizando o site, você concorda com os princípios e
              condições apresentados nesta página.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
