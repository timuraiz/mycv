import React from 'react'

interface SkillProps {
  skill: string
  size?: 'sm' | 'md'
  variant?: 'accent' | 'muted'
}

export const Skill = ({ skill, size = 'md', variant = 'accent' }: SkillProps) => {
  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-xs'
    : 'px-3 py-1 text-sm'

  const colorClasses = variant === 'muted'
    ? 'bg-muted/10 text-muted-foreground/80'
    : 'bg-accent/10 text-accent'

  return (
    <span className={`${sizeClasses} ${colorClasses} rounded-full`}>
    {skill}
  </span>
  )
}
