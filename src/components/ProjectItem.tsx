interface ProjectItemProps {
  name: string;
  url?: string;
  description: string;
}

export const ProjectItem = ({ name, url, description }: ProjectItemProps) => {
  return (
    <div className="space-y-1">
      {url ? (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:underline font-medium"
        >
          {name}
        </a>
      ) : (
        <span className="font-medium">{name}</span>
      )}
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};
