import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import { blogPosts } from "@/data/blogs";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Blogs = () => {
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="blogs" ref={ref} className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionHeading title="Latest" accent="Blog Posts" isVisible={isVisible} />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((blog, index) => (
            <div
              key={blog.id}
              className={`overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:glow-primary glass-card ${
                isVisible ? "scroll-reveal revealed" : "scroll-reveal"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{blog.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold">{blog.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{blog.excerpt}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs text-secondary glass-card"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${blog.id}`}
                  className="group inline-flex w-full items-center justify-center rounded-lg bg-gradient-primary px-4 py-2 font-semibold text-white transition hover:glow-primary"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
