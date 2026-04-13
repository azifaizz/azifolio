import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
};

const SectionShell = ({ children, className = "", delay }: SectionShellProps) => {
  return (
    <section
      className={`rounded-2xl p-8 glass-card animate-fade-in-up ${className}`.trim()}
      style={delay ? { animationDelay: delay } : undefined}
    >
      {children}
    </section>
  );
};

export default SectionShell;
