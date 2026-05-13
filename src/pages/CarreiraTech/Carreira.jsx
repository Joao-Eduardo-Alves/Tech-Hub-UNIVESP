import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Linkedin,
  Layout,
  Server,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Link,
  User,
  UserCheck,
  ShoppingBag,
  Kanban,
  FileQuestion,
  Wrench,
  Cpu,
  Brain,
  Database,
} from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";

export const careerTopics = [
  {
    link: "/carreira/dicas/estagio",
    type: "dica",
    icon: Briefcase,
    title: "Como Conseguir Estágio sem Experiência",
    description:
      "Estratégias práticas para conseguir sua primeira oportunidade na área tech, mesmo sem experiência prévia.",
    steps: [
      "Comece a buscar desde o início do curso",
      "Monte um portfólio com projetos pessoais",
      "Contribua em projetos open source",
      "Participe de hackathons, bootcamps e eventos",
      "Otimize seu LinkedIn e currículo",
      "Candidate-se sem medo",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    link: "/carreira/dicas/portfolio",
    type: "dica",
    icon: FolderGit2,
    title: "Como Montar um Portfólio",
    description:
      "Crie um portfólio que impressiona recrutadores e destaque seus melhores projetos e habilidades.",
    steps: [
      "Disponibilize os projetos no GitHub",
      "Use o Git para versionar os projetos",
      "Capriche na documentação",
      "Crie um site pessoal para mostrar seus projetos (opcional)",
    ],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    link: "/carreira/dicas/linkedin",
    type: "dica",
    icon: Linkedin,
    title: "LinkedIn para Iniciantes",
    description:
      "Otimize seu perfil e faça networking estratégico na maior rede profissional do mundo.",
    steps: [
      "Foto profissional e banner",
      "Headline otimizada com palavras-chave",
      "Resumo contando sua história",
      "Publique conteúdo regularmente",
      "Conecte-se com profissionais da área",
    ],
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    link: "/carreira/roadmaps/frontend",
    type: "roadmap",
    icon: Layout,
    title: "Roadmap Frontend",
    description:
      "O caminho completo para se tornar um desenvolvedor frontend: do HTML ao React e além.",
    steps: [
      "HTML, CSS e JavaScript",
      "Responsividade e Acessibilidade",
      "React ou Vue.js",
      "TypeScript",
      "Testes e Deploy",
    ],
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    link: "/carreira/roadmaps/backend",
    type: "roadmap",
    icon: Server,
    title: "Roadmap Backend",
    description:
      "Domine o desenvolvimento backend: servidores, APIs, bancos de dados e arquitetura.",
    steps: [
      "Node.js ou Python",
      "APIs REST e GraphQL",
      "Banco de dados SQL e NoSQL",
      "Docker e Cloud",
      "Segurança e Performance",
    ],
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    link: "/carreira/roadmaps/dados",
    type: "roadmap",
    icon: Database,
    title: "Roadmap Dados",
    description:
      "Trilha completa para iniciar uma carreira em ciência e engenharia de dados.",
    steps: [
      "Python e bibliotecas (Pandas, NumPy)",
      "SQL avançado",
      "Visualização (Power BI, Matplotlib)",
      "Machine Learning básico",
      "Cloud e Big Data",
    ],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    link: "/carreira/roadmaps/hardware",
    type: "roadmap",
    icon: Cpu,
    title: "Roadmap Hardware",
    description:
      "Trilha completa para iniciar uma carreira em engenharia de hardware.",
    steps: [
      "Python e bibliotecas (Pandas, NumPy)",
      "SQL avançado",
      "Visualização (Power BI, Matplotlib)",
      "Machine Learning básico",
      "Cloud e Big Data",
    ],
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    link: "/carreira/roadmaps/ia",
    type: "roadmap",
    icon: Brain,
    title: "Roadmap Inteligência Artificial",
    description:
      "Trilha completa para iniciar uma carreira em inteligência artificial.",
    steps: [
      "Python e bibliotecas (Pandas, NumPy)",
      "SQL avançado",
      "Visualização (Power BI, Matplotlib)",
      "Machine Learning básico",
      "Cloud e Big Data",
    ],
    color: "bg-orange-500/10 text-orange-500",
  },
];

const guides = [
  {
    icon: Kanban,
    title: "Roadmaps",
    description:
      "Mapeie sua evolução na tecnologia com trilhas organizadas do básico ao avançado. Descubra o que estudar, em qual ordem aprender e quais habilidades realmente fazem diferença no mercado.",
    color: "blue",
    link: "/carreira/roadmaps",
  },
  {
    icon: FileQuestion,
    title: "Dicas práticas",
    description:
      "Atalhos inteligentes para estudar melhor, programar com mais eficiência e evitar erros comuns na jornada tech. Pequenas dicas que podem acelerar muito seu crescimento na área.",
    color: "orange",
    link: "/carreira/dicas",
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    description:
      "Explore plataformas, extensões, sites e recursos que facilitam a vida de quem estuda e trabalha com tecnologia. Tudo reunido para aumentar sua produtividade e turbinar seus projetos..",
    color: "blue",
    link: "/carreira/ferramentas",
  },
];

export default function SectionsCareer() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <FeatureCard
              link={guide.link}
              key={guide.title}
              {...guide}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
