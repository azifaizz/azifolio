import SectionHeading from "@/components/shared/SectionHeading";
import { skillGroups } from "@/data/skills";
import type { SkillGroup } from "@/data/portfolio-types";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const groupStyles: Record<
  SkillGroup["key"],
  {
    accent: string;
    text: string;
    gradient: string;
    hoverBorder: string;
  }
> = {
  frontend: {
    accent: "bg-primary",
    text: "text-primary",
    gradient: "from-primary/20",
    hoverBorder: "hover:border-primary/30",
  },
  backend: {
    accent: "bg-secondary",
    text: "text-secondary",
    gradient: "from-secondary/20",
    hoverBorder: "hover:border-secondary/30",
  },
  databases: {
    accent: "bg-primary",
    text: "text-primary",
    gradient: "from-primary/20",
    hoverBorder: "hover:border-primary/30",
  },
  tools: {
    accent: "bg-secondary",
    text: "text-secondary",
    gradient: "from-secondary/20",
    hoverBorder: "hover:border-secondary/30",
  },
  soft: {
    accent: "bg-primary",
    text: "text-primary",
    gradient: "from-primary/20",
    hoverBorder: "hover:border-primary/30",
  },
};

const Skills = () => {
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <SectionHeading title="My" accent="Skills" isVisible={isVisible} />
        </div>

        <div className="space-y-8">
          {skillGroups.map((group, groupIndex) => {
            const styles = groupStyles[group.key];

            return (
              <div
                key={group.key}
                className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-8 glass-card border border-white/5 transition-all duration-500 hover:border-white/10 group/box ${
                  isVisible ? "scroll-reveal revealed" : "scroll-reveal"
                }`}
                style={{ transitionDelay: `${groupIndex * 150}ms` }}
              >
                {/* Background Glow */}
                <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-bl ${styles.gradient} to-transparent blur-[80px] opacity-0 transition-opacity duration-700 group-hover/box:opacity-60 pointer-events-none`} />

                <div className="mb-8 flex items-center gap-4">
                  <div className={`h-10 w-1.5 rounded-full ${styles.accent} shadow-glow`} />
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.items.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={`${group.key}-${skill.name}`}
                        className={`group/skill relative flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/5 bg-black/20 p-3 sm:p-4 transition-all duration-500 hover:-translate-y-1 ${styles.hoverBorder} hover:bg-white/5`}
                        style={{ transitionDelay: `${(groupIndex * 100) + (skillIndex * 50)}ms` }}
                      >
                        <div className={`relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 glass-card transition-transform duration-500 group-hover/skill:scale-110 group-hover/skill:-rotate-3`}>
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${styles.text}`} />
                        </div>
                        <h4 className="min-w-0 flex-1 break-words text-xs sm:text-sm md:text-base font-semibold text-foreground/80 transition-colors duration-300 group-hover/skill:text-foreground leading-tight">
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
