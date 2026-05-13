import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 lg:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Pronto para começar sua jornada tech?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Explore nossos guias, descubra o curso ideal e dê o primeiro passo
              rumo a uma carreira de sucesso na tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-xl text-base h-12 px-8 gap-2 group"
              >
                <Link to="/cursos">
                  Explorar Cursos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-xl text-base h-12 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <Link to="/produtos">Ver Produtos</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
