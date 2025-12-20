import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "1M+", label: "Users Worldwide" },
    { icon: Zap, value: "50M+", label: "PDFs Processed" },
    { icon: Shield, value: "100%", label: "Secure & Private" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/50 py-16 lg:py-24">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/3 to-accent/3 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            Free Online PDF Tools - No Installation Required
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            All-in-One{" "}
            <span className="gradient-text">PDF Tools</span>
            <br />
            for Everyone
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up stagger-1">
            Merge, split, compress, convert, edit, and protect your PDF files online. 
            100% free, secure, and works on any device.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up stagger-2">
            <Link to="/tools" className="btn-primary group">
              Explore All Tools
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/tool/merge-pdf" className="btn-secondary">
              Try Merge PDF
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-up stagger-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-card border border-border"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
