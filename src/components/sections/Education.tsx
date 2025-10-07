import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      icon: GraduationCap,
      school: "B. S. Abdur Rahman Crescent Institute of Science and Technology",
      degree: "Master of Computer Applications",
      year: "2023 - 2025",
      description: "Specialized in Computer Applications",
    },
    {
      icon: Award,
      school: "Scott Christian College",
      degree: "Bachelor of Computer Science",
      year: "2020 - 2023",
      description: "Specialized in Computer Applications",
    },
    {
      icon: BookOpen,
      school: "St.Mary Goretty Higher Secondary School",
      degree: "Higher Secondary Certificate",
      year: "2018 - 2020",
      description: "Completed My 11th and 12th Grade",
    },
    {
      icon: School,
      school: "Islamic Model Matriculation Higher Secondary School",
      degree: "Secondary School Leaving Certificate",
      year: "2017",
      description: "Completed my 10th Grade",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`scroll-reveal relative flex flex-col md:flex-row items-start md:items-center ${
                    isVisible ? "revealed" : ""
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Dot (hidden on mobile) */}
                  <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 glow-primary top-6"></div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven
                        ? "md:pr-6 md:text-right md:ml-auto"
                        : "md:pl-6 md:mr-auto md:text-left"
                    }`}
                  >
                    <div className="glass-card p-4 md:p-5 rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-105">
                      <div
                        className={`flex items-start gap-3 md:gap-4 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="glass-card p-2 md:p-3 rounded-xl glow-primary">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm md:text-lg font-bold mb-1">
                            {edu.school}
                          </h3>
                          <p className="text-primary font-semibold mb-1 md:mb-2 text-xs md:text-sm">
                            {edu.degree}
                          </p>
                          <p className="text-xs md:text-sm text-muted-foreground mb-1">
                            {edu.year}
                          </p>
                          <p className="text-xs md:text-sm text-foreground/80">
                            {edu.description}
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
