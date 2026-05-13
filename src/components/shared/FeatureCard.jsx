import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * @typedef {Object} FeatureCardProps
 * @property {import("react").ComponentType<import("lucide-react").LucideProps>} icon
 * @property {string} title
 * @property {string} description
 * @property {string} [link]
 * @property {number} [index]
 * @property {string} [color]
 */

/**
 * @param {FeatureCardProps} props
 */
export default function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
  index = 0,
  color = "red",
}) {
  const colorClasses = {
    red: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
    blue: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    green:
      "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
    purple:
      "bg-violet-500/10 text-violet-500 group-hover:bg-violet-500 group-hover:text-white",
    orange:
      "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
    cyan: "bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white",
  };

  /** @type {keyof typeof colorClasses} */
  const colorKey =
    color in colorClasses
      ? /** @type {keyof typeof colorClasses} */ (color)
      : "red";

  const cardContent = (
    <>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
          colorClasses[colorKey]
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>

      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      {link && (
        <span className="inline-flex items-center text-sm font-medium text-primary gap-1.5 group-hover:gap-3 transition-all">
          Saiba mais <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </>
  );

  const cardClass =
    "group block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {link ? (
        <Link to={link} className={cardClass}>
          {cardContent}
        </Link>
      ) : (
        <div className={cardClass}>{cardContent}</div>
      )}
    </motion.div>
  );
}
