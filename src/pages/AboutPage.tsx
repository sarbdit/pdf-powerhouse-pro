import { Link } from "react-router-dom";
import { FileText, Users, Award, Globe, Heart, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  const stats = [
    { value: "1M+", label: "Users Worldwide" },
    { value: "50M+", label: "PDFs Processed" },
    { value: "30+", label: "PDF Tools" },
    { value: "99.9%", label: "Uptime" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Your privacy is our top priority. All files are encrypted and automatically deleted after processing.",
    },
    {
      icon: Heart,
      title: "Free for Everyone",
      description: "We believe essential PDF tools should be accessible to everyone, regardless of budget.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Our tools work on any device, anywhere in the world, with no installation required.",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "We continuously improve our tools to deliver the best possible results for our users.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Top PDF Tools
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're on a mission to make PDF tools accessible to everyone. 
              Free, fast, and secure - that's our promise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Top PDF Tools was born from a simple frustration: why should basic PDF operations 
                require expensive software or sketchy online tools? We believed there had to be 
                a better way.
              </p>
              <p className="leading-relaxed mb-6">
                Founded by TechhomeBD in 2024, we set out to create a comprehensive suite of 
                PDF tools that anyone could use, anywhere, without compromising on quality or 
                security. Today, we serve millions of users worldwide who trust us with their 
                documents.
              </p>
              <p className="leading-relaxed">
                Our commitment remains unchanged: provide powerful, free PDF tools that respect 
                your privacy and deliver professional results. Every file you process is encrypted, 
                and we never store your documents longer than necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-2xl bg-card border border-border"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join millions of users who trust Top PDF Tools for their document needs.
          </p>
          <Link
            to="/tools"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-foreground text-primary font-semibold transition-all duration-200 hover:bg-primary-foreground/90"
          >
            Explore All Tools
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
