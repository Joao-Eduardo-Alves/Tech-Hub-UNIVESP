import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  Mouse,
  BookOpen,
  CalendarCheck,
  Shirt,
  Coffee,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "../components/shared/SectionHeader";

const categories = [
  { id: "geral", label: "Área Geral" },
  { id: "ciencia-dados", label: "Ciência de Dados" },
  { id: "ti", label: "TI" },
  { id: "eng-comp", label: "Eng. Computação" },
  { id: "ia", label: "Inteligência Artificial" },
];

const products = [
  // Geral
  {
    id: 1,
    category: "geral",
    icon: Laptop,
    title: "Notebook para Estudar",
    description:
      "Recomendações de notebooks com melhor custo-benefício para estudantes de tecnologia.",
    price: "A partir de R$ 2.500",
    tag: "Essencial",
  },
  {
    id: 2,
    category: "geral",
    icon: Mouse,
    title: "Mouse Ergonômico",
    description:
      "Mouses ergonômicos para longas sessões de estudo e programação.",
    price: "A partir de R$ 120",
    tag: "Conforto",
  },
  {
    id: 3,
    category: "geral",
    icon: BookOpen,
    title: "Lógica de Programação",
    description:
      "Livro fundamental para iniciantes: 'Lógica de Programação e Algoritmos com JavaScript'.",
    price: "R$ 65",
    tag: "Livro",
  },
  {
    id: 4,
    category: "geral",
    icon: CalendarCheck,
    title: "Planner Produtividade",
    description:
      "Planners e agendas para organizar seus estudos, trabalhos e compromissos acadêmicos.",
    price: "A partir de R$ 45",
    tag: "Organização",
  },
  // Ciência de Dados
  {
    id: 5,
    category: "ciencia-dados",
    icon: Shirt,
    title: "Camiseta Ciência de Dados",
    description:
      "Camiseta personalizada do curso de Ciência de Dados Univesp. Vista a camisa!",
    price: "R$ 59,90",
    tag: "Personalizado",
  },
  {
    id: 6,
    category: "ciencia-dados",
    icon: Coffee,
    title: "Caneca Ciência de Dados",
    description:
      "Caneca personalizada para quem é apaixonado por dados e café.",
    price: "R$ 39,90",
    tag: "Personalizado",
  },
  // TI
  {
    id: 7,
    category: "ti",
    icon: Shirt,
    title: "Camiseta TI",
    description:
      "Camiseta exclusiva do curso de Tecnologia da Informação Univesp.",
    price: "R$ 59,90",
    tag: "Personalizado",
  },
  {
    id: 8,
    category: "ti",
    icon: Coffee,
    title: "Caneca TI",
    description:
      "Caneca personalizada para os amantes de infraestrutura e redes.",
    price: "R$ 39,90",
    tag: "Personalizado",
  },
  // Eng Comp
  {
    id: 9,
    category: "eng-comp",
    icon: Shirt,
    title: "Camiseta Eng. Computação",
    description:
      "Camiseta personalizada do curso de Engenharia de Computação Univesp.",
    price: "R$ 59,90",
    tag: "Personalizado",
  },
  {
    id: 10,
    category: "eng-comp",
    icon: Coffee,
    title: "Caneca Eng. Computação",
    description: "Caneca para quem programa em C e mexe com hardware.",
    price: "R$ 39,90",
    tag: "Personalizado",
  },
  // IA
  {
    id: 11,
    category: "ia",
    icon: Shirt,
    title: "Camiseta Inteligência Artificial",
    description: "Camiseta exclusiva do curso de IA Univesp.",
    price: "R$ 59,90",
    tag: "Personalizado",
  },
  {
    id: 12,
    category: "ia",
    icon: Coffee,
    title: "Caneca IA",
    description:
      "Caneca para os apaixonados por redes neurais e deep learning.",
    price: "R$ 39,90",
    tag: "Personalizado",
  },
];

export default function Produtos() {
  const [activeCategory, setActiveCategory] = useState("geral");

  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Produtos"
          title="Produtos Recomendados"
          description="Ferramentas, livros e produtos personalizados para turbinar seus estudos e mostrar seu orgulho UNIVESP."
        />

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {product.tag}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-foreground">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-xl gap-1.5 text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver Produto
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border/50 text-center"
        >
          <ShoppingCart className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">
            Os links de produtos serão redirecionados para plataformas de venda
            parceiras.
            <br />
            Em breve, mais produtos e categorias!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
