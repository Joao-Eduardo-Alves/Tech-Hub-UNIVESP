import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "../../components/shared/SectionHeader";
import { careerTopics } from "../CarreiraTech/Carreira"; // ideal extrair depois
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CarreiraDicas() {
  const dicas = careerTopics.filter((item) => item.type === "dica");

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Carreira"
          title="Dicas"
          description="Conselhos e sugestões para impulsionar sua carreira na área de tecnologia."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {dicas.map((dicas, i) => (
            <Link key={dicas.title} to={dicas.link}>
              <motion.div
                key={dicas.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${dicas.color}`}
                  >
                    <dicas.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {dicas.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {dicas.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 ml-16">
                  {dicas.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
