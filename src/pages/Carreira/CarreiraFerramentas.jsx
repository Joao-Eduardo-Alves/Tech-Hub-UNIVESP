import FeatureCard from "@/components/shared/FeatureCard";
import SectionHeader from "../../components/shared/SectionHeader";
import { careerTopics } from "./Carreira";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CarreiraFerramentas() {
  const ferramentas = careerTopics.filter((item) => item.type === "ferramenta");

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="Carreira"
          title="Ferramentas"
          description="Recursos úteis para o desenvolvimento profissional."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {ferramentas.map((ferramentas, i) => (
            <Link key={ferramentas.title} to={ferramentas.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${ferramentas.color}`}
                  >
                    <ferramentas.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {ferramentas.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {ferramentas.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 ml-16">
                  {ferramentas.steps.map((step, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
