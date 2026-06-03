import {
  ShoppingBag,
  Monitor,
  BriefcaseBusiness,
  Phone,
  MonitorCog,
  Gamepad2,
  Dumbbell,
} from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import FeatureCard from "../../components/shared/FeatureCard";

const topics = [
  {
    icon: Monitor,
    title: "COMECE POR AQUI! Manual do Aluno",
    description:
      "Aprenda toda a dinâmica do ensino a distância na UNIVESP: Aulas, atividades, provas presenciais, estágio e prazos.",
    color: "cyan",
    link: "/calouro/manual",
  },
  {
    icon: BriefcaseBusiness,
    title: "Conciliar Trabalho e Estudo",
    description:
      "Dicas práticas para quem trabalha em tempo integral e precisa organizar a rotina acadêmica.",
    color: "orange",
    link: "/calouro/dicaTrabalhoEstudo",
  },
  {
    icon: MonitorCog,
    title: "Carreira Tech",
    description:
      "Dicas de carreira, oportunidades de estágio e emprego, e como se preparar para o mercado de tecnologia enquanto estuda na UNIVESP.",
    color: "blue",
    link: "/carreira",
  },

  {
    icon: Phone,
    title: "Conecte-se com a Comunidade",
    description:
      "Conexões, grupos de estudo, eventos e como aproveitar a rede de apoio entre os estudantes da UNIVESP.",
    color: "green",
    link: "/polos",
  },

  {
    icon: ShoppingBag,
    title: "Produtos",
    description:
      "Página com os produtos e recursos exclusivos para estudantes da UNIVESP, como planners, resumos, cursos e muito mais.",
    color: "purple",
    link: "/produtos",
  },
  {
    icon: Gamepad2,
    title: "Cyber Arena",
    description:
      "A arena de desafios e competições de tecnologia da UNIVESP, onde os estudantes podem testar suas habilidades, aprender e se divertir com a comunidade.",
    color: "cyan",
    link: "/cyber-arena",
  },
  {
    icon: Dumbbell,
    title: "Ctrl + Shape",
    description:
      "Comunidade fitness e saúde para estudantes da UNIVESP, com dicas de exercícios, alimentação saudável e equilíbrio entre corpo e mente durante a jornada acadêmica.",
    color: "orange",
    link: "/ctrl-shape",
  },
];

export default function Calouro() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Boas-vindas"
          title="Guia do Calouro"
          description="Seu guia completo para começar bem na UNIVESP e aproveitar ao máximo a experiência universitária."
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
