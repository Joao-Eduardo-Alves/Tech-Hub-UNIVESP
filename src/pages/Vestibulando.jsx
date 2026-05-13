import {
  BookOpen,
  PenTool,
  Calculator,
  Clock,
  CalendarCheck,
  Target,
  GraduationCap,
} from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import FeatureCard from "../components/shared/FeatureCard";

const topics = [
  {
    icon: GraduationCap,
    title: "Cursos Eixo de Tecnologia",
    description:
      "Descubra os detalhes dos cursos oferecidos pela UNIVESP, incluindo grade curricular, diferenciais e oportunidades de carreira para cada um.",
    color: "red",
    link: "/cursos",
  },
  {
    icon: PenTool,
    title: "Redação",
    description:
      "Dicas de estruturação, temas recorrentes e como construir uma argumentação sólida na redação.",
    color: "blue",
    link: "/redacao",
  },
  {
    icon: Calculator,
    title: "Matemática",
    description:
      "Os principais tópicos de matemática cobrados, exercícios resolvidos e macetes para otimizar tempo.",
    color: "green",
    link: "/matematica",
  },
  {
    icon: Clock,
    title: "Gestão do Tempo",
    description:
      "Como distribuir seu tempo durante a prova, priorizar questões e manter o foco até o final.",
    color: "purple",
    link: "/gestao-tempo",
  },
  {
    icon: CalendarCheck,
    title: "O que Esperar no Dia da Prova",
    description:
      "Documentos necessários, horários, dicas de alimentação, transporte e preparação mental para o dia D.",
    color: "orange",
    link: "/dia-da-prova",
  },
  {
    icon: BookOpen,
    title: "Material de Estudo",
    description:
      "Recomendações de livros, videoaulas, apostilas e recursos gratuitos para sua preparação.",
    color: "cyan",
    link: "/material-de-estudo",
  },
];

export default function Vestibulando() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Preparação"
          title="Guia do Vestibulando"
          description="Tudo que você precisa saber para se preparar e arrasar no vestibular da UNIVESP."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <FeatureCard key={topic.title} {...topic} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
