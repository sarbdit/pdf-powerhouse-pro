import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ToolCard from "./ToolCard";
import { pdfToolCategories, getToolsByCategory, getPopularTools } from "@/data/pdfTools";

const ToolsGrid = () => {
  const popularTools = getPopularTools();

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Popular PDF Tools</h2>
          <p className="section-subtitle">
            Our most used tools to help you work with PDFs faster and easier
          </p>
        </div>

        {/* Popular Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {popularTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {pdfToolCategories.map((category) => {
            const categoryTools = getToolsByCategory(category.id);
            const CategoryIcon = category.icon;

            return (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {categoryTools.length} tools
                  </span>
                </div>

                {/* Category Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryTools.map((tool, index) => (
                    <ToolCard key={tool.id} tool={tool} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/tools"
            className="btn-primary inline-flex items-center"
          >
            View All Tools
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
