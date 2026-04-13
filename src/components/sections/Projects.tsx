import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="section-shell min-h-screen">
      <div className="content-shell">
        <div className="mb-12 sm:mb-16">
          <SectionHeading title="Featured" accent="Projects" isVisible={isVisible} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`interactive-card glass-card overflow-hidden rounded-2xl hover:glow-primary ${
                isVisible ? "scroll-reveal revealed" : "scroll-reveal"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs text-primary glass-card"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="flex-1 bg-gradient-primary hover:glow-primary"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(project.github, "_blank", "noopener,noreferrer")
                    }
                    className="border-primary/30 glass-card hover:glow-primary"
                  >
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
