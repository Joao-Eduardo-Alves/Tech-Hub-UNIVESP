import SectionHeader from "@/components/shared/SectionHeader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const atleticas = [
  {
    nome: "Iron Wolves",
    descricao:
      "Disciplina, foco e vitória. O clube oficial de Counter-Strike 2 da UNIVESP.",
    brasao: "/cyberArena/Iron-Wolves.png",
    discord: "https://discord.gg/PvVbPfnw4e",
    glowColor: "#ef4444",
  },
  {
    nome: "Polar Vanguards",
    descricao:
      "Precisão, frieza e vitória. Entre para a elite tática do Valorant da UNIVESP.",
    brasao: "/cyberArena/Polar-Vanguards.png",
    discord: "https://discord.gg/uMcMbAmXNC",
    glowColor: "#06b6d4",
  },
  {
    nome: "Rift Ravens ",
    descricao:
      "Estratégia, caos e glória. A comunidade de League of Legends da UNIVESP.",
    brasao: "/cyberArena/Rift-Ravens.png",
    discord: "https://discord.gg/UNJXB5WYFb",
    glowColor: "#a855f7",
  },
  {
    nome: "Blockforge Union ",
    descricao:
      "Construímos mais que mundos! A comunidade de Minecraft da UNIVESP.",
    brasao: "/cyberArena/Blockforge-Union.png",
    discord: "https://discord.gg/9gyRWkjkhF",
    glowColor: "#22c55e",
  },
];

export default function CyberArena() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl">
        <SectionHeader
          badge="Escolha seu clube. Encontre seu squad. Faça parte da comunidade gamer da UNIVESP."
          title={
            <span className="flex items-center justify-center gap-2">
              <Gamepad2 className="text-primary mt-1 shrink-0 w-10 h-10" />
              Cyber Arena
            </span>
          }
          description="A Cyber Arena é o ponto de encontro dos estudantes gamers da UNIVESP — um ecossistema de clubes, comunidades e experiências criadas para conectar jogadores através da competição, estratégia e colaboração."
        />
        <div className="mt-10 mb-10 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group w-full max-w-3xl rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-950/95 to-slate-900/90 p-6 text-center shadow-lg shadow-purple-500/10"
          >
            <div className="flex flex-col items-center text-center">
              <div>
                <span className="inline-flex rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
                  Discord
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Canal Cyber Arena
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-400">
                  Canal da Cyber Arena no Discord.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                asChild
                size="sm"
                className="rounded-xl h-10 px-8 bg-[#7289da] hover:bg-[#5f73b5]"
              >
                <a
                  href="https://discord.gg/QXatmGMHpU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar no grupo do Discord
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 space-y-8">
          <h2>Clubes:</h2>
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
