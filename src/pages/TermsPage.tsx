import Layout from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Terms of Service
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
                <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Top PDF Tools, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">2. Use of Services</h2>
                <p className="leading-relaxed">
                  Our PDF tools are provided for lawful purposes only. You agree not to use our services 
                  to process illegal content, infringe on copyrights, or engage in any activity that 
                  violates applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">3. User Accounts</h2>
                <p className="leading-relaxed">
                  Some features may require creating an account. You are responsible for maintaining the 
                  confidentiality of your account credentials and for all activities under your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of our website are owned by TechhomeBD and 
                  are protected by intellectual property laws. You retain ownership of files you upload.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  We provide our services "as is" without warranties of any kind. We are not liable for 
                  any damages arising from your use of our services, including data loss or corruption.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">6. Service Modifications</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at 
                  any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">7. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms are governed by the laws of Bangladesh. Any disputes will be resolved in 
                  the courts of Dhaka, Bangladesh.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">8. Contact</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, contact us at info@techhomebd.xyz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
