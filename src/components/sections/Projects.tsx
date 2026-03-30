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
    <section id="projects" ref={ref} className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionHeading title="Featured" accent="Projects" isVisible={isVisible} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:glow-primary glass-card ${
                isVisible ? "scroll-reveal revealed" : "scroll-reveal"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-justify text-muted-foreground">
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

                <div className="flex gap-3">
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
