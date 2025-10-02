import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
};
