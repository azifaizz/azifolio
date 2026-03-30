export type BlogStep = {
  title: string;
  description: string;
};

export type BlogCard = {
  title: string;
  description: string;
  icon: "code" | "zap" | "volume2" | "smartphone" | "clock" | "bar-chart";
};

export type BlogSection = {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: BlogStep[];
  cards?: BlogCard[];
};

export type BlogPostItem = {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  dateLabel: string;
  readTime: string;
  image: string;
  tags: string[];
  footerLabel: string;
  navSections: { id: string; label: string }[];
  sections: BlogSection[];
};

export const blogPosts: BlogPostItem[] = [
  {
    id: "distraction-blocker",
    title: "Distraction Blocker",
    subtitle: "A Fun Project Idea: Making Your Computer Yell at You",
    excerpt:
      "Stay focused like never before with a distraction blocker that yells at you when you stray.",
    dateLabel: "Aug 08, 2025",
    readTime: "8 min read",
    image: "/images/blog1.png",
    tags: ["codetofun", "Web Development"],
    footerLabel: "Written with curiosity and a touch of humor by azi",
    navSections: [
      { id: "intro", label: "Intro" },
      { id: "why", label: "Why" },
      { id: "what", label: "What" },
      { id: "how", label: "How" },
      { id: "tech", label: "Tech" },
      { id: "experience", label: "Experience" },
      { id: "cool", label: "Cool" },
      { id: "skills", label: "Skills" },
      { id: "upgrades", label: "Upgrades" },
      { id: "conclusion", label: "Conclusion" },
    ],
    sections: [
      {
        id: "intro",
        eyebrow: "Introduction",
        title: "A Productive Idea With Personality",
        paragraphs: [
          "Have you ever opened YouTube for a quick break and suddenly lost an hour? This idea came from that exact kind of moment.",
          "Instead of quietly blocking distractions, this concept imagines a tool that reacts loudly and dramatically whenever you drift away from work. The goal is simple: make procrastination memorable enough that you think twice before doing it again.",
        ],
      },
      {
        id: "why",
        eyebrow: "Why",
        title: "Why This Idea Stuck With Me",
        paragraphs: [
          "Most productivity tools are quiet, polite, and easy to ignore. That makes them useful, but not always effective.",
          "This concept adds humor and surprise. By turning a blocker into something playful and loud, it creates a stronger interruption and makes focus feel less boring.",
        ],
      },
      {
        id: "what",
        eyebrow: "What It Does",
        title: "Core Behavior of the Concept",
        bullets: [
          "Blocks distracting websites during focus sessions.",
          "Triggers a loud alert such as a scream, alarm, or funny voice clip when you attempt to open a blocked site.",
          "Redirects the visit to a warning screen instead of silently failing.",
          "Restores normal access automatically when the session ends.",
        ],
      },
      {
        id: "how",
        eyebrow: "How It Works",
        title: "Simple Flow",
        steps: [
          {
            title: "Detect the attempt",
            description:
              "The system notices that you are trying to open a distracting site.",
          },
          {
            title: "Block the destination",
            description:
              "The request is redirected to a local warning screen or blocked at the system level.",
          },
          {
            title: "Play the alert",
            description:
              "A loud sound grabs your attention and breaks the habit loop immediately.",
          },
          {
            title: "Unblock later",
            description:
              "After the focus timer ends, the blocked websites are restored automatically.",
          },
        ],
      },
      {
        id: "tech",
        eyebrow: "Tech Stack",
        title: "Tools I Would Use",
        cards: [
          {
            icon: "code",
            title: "Python",
            description:
              "Useful for scripting, automation, and manipulating system files.",
          },
          {
            icon: "zap",
            title: "Hosts File",
            description:
              "A simple system-level method to block websites without relying on the browser alone.",
          },
          {
            icon: "volume2",
            title: "Audio Alerts",
            description:
              "Libraries such as pygame or playsound could trigger a strong interruption when a blocked site is opened.",
          },
          {
            icon: "smartphone",
            title: "Browser Extension",
            description:
              "A future version could use an extension for better real-time detection and richer UX.",
          },
        ],
      },
      {
        id: "experience",
        eyebrow: "Experience",
        title: "What the User Experience Would Feel Like",
        paragraphs: [
          "You are in work mode. Out of habit, you type youtube.com. Instead of the homepage loading, a bold warning fills the screen and a loud sound plays immediately.",
          "That moment of surprise is the whole idea. It creates a stronger break than a normal blocker and helps retrain your default behavior over time.",
        ],
      },
      {
        id: "cool",
        eyebrow: "Why It Works",
        title: "Why This Concept Is Fun",
        cards: [
          {
            icon: "zap",
            title: "Memorable",
            description:
              "It creates a stronger interruption than a passive blocker.",
          },
          {
            icon: "code",
            title: "Prototype Friendly",
            description:
              "It is realistic enough to prototype with simple scripting and a few core workflows.",
          },
          {
            icon: "bar-chart",
            title: "Actually Useful",
            description:
              "The playful behavior still solves a real focus problem in a practical way.",
          },
        ],
      },
      {
        id: "skills",
        eyebrow: "Learning Value",
        title: "Skills Someone Could Learn by Building It",
        bullets: [
          "System automation and scripting logic",
          "Editing system files safely",
          "Audio playback and event handling",
          "Timer-based task scheduling",
          "Simple product UX for feedback-heavy workflows",
          "Turning a funny idea into a practical prototype",
        ],
      },
      {
        id: "upgrades",
        eyebrow: "Future Work",
        title: "Possible Upgrades",
        cards: [
          {
            icon: "smartphone",
            title: "Desktop UI",
            description:
              "Add a clean interface for choosing sites, sounds, and focus durations.",
          },
          {
            icon: "code",
            title: "Chrome Extension",
            description:
              "Detect visits directly inside the browser instead of only at the system level.",
          },
          {
            icon: "volume2",
            title: "Custom Voices",
            description:
              "Let users choose different sound effects or humorous voice prompts.",
          },
          {
            icon: "clock",
            title: "Pomodoro Mode",
            description:
              "Connect the blocker to timed work sessions for a stronger focus routine.",
          },
          {
            icon: "bar-chart",
            title: "Analytics",
            description:
              "Track how often you try to open blocked websites and surface patterns over time.",
          },
        ],
      },
      {
        id: "conclusion",
        eyebrow: "Conclusion",
        title: "Productivity Can Be Serious and Funny",
        paragraphs: [
          "The most interesting projects often begin as playful ideas. This one mixes humor, disruption, and practical focus support in a way that feels memorable.",
          "Even as a concept, it shows how product thinking, UX, and technical experimentation can come together to solve an everyday problem with personality.",
        ],
      },
    ],
  },
];

export const getBlogPostById = (id?: string) =>
  blogPosts.find((post) => post.id === id);
