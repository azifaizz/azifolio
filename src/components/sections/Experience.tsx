import SectionHeading from "@/components/shared/SectionHeading";
import { experienceItems } from "@/data/experience";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Experience = () => {
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionHeading title="Work" accent="Experience" isVisible={isVisible} />
        </div>

        <div className="space-y-8">
          {experienceItems.map((experience, index) => {
            const Icon = experience.icon;
            const MetaIcon = experience.metaIcon;

            return (
              <div
                key={`${experience.role}-${experience.company}`}
                className={`rounded-2xl p-8 transition-all duration-300 hover:glow-primary glass-card ${
                  isVisible ? "scroll-reveal revealed" : "scroll-reveal"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="rounded-xl p-4 glow-primary glass-card">
                    <Icon size={32} className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold">{experience.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MetaIcon size={16} />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                    </div>

                    <p className="mb-4 font-semibold text-primary">
                      {experience.company}
                    </p>
                    <p className="mb-4 text-foreground/80">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">
                        Key Achievements:
                      </p>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2">
                            <span className="mt-1 text-primary">-</span>
                            <span className="text-sm text-foreground/80">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
