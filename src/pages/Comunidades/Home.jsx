import { Users, Trophy, Gamepad2, Dumbbell } from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import FeatureCard from "../../components/shared/FeatureCard";

const topics = [
  {
    icon: Trophy,
    title: "Clube de Xadrez",
    description:
      "Conecte-se com estudantes interessados em xadrez para aprender, praticar estratégias e participar de partidas amistosas.",
    color: "orange",
    link: "/comunidades/xadrez",
  },
  {
    icon: Gamepad2,
    title: "Cyber Arena",
    description:
      "Encontre colegas para jogar, compartilhar experiências e acompanhar novidades do universo dos games.",
    color: "purple",
    link: "/comunidades/cyber-arena",
  },
  {
    icon: Dumbbell,
    title: "Ctrl + Shape",
    description:
      "Troque dicas sobre musculação, exercícios, alimentação e hábitos saudáveis com outros estudantes da UNIVESP.",
    color: "cyan",
    link: "/comunidades/ctrl-shape",
  },
];
export default function Comunidades() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Comunidades"
          title={
            <span className="flex items-center justify-center gap-2">
              <Users className="text-primary mt-1 shrink-0 w-10 h-10" />
              Comunidades
            </span>
          }
          description="Encontre grupos, iniciativas e espaços criados pela comunidade estudantil da UNIVESP. Conecte-se com colegas que compartilham interesses em comum."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <FeatureCard
              link={topic.link}
              key={topic.title}
              {...topic}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
