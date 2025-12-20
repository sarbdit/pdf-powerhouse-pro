import { useParams, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { ChevronRight, Download, RefreshCw, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FileUploadZone from "@/components/tools/FileUploadZone";
import FileList from "@/components/tools/FileList";
import ProcessingStatus from "@/components/tools/ProcessingStatus";
import { getToolBySlug, pdfTools } from "@/data/pdfTools";
import ToolCard from "@/components/home/ToolCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = getToolBySlug(slug || "");

  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleFilesSelected = useCallback((newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
    setStatus("idle");
    setResultUrl(null);
  }, []);

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleReorder = useCallback((fromIndex: number, toIndex: number) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      const [removed] = newFiles.splice(fromIndex, 1);
      newFiles.splice(toIndex, 0, removed);
      return newFiles;
    });
  }, []);

  const handleProcess = useCallback(async () => {
    if (files.length === 0) return;

    setStatus("processing");
    setProgress(0);

    // Simulate processing
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setProgress(i);
    }

    // Simulate success
    setStatus("success");
    setResultUrl("#download");
  }, [files]);

  const handleReset = useCallback(() => {
    setFiles([]);
    setStatus("idle");
    setProgress(0);
    setResultUrl(null);
  }, []);

  if (!tool) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The tool you're looking for doesn't exist.
          </p>
          <Link to="/tools" className="btn-primary">
            View All Tools
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = tool.icon;
  const relatedTools = pdfTools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  const toolFaqs = [
    {
      question: `How do I use ${tool.name}?`,
      answer: `Simply upload your PDF file(s) using the upload area above, configure any options if needed, and click the process button. Your file will be ready for download in seconds.`,
    },
    {
      question: `Is ${tool.name} free to use?`,
      answer: `Yes, this tool is completely free for basic usage. You can process up to 5 files at a time without registration. For unlimited processing, create a free account.`,
    },
    {
      question: "Are my files secure?",
      answer: "Absolutely! All files are encrypted during transfer and automatically deleted after processing. We never store or share your documents.",
    },
    {
      question: "What file formats are supported?",
      answer: "This tool supports PDF files. For image-to-PDF conversion tools, we support JPG, PNG, GIF, and WEBP formats.",
    },
    {
      question: "Is there a file size limit?",
      answer: "Free users can upload files up to 100MB. For larger files, consider using our Compress PDF tool first or creating a free account for higher limits.",
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
              Tools
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{tool.name}</span>
          </nav>
        </div>
      </div>

      {/* Tool Header */}
      <section className="py-8 lg:py-12 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mx-auto mb-6`}>
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {tool.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {tool.description}. Fast, free, and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="py-8 lg:py-12 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8" style={{ boxShadow: 'var(--shadow-lg)' }}>
              {/* Upload Zone */}
              <FileUploadZone
                onFilesSelected={handleFilesSelected}
                acceptedTypes={tool.category === "convert" && tool.slug.includes("image") ? ".jpg,.jpeg,.png,.gif,.webp" : ".pdf"}
                multiple={["merge-pdf", "images-to-pdf"].includes(tool.slug)}
                label={`Drop your ${tool.slug.includes("image") ? "images" : "PDF"} here or click to browse`}
              />

              {/* File List */}
              <FileList
                files={files}
                onRemove={handleRemoveFile}
                onReorder={handleReorder}
                showReorder={tool.slug === "merge-pdf" || tool.slug === "rearrange-pages"}
              />

              {/* Processing Status */}
              <ProcessingStatus status={status} progress={progress} />

              {/* Action Buttons */}
              {files.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {status === "success" && resultUrl ? (
                    <>
                      <a
                        href={resultUrl}
                        download
                        className="btn-primary flex-1 justify-center"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Result
                      </a>
                      <button
                        onClick={handleReset}
                        className="btn-secondary flex-1 justify-center"
                      >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Process Another
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleProcess}
                        disabled={status === "processing"}
                        className="btn-primary flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === "processing" ? (
                          <>Processing...</>
                        ) : (
                          <>{tool.name}</>
                        )}
                      </button>
                      <button
                        onClick={handleReset}
                        className="btn-secondary"
                      >
                        Clear All
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">How it works</p>
                <p>
                  Upload your file(s), configure any options, and click the process button. 
                  Your result will be ready for download in seconds. All files are encrypted 
                  and automatically deleted after processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              About {tool.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {tool.name} is a powerful online tool that allows you to {tool.description.toLowerCase()} 
              quickly and easily. Whether you're working with documents for business, education, 
              or personal use, our tool makes PDF manipulation simple and accessible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our cloud-based solution works directly in your browser, meaning you don't need to 
              install any software. Simply upload your files, choose your options, and download 
              the result. It's that easy!
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>100% free to use with no hidden costs</li>
              <li>Works on any device - Windows, Mac, Linux, iOS, Android</li>
              <li>No software installation required</li>
              <li>Secure processing with automatic file deletion</li>
              <li>Fast processing times even for large files</li>
              <li>High-quality output that maintains document integrity</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">Step-by-Step Guide</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
              <li>Click the upload area or drag and drop your PDF file(s)</li>
              <li>Configure any available options for your specific needs</li>
              <li>Click the "{tool.name}" button to start processing</li>
              <li>Wait for the processing to complete (usually just seconds)</li>
              <li>Download your processed file</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {toolFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary py-4 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="py-12 lg:py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Related Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTools.map((relatedTool, index) => (
                <ToolCard key={relatedTool.id} tool={relatedTool} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ToolPage;
