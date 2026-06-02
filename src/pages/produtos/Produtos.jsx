import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeader from "@/components/shared/SectionHeader";
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
  Sparkles,
  Keyboard,
} from "lucide-react";

const categories = [
  { id: "geral", label: "Geral" },
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
  sparkles: Sparkles,
  keyboard: Keyboard,
};

export default function Produtos() {
  const [activeCategory, setActiveCategory] = useState("geral");
  const [activeTag, setActiveTag] = useState("all");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    }

    loadProducts();
  }, []);

  const categoryProducts = products.filter(
    (p) => p && p.category === activeCategory,
  );
  const uniqueTags = [
    "all",
    ...Array.from(
      new Set(categoryProducts.map((product) => product?.tag)),
    ).sort(),
  ];
  const filtered = categoryProducts.filter(
    (product) => product && (activeTag === "all" || product.tag === activeTag),
  );

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Produtos"
          title="Produtos Recomendados"
          description="Ferramentas, livros e produtos personalizados para turbinar seus estudos."
        />

        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveTag("all");
                }}
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

        {uniqueTags.length > 1 && (
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTag === tag
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tag === "all" ? "Todos" : tag}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border/50 flex flex-col space-y-4"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <Skeleton className="w-12 h-6 rounded-full" />
                  </div>

                  <Skeleton className="w-full aspect-square rounded-xl" />

                  <Skeleton className="w-3/4 h-4 rounded" />
                  <Skeleton className="w-full h-10 rounded" />

                  <div className="flex gap-2 mt-auto">
                    <Skeleton className="w-1/3 h-8 rounded" />
                    <Skeleton className="w-2/3 h-8 rounded" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product, i) => {
                const Icon = iconMap[product.icon];

                return (
                  <motion.div
                    key={product.itemId}
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
                      src={product.customImage ?? product.imageUrl}
                      alt={product.title}
                      className="rounded-xl mb-4 aspect-square object-cover"
                    />

                    <h3 className="font-semibold mb-2">{product.title}</h3>

                    <p className="text-sm text-muted-foreground flex-1 mb-3">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 flex-wrap">
                      <div className="flex items-center gap-1">
                        <span>Avaliação Shopee: </span>
                        <span>{product.ratingStar || "0.0"}⭐</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-auto">
                      <span className="font-bold">R$ {product.price}</span>

                      <Button asChild size="sm" variant="outline">
                        {product.tag === "Vestuário" ? (
                          <Link
                            to={`/produtos/como-comprar/${product.tag}?modelo=${product.idPersonalizado}`}
                            state={{ offerLink: product.offerLink }}
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1" />
                            Como Comprar
                          </Link>
                        ) : (
                          <a
                            href={product.offerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1" />
                            Ver Produto
                          </a>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 p-8 rounded-2xl bg-muted/50 border border-border/50 text-center">
          <ShoppingCart className="w-8 h-8 mx-auto mb-3" />

          <p className="text-sm text-muted-foreground">
            Compre pela plataforma oficial da Shopee, de maneira totalmente
            segura!
          </p>
        </div>
      </div>
    </div>
  );
}
