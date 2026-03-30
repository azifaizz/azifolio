import {
  Award,
  BookOpen,
  BookPlus,
  Brain,
  BrainCircuit,
  Braces,
  Briefcase,
  Brackets,
  Bug,
  Calendar,
  Code,
  Component,
  Database,
  Eclipse,
  Figma,
  FileBox,
  FileCode,
  FileCog,
  FolderGit,
  FolderGit2,
  Framer,
  Github,
  Goal,
  GraduationCap,
  Instagram,
  Layout,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Palette,
  PencilRuler,
  Phone,
  Route,
  School,
  Smile,
  Timer,
  Twitter,
  Users,
  type LucideIcon,
} from "lucide-react";

export type TimelineItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  meta: string;
  description: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  icon: LucideIcon;
  metaIcon: LucideIcon;
};

export type GalleryItem = {
  url: string;
  title: string;
};

export type ContactLinkItem = {
  icon: LucideIcon;
  text: string;
  href: string;
};

export type SocialLinkItem = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export type SkillCategoryKey = "hard" | "soft" | "tools";

export type SkillItem = {
  icon: LucideIcon;
  name: string;
};

export type SkillGroup = {
  key: SkillCategoryKey;
  title: string;
  accentClass: string;
  items: SkillItem[];
};

export const educationTimeline: TimelineItem[] = [
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
    description: "Built a strong foundation in computer science and application development.",
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

export const certifications: CertificationItem[] = [
  {
    title:
      "Remaining Useful Life (RUL) Prediction for Batteries of Electric Vehicle",
    issuer: "St. Joseph's College (Arts & Science), Chennai",
    date: "26 March 2025",
    image: "/images/stjosephcert.jpeg",
    description:
      "Received a certificate of appreciation for presenting research on electric vehicle battery sustainability at ICGPS 2025, reflecting a strong interest in impactful ML applications.",
  },
  {
    title: "ChatGPT for Project Management - Leveraging AI for Success",
    issuer: "Vanderbilt University - Coursera",
    date: "8 March 2025",
    image: "/images/chatgpt.jpg",
    description:
      "Completed a specialization focused on using ChatGPT for planning, execution, tracking, and prompt design in project management workflows.",
  },
  {
    title: "Machine Learning Using Python",
    issuer: "Simplilearn",
    date: "6 March 2025",
    image: "/images/machinelearningcert.jpeg",
    description:
      "Built hands-on experience in preprocessing, model training, and evaluation using Python-based machine learning workflows.",
  },
  {
    title: "Python with Data Science",
    issuer: "Chek.InTek",
    date: "26 September 2022",
    image: "/images/py.jpg",
    description:
      "Completed a workshop covering Python and practical data science fundamentals during undergraduate study.",
  },
  {
    title: "Cyber Security Basics",
    issuer: "Skill Vertex",
    date: "December 2022",
    image: "/images/certificate3.jpg",
    description:
      "Finished cybersecurity training with a focus on security fundamentals, diligence, and consistent participation.",
  },
];

export const experienceItems: ExperienceItem[] = [
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

export const galleryItems: GalleryItem[] = [
  { url: "/images/gallery1.jpg", title: "Kashmir & Me" },
  { url: "/images/graduationstage.jpg", title: "Graduation on Stage" },
  { url: "/images/graduation1.jpg", title: "Graduation" },
];

export const contactInfo: ContactLinkItem[] = [
  {
    icon: Mail,
    text: "aseelfaizzin1@gmail.com",
    href: "mailto:aseelfaizzin1@gmail.com",
  },
  {
    icon: Phone,
    text: "+91 9786890102",
    href: "tel:+919786890102",
  },
  {
    icon: MapPin,
    text: "Kanyakumari, Tamil Nadu",
    href: "https://www.google.com/maps/place/Kanniyakumari,+Tamil+Nadu/",
  },
];

export const socialLinks: SocialLinkItem[] = [
  { icon: Github, href: "https://github.com/azifaizz", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/azifaizz",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/azifaizz", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/azifaizz/",
    label: "Instagram",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    key: "hard",
    title: "Technical Skills",
    accentClass: "text-primary",
    items: [
      { icon: FileCode, name: "HTML5" },
      { icon: Palette, name: "CSS" },
      { icon: FileCog, name: "Tailwind CSS" },
      { icon: Eclipse, name: "Bootstrap" },
      { icon: Database, name: "MySQL Database" },
      { icon: Code, name: "JavaScript (Basics)" },
      { icon: FileCode, name: "Java" },
      { icon: Braces, name: "Python" },
      { icon: BrainCircuit, name: "Deep Learning Basics" },
      { icon: FolderGit2, name: "Version Control & CLI" },
      { icon: Layout, name: "UI/UX Design" },
    ],
  },
  {
    key: "soft",
    title: "Soft Skills",
    accentClass: "text-secondary",
    items: [
      { icon: Users, name: "Team Collaboration" },
      { icon: Lightbulb, name: "Problem Solving" },
      { icon: MessageSquare, name: "Communication" },
      { icon: Smile, name: "Adaptability" },
      { icon: Timer, name: "Time Management" },
      { icon: Brain, name: "Creativity" },
      { icon: Route, name: "Leadership" },
      { icon: Goal, name: "Goal Orientation" },
      { icon: BookPlus, name: "Learning Mindset" },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    accentClass: "text-primary",
    items: [
      { icon: Bug, name: "Visual Studio Code" },
      { icon: Brackets, name: "Jupyter Notebook" },
      { icon: Component, name: "PyCharm" },
      { icon: Bug, name: "Eclipse IDE" },
      { icon: FolderGit, name: "Git" },
      { icon: FileBox, name: "Hugging Face" },
      { icon: PencilRuler, name: "Adobe Photoshop" },
      { icon: Figma, name: "Figma" },
      { icon: Framer, name: "Framer" },
      { icon: Component, name: "Canva" },
    ],
  },
];
