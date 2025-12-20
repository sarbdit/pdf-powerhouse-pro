import {
  FileText,
  Scissors,
  Archive,
  Edit3,
  PenTool,
  RefreshCw,
  Image,
  Images,
  ImageDown,
  Lock,
  Unlock,
  RotateCw,
  Trash2,
  FileOutput,
  Shuffle,
  Globe,
  Briefcase,
  Camera,
  ScanText,
  Droplets,
  Hash,
  Layers,
  GitCompare,
  Zap,
  MessageSquare,
  EyeOff,
  Receipt,
  FilePlus,
  FileType,
  ImagePlus,
  LucideIcon,
} from "lucide-react";

export interface PDFTool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  slug: string;
  color: string;
  popular?: boolean;
}

export const pdfToolCategories = [
  { id: "organize", name: "Organize PDF", icon: Layers },
  { id: "convert", name: "Convert PDF", icon: RefreshCw },
  { id: "edit", name: "Edit PDF", icon: Edit3 },
  { id: "security", name: "PDF Security", icon: Lock },
  { id: "optimize", name: "Optimize PDF", icon: Zap },
] as const;

export const pdfTools: PDFTool[] = [
  // Organize PDF
  {
    id: "merge-pdf",
    name: "Merge PDF",
    description: "Combine multiple PDF files into one document",
    icon: FileText,
    category: "organize",
    slug: "merge-pdf",
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    id: "split-pdf",
    name: "Split PDF",
    description: "Separate PDF pages into multiple files",
    icon: Scissors,
    category: "organize",
    slug: "split-pdf",
    color: "from-purple-500 to-purple-600",
    popular: true,
  },
  {
    id: "rotate-pdf",
    name: "Rotate PDF Pages",
    description: "Rotate PDF pages to any orientation",
    icon: RotateCw,
    category: "organize",
    slug: "rotate-pdf",
    color: "from-teal-500 to-teal-600",
  },
  {
    id: "remove-pages",
    name: "Remove PDF Pages",
    description: "Delete unwanted pages from your PDF",
    icon: Trash2,
    category: "organize",
    slug: "remove-pages",
    color: "from-red-500 to-red-600",
  },
  {
    id: "extract-pages",
    name: "Extract PDF Pages",
    description: "Extract specific pages from a PDF",
    icon: FileOutput,
    category: "organize",
    slug: "extract-pages",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "rearrange-pages",
    name: "Rearrange PDF Pages",
    description: "Reorder pages in your PDF document",
    icon: Shuffle,
    category: "organize",
    slug: "rearrange-pages",
    color: "from-cyan-500 to-cyan-600",
  },

  // Convert PDF
  {
    id: "images-to-pdf",
    name: "Images to PDF",
    description: "Convert JPG, PNG images to PDF",
    icon: ImagePlus,
    category: "convert",
    slug: "images-to-pdf",
    color: "from-green-500 to-green-600",
    popular: true,
  },
  {
    id: "pdf-to-images",
    name: "PDF to Images",
    description: "Convert PDF pages to JPG or PNG images",
    icon: Images,
    category: "convert",
    slug: "pdf-to-images",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF to editable Word document",
    icon: FileType,
    category: "convert",
    slug: "pdf-to-word",
    color: "from-blue-600 to-blue-700",
    popular: true,
  },
  {
    id: "webpage-to-pdf",
    name: "Webpage to PDF",
    description: "Convert any webpage to PDF format",
    icon: Globe,
    category: "convert",
    slug: "webpage-to-pdf",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: "create-pdf",
    name: "Create PDF",
    description: "Create PDF from text and content",
    icon: FilePlus,
    category: "convert",
    slug: "create-pdf",
    color: "from-violet-500 to-violet-600",
  },

  // Edit PDF
  {
    id: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce PDF file size without losing quality",
    icon: Archive,
    category: "edit",
    slug: "compress-pdf",
    color: "from-amber-500 to-amber-600",
    popular: true,
  },
  {
    id: "edit-pdf",
    name: "Edit PDF",
    description: "Edit text, images and content in PDF",
    icon: Edit3,
    category: "edit",
    slug: "edit-pdf",
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "sign-pdf",
    name: "Sign PDF",
    description: "Add your signature to PDF documents",
    icon: PenTool,
    category: "edit",
    slug: "sign-pdf",
    color: "from-rose-500 to-rose-600",
  },
  {
    id: "add-watermark",
    name: "Add Watermark",
    description: "Add text or image watermark to PDF",
    icon: Droplets,
    category: "edit",
    slug: "add-watermark",
    color: "from-sky-500 to-sky-600",
  },
  {
    id: "add-page-numbers",
    name: "Add Page Numbers",
    description: "Insert page numbers to your PDF",
    icon: Hash,
    category: "edit",
    slug: "add-page-numbers",
    color: "from-slate-500 to-slate-600",
  },
  {
    id: "annotate-pdf",
    name: "Annotate PDF",
    description: "Add comments and annotations to PDF",
    icon: MessageSquare,
    category: "edit",
    slug: "annotate-pdf",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "pdf-overlay",
    name: "PDF Overlay",
    description: "Overlay one PDF on top of another",
    icon: Layers,
    category: "edit",
    slug: "pdf-overlay",
    color: "from-fuchsia-500 to-fuchsia-600",
  },

  // Security
  {
    id: "protect-pdf",
    name: "Protect PDF",
    description: "Add password protection to PDF",
    icon: Lock,
    category: "security",
    slug: "protect-pdf",
    color: "from-red-600 to-red-700",
  },
  {
    id: "unlock-pdf",
    name: "Unlock PDF",
    description: "Remove password from PDF files",
    icon: Unlock,
    category: "security",
    slug: "unlock-pdf",
    color: "from-green-600 to-green-700",
  },
  {
    id: "redact-pdf",
    name: "Redact PDF",
    description: "Permanently remove sensitive content",
    icon: EyeOff,
    category: "security",
    slug: "redact-pdf",
    color: "from-gray-600 to-gray-700",
  },

  // Optimize
  {
    id: "pdf-ocr",
    name: "PDF OCR",
    description: "Extract text from scanned PDFs",
    icon: ScanText,
    category: "optimize",
    slug: "pdf-ocr",
    color: "from-lime-500 to-lime-600",
  },
  {
    id: "web-optimize-pdf",
    name: "Web Optimize PDF",
    description: "Optimize PDF for fast web viewing",
    icon: Zap,
    category: "optimize",
    slug: "web-optimize-pdf",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "compare-pdfs",
    name: "Compare PDFs",
    description: "Compare two PDF files side by side",
    icon: GitCompare,
    category: "optimize",
    slug: "compare-pdfs",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "extract-images",
    name: "Extract PDF Images",
    description: "Extract all images from a PDF",
    icon: ImageDown,
    category: "optimize",
    slug: "extract-images",
    color: "from-teal-400 to-cyan-500",
  },

  // Special Tools
  {
    id: "job-application",
    name: "PDF Job Application",
    description: "Create professional job application PDF",
    icon: Briefcase,
    category: "convert",
    slug: "job-application",
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "camera-to-pdf",
    name: "Camera to PDF",
    description: "Capture and convert photos to PDF",
    icon: Camera,
    category: "convert",
    slug: "camera-to-pdf",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "electronic-invoice",
    name: "Electronic Invoice",
    description: "Create electronic invoice PDF",
    icon: Receipt,
    category: "convert",
    slug: "electronic-invoice",
    color: "from-emerald-600 to-teal-600",
  },
];

export const getToolsByCategory = (categoryId: string) => {
  return pdfTools.filter((tool) => tool.category === categoryId);
};

export const getPopularTools = () => {
  return pdfTools.filter((tool) => tool.popular);
};

export const getToolBySlug = (slug: string) => {
  return pdfTools.find((tool) => tool.slug === slug);
};
