import { Calendar, Code, Users } from "lucide-react";
import type { ProjectItem } from "@/data/projects";

type ProjectMetaProps = {
  project: ProjectItem;
};

const ProjectMeta = ({ project }: ProjectMetaProps) => {
  return (
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
};

export default ProjectMeta;
