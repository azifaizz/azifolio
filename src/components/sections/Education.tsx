import SectionHeading from "@/components/shared/SectionHeading";
import { educationTimeline } from "@/data/education";
import type { TimelineItem } from "@/data/portfolio-types";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Education = () => {
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="education" ref={ref} className="section-shell">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <SectionHeading title="My" accent="Education" isVisible={isVisible} />
        </div>

        <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:ml-[35px] sm:before:ml-[47px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
          {educationTimeline.map((education, index) => (
            <EducationCard 
              key={`${education.title}-${education.meta}`} 
              education={education} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  education: TimelineItem;
  index: number;
  isVisible: boolean;
}

function EducationCard({ education, index, isVisible }: EducationCardProps) {
  const Icon = education.icon;

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
              <h3 className="text-xl sm:text-2xl font-bold leading-tight text-primary">{education.subtitle}</h3>
              <p className="text-foreground/90 font-medium mt-1 text-sm sm:text-base">{education.title}</p>
            </div>
            
            <div className="inline-flex items-center gap-2 self-start bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full text-primary w-fit">
              <span className="text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">{education.meta}</span>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed text-justify mb-2">
          {education.description}
        </p>
      </div>
    </div>
  );
};

export default Education;
