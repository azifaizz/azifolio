import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import type { ContactLinkItem, SocialLinkItem } from "@/data/portfolio-types";

export const contactInfo: readonly ContactLinkItem[] = [
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

export const socialLinks: readonly SocialLinkItem[] = [
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
