import { Award, BookOpen, GraduationCap, School } from "lucide-react";
import type { TimelineItem } from "@/data/portfolio-types";

export const educationTimeline: readonly TimelineItem[] = [
  {
    icon: GraduationCap,
    title: "B. S. Abdur Rahman Crescent Institute of Science and Technology",
    subtitle: "Master of Computer Applications",
    meta: "2023 - 2025",
    description: "Specialized in computer applications.",
  },
  {
    icon: Award,
    title: "Scott Christian College",
    subtitle: "Bachelor of Computer Science",
    meta: "2020 - 2023",
    description:
      "Built a strong foundation in computer science and application development.",
  },
  {
    icon: BookOpen,
    title: "St. Mary Goretty Higher Secondary School",
    subtitle: "Higher Secondary Certificate",
    meta: "2018 - 2020",
    description: "Completed 11th and 12th grade with a focus on academic growth.",
  },
  {
    icon: School,
    title: "Islamic Model Matriculation Higher Secondary School",
    subtitle: "Secondary School Leaving Certificate",
    meta: "2017",
    description: "Completed 10th grade and built the foundation for later studies.",
  },
];
