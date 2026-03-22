import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-primary/10 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-bold text-white mb-1">
            Hanisha<span className="text-primary">SM</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
          >
            <Mail size={18} />
          </a>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-all duration-300 ml-4"
          >
            <ArrowUp size={18} strokeWidth={3} />
          </button>
        </div>
      </div>
    </footer>
  );
}
