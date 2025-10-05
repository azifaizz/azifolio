import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_dqfrq8i", // EmailJS service ID
        "template_cppk0qc", // EmailJS template ID
        formRef.current,
        "PsD-zmIH5vOD6CSQQ" // EmailJS public key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          formRef.current?.reset();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
          console.error(error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "aseelfaizzin1@gmail.com",
      href: "mailto:aseelfaizzin1@gmail.com",
    },
    { icon: Phone, text: "+91 9786890102", href: "tel:+91 9786890102" },
    { icon: MapPin, text: "Kanyakumari,Tamil Nadu", href: "https://www.google.com/maps/place/Kanniyakumari,+Tamil+Nadu/@8.086444,77.5252707,14z/data=!3m1!4b1!4m6!3m5!1s0x3b04ed3d2a087861:0x1e790e896aeffaa0!8m2!3d8.0843512!4d77.5495019!16zL20vMDF0eG1s?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"},
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <div
            className={`scroll-reveal ${isVisible ? "revealed" : ""} space-y-8`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="glass-card p-4 rounded-xl flex items-center gap-4 hover:glow-primary transition-all duration-300 hover:scale-105"
                  >
                    <div className="glass-card p-3 rounded-lg glow-primary">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="user_name"
                  placeholder="your name"
                  required
                  className="glass-card border-primary/30 focus:glow-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="your email@example.com"
                  required
                  className="glass-card border-primary/30 focus:glow-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="glass-card border-primary/30 focus:glow-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:glow-primary group"
              >
                Send Message
                <Send
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-muted-foreground">
        <p>&copy; 2025 R. Mohamed Aseel. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
