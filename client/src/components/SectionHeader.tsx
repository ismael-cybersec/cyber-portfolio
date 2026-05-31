interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`section-divider mb-12 ${centered ? "max-w-32 mx-auto" : ""}`}></div>
    </div>
  );
}
