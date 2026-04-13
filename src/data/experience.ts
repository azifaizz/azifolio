import { Briefcase, Calendar } from "lucide-react";
import type { ExperienceItem } from "@/data/portfolio-types";

export const experienceItems: readonly ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "White Track Technologies, Trivandrum",
    duration: "Sep 2025 - Present",
    description:
      "Developing and maintaining web applications using HTML, CSS, JavaScript, Java, and database workflows while improving reliability and user experience.",
    achievements: [
      "Optimized web performance",
      "Improved database efficiency",
      "Supported cleaner and more maintainable code",
    ],
    icon: Briefcase,
    metaIcon: Calendar,
  },
];
