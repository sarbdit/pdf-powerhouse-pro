import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText, ChevronDown } from "lucide-react";
import { pdfToolCategories, getToolsByCategory } from "@/data/pdfTools";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Tools", path: "/tools" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header-sticky">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center transition-transform group-hover:scale-105">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">
                Top PDF Tools
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                TechhomeBD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Tools Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("tools")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-foreground hover:bg-secondary transition-colors">
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "tools" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "tools" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card rounded-xl border border-border shadow-xl p-2 animate-fade-in">
                  {pdfToolCategories.map((category) => {
                    const tools = getToolsByCategory(category.id);
                    const Icon = category.icon;
                    return (
                      <div key={category.id} className="group">
                        <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground">
                          <Icon className="w-4 h-4 text-primary" />
                          {category.name}
                        </div>
                        <div className="ml-6 mb-2">
                          {tools.slice(0, 3).map((tool) => (
                            <Link
                              key={tool.id}
                              to={`/tool/${tool.slug}`}
                              className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                            >
                              {tool.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  <Link
                    to="/tools"
                    className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-md transition-colors mt-2 border-t border-border pt-3"
                  >
                    View All Tools →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/tools"
              className="btn-primary text-sm"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/tools"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary text-center mt-4"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
