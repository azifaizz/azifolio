import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      id: "distraction-blocker",
      title: "Distraction Tracker for Work Environment",
      excerpt:
        "Stay focused like never before with a distraction blocker that yells at you when you stray.",
      date: "08-08-2025",
      readTime: "8 min read",
      image: "/images/blog1.png",
      tags: ["codetofun", "Web Development"],
      link: "/blog/distraction-blocker", // link to BlogPost page
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

                {/* Updated Link */}
                <a href={blog.link}>
                  <a
                    href={blog.link}
                    className="w-full inline-flex items-center justify-center bg-gradient-primary hover:glow-primary group px-4 py-2 rounded-lg text-white font-semibold transition"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
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
