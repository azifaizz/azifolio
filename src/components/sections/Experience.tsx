import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      role: "Full Stack Developer(Intern)",
      company: "White Track Technologies,Trivandrum",
      duration: "Sep 2025 - Present",
      description:
        "Developing and maintaining web applications by writing HTML, CSS, JavaScript and Java, managing databases, and ensuring smooth functionality and user experience.",
      achievements: [
        "Optimized Web Performance",
        "Database Efficiency",
        "Code Quality & Maintainability",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`scroll-reveal ${
                isVisible ? "revealed" : ""
              } glass-card p-8 rounded-2xl hover:glow-primary transition-all duration-300`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="glass-card p-4 rounded-xl glow-primary">
                  <Briefcase size={32} className="text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-primary font-semibold mb-4">
                    {exp.company}
                  </p>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground">
                      Key Achievements:
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
