import React from "react";
import { Skill } from "@/components/Skill";

interface ProjectItemProps {
  name: string;
  url?: string;
  description: string;
  skills: string[];
}

export const ProjectItem = ({
  name,
  url,
  description,
  skills,
}: ProjectItemProps) => {
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
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} size="sm" variant="muted" />
        ))}
      </div>
    </div>
  );
};
