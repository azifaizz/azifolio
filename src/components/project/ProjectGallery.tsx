type ProjectGalleryProps = {
  screenshots: readonly string[];
  onSelect: (image: string) => void;
};

const ProjectGallery = ({ screenshots, onSelect }: ProjectGalleryProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {screenshots.map((screenshot, index) => (
        <button
          key={`${screenshot}-${index}`}
          type="button"
          className="cursor-pointer overflow-hidden rounded-2xl transition-all hover:scale-105 glass-card hover:glow-primary"
          onClick={() => onSelect(screenshot)}
        >
          <img
            src={screenshot}
            alt={`Project screenshot ${index + 1}`}
            className="h-64 w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default ProjectGallery;
