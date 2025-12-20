import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PDFTool } from "@/data/pdfTools";

interface ToolCardProps {
  tool: PDFTool;
  index?: number;
}

const ToolCard = ({ tool, index = 0 }: ToolCardProps) => {
  const Icon = tool.icon;

  return (
    <Link
      to={`/tool/${tool.slug}`}
      className="tool-card group animate-slide-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Popular Badge */}
      {tool.popular && (
        <div className="absolute -top-2 -right-2 px-2 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
          Popular
        </div>
      )}

      {/* Icon */}
      <div className={`tool-card-icon bg-gradient-to-br ${tool.color}`}>
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {tool.description}
      </p>

      {/* Arrow */}
      <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Use Tool
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default ToolCard;
