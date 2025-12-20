import Layout from "@/components/layout/Layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 20, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect minimal information necessary to provide our services. When you use our PDF tools, 
                  we temporarily process your uploaded files. We do not permanently store your documents.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  Your uploaded files are used solely for the purpose of processing your requested PDF operation. 
                  All files are automatically deleted from our servers within 1 hour of processing.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">3. Data Security</h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect your data. All file transfers 
                  are encrypted using SSL/TLS encryption. Our servers are protected by enterprise-grade security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">4. Cookies</h2>
                <p className="leading-relaxed">
                  We use essential cookies to ensure our website functions properly. We also use analytics 
                  cookies to understand how visitors interact with our site. You can disable cookies in your 
                  browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                <p className="leading-relaxed">
                  We may use third-party services for analytics and advertising. These services have their 
                  own privacy policies governing the use of your information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete your personal information. Since we don't 
                  store your documents, there's nothing to delete after processing is complete.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at info@techhomebd.xyz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
