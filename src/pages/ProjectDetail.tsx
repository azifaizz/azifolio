import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Code,
  ExternalLink,
  Github,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectById, type ProjectItem } from "@/data/projects";
import { useNavigate, useParams } from "react-router-dom";

const ProjectPanel = ({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay?: string;
}) => (
  <section
    className="mb-8 rounded-2xl p-8 glass-card animate-fade-in-up"
    style={delay ? { animationDelay: delay } : undefined}
  >
    <h2 className="mb-6 text-2xl font-bold gradient-text">{title}</h2>
    {children}
  </section>
);

const ProjectMeta = ({ project }: { project: ProjectItem }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <div className="flex items-center gap-2">
      <Calendar size={20} className="text-primary" />
      <span className="text-sm">{project.date}</span>
    </div>
    <div className="flex items-center gap-2">
      <Users size={20} className="text-secondary" />
      <span className="text-sm">{project.team}</span>
    </div>
    <div className="flex items-center gap-2">
      <Code size={20} className="text-accent" />
      <span className="text-sm">{project.role}</span>
    </div>
  </div>
);

const ProjectGallery = ({
  screenshots,
  onSelect,
}: {
  screenshots: string[];
  onSelect: (image: string) => void;
}) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {screenshots.map((screenshot, index) => (
      <button
        key={`${screenshot}-${index}`}
        type="button"
        className="cursor-pointer overflow-hidden rounded-2xl transition-all hover:scale-105 glass-card hover:glow-primary"
        onClick={() => onSelect(screenshot)}
      >
        <img
          src={screenshot}
          alt={`Project screenshot ${index + 1}`}
          className="h-64 w-full object-cover"
        />
      </button>
    ))}
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="glass-card rounded-3xl p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-gradient-primary">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-8 border-primary/30 glass-card hover:glow-primary"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Button>

        <div className="mb-8 overflow-hidden rounded-2xl glass-card animate-fade-in-up">
          <img
            src={project.image}
            alt={project.title}
            className="h-96 w-full object-cover"
          />
        </div>

        <section
          className="mb-8 rounded-2xl p-8 glass-card animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="mb-6 text-xl text-justify text-muted-foreground">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-4 py-2 text-sm text-primary glass-card"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <ProjectMeta project={project} />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-gradient-primary hover:glow-primary">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-primary/30 glass-card hover:glow-primary"
              onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
            >
              <Github size={18} className="mr-2" />
              View Code
            </Button>
          </div>
        </section>

        <ProjectPanel title="About the Project" delay="200ms">
          <p className="leading-relaxed text-foreground/80 text-justify">
            {project.fullDescription}
          </p>
        </ProjectPanel>

        <ProjectPanel title="Key Features" delay="300ms">
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-1 text-primary">-</span>
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </ProjectPanel>

        <ProjectPanel title="Technologies Used" delay="400ms">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl p-4 transition-all glass-card hover:glow-primary"
              >
                <h3 className="mb-1 font-bold text-primary">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </ProjectPanel>

        <section className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h2 className="mb-6 text-2xl font-bold gradient-text">
            Project Screenshots
          </h2>
          <ProjectGallery
            screenshots={project.screenshots}
            onSelect={setSelectedImage}
          />
        </section>
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl p-4">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 rounded-full bg-white/20 p-2 transition hover:bg-white/40"
              aria-label="Close image preview"
            >
              <X size={24} className="text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Selected project screenshot"
              className="max-h-[90vh] w-full rounded-lg object-contain shadow-lg"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetail;
