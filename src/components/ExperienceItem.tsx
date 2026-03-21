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
      <div>
        <span className="font-medium">{role} @</span>{" "}
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
        {meta && <div className="text-foreground/60 text-sm">{meta}</div>}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
