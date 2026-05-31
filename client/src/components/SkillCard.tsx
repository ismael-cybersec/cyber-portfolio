import { Card } from "@/components/ui/card";

interface SkillCardProps {
  category: string;
  items: string[];
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <Card className="card-elegant p-6 hover:border-accent/50 transition-colors">
      <h3 className="text-xl font-semibold text-foreground mb-4">{category}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
            <span className="text-foreground/80 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
