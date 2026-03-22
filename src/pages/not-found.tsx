import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-6">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-white">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
