import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my recent work in AI, Data Science, and Machine Learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-1"
              style={{
                background: "hsl(var(--card) / 0.6)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-transparent to-transparent z-10" />
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-[1.1] transition-transform duration-700 ease-out opacity-80"
                />
                {/* Hover purple overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md border ${
                      project.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-primary/20 text-primary border-primary/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="text-xs font-semibold tracking-wider text-primary mb-3 uppercase">
                  {project.type}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-primary/20 text-primary/80 bg-primary/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-5 border-t border-primary/10 flex items-center justify-between">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-primary transition-colors"
                  >
                    View Details <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
