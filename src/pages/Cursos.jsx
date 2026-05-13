import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Shield,
  Cpu,
  Brain,
  Clock,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "../components/shared/SectionHeader";
import { useEffect } from "react";

const courses = [
  {
    icon: Database,
    title: "Ciência de Dados",
    duration: "8 semestres",
    link: "https://univesp.br/bacharelado-em-ciencia-de-dados/",
    description:
      "O curso de Ciência de Dados é voltado para quem quer entender o mundo através de informações. Em um cenário onde praticamente tudo gera dados — desde redes sociais até sistemas empresariais — saber interpretar esses dados se tornou uma habilidade extremamente valiosa. Ao longo da graduação, você aprende a coletar, organizar e analisar grandes volumes de informação, transformando números em decisões mais inteligentes. A base matemática é presente, especialmente em estatística e probabilidade, mas sempre conectada com aplicações práticas. Com o tempo, você passa a desenvolver modelos que conseguem prever comportamentos, identificar padrões e gerar insights que ajudam empresas a tomar decisões mais estratégicas. É um curso que exige raciocínio lógico e curiosidade constante, ideal para quem gosta de investigar, explorar e encontrar respostas onde a maioria só vê dados soltos.",
    topics: [
      "Python & R",
      "Machine Learning",
      "Estatística e Probabilidade",
      "Big Data",
      "Visualização de Dados",
      "SQL",
    ],
    careers: [
      "Cientista de Dados",
      "Analista de Dados",
      "Engenheiro de Dados",
      "ML Engineer",
    ],
    color: "blue",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Shield,
    title: "Tecnologia da Informação",
    duration: "6 semestres",
    link: "https://univesp.br/bacharelado-em-tecnologia-da-informacao/",
    description:
      "Tecnologia da Informação é o caminho mais amplo dentro do eixo de TI, sendo uma excelente escolha para quem ainda está descobrindo em qual área quer se especializar. Durante o curso, você entra em contato com os principais pilares da computação, passando por programação, redes, bancos de dados e sistemas operacionais. Essa formação mais generalista permite que você construa uma base sólida e, ao longo do tempo, identifique quais áreas fazem mais sentido para você. Na prática, isso significa que você pode seguir caminhos diferentes após a graduação, como desenvolvimento de software, suporte técnico, infraestrutura ou análise de sistemas. É um curso equilibrado, que não exige um perfil extremamente específico no início, mas que recompensa quem se dedica a explorar e experimentar. Se você quer entrar na área de tecnologia com segurança e flexibilidade, essa é uma escolha bastante estratégica.",
    topics: [
      "Redes",
      "Segurança da Informação",
      "Cloud Computing",
      "Gestão de TI",
      "DevOps",
      "Lógica de programação",
    ],
    careers: [
      "Desenvolvedor de Software",
      "Suporte Técnico / Help Desk",
      "Administrador de Redes",
      "Cloud Engineer",
    ],
    color: "green",
    bgGradient: "from-emerald-500/10 to-green-500/10",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: Cpu,
    title: "Engenharia de Computação",
    duration: "10 semestres",
    link: "https://univesp.br/engenharia-de-computacao/",
    description:
      "Engenharia da Computação é o curso para quem quer ir além do software e entender como a tecnologia funciona em um nível mais profundo. Aqui, você não aprende apenas a programar, mas também a compreender como os computadores operam internamente, desde circuitos eletrônicos até sistemas mais complexos. Ao longo da formação, há um equilíbrio entre teoria e prática, com conteúdos que envolvem eletrônica, arquitetura de computadores e programação mais próxima do hardware. Isso abre portas para áreas como automação, sistemas embarcados, robótica e Internet das Coisas. É um curso mais técnico e, em alguns momentos, mais desafiador, especialmente para quem não tem familiaridade com física ou matemática. Por outro lado, oferece uma visão completa da computação, formando profissionais capazes de atuar em projetos mais complexos e inovadores. É ideal para quem tem curiosidade sobre como tudo realmente funciona por trás das telas.",
    topics: [
      "Eletrônica Digital",
      "Sistemas Embarcados",
      "IoT",
      "Arquitetura de Computadores",
      "Programação",
      "Robótica",
    ],
    careers: [
      "Engenheiro de Software",
      "Engenheiro de Sistemas",
      "Engenheiro de Automação",
      "Especialista em IoT",
    ],
    color: "purple",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-500/10 text-violet-500",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    duration: "8 semestres",
    link: "https://univesp.br/bacharelado-em-inteligencia-artificial/",
    description:
      "O curso de Inteligência Artificial é voltado para quem quer trabalhar diretamente com uma das áreas mais avançadas e promissoras da tecnologia. Ao longo da graduação, você aprende a desenvolver sistemas capazes de aprender com dados e tomar decisões de forma automatizada. Isso inclui desde algoritmos de recomendação até modelos mais sofisticados, como reconhecimento de imagens, processamento de linguagem natural e redes neurais. A base matemática também é importante aqui, especialmente em álgebra e estatística, mas sempre aplicada a problemas reais. Na prática, você passa a construir soluções que simulam comportamentos inteligentes, criando aplicações que estão cada vez mais presentes no dia a dia. É um curso exigente, que demanda disciplina e interesse contínuo, mas que abre portas para oportunidades inovadoras e bem posicionadas no mercado. Ideal para quem quer estar na linha de frente da evolução tecnológica.",
    topics: [
      "Deep Learning",
      "Machine Learning",
      "NLP",
      "Visão Computacional",
      "Redes Neurais",
      "Python",
    ],
    careers: [
      "Engenheiro de IA",
      "Pesquisador em ML",
      "Desenvolvedor de IA",
      "Data Scientist",
    ],
    color: "orange",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    iconBg: "bg-orange-500/10 text-orange-500",
  },
];

export default function Cursos() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          const yOffset = -150;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }, 150);
      }
    }
  }, []);
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Eixo de Tecnologia"
          title="Cursos do Eixo Tech"
          description="A UNIVESP oferece uma formação moderna e acessível para quem quer entrar na área de tecnologia. Dentro do eixo de TI, existem quatro principais caminhos — e escolher entre eles pode definir o tipo de profissional que você vai se tornar."
        />

        <div className="space-y-8">
          {courses.map((course, i) => (
            <motion.div
              id={course.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")}
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group rounded-3xl bg-gradient-to-br ${course.bgGradient} border border-border/50 hover:border-primary/20 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${course.iconBg}`}
                    >
                      <course.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" /> Principais
                      Tópicos
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1.5 rounded-lg bg-card text-xs font-medium text-foreground border border-border/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" /> Carreiras
                    </h4>
                    <ul className="space-y-2">
                      {course.careers.map((career) => (
                        <li
                          key={career}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
