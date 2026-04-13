import { useEffect, useRef } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { skillGroups } from "@/data/skills";
import type { SkillCategoryKey, SkillItem } from "@/data/portfolio-types";

const Skills = () => {
  const hardRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const speed = 1.5;
    const positions: Record<SkillCategoryKey, number> = {
      hard: 0,
      soft: 0,
      tools: 0,
    };
    let animationFrameId = 0;

    const animate = () => {
      (
        [
          ["hard", hardRef],
          ["soft", softRef],
          ["tools", toolsRef],
        ] as Array<
        [SkillCategoryKey, React.RefObject<HTMLDivElement>]
      >).forEach(([key, ref]) => {
        const element = ref.current;

        if (!element) {
          return;
        }

        const scrollWidth = element.scrollWidth / 2;
        const isReverse = key === "soft";
        positions[key] = isReverse
          ? (positions[key] - speed + scrollWidth) % scrollWidth
          : (positions[key] + speed) % scrollWidth;
        element.scrollLeft = positions[key];
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const renderCard = (
    skill: SkillItem,
    category: SkillCategoryKey,
    key: string,
  ) => {
    const Icon = skill.icon;
    const accentClass = category === "soft" ? "text-secondary" : "text-primary";
    const glowClass = category === "soft" ? "glow-secondary" : "glow-primary";

    return (
      <div
        key={key}
        className="mx-2 w-48 flex-shrink-0 rounded-2xl p-6 text-center transition-all duration-300 glass-card sm:w-56 md:w-60"
      >
        <div className={`mb-4 inline-block rounded-xl p-4 glass-card ${glowClass}`}>
          <Icon size={32} className={accentClass} />
        </div>
        <h4 className="font-semibold">{skill.name}</h4>
      </div>
    );
  };

  const renderScroller = (items: SkillItem[], category: SkillCategoryKey) => {
    const duplicated = Array.from({ length: 6 }, (_, groupIndex) =>
      items.map((skill) => ({
        ...skill,
        key: `${category}-${skill.name}-${groupIndex}`,
      })),
    ).flat();

    return (
      <div
        ref={
          category === "hard" ? hardRef : category === "soft" ? softRef : toolsRef
        }
        className="flex gap-6 overflow-hidden whitespace-nowrap px-4"
      >
        {duplicated.map((skill) => renderCard(skill, category, skill.key))}
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen px-0 py-20">
      <div className="mx-auto max-w-full px-4">
        <div className="mb-16">
          <SectionHeading title="My" accent="Skills" />
        </div>

        {skillGroups.map((group) => (
          <div key={group.key} className="mb-12 last:mb-0">
            <h3 className={`mb-6 px-4 text-2xl font-bold ${group.accentClass}`}>
              {group.title}
            </h3>
            {renderScroller(group.items, group.key)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
