import { motion } from "framer-motion";
import { Trophy, Medal, Palette } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function Achievements() {
  const icons = [<Trophy size={24}/>, <Medal size={24}/>, <Palette size={24}/>];

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Achievements & Interests" 
          subtitle="Beyond academics, I actively participate in sports, cultural events, and creative pursuits."
          className="text-center md:text-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.achievements.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border-t border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                {icons[idx]}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-6">{group.category}</h3>
              
              <ul className="space-y-4">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
