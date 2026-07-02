import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { certifications } from "@/data/certifications";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const { ref, isVisible } = useSectionReveal<HTMLElement>();
  const activeCertification =
    selectedCert !== null ? certifications[selectedCert] : null;

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-shell relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-180" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <SectionHeading
            title="My"
            accent="Certifications"
            isVisible={isVisible}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <button
              key={`${certification.title}-${certification.date}`}
              type="button"
              className={`flex flex-col items-start rounded-2xl p-4 text-left shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:glow-primary glass-card ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
              onClick={() => setSelectedCert(index)}
            >
              <div className="mb-4 h-40 w-full overflow-hidden rounded-xl bg-black/5 flex items-center justify-center p-2">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="mb-1 text-base font-bold text-foreground line-clamp-1">
                {certification.title}
              </h2>
              <p className="text-sm font-medium text-primary line-clamp-1">
                {certification.issuer}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {certification.date}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeCertification ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[90vh] w-[95%] overflow-y-auto rounded-2xl bg-background p-6 shadow-glow glass-card sm:w-[600px] md:w-[720px] sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-2 text-foreground transition hover:text-white"
              aria-label="Close certification preview"
            >
              <X size={20} />
            </button>

            <img
              src={activeCertification.image}
              alt={activeCertification.title}
              className="mb-4 max-h-[420px] w-full rounded-2xl object-contain"
            />

            <h2 className="mb-2 text-2xl font-bold text-foreground">
              {activeCertification.title}
            </h2>
            <p className="mb-1 text-sm text-muted-foreground">
              {activeCertification.issuer}
            </p>
            <p className="mb-4 text-sm text-muted-foreground">
              {activeCertification.date}
            </p>

            <div className="rounded-lg bg-card p-4 text-sm leading-relaxed text-foreground/90 sm:p-5 sm:text-base">
              {activeCertification.description}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Certifications;
