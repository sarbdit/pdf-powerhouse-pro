import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Compress PDF Files Without Losing Quality",
    excerpt: "Learn the best techniques to reduce PDF file size while maintaining document quality. Perfect for email attachments and web uploads.",
    author: "TechhomeBD Team",
    date: "Dec 15, 2024",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
    slug: "compress-pdf-without-losing-quality",
    featured: true,
  },
  {
    id: "2",
    title: "Top 10 PDF Tools Every Professional Needs",
    excerpt: "Discover the essential PDF tools that can boost your productivity and streamline your document workflow.",
    author: "TechhomeBD Team",
    date: "Dec 12, 2024",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    slug: "top-pdf-tools-professionals",
  },
  {
    id: "3",
    title: "How to Merge Multiple PDFs Into One Document",
    excerpt: "Step-by-step guide on combining multiple PDF files into a single document using our free online tool.",
    author: "TechhomeBD Team",
    date: "Dec 10, 2024",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=400&fit=crop",
    slug: "merge-multiple-pdfs",
  },
  {
    id: "4",
    title: "PDF Security Best Practices for 2024",
    excerpt: "Protect your sensitive documents with these essential PDF security tips and best practices.",
    author: "TechhomeBD Team",
    date: "Dec 8, 2024",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    slug: "pdf-security-best-practices",
  },
  {
    id: "5",
    title: "Convert Images to PDF: A Complete Guide",
    excerpt: "Everything you need to know about converting JPG, PNG, and other image formats to PDF documents.",
    author: "TechhomeBD Team",
    date: "Dec 5, 2024",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop",
    slug: "convert-images-to-pdf-guide",
  },
  {
    id: "6",
    title: "PDF vs Word: When to Use Each Format",
    excerpt: "Understanding the differences between PDF and Word documents and when to use each format.",
    author: "TechhomeBD Team",
    date: "Dec 2, 2024",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=400&fit=crop",
    slug: "pdf-vs-word-comparison",
  },
];

const categories = ["All", "Tutorials", "Guides", "Security", "News"];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Blog & Resources
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Tips, tutorials, and guides to help you get the most out of PDF tools
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container-custom">
          {/* Featured Post */}
          {featuredPost && activeCategory === "All" && !searchQuery && (
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="block mb-12 group"
            >
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full w-fit mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No articles found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {(activeCategory === "All" && !searchQuery ? regularPosts : filteredPosts).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read more
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
