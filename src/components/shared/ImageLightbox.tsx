import { X } from "lucide-react";
import { useEffect } from "react";

type ImageLightboxProps = {
  image: string;
  alt: string;
  onClose: () => void;
};

const ImageLightbox = ({ image, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    // Disable background scrolling when lightbox is open
    document.body.style.overflow = "hidden";
    if (window.lenis) {
      window.lenis.stop();
    }
    
    return () => {
      document.body.style.overflow = "";
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" 
      data-lenis-prevent="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 sm:right-10 sm:top-10 rounded-full p-2 sm:p-3 text-white transition hover:bg-white/20 hover:scale-110"
        aria-label="Close preview"
      >
        <X size={32} />
      </button>
      <img
        src={image}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
      />
    </div>
  );
};

export default ImageLightbox;
