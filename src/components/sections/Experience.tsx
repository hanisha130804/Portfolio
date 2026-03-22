import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { CertificateModal } from "../ui/CertificateModal";

type Cert = (typeof PORTFOLIO_DATA.certifications)[number];

export function Experience() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Education Column */}
        <div>
          <SectionHeading title="Education" className="mb-12" />
          <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
            {PORTFOLIO_DATA.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                <div className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">{item.degree}</h3>
                <p className="text-lg text-muted-foreground mb-3">{item.institution}</p>
                <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-white/90">
                  {item.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <SectionHeading title="Certifications" className="mb-12" />
          <p className="text-xs text-muted-foreground mb-6 -mt-10">Click any certificate to view details</p>
          <div className="space-y-6">
            {PORTFOLIO_DATA.certifications.map((cert, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCert(cert)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full text-left p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 relative overflow-hidden cursor-pointer"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{cert.provider}</p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">{cert.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs rounded-md bg-primary/10 border border-primary/20 text-primary/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-4">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    <span className="text-xs font-semibold text-primary group-hover:underline">View →</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}
