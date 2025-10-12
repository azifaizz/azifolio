import { useEffect, useRef } from "react";
import {
  Code,
  Database,
  Layout,
  Palette,
  Users,
  Lightbulb,
  MessageSquare,
  Brain,
  FileCode,
  PencilRuler,
  BookPlus,
  Smile,
  Goal,
  Route,
  Timer,
  FileCog,
  Eclipse,
  Braces,
  BrainCircuit,
  FolderGit2,
  FolderGit,
  FileBox,
  Framer,
  Figma,
  Component,
  Brackets,
  Bug,
} from "lucide-react";

const Skills = () => {
  const hardRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const hardSkills = [
    { icon: FileCode, name: "HTML5" },
    { icon: Palette, name: "CSS" },
    { icon: FileCog, name: "Tailwind CSS" },
    { icon: Eclipse, name: "Boot Strap" },
    { icon: Database, name: "MySQL DataBase" },
    { icon: Code, name: "Java Script" },
    { icon: FileCode, name: "Java" },
    { icon: Braces, name: "Python" },
    { icon: BrainCircuit, name: "Machine Learning Basics" },
    { icon: FolderGit2, name: "Version Control & CLI" },
    { icon: Layout, name: "UI/UX Design" },
  ];

  const softSkills = [
    { icon: Users, name: "Team Collaboration" },
    { icon: Lightbulb, name: "Problem Solving" },
    { icon: MessageSquare, name: "Communication" },
    { icon: Smile, name: "Adaptability" },
    { icon: Timer, name: "Time Management" },
    { icon: Brain, name: "Creativity" },
    { icon: Route, name: "Leadership" },
    { icon: Goal, name: "Goal Orientation" },
    { icon: BookPlus, name: "Learning Mindset" },
  ];

  const tools = [
    { icon: Bug, name: "Visual Studio Code" },
    { icon: Brackets, name: "Jupyter Notebook" },
    { icon: Component, name: "PyCharm" },
    { icon: Bug, name: "Eclipse IDE" },
    { icon: FolderGit, name: "git" },
    { icon: FileBox, name: "Huggin face" },
    { icon: PencilRuler, name: "Adobe Photoshop" },
    { icon: Figma, name: "Figma" },
    { icon: Framer, name: "Framer" },
    { icon: Component, name: "Canva" },
  ];

  // Scroll animation
  useEffect(() => {
    const speed = 0.5;
    let hardScroll = 0;
    let softScroll = 0;
    let toolsScroll = 0;

    const animate = () => {
      const loop = (
        ref: HTMLDivElement | null,
        scroll: number,
        reverse = false
      ) => {
        if (!ref) return scroll;
        // True infinite: clone until scrollWidth > 2 * container width
        const scrollWidth = ref.scrollWidth / 2;
        scroll = reverse
          ? (scroll - speed + scrollWidth) % scrollWidth
          : (scroll + speed) % scrollWidth;
        ref.scrollLeft = scroll;
        return scroll;
      };

      hardScroll = loop(hardRef.current, hardScroll);
      softScroll = loop(softRef.current, softScroll, true);
      toolsScroll = loop(toolsRef.current, toolsScroll);

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
        key={skill.name + type + Math.random()} // ensure unique keys
        className="flex-shrink-0 glass-card p-6 rounded-2xl transition-all duration-300 w-48 sm:w-56 md:w-60 text-center mx-2"
      >
        <div
          className={`glass-card p-4 rounded-xl ${glowClass} inline-block mb-4`}
        >
          <Icon size={32} className={textClass} />
        </div>
        <h4 className="font-semibold">{skill.name}</h4>
      </div>
    );
  };

  const renderScroller = (
    skills: any[],
    type: "hard" | "soft" | "tools",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    // Duplicate items enough times to fill container and allow smooth infinite scroll
    const repeatCount = 6; // increase if needed for smaller arrays
    const duplicated = Array(repeatCount).fill(skills).flat();

    return (
      <div
        ref={ref}
        className="flex gap-6 overflow-hidden whitespace-nowrap px-4"
      >
        {duplicated.map((skill) => renderCard(skill, type))}
      </div>
    );
  };

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
