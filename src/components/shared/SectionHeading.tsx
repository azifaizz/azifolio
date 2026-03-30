type SectionHeadingProps = {
  title: string;
  accent: string;
  isVisible?: boolean;
};

const SectionHeading = ({
  title,
  accent,
  isVisible = true,
}: SectionHeadingProps) => {
  return (
    <h2
      className={`text-center text-4xl font-bold md:text-5xl ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {title} <span className="gradient-text">{accent}</span>
    </h2>
  );
};

export default SectionHeading;
