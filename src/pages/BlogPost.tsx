import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BlogSectionBlock from "@/components/blog/BlogSectionBlock";
import { getBlogPostById } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const blogPost = getBlogPostById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!blogPost) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="glass-card max-w-lg rounded-3xl p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Blog Post Not Found</h1>
          <p className="mb-6 text-muted-foreground">
            The article you are looking for does not exist or has been moved.
          </p>
          <Button asChild className="bg-gradient-primary hover:glow-primary">
            <Link to="/">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <nav className="fixed right-8 top-8 z-50 hidden rounded-2xl p-4 lg:block glass-card">
        <div className="flex flex-col gap-2">
          {blogPost.navSections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="text-sm transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {section.label}
            </Button>
          ))}
        </div>
      </nav>

      <div className="relative h-[400px] w-full overflow-hidden md:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/20 via-primary/10 to-background" />
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="h-full w-full object-cover"
        />
      </div>

      <header className="container relative z-20 mx-auto -mt-32 px-4 pb-12 text-center">
        <div className="glass-card rounded-3xl p-8">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{blogPost.dateLabel}</span>
            <span>{blogPost.readTime}</span>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl lg:text-8xl">
            {blogPost.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-medium text-foreground md:text-2xl">
            {blogPost.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {blogPost.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 pb-16">
        {blogPost.sections.map((section) => (
          <BlogSectionBlock key={section.id} section={section} />
        ))}

        <footer className="text-center animate-fade-in-up">
          <p className="mt-8 text-muted-foreground">{blogPost.footerLabel}</p>
        </footer>
      </main>
    </div>
  );
};

export default BlogPost;
