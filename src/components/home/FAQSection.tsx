import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are these PDF tools really free?",
      answer: "Yes, all our basic PDF tools are completely free to use. You can merge, split, compress, and convert PDFs without paying anything. For heavy users, we may require a free account registration to prevent abuse.",
    },
    {
      question: "Are my files secure when using your tools?",
      answer: "Absolutely! Security is our top priority. All file transfers are encrypted using SSL/TLS. Your files are processed on secure servers and automatically deleted within 1 hour after processing. We never store or share your documents.",
    },
    {
      question: "What is the maximum file size I can upload?",
      answer: "You can upload PDF files up to 100MB in size for free users. Premium users can upload files up to 500MB. For very large files, we recommend splitting them first using our Split PDF tool.",
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! All our PDF tools work directly in your web browser. Simply upload your file, choose your options, and download the result. Works on Windows, Mac, Linux, iOS, and Android.",
    },
    {
      question: "How many files can I process at once?",
      answer: "Free users can process up to 5 files at a time without registration. For unlimited file processing, simply create a free account. This helps us maintain fast service for everyone.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about our PDF tools
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
