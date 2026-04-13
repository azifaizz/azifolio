import { useState, useEffect } from "react";
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const professions = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Tech Enthusiast",
];

const heroFacts = [
  "Crafting responsive interfaces with clarity and polish",
  "Focused on performance, motion, and visual consistency",
  "Building portfolio work that feels modern and human",
] as const;

const heroStats = [
  { label: "Focus", value: "Frontend & UX" },
  { label: "Based In", value: "India" },
  { label: "Approach", value: "Clean & Fast" },
] as const;

const Hero = () => {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(professions[currentProfession]);
      return;
    }

    const profession = professions[currentProfession];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === profession) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentProfession((prev) => (prev + 1) % professions.length);
      } else {
        setDisplayText(
          isDeleting
            ? profession.substring(0, displayText.length - 1)
            : profession.substring(0, displayText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentProfession, displayText, isDeleting, prefersReducedMotion]);

  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center justify-center pt-24 sm:pt-28"
    >
      <div className="content-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-left space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-foreground/70 lg:justify-start">
              <Sparkles size={14} className="text-primary" />
              Front-End Developer
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                  Building structured digital experiences
                </p>
                <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
                  R. Mohamed <span className="gradient-text">Aseel</span>
                </h1>
              </div>

              <div className="flex h-12 items-center justify-center lg:justify-start">
                <h2 className="text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
                  {displayText}
                  <span
                    className={`ml-1 inline-block h-6 w-1 bg-primary ${
                      prefersReducedMotion ? "" : "animate-pulse"
                    }`}
                  ></span>
                </h2>
              </div>
            </div>

            <p className="mx-auto max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base md:text-lg lg:mx-0">
              I create clean, responsive, and visually balanced interfaces that
              feel smooth on every screen. My focus is turning ideas into
              polished front-end experiences with strong structure, good
              usability, and thoughtful motion.
            </p>

            <div className="grid gap-3 text-left sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl border border-white/10 px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-3xl border border-white/10 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-center gap-2 text-sm uppercase tracking-[0.22em] text-foreground/60 lg:justify-start">
                <MapPin size={14} className="text-primary" />
                What I Bring
              </div>
              <div className="grid gap-3">
                {heroFacts.map((fact) => (
                  <div
                    key={fact}
                    className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <ArrowDownRight
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <p className="text-sm leading-6 text-foreground/85">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                className="w-full bg-gradient-primary px-6 py-6 text-base shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 hover:scale-[1.02] sm:w-auto"
              >
                <a
                  href="/cv/Aseel_fullstack_fresher.pdf"
                  download="Mohmd_Aseel_py.pdf"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </a>
              </Button>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="https://github.com/azifaizz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card glass-card rounded-xl p-3 hover:glow-primary hover:-translate-y-1"
                  aria-label="Visit GitHub profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/azifaizz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card glass-card rounded-xl p-3 hover:glow-secondary hover:-translate-y-1"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/azifaizz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-card glass-card rounded-xl p-3 hover:glow-primary hover:-translate-y-1"
                  aria-label="Visit X profile"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="animate-fade-in-right order-first flex justify-center lg:order-none">
            <div className="glass-card relative w-full max-w-[28rem] overflow-hidden rounded-[2rem] border border-white/10 p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Visual Identity
                  </p>
                  <p className="mt-1 text-lg font-semibold">Aseel Portfolio</p>
                </div>
                <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Available
                </div>
              </div>

              <div className="relative mx-auto aspect-[4/4.6] w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
              <div
                className={`absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-30 ${
                  prefersReducedMotion ? "" : "animate-pulse"
                }`}
              ></div>
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/15 to-transparent"></div>
                <img
                  src="/images/profile1.jpg"
                  alt="R. Mohamed Aseel"
                  loading="eager"
                  decoding="async"
                  className="relative h-full w-full object-cover object-[center_18%]"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Strength
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/85">
                    Structured layouts, smooth interactions, and clean UI polish.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                    Goal
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/85">
                    Designing web experiences that look premium and feel easy to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
