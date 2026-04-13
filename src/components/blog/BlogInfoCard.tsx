import {
  BarChart,
  Clock,
  Code,
  Smartphone,
  Volume2,
  Zap,
} from "lucide-react";
import type { BlogCard } from "@/data/blogs";

const iconMap = {
  code: Code,
  zap: Zap,
  volume2: Volume2,
  smartphone: Smartphone,
  clock: Clock,
  "bar-chart": BarChart,
} as const;

type BlogInfoCardProps = {
  card: BlogCard;
};

const BlogInfoCard = ({ card }: BlogInfoCardProps) => {
  const Icon = iconMap[card.icon];

  return (
    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
      <p className="text-sm text-muted-foreground">{card.description}</p>
    </div>
  );
};

export default BlogInfoCard;
