import SectionHeader from "@/components/shared/SectionHeader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const atleticas = [
  {
    nome: "Iron Wolves",
    descricao:
      "Disciplina, foco e vitória. O clube oficial de Counter-Strike 2 da UNIVESP.",
    brasao: "/cyberArena/Iron-Wolves.png",
    discord: "https://discord.gg/ukRkzQ7dr2",
    glowColor: "#ef4444",
  },
  {
    nome: "Polar Vanguards",
    descricao:
      "Precisão, frieza e vitória. Entre para a elite tática do Valorant da UNIVESP.",
    brasao: "/cyberArena/Polar-Vanguards.png",
    discord: "https://discord.gg/wp74haQC2t",
    glowColor: "#06b6d4",
  },
  {
    nome: "Rift Ravens ",
    descricao:
      "Estratégia, caos e glória. A comunidade de League of Legends da UNIVESP.",
    brasao: "/cyberArena/Rift-Ravens.png",
    discord: "https://discord.gg/UKPqZNHcZ5",
    glowColor: "#a855f7",
  },
  {
    nome: "Blockforge Union ",
    descricao:
      "Construímos mais que mundos! A comunidade de Minecraft da UNIVESP.",
    brasao: "/cyberArena/Blockforge-Union.png",
    discord: "https://discord.gg/NXxY2zFpZZ",
    glowColor: "#22c55e",
  },
];

export default function CyberArena() {
  const [discordWidget, setDiscordWidget] = useState(
    /** @type {any|null} */ (null),
  );
  const [discordLoading, setDiscordLoading] = useState(true);
  const [discordError, setDiscordError] = useState(
    /** @type {string|null} */ (null),
  );

  useEffect(() => {
    let active = true;

    async function loadDiscordWidget() {
      try {
        const response = await fetch(
          "https://discord.com/api/guilds/1504639237348266186/widget.json",
        );

        if (!response.ok) {
          throw new Error(`Erro ao carregar Discord: ${response.status}`);
        }

        const data = await response.json();
        if (active) {
          setDiscordWidget(data);
        }
      } catch (error) {
        if (active) {
          setDiscordError("Não foi possível carregar os dados do Discord.");
          console.error(error);
        }
      } finally {
        if (active) {
          setDiscordLoading(false);
        }
      }
    }

    loadDiscordWidget();

    return () => {
      active = false;
    };
  }, []);

  /** @type {Array<{id:string,name:string,status:string}>} */
  const discordMembers = discordWidget?.members ?? [];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl">
        <SectionHeader
          badge="Escolha seu clube. Encontre seu squad. Faça parte da comunidade gamer da UNIVESP."
          title="Cyber Arena"
          description="A Cyber Arena é o ponto de encontro dos estudantes gamers da UNIVESP — um ecossistema de clubes, comunidades e experiências criadas para conectar jogadores através da competição, estratégia e colaboração."
        />

        <div className="mt-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-950/95 to-slate-900/90 p-6 shadow-[0_0_40px_rgba(114,137,218,0.12)]"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
                  Discord Widget
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Comunidade ao vivo
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-400">
                  Dados atualizados diretamente do servidor Discord da Cyber
                  Arena. Veja presença e membros online em tempo real.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap bg-[#7289da] hover:bg-[#5f73b5]"
                >
                  <a
                    href="https://discord.gg/ukRkzQ7dr2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entrar no grupo do Discord
                  </a>
                </Button>

                <Button
                  asChild
                  variant="whatsapp"
                  className="flex w-full items-center justify-center gap-2 whitespace-nowrap"
                >
                  <a
                    href="https://chat.whatsapp.com/EXAMPLE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1" />
                    Entrar no grupo do WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Membros
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {discordLoading
                    ? "..."
                    : (discordWidget?.members?.length ?? "-")}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Online agora
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {discordLoading
                    ? "..."
                    : (discordWidget?.presence_count ?? "-")}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                  <p className="text-sm font-semibold text-white">
                    Membros online agora
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Atualizado em tempo real
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {discordLoading ? (
                  <p className="text-sm text-slate-500">
                    Carregando dados do Discord...
                  </p>
                ) : discordError ? (
                  <p className="text-sm text-rose-300">{discordError}</p>
                ) : discordMembers.length ? (
                  discordMembers.slice(0, 5).map((member) => {
                    const memberName = member.name || member.id || "Usuário";

                    return (
                      <div
                        key={member.id}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm text-white">
                          {memberName.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-white">
                            {memberName}
                          </p>
                          <p className="text-xs text-slate-500 capitalize">
                            {member.status || "offline"}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm text-slate-500">
                    Nenhum membro disponível no momento.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 space-y-8">
          {atleticas.map((atl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 transition-all duration-500 flex flex-col"
              style={{
                borderColor: atl.glowColor,
                borderWidth: "1px",
                boxShadow: `0 0 20px ${atl.glowColor}33, inset 0 0 20px ${atl.glowColor}1a`,
                transition: "all 0.5s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 40px ${atl.glowColor}99, inset 0 0 30px ${atl.glowColor}33, 0 0 60px ${atl.glowColor}4d`;
                e.currentTarget.style.borderColor = atl.glowColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${atl.glowColor}33, inset 0 0 20px ${atl.glowColor}1a`;
                e.currentTarget.style.borderColor = atl.glowColor;
              }}
            >
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
                <div className="flex h-36 w-full items-center justify-center overflow-hidden rounded-3xl md:w-48 md:h-48">
                  <img
                    src={atl.brasao}
                    alt={`${atl.nome} brasão`}
                    className="h-48 w-48 object-contain"
                  />
                </div>

                <div className="w-full text-center md:text-left">
                  <h3 className="text-2xl font-semibold">{atl.nome}</h3>
                  <p className="mt-4 text-base text-slate-600">
                    {atl.descricao}
                  </p>
                  <a
                    href={atl.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-white transition md:w-auto"
                    style={{ backgroundColor: "#7289da" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#5f73b5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#7289da";
                    }}
                  >
                    Entrar no Discord
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
