import { X, Award, CheckCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Certificate {
  title: string;
  provider: string;
  description: string;
  link: string;
  date: string;
  credentialId?: string;
  skills: string[];
}

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (cert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cert]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Certificate Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0d0f1a] border border-white/10 shadow-[0_0_60px_rgba(139,92,246,0.2)]">

              {/* Top Gradient Strip */}
              <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-primary" />

              {/* Inner content */}
              <div className="p-8 md:p-12 relative">

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

                {/* Decorative corner borders */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-sm" />
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-sm" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-sm" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-sm" />

                {/* Certificate content */}
                <div className="relative z-10 text-center">

                  {/* Badge Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <Award size={36} className="text-primary" />
                    </div>
                  </div>

                  {/* Header text */}
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Certificate of Completion
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">This is to certify that</p>

                  {/* Recipient Name */}
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                    Hanisha SM
                  </h2>
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mb-6" />

                  <p className="text-sm text-muted-foreground mb-2">has successfully completed</p>

                  {/* Course Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                    {cert.title}
                  </h3>

                  {/* Provider */}
                  <p className="text-base font-semibold text-white/80 mb-8">
                    Issued by <span className="text-white">{cert.provider}</span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                    {cert.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/5 mb-8" />

                  {/* Meta Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground text-xs mb-1">DATE ISSUED</p>
                      <p className="text-white font-medium">{cert.date}</p>
                    </div>
                    {cert.credentialId && (
                      <>
                        <div className="hidden sm:block w-px h-8 bg-white/10" />
                        <div className="text-center">
                          <p className="text-muted-foreground text-xs mb-1">CREDENTIAL ID</p>
                          <p className="text-white font-mono text-xs font-medium">{cert.credentialId}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Skills */}
                  {cert.skills.length > 0 && (
                    <div className="mb-8">
                      <p className="text-xs text-muted-foreground mb-3 tracking-wider uppercase">Skills Covered</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium"
                          >
                            <CheckCircle size={11} />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Verify Link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <ExternalLink size={15} />
                    Visit {cert.provider}
                  </a>
                </div>
              </div>

              {/* Bottom Gradient Strip */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary opacity-30" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
