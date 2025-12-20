import { Shield, Zap, Cloud, Lock, Globe, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process your PDFs in seconds with our optimized tools. No waiting, instant results.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your files are encrypted and automatically deleted after processing. Your privacy is guaranteed.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "No software to install. Access our tools from any browser, anywhere in the world.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Files are processed on secure servers and never stored. Complete data privacy.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Compatible with Windows, Mac, Linux, iOS, and Android. Use any device.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Fully responsive design optimized for mobile devices. PDF tools on the go.",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Top PDF Tools?</h2>
          <p className="section-subtitle">
            Trusted by millions of users worldwide for fast, secure, and reliable PDF processing
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
