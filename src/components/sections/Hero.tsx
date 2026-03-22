import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* ── Background gradient orbs (neural / Neuronova style) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large purple blob — bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[hsl(270_55%_38%)] opacity-30 blur-[120px]" />
        {/* Large blue blob — top-right */}
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-[hsl(210_70%_45%)] opacity-25 blur-[120px]" />
        {/* Central soft glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[hsl(240_50%_30%)] opacity-20 blur-[100px]" />
        {/* Subtle mauve accent — upper-left */}
        <div className="absolute top-10 left-1/4 w-[260px] h-[260px] rounded-full bg-[hsl(290_45%_35%)] opacity-20 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">

        {/* Avatar ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary blur-md opacity-50 scale-110" />
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] glow-primary">
            <div className="w-full h-full rounded-full glass-panel flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter">HS</span>
            </div>
          </div>
        </motion.div>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-primary/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-white/85">{personal.role}</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-none"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[hsl(240_80%_72%)] to-accent">
            {personal.name.split(" ")[0]}
          </span>
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personal.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-[1.05] transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-2"
          >
            View My Work <ArrowRight size={17} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full glass-panel border border-primary/25 text-white font-semibold hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
          >
            <Linkedin size={17} className="text-primary" /> LinkedIn
          </a>
        </motion.div>

        {/* Location / email strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-6 text-sm text-white/45"
        >
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-primary" />
            {personal.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail size={15} className="text-accent" />
            {personal.email}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
