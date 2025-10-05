import { useEffect, useRef } from "react";
import {
  Code,
  Database,
  Layout,
  Server,
  Palette,
  Users,
  Lightbulb,
  MessageSquare,
  Brain,
} from "lucide-react";

const Skills = () => {
  const hardRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const hardSkills = [
    { icon: Code, name: "React & Next.js" },
    { icon: Server, name: "Node.js & Express" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Layout, name: "UI/UX Design" },
    { icon: Palette, name: "Tailwind & CSS" },
  ];

  const softSkills = [
    { icon: Users, name: "Team Collaboration" },
    { icon: Lightbulb, name: "Problem Solving" },
    { icon: MessageSquare, name: "Communication" },
    { icon: Code, name: "Adaptability" },
    { icon: Brain, name: "Time Management" },
    { icon: Brain, name: "Creativity" },
    { icon: Brain, name: "Leadership" },
  ];

  const tools = [
    { icon: Palette, name: "Adobe Photoshop" },
    { icon: Layout, name: "Figma" },
    { icon: Server, name: "Framer" },
    { icon: Code, name: "Canva" },
  ];

  useEffect(() => {
    const hardEl = hardRef.current;
    const softEl = softRef.current;
    const toolsEl = toolsRef.current;

    const speed = 0.5;

    let hardScroll = 0;
    let softScroll = 0;
    let toolsScroll = 0;

    const animate = () => {
      if (hardEl) {
        hardScroll = (hardScroll + speed) % (hardEl.scrollWidth / 2);
        hardEl.scrollLeft = hardScroll;
      }

      if (softEl) {
        softScroll = (softScroll - speed + softEl.scrollWidth / 2) % (softEl.scrollWidth / 2);
        softEl.scrollLeft = softScroll;
      }

      if (toolsEl) {
        toolsScroll = (toolsScroll + speed) % (toolsEl.scrollWidth / 2);
        toolsEl.scrollLeft = toolsScroll;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const renderCard = (
    skill: { icon: any; name: string },
    type: "hard" | "soft" | "tools"
  ) => {
    const Icon = skill.icon;
    const glowClass =
      type === "hard"
        ? "glow-primary"
        : type === "soft"
        ? "glow-secondary"
        : "glow-primary";
    const textClass =
      type === "hard"
        ? "text-primary"
        : type === "soft"
        ? "text-secondary"
        : "text-primary";
    return (
      <div
        key={skill.name + type}
        className="flex-shrink-0 glass-card p-6 rounded-2xl transition-all duration-300 w-48 sm:w-56 md:w-60 text-center mx-2"
      >
        <div className={`glass-card p-4 rounded-xl ${glowClass} inline-block mb-4`}>
          <Icon size={32} className={textClass} />
        </div>
        <h4 className="font-semibold">{skill.name}</h4>
      </div>
    );
  };

  const renderScroller = (skills: any[], type: "hard" | "soft" | "tools", ref: any) => (
    <div ref={ref} className="flex gap-6 overflow-hidden whitespace-nowrap px-4">
      {[...skills, ...skills].map((skill) => renderCard(skill, type))}
    </div>
  );

  return (
    <section id="skills" className="min-h-screen py-20 px-0">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        {/* Hard Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary px-4">
            Technical Skills
          </h3>
          {renderScroller(hardSkills, "hard", hardRef)}
        </div>

        {/* Soft Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-secondary px-4">
            Soft Skills
          </h3>
          {renderScroller(softSkills, "soft", softRef)}
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-primary px-4">Tools</h3>
          {renderScroller(tools, "tools", toolsRef)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
