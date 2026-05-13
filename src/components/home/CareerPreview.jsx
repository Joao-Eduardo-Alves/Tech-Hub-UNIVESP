import React from "react";
import {
  Briefcase,
  FolderGit2,
  Linkedin,
  Layout,
  Server,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "../shared/SectionHeader";
import FeatureCard from "../shared/FeatureCard";

const careerTopics = [
  {
    icon: Briefcase,
    title: "Estágio sem Experiência",
    description:
      "Estratégias práticas para conseguir sua primeira oportunidade na área tech.",
    color: "red",
  },
  {
    icon: FolderGit2,
    title: "Monte seu Portfólio",
    description:
      "Como criar um portfólio que chama atenção de recrutadores e empresas.",
    color: "blue",
  },
  {
    icon: Linkedin,
    title: "LinkedIn para Iniciantes",
    description:
      "Otimize seu perfil e faça networking estratégico na maior rede profissional.",
    color: "cyan",
  },
  {
    icon: Layout,
    title: "Roadmap Frontend",
    description:
      "HTML, CSS, JavaScript, React e todo o caminho para se tornar dev frontend.",
    color: "purple",
  },
  {
    icon: Server,
    title: "Roadmap Backend",
    description:
      "Node.js, Python, APIs, bancos de dados e arquitetura de sistemas.",
    color: "green",
  },
  {
    icon: BarChart3,
    title: "Roadmap Dados",
    description:
      "Python, SQL, visualização, machine learning e carreira em dados.",
    color: "orange",
  },
];

export default function CareerPreview() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Carreira"
          title="Carreira Tech"
          description="Roadmaps, dicas práticas e tudo que você precisa para dar os primeiros passos na área de tecnologia."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerTopics.map((topic, i) => (
            <FeatureCard
              key={topic.title}
              {...topic}
              index={i}
              link="/carreira"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
