import { Briefcase, Calendar } from "lucide-react";
import type { ExperienceItem } from "@/data/portfolio-types";

export const experienceItems: readonly ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Flip Flex",
    duration: "June 2024 - Present",
    description:
      "Working as a full stack developer, building and maintaining robust applications using a modern and diverse technology stack.",
    achievements: [
      "Mastered frontend development by building dynamic, responsive user interfaces with React and TypeScript.",
      "Developed and optimized scalable backend services and APIs utilizing Node.js and Spring Boot.",
      "Successfully integrated complex full-stack features, bridging JavaScript/TypeScript ecosystems with Java enterprise backends.",
    ],
    icon: Briefcase,
    metaIcon: Calendar,
  },
  {
    role: "Full Stack Developer Intern",
    company: "White Track Technologies, Trivandrum",
    duration: "Sep 2023 - May 28, 2024",
    description:
      "Developing and maintaining web applications using HTML, CSS, JavaScript, Java, and database workflows while improving reliability and user experience.",
    achievements: [
      "Optimized frontend web performance by minimizing render-blocking resources and refactoring core components, leading to significantly faster page load times.",
      "Improved database efficiency and reduced query latency by implementing optimized SQL queries and indexing strategies within enterprise workflows.",
      "Ensured a highly maintainable and scalable codebase by adhering to strict software development best practices and engaging in collaborative code reviews.",
    ],
    icon: Briefcase,
    metaIcon: Calendar,
  },
];
