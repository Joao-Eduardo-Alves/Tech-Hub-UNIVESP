import SectionHeader from "@/components/shared/SectionHeader";
import {
  MessageCircle,
  Lightbulb,
  Handshake,
  Code,
  Users,
  CheckCircle,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function Contato() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Contato"
          title="Fale Comigo"
          description="Dúvidas, sugestões, feedbacks ou apenas uma boa conversa sobre tecnologia. Ficarei feliz em receber sua mensagem."
        />

        <article className="mt-12 space-y-12">
          {/* INTRODUÇÃO */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-border/50">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Vamos conversar
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Olá! Meu nome é João Eduardo Alves e sou o desenvolvedor do Tech
              Hub. Este projeto nasceu da vontade de reunir recursos,
              informações e iniciativas que possam ajudar e unir os estudantes
              de tecnologia ao longo da graduação e da carreira.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Se você possui alguma dúvida, sugestão, ideia de melhoria ou
              simplesmente deseja trocar experiências sobre tecnologia e
              desenvolvimento, sinta-se à vontade para entrar em contato.
            </p>
          </section>

          {/* ASSUNTOS */}
          <div className="grid gap-6">
            {/* DÚVIDAS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <MessageCircle className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Dúvidas sobre o projeto
                </h3>

                <p className="text-muted-foreground">
                  Caso queira saber mais sobre o Tech Hub, seu funcionamento ou
                  futuras atualizações, ficarei feliz em responder.
                </p>
              </div>
            </div>

            {/* SUGESTÕES */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Lightbulb className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Sugestões e feedbacks
                </h3>

                <p className="text-muted-foreground">
                  Toda opinião construtiva ajuda o projeto a evoluir. Feedbacks
                  e sugestões são sempre bem-vindos.
                </p>
              </div>
            </div>

            {/* PARCERIAS */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Handshake className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Parcerias e colaborações
                </h3>

                <p className="text-muted-foreground">
                  Se você possui uma iniciativa, projeto ou ideia que possa
                  agregar valor à comunidade acadêmica, será um prazer conversar
                  sobre possíveis colaborações.
                </p>
              </div>
            </div>

            {/* TECNOLOGIA */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Code className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Desenvolvimento e tecnologia
                </h3>

                <p className="text-muted-foreground">
                  Também estou sempre aberto para conversar sobre programação,
                  desenvolvimento web, projetos pessoais, estudos e carreira na
                  área de tecnologia.
                </p>
              </div>
            </div>

            {/* COMUNIDADE */}
            <div className="flex gap-4 p-5 rounded-2xl border border-border/50 hover:border-primary/20 transition">
              <Users className="text-primary mt-1 shrink-0 w-6 h-6" />

              <div>
                <h3 className="font-semibold text-lg text-foreground">
                  Comunidade e networking
                </h3>

                <p className="text-muted-foreground">
                  Conectar pessoas e compartilhar conhecimento faz parte da
                  proposta do Tech Hub. Novos contatos e boas conversas são
                  sempre uma oportunidade de aprendizado.
                </p>
              </div>
            </div>
          </div>

          {/* CANAIS */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Você pode entrar em contato para
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Enviar sugestões",
                "Compartilhar feedbacks",
                "Reportar problemas",
                "Conversar sobre tecnologia",
                "Propor parcerias",
                "Trocar experiências",
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
              Obrigado por visitar o Tech Hub!
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Este projeto continua evoluindo graças à participação da
              comunidade. Cada mensagem, sugestão e feedback recebido ajuda a
              construir uma plataforma mais útil para estudantes de tecnologia.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Caso deseje entrar em contato, utilize os links disponibilizados
              abaixo. Ficarei feliz em conversar com você!
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/joaoeduardoalves/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-border/50 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary/70 hover:bg-primary/5"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/duduuz01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-border/50 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-pink-500/70 hover:bg-pink-50"
              >
                <Instagram className="h-5 w-5 text-[#E4405F]" />
                Instagram
              </a>

              <a
                href="https://github.com/Joao-Eduardo-Alves"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-border/50 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-900/70 hover:bg-slate-100"
              >
                <Github className="h-5 w-5 text-slate-900" />
                GitHub
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
