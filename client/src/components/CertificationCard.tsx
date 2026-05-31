import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationCardProps {
  name: string;
  issuer: string;
  year: string;
  icon?: React.ReactNode;
}

export function CertificationCard({ name, issuer, year, icon }: CertificationCardProps) {
  return (
    <Card className="card-elegant p-6 text-center hover:border-accent/50 transition-colors group">
      <div className="mb-4 flex justify-center">
        {icon || <Award className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-foreground/70 mb-3">{issuer}</p>
      <p className="text-xs text-accent font-medium bg-accent/10 rounded px-3 py-1 inline-block">{year}</p>
    </Card>
  );
}
