import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      school: "St.Mary Goretty Hr Sec School",
      degree: "Higher Secondary Certificate",
      year: "2018 - 2020",
      description: "Completed My 11th and 12th Grade",
    },
    {
      icon: School,
      school: "Islamic Model Matric Hr Sec School",
      degree: "Secondary School Leaving Certificate",
      year: "2017",
      description: "Completed my 10th Grade",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="relative flex flex-col items-start md:items-center">
          {/* Timeline line container */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-transparent z-0">
            {/* Animated line from bottom to top */}
            <div
              className={`bg-primary w-full origin-bottom scale-y-0 transition-transform duration-[2000ms] ease-out ${
                isVisible ? "scale-y-100" : ""
              }`}
              style={{ transformOrigin: "bottom" }}
            ></div>
          </div>

          <div className="space-y-12 w-full">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full z-10 glow-primary"></div>

                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="glass-card p-6 rounded-2xl hover:glow-primary transition-all duration-300 hover:scale-105 z-10 relative">
                      <div
                        className={`flex items-start gap-4 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="glass-card p-3 rounded-xl glow-primary">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">
                            {edu.school}
                          </h3>
                          <p className="text-primary font-semibold mb-2">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {edu.year}
                          </p>
                          <p className="text-sm text-foreground/80">
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
