import React from "react";
import { motion } from "framer-motion";
import { BookOpen, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const guides = [
  {
    icon: UserCheck,
    title: "Guia do Calouro",
    description:
      "Manual do aluno, dicas práticas de organização, produtos exclusivos e tudo para começar bem na UNIVESP.",
    link: "/calouro",
    gradient: "from-blue-500/10 to-violet-500/10",
    iconBg: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: BookOpen,
    title: "Guia do Vestibulando",
    description:
      "Tudo para se preparar para a prova da UNIVESP: redação, matemática, gestão do tempo e mais.",
    link: "/vestibulando",
    gradient: "from-primary/10 to-orange-500/10",
    iconBg: "bg-primary/10 text-primary",
  },
];

export default function GuidesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={guide.link}
                className={`group block p-8 lg:p-10 rounded-3xl bg-gradient-to-br ${guide.gradient} border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${guide.iconBg} transition-all duration-300`}
                >
                  <guide.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {guide.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary gap-2 group-hover:gap-3 transition-all">
                  Acessar guia <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
