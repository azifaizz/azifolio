import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogPost from "../pages/BlogPost.tsx";

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const blogs = [
    {
      title: "Getting Started with React Server Components",
      excerpt:
        "Explore the future of React with Server Components and learn how they can revolutionize your application architecture and performance.",
      date: "2024-03-15",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: ["React", "Web Development"],
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Best practices and architectural patterns for creating robust, scalable RESTful APIs that can handle millions of requests.",
      date: "2024-03-10",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
      tags: ["Node.js", "Backend"],
    },
    {
      title: "Modern CSS Techniques for 2024",
      excerpt:
        "Discover the latest CSS features including container queries, cascade layers, and advanced grid techniques that will transform your styling workflow.",
      date: "2024-03-05",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&h=400&fit=crop",
      tags: ["CSS", "Design"],
    },
    {
      title: "TypeScript Tips for Better Code Quality",
      excerpt:
        "Advanced TypeScript patterns and techniques to write more maintainable, type-safe code that scales with your project.",
      date: "2024-02-28",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      tags: ["TypeScript", "Best Practices"],
    },
  ];

  return (
    <section id="blogs" ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Latest <span className="gradient-text">Blog Posts</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`scroll-reveal ${
                isVisible ? "revealed" : ""
              } glass-card rounded-2xl overflow-hidden hover:glow-primary transition-all duration-300 hover:scale-105`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-card px-3 py-1 text-xs rounded-full text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="" // change this to your actual blog URL
                  className="w-full inline-flex items-center justify-center bg-gradient-primary hover:glow-primary group px-4 py-2 rounded-lg text-white font-semibold transition"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
