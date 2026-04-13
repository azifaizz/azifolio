import type { ReactNode } from "react";
import SectionShell from "@/components/shared/SectionShell";

type ProjectPanelProps = {
  title: string;
  children: ReactNode;
  delay?: string;
};

const ProjectPanel = ({ title, children, delay }: ProjectPanelProps) => {
  return (
    <SectionShell className="mb-8" delay={delay}>
      <h2 className="mb-6 text-2xl font-bold gradient-text">{title}</h2>
      {children}
    </SectionShell>
  );
};

export default ProjectPanel;
