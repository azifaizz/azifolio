import SectionHeading from "@/components/shared/SectionHeading";
import { experienceItems } from "@/data/experience";
import type { ExperienceItem } from "@/data/portfolio-types";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { ChevronRight } from "lucide-react";

const Experience = () => {
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <SectionHeading title="Work" accent="Experience" isVisible={isVisible} />
        </div>

        <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:ml-[35px] sm:before:ml-[47px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {experienceItems.map((experience, index) => (
            <ExperienceCard 
              key={`${experience.role}-${experience.company}`} 
              experience={experience} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isVisible: boolean;
}

function ExperienceCard({ experience, index, isVisible }: ExperienceCardProps) {
  const Icon = experience.icon;
  const MetaIcon = experience.metaIcon;

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ${
        isVisible ? "scroll-reveal revealed" : "scroll-reveal"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline Icon */}
      <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[94px] sm:h-[94px] rounded-full border-4 border-background bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-glow z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full glass-card flex items-center justify-center glow-primary transition-transform duration-500 group-hover:scale-110">
          <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
        </div>
      </div>

      {/* Card */}
      <div className="w-[calc(100%-80px)] sm:w-[calc(100%-110px)] md:w-[calc(50%-47px)] p-5 sm:p-7 rounded-2xl glass-card hover:glow-primary transition-all duration-300 hover:-translate-y-1 border border-white/5">
        <div className="flex flex-col gap-2 sm:gap-3 mb-4">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">{experience.role}</h3>
              <p className="text-primary font-semibold mt-1">{experience.company}</p>
            </div>
            
            <div className="inline-flex items-center gap-2 self-start bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full text-primary w-fit">
              <MetaIcon size={14} className="shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">{experience.duration}</span>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed text-justify mb-5">
          {experience.description}
        </p>

        <div className="bg-black/20 rounded-xl p-4 sm:p-5 border border-white/5">
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Key Achievements
          </p>
          <ul className="space-y-2.5">
            {experience.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2 sm:gap-3 group/item">
                <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-primary/50 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-primary" />
                <span className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
