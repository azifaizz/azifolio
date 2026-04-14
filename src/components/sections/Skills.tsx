import SectionHeading from "@/components/shared/SectionHeading";
import { skillGroups } from "@/data/skills";
import type { SkillGroup } from "@/data/portfolio-types";

const accentGlowClass: Record<SkillGroup["key"], string> = {
  frontend: "glow-primary text-primary",
  backend: "glow-secondary text-secondary",
  databases: "glow-primary text-primary",
  tools: "glow-secondary text-secondary",
  soft: "glow-primary text-primary",
};

const Skills = () => {
  return (
    <section id="skills" className="section-shell-tight">
      <div className="content-shell">
        <div className="mb-10 sm:mb-12">
          <SectionHeading title="My" accent="Skills" />
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.key} className="glass-card rounded-3xl p-5 sm:p-6">
              <h3 className={`mb-5 text-xl font-bold sm:text-2xl ${group.accentClass}`}>
                {group.title}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={`${group.key}-${skill.name}`}
                      className="glass-card flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        className={`rounded-xl p-3 glass-card ${accentGlowClass[group.key]}`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
