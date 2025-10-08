import { useState, useEffect } from "react";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import cv from "../public/cv/mhd_aseel_py.pdf";

const Hero = () => {
  const professions = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
  ];
  const [currentProfession, setCurrentProfession] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
            : profession.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentProfession, professions]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              R. Mohamed <span className="gradient-text">Aseel</span>
            </h1>

            <div className="h-12 flex items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">
                {displayText}
                <span className="inline-block w-1 h-6 ml-1 bg-primary animate-pulse"></span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-justify leading-relaxed">
              I am a Front-End Developer passionate about creating beautiful and
              responsive web interfaces. Skilled in HTML, CSS, JavaScript, and
              Bootstrap, I turn designs into fully functional websites. I focus
              on building user-friendly experiences with attention to detail and
              performance. Constantly learning and exploring new technologies to
              enhance my development skills. My goal is to deliver clean,
              efficient, and visually appealing web solutions.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="../public/cv/mhd_aseel_py.pdf"
                download="Mohamed_Aseel_CV.pdf"
              >
                <Button className="bg-gradient-primary glow-primary hover:scale-105 transition-transform flex items-center">
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </a>

              <div className="flex gap-3">
                <a
                  href="https://github.com/azifaizz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:glow-primary transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/azifaizz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:glow-secondary transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/azifaizz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:glow-primary transition-all hover:scale-110"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full glass-card p-2 rounded-full flex items-center justify-center">
                <img
                  src="../src/images/profile1.jpg"
                  alt="R. Mohamed Aseel"
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
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
