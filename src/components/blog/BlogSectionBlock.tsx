import type { BlogSection } from "@/data/blogs";
import SectionShell from "@/components/shared/SectionShell";
import BlogInfoCard from "@/components/blog/BlogInfoCard";

type BlogSectionBlockProps = {
  section: BlogSection;
};

const BlogSectionBlock = ({ section }: BlogSectionBlockProps) => {
  return (
    <section id={section.id} className="mb-12 animate-fade-in-up">
      <SectionShell className="rounded-3xl">
        {section.eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {section.eyebrow}
          </p>
        ) : null}
        <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>

        {section.paragraphs?.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-4 text-lg leading-relaxed text-foreground/85 last:mb-0"
          >
            {paragraph}
          </p>
        ))}

        {section.bullets ? (
          <ul className="space-y-4">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <p className="text-lg">{bullet}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {section.steps ? (
          <div className="space-y-6">
            {section.steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {section.cards ? (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.cards.map((card) => (
              <BlogInfoCard key={card.title} card={card} />
            ))}
          </div>
        ) : null}
      </SectionShell>
    </section>
  );
};

export default BlogSectionBlock;
