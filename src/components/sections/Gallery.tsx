import { useState } from "react";
import { ZoomIn } from "lucide-react";
import ImageLightbox from "@/components/shared/ImageLightbox";
import SectionHeading from "@/components/shared/SectionHeading";
import { galleryItems } from "@/data/gallery";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref, isVisible } = useSectionReveal<HTMLElement>();
  const activeImage = galleryItems.find((image) => image.url === selectedImage);

  return (
    <section id="gallery" ref={ref} className="section-shell relative">
      <div className="content-shell">
        <div className="mb-12 sm:mb-16">
          <SectionHeading title="My" accent="Gallery" isVisible={isVisible} />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((image, index) => (
            <button
              key={image.url}
              type="button"
              className={`interactive-card glass-card group relative overflow-hidden rounded-2xl hover:glow-primary ${
                isVisible ? "scroll-reveal revealed" : "scroll-reveal"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative aspect-[4/3] w-full cursor-pointer">
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                  <div className="text-center">
                    <ZoomIn size={32} className="mx-auto mb-2" />
                    <p className="font-semibold text-white">{image.title}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <ImageLightbox
          image={activeImage.url}
          alt={activeImage.title}
          onClose={() => setSelectedImage(null)}
        />
      ) : null}
    </section>
  );
};

export default Gallery;
