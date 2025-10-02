interface ExperienceItemProps {
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  meta?: string;
}

export const ExperienceItem = ({ role, company, companyUrl, description, meta }: ExperienceItemProps) => {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-baseline gap-1">
        <span className="font-medium">{role} @</span>
        {companyUrl ? (
          <a 
            href={companyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            {company}
          </a>
        ) : (
          <span className="font-medium">{company}</span>
        )}
        {meta && <span className="text-muted-foreground text-sm">({meta})</span>}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};
