import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { Code2, Database, Wrench, Lightbulb, Languages } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    key: "programming" as const,
    glow: "hsl(214 85% 60% / 0.15)",
    border: "hsl(214 85% 60% / 0.25)",
    iconBg: "hsl(214 85% 60% / 0.15)",
    iconColor: "hsl(214 85% 65%)",
  },
  {
    title: "Data Science & ML",
    icon: <Database size={20} />,
    key: "dataScience" as const,
    glow: "hsl(268 60% 65% / 0.15)",
    border: "hsl(268 60% 65% / 0.25)",
    iconBg: "hsl(268 60% 65% / 0.15)",
    iconColor: "hsl(268 60% 70%)",
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench size={20} />,
    key: "tools" as const,
    glow: "hsl(240 70% 68% / 0.15)",
    border: "hsl(240 70% 68% / 0.25)",
    iconBg: "hsl(240 70% 68% / 0.15)",
    iconColor: "hsl(240 70% 72%)",
  },
  {
    title: "Soft Skills",
    icon: <Lightbulb size={20} />,
    key: "softSkills" as const,
    glow: "hsl(200 80% 55% / 0.15)",
    border: "hsl(200 80% 55% / 0.25)",
    iconBg: "hsl(200 80% 55% / 0.15)",
    iconColor: "hsl(200 80% 60%)",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit built through academic rigor and hands-on project experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:border-primary/30"
              style={{
                background: "hsl(var(--card) / 0.55)",
                backdropFilter: "blur(16px)",
                border: `1px solid hsl(var(--border))`,
              }}
            >
              {/* Glow orb */}
              <div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[70px] opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: cat.glow }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: cat.iconBg,
                      border: `1px solid ${cat.border}`,
                      color: cat.iconColor,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {PORTFOLIO_DATA.skills[cat.key].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-xl text-sm text-white/75 transition-opacity duration-300 hover:text-white"
                      style={{
                        background: "hsl(var(--secondary) / 0.8)",
                        border: `1px solid hsl(var(--border))`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <Languages size={28} className="text-primary" />
            <h3 className="font-display text-2xl font-bold text-white">Languages</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl"
                style={{
                  background: "hsl(var(--card) / 0.55)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <div className="flex justify-between items-end mb-3">
                  <span className="font-semibold text-white">{lang.name}</span>
                  <span className="text-xs text-white/45">{lang.level}</span>
                </div>
                <div className="h-2 w-full bg-secondary/60 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
