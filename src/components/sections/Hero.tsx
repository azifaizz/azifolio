import { useState, useEffect } from "react";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const professions = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Tech Enthusiast",
];

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
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-left space-y-5 text-center md:space-y-6 lg:text-left">
            <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-foreground/70 lg:justify-start">
              Front-End Developer
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
              R. Mohamed <span className="gradient-text">Aseel</span>
            </h1>

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

            <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
              I am a Front-End Developer passionate about creating beautiful and
              responsive web interfaces. Skilled in HTML, CSS, JavaScript, and
              Bootstrap, I turn designs into fully functional websites. I focus
              on building user-friendly experiences with attention to detail and
              performance. Constantly learning and exploring new technologies to
              enhance my development skills. My goal is to deliver clean,
              efficient, and visually appealing web solutions.
            </p>

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
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
              <div
                className={`absolute inset-0 rounded-full bg-[image:var(--gradient-primary)] blur-3xl opacity-30 ${
                  prefersReducedMotion ? "" : "animate-pulse"
                }`}
              ></div>
              <div className="glass-card relative flex h-full w-full items-center justify-center rounded-full p-2 sm:p-3">
                <img
                  src="/images/profile1.jpg"
                  alt="R. Mohamed Aseel"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
