import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Full screen overlay for mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background/90 backdrop-blur-lg transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card py-3 shadow-card" : "py-4 sm:py-5"
        } ${isOpen ? "bg-background/50 backdrop-blur-md" : ""}`}
      >
        <div className="content-shell px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="gradient-text text-2xl font-semibold tracking-normal lowercase sm:text-3xl"
          >
            azifolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-primary lg:text-base"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[image:var(--gradient-primary)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="group relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:shadow-glow md:hidden overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`h-[2px] bg-foreground transition-all duration-300 ease-in-out ${
                isOpen ? "w-6 translate-y-[7px] rotate-45" : "w-6 group-hover:w-5"
              }`}
            />
            <span
              className={`h-[2px] bg-foreground transition-all duration-300 ease-in-out ${
                isOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"
              }`}
            />
            <span
              className={`h-[2px] bg-foreground transition-all duration-300 ease-in-out ${
                isOpen ? "w-6 -translate-y-[7px] -rotate-45" : "w-5 group-hover:w-4"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute left-4 right-4 top-[calc(100%+1rem)] md:hidden transition-all duration-500 ease-in-out origin-top ${
            isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
          }`}
        >
          <div className="glass-card rounded-[2rem] border border-white/10 p-4 shadow-2xl backdrop-blur-2xl bg-black/40">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                  className={`block rounded-2xl px-5 py-3.5 text-base font-semibold text-foreground/80 transition-all duration-300 hover:bg-white/10 hover:text-primary active:scale-95 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
