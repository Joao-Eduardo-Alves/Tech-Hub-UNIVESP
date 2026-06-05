import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  FolderGit2,
  Linkedin,
  Layout,
  Server,
  Kanban,
  FileQuestion,
  Wrench,
  Cpu,
  Brain,
  Database,
  Terminal,
  Bot,
  Router,
  SquareDashedBottomCode,
} from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";

export const careerTopics = [
  {
    link: "/carreira/dicas/vaga",
    type: "dica",
    icon: Briefcase,
    title: "Como Conseguir sua primeira vaga sem Experiência",
    description:
      "Estratégias práticas para conseguir sua primeira oportunidade na área tech, mesmo sem experiência prévia.",
    steps: [
      "Aproveite o estágio e comece a buscar desde o início do curso",
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
  {
    link: "/carreira/ferramentas/IDEs",
    type: "ferramenta",
    icon: Terminal,
    title: "IDEs e Editores de Código",
    description:
      "Explore as melhores IDEs e editores de código para programadores, desde usos gerais até especializações em linguagens específicas.",
    steps: ["VS Code", "Intellij", "JetBrains"],
    color: "bg-violet-500/10 text-violet-500",
  },
  {
    link: "/carreira/ferramentas/designUx",
    type: "ferramenta",
    icon: Layout,
    title: "Ferramentas de Design e UI/UX",
    description:
      "Explore as melhores ferramentas de design e experiência do usuário para programadores, desde esboços rápidos até protótipos avançados.",
    steps: ["Figma", "Excalidraw", "Coolors"],
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    link: "/carreira/ferramentas/automacao",
    type: "ferramenta",
    icon: Bot,
    title: "Ferramentas de Automação",
    description:
      "Descubra ferramentas de IA e automação que podem acelerar seus estudos, aumentar sua produtividade e ajudar na criação de projetos.",
    steps: ["ChatGPT", "Base44", "NotebookLM"],
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    link: "/carreira/ferramentas/deployfree",
    type: "ferramenta",
    icon: Router,
    title: "Ferramentas de Deploy para Projetos e Portfólio",
    description:
      "Conheça plataformas que permitem publicar seus projetos gratuitamente e criar um portfólio acessível para recrutadores, professores e futuros clientes.",
    steps: ["Vercel", "Railway", "GitHub Pages"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    link: "/carreira/ferramentas/testeapis",
    type: "ferramenta",
    icon: SquareDashedBottomCode,
    title: "Ferramentas para Teste de APIs",
    description:
      "Conheça plataformas que permitem testar e documentar suas APIs de forma simples e eficiente, facilitando o desenvolvimento e a colaboração em projetos.",
    steps: ["Postman", "Insomnia", "Swagger"],
    color: "bg-cyan-500/10 text-cyan-500",
  },
];

const guides = [
  {
    icon: Kanban,
    title: "Roadmaps",
    description:
      "Mapeie sua evolução na tecnologia com trilhas organizadas, descubra o que estudar e quais habilidades realmente fazem diferença no mercado.",
    color: "blue",
    link: "/carreira/roadmaps",
  },
  {
    icon: FileQuestion,
    title: "Dicas práticas",
    description:
      "Dicas práticas e diretas para quem está começando na tecnologia: Como conseguir a primeira vaga, montar um portfólio que impressiona e otimizar seu LinkedIn para chamar atenção dos recrutadores.",
    color: "orange",
    link: "/carreira/dicas",
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    description:
      "Explore plataformas, extensões, sites e recursos que facilitam a vida de quem estuda e trabalha com tecnologia. Tudo reunido para aumentar sua produtividade e turbinar seus projetos.",
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
