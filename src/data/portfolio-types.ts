import type { LucideIcon } from "lucide-react";

export type TimelineItem = Readonly<{
  icon: LucideIcon;
  title: string;
  subtitle: string;
  meta: string;
  description: string;
}>;

export type CertificationItem = Readonly<{
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}>;

export type ExperienceItem = Readonly<{
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: readonly string[];
  icon: LucideIcon;
  metaIcon: LucideIcon;
}>;

export type GalleryItem = Readonly<{
  url: string;
  title: string;
}>;

export type ContactLinkItem = Readonly<{
  icon: LucideIcon;
  text: string;
  href: string;
}>;

export type SocialLinkItem = Readonly<{
  icon: LucideIcon;
  href: string;
  label: string;
}>;

export type SkillCategoryKey =
  | "frontend"
  | "backend"
  | "databases"
  | "tools"
  | "soft";

export type SkillItem = Readonly<{
  icon: LucideIcon;
  name: string;
}>;

export type SkillGroup = Readonly<{
  key: SkillCategoryKey;
  title: string;
  accentClass: string;
  items: readonly SkillItem[];
}>;
