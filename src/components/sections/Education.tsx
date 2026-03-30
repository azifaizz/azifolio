import SectionHeading from "@/components/shared/SectionHeading";
import { educationTimeline } from "@/data/portfolio-content";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Education = () => {
  const { ref, isVisible } = useSectionReveal<HTMLElement>();

  return (
    <section id="education" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <SectionHeading title="My" accent="Education" isVisible={isVisible} />
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary md:left-1/2" />

          <div className="space-y-8 md:space-y-12">
            {educationTimeline.map((education, index) => {
              const Icon = education.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${education.title}-${education.meta}`}
                  className={`relative flex flex-col items-start md:items-center ${
                    isVisible ? "scroll-reveal revealed" : "scroll-reveal"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary glow-primary md:block" />

                  <div
                    className={`w-full md:w-1/2 ${
                      isEven
                        ? "md:ml-auto md:pr-6 md:text-right"
                        : "md:mr-auto md:pl-6 md:text-left"
                    }`}
                  >
                    <div className="rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:glow-primary glass-card md:p-5">
                      <div
                        className={`flex items-start gap-3 md:gap-4 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="rounded-xl p-2 glow-primary glass-card md:p-3">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1 text-sm font-bold md:text-lg">
                            {education.title}
                          </h3>
                          <p className="mb-1 text-xs font-semibold text-primary md:mb-2 md:text-sm">
                            {education.subtitle}
                          </p>
                          <p className="mb-1 text-xs text-muted-foreground md:text-sm">
                            {education.meta}
                          </p>
                          <p className="text-xs text-foreground/80 md:text-sm">
                            {education.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
