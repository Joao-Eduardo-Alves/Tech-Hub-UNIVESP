import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import SectionHeader from "../components/shared/SectionHeader";
import { getProducts } from "@/services/api";

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

const categories = [
  { id: "geral", label: "Área Geral" },
  { id: "ciencia-dados", label: "Ciência de Dados" },
  { id: "ti", label: "TI" },
  { id: "eng-comp", label: "Eng. Computação" },
  { id: "ia", label: "Inteligência Artificial" },
];

const iconMap = {
  laptop: Laptop,
  mouse: Mouse,
  book: BookOpen,
  calendar: CalendarCheck,
  shirt: Shirt,
  coffee: Coffee,
};

export default function Produtos() {
  const [activeCategory, setActiveCategory] = useState("geral");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    loadProducts();
  }, []);

  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Produtos"
          title="Produtos Recomendados"
          description="Ferramentas, livros e produtos personalizados para turbinar seus estudos."
        />

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => {
              const Icon = iconMap[product.icon];

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="group p-6 rounded-2xl bg-card border border-border/50 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {Icon && <Icon className="w-5 h-5 text-primary" />}
                    </div>

                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {product.tag}
                    </span>
                  </div>

                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="rounded-xl mb-4 aspect-square object-cover"
                  />

                  <h3 className="font-semibold mb-2">{product.productName}</h3>

                  <p className="text-sm text-muted-foreground flex-1 mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-bold">R$ {product.price}</span>

                    <Button asChild size="sm" variant="outline">
                      <a
                        href={product.offerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1" />
                        Ver Produto
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border/50 text-center">
          <ShoppingCart className="w-8 h-8 mx-auto mb-3" />

          <p className="text-sm text-muted-foreground">
            Em breve, mais produtos e categorias.
          </p>
        </div>
      </div>
    </div>
  );
}
