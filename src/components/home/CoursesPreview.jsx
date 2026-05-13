import React from "react";
import { Database, Shield, Cpu, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "../shared/SectionHeader";
import FeatureCard from "../shared/FeatureCard";

const courses = [
  {
    icon: Database,
    title: "Ciência de Dados",
    description:
      "Análise de dados, machine learning, estatística e big data para decisões inteligentes.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Tecnologia da Informação",
    description:
      "Infraestrutura, segurança, redes e gestão de sistemas tecnológicos modernos.",
    color: "green",
  },
  {
    icon: Cpu,
    title: "Engenharia de Computação",
    description:
      "Hardware, software, sistemas embarcados e soluções computacionais avançadas.",
    color: "purple",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Deep learning, NLP, visão computacional e o futuro da tecnologia inteligente.",
    color: "orange",
  },
];

export default function CoursesPreview() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Cursos"
          title="Cursos do Eixo Tech"
          description="Conheça os cursos de tecnologia da Univesp e descubra qual é o ideal para você."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <FeatureCard
              key={course.title}
              {...course}
              index={i}
              link={`/cursos#${course.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
