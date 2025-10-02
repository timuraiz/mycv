import { ProfileHeader } from "@/components/ProfileHeader";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectItem } from "@/components/ProjectItem";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingContact } from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <FloatingContact />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <ProfileHeader />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-12">
            <Section title="Experience">
              <ExperienceItem
                role="Go Developer"
                company="Yandex.Pay"
                companyUrl="https://yandex.com/pay"
                meta="Jan 2025 - Present · Hybrid"
                description="Engineered real-time data synchronization platform and enterprise anonymization layer protecting millions of user records"
              />
              <ExperienceItem
                role="Python/Go Developer"
                company="Yandex.Billing"
                companyUrl="https://yandex.com"
                meta="Oct 2022 - Jan 2025 · Hybrid"
                description="Drove microservices migration from monolith, cutting deployment cycles by 70% and enabling independent team velocity"
              />
              <ExperienceItem
                role="Python Developer"
                company="Yandex.ABC"
                companyUrl="https://yandex.com"
                meta="Jul 2022 - Oct 2022 · Moscow, Russia"
                description="Delivered production-ready duty management system serving 10,000+ employees across Yandex infrastructure"
              />
            </Section>
          </div>

          <div className="space-y-12">
            <Section title="Products">
              <ProjectItem
                name="Whoelse"
                url="https://www.producthunt.com/products/whoelse?launch=whoelse"
                description="Web application built with React + Python"
              />
              <ProjectItem
                name="Cavora"
                url="https://www.producthunt.com/products/cavora/launches"
                description="Browser extension built with WXT + React + Python"
              />
              <ProjectItem
                name="AYZ Focus"
                url="#"
                description="Mobile time tracker with Pomodoro technique built with React Native + Go"
              />
              <ProjectItem
                name="Vendera POS"
                url="https://vendera.live/"
                description="Point of sale system for Thai region built with Next.js"
              />
            </Section>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-12">
          <div className="space-y-16">
            <Section title="Business">
              <ExperienceItem
                role="Co-Founder & CEO"
                company="Vendera Agency"
                companyUrl="https://vendera.agency"
                meta="Nov 2024 - Jun 2025"
                description="Building web & mobile applications for established businesses"
              />
            </Section>

            <Section title="Education">
              <ExperienceItem
                role="Bachelor of Science in Computer Science"
                company="Innopolis University"
                companyUrl="https://innopolis.university"
                description="Graduated with a degree in Computer Science"
              />
            </Section>
          </div>

          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Go</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">FastAPI</span>
            </div>
          </Section>
        </div>

      </main>
    </div>
  );
};

export default Index;
