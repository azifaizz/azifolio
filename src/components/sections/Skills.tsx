import SectionHeading from "@/components/shared/SectionHeading";
import { skillGroups } from "@/data/skills";
import type { SkillGroup } from "@/data/portfolio-types";

const groupStyles: Record<
  SkillGroup["key"],
  {
    titleClass: string;
    iconClass: string;
    borderClass: string;
  }
> = {
  frontend: {
    titleClass: "text-primary",
    iconClass: "text-primary glow-primary",
    borderClass: "border-primary/15",
  },
  backend: {
    titleClass: "text-secondary",
    iconClass: "text-secondary glow-secondary",
    borderClass: "border-secondary/15",
  },
  databases: {
    titleClass: "text-primary",
    iconClass: "text-primary glow-primary",
    borderClass: "border-primary/15",
  },
  tools: {
    titleClass: "text-secondary",
    iconClass: "text-secondary glow-secondary",
    borderClass: "border-secondary/15",
  },
  soft: {
    titleClass: "text-primary",
    iconClass: "text-primary glow-primary",
    borderClass: "border-primary/15",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section-shell-tight">
      <div className="content-shell">
        <div className="mb-10 sm:mb-12">
          <SectionHeading title="My" accent="Skills" />
        </div>

        <div className="space-y-6">
          {skillGroups.map((group) => {
            const styles = groupStyles[group.key];

            return (
              <div
                key={group.key}
                className={`glass-card rounded-[1.75rem] border p-5 sm:p-6 ${styles.borderClass}`}
              >
                <div className="mb-5 border-b border-white/10 pb-4">
                  <h3 className={`text-xl font-bold sm:text-2xl ${styles.titleClass}`}>
                    {group.title}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={`${group.key}-${skill.name}`}
                        className="glass-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                      >
                        <div
                          className={`glass-card flex h-12 w-12 items-center justify-center rounded-2xl ${styles.iconClass}`}
                        >
                          <Icon size={22} />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground sm:text-base">
                          {skill.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
