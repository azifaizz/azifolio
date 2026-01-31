import { useEffect, useRef, useState } from "react";
import { ZoomIn, X } from "lucide-react";
const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const images = [
    { url: "/images/gallery1.jpg", title: "Kashmir & Me" },
    { url: "/images/graduationstage.jpg", title: "Graduation on Stage" },
    { url: "/images/graduation1.jpg", title: "Graduation" },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          My <span className="gradient-text">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`scroll-reveal ${
                isVisible ? "revealed" : ""
              } relative group glass-card rounded-2xl overflow-hidden hover:glow-primary transition-all duration-300 hover:scale-105`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="w-full aspect-[4/3] relative cursor-pointer">
                <img
                  src={`${image.url}?w=800&h=600&fit=crop`}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <ZoomIn size={32} className="mx-auto mb-2" />
                    <p className="font-semibold text-white">{image.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <button
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/20 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90vh] max-w-full object-contain rounded-2xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
