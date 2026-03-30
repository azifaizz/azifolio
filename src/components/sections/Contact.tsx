import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/shared/SectionHeading";
import { contactInfo, socialLinks } from "@/data/portfolio-content";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_dqfrq8i",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_cppk0qc",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "PsD-zmIH5vOD6CSQQ",
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useSectionReveal<HTMLElement>();
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        emailJsConfig.publicKey,
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <SectionHeading title="Get In" accent="Touch" isVisible={isVisible} />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className={isVisible ? "scroll-reveal revealed space-y-8" : "scroll-reveal space-y-8"}>
            <div>
              <h3 className="mb-6 text-2xl font-bold">Let's Connect</h3>
              <p className="mb-8 text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <a
                    key={info.text}
                    href={info.href}
                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:glow-primary glass-card"
                  >
                    <div className="rounded-lg p-3 glow-primary glass-card">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:glow-primary glass-card"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={isVisible ? "scroll-reveal revealed" : "scroll-reveal"}
            style={{ transitionDelay: "200ms" }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl p-8 glass-card"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="border-primary/30 glass-card"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="border-primary/30 glass-card"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="resize-none border-primary/30 glass-card"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-primary hover:glow-primary"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center text-muted-foreground">
        <p>
          &copy; 2025 <span className="text-primary">R. Mohamed Aseel</span>. All
          rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
