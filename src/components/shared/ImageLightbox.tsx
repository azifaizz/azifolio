import { X } from "lucide-react";

type ImageLightboxProps = {
  image: string;
  alt: string;
  onClose: () => void;
};

const ImageLightbox = ({ image, alt, onClose }: ImageLightboxProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full p-2 text-white transition hover:bg-white/20"
        aria-label="Close preview"
      >
        <X size={32} />
      </button>
      <img
        src={image}
        alt={alt}
        className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-lg"
      />
    </div>
  );
};

export default ImageLightbox;
