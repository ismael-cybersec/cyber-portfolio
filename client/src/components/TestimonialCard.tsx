import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  rating?: number;
}

export function TestimonialCard({ text, author, role, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="card-elegant p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-accent text-lg">★</span>
        ))}
      </div>
      <p className="text-foreground/80 mb-6 italic leading-relaxed text-sm">"{text}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-primary text-sm">{author}</p>
        <p className="text-xs text-foreground/60">{role}</p>
      </div>
    </Card>
  );
}
