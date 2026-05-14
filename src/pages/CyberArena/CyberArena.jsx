import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";

// Exemplo de dados das atléticas
const atleticas = [
  {
    nome: "Iron Wolves",
    descricao:
      "Disciplina, foco e vitória. O clube oficial de Counter-Strike 2 da UNIVESP.",
    brasao: "src/public/Iron-Wolves.png",
    discord: "https://discord.gg/ironwolves",
    glowColor: "#ef4444", // Vermelho queimado
  },
  {
    nome: "Polar Vanguards",
    descricao:
      "Precisão, frieza e vitória. Entre para a elite tática do Valorant da UNIVESP.",
    brasao: "src/public/Polar-Vanguards.png",
    discord: "https://discord.gg/polarvanguards",
    glowColor: "#06b6d4", // Cyan gelado
  },
  {
    nome: "Rift Ravens ",
    descricao:
      "Estratégia, caos e glória. A comunidade de League of Legends da UNIVESP.",
    brasao: "src/public/Rift-Ravens.png",
    discord: "https://discord.gg/riftravens",
    glowColor: "#a855f7", // Roxo neon
  },
  {
    nome: "Blockforge Union ",
    descricao:
      "Construímos mais que mundos!. A comunidade de Minecraft da UNIVESP.",
    brasao: "src/public/Blockforge-Union.png",
    discord: "https://discord.gg/blockforgeunion",
    glowColor: "#22c55e", // Verde neon
  },
];

export default function CyberArena() {
  return (
    <div
      className="relative pt-24 pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0e27 0%, #1a0e3f 25%, #0f1535 50%, #1a0e3f 75%, #0a0e27 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="mx-auto px-4 max-w-6xl">
        <SectionHeader
          badge="Escolha seu clube. Encontre seu squad. Faça parte da comunidade gamer da UNIVESP."
          title="Cyber Arena"
          description="A Cyber Arena é o ponto de encontro dos estudantes gamers da UNIVESP — um ecossistema de clubes, comunidades e experiências criadas para conectar jogadores através da competição, estratégia e colaboração."
        />

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
