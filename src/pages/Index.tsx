import { ProfileHeader } from "@/components/ProfileHeader";
import { Section } from "@/components/Section";
import { Skill } from "@/components/Skill";
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

        <div className="grid md:grid-cols-2 gap-12">
          <Section title="Experience">
            <ExperienceItem
              role="Go Developer"
              company="Yandex.Pay"
              companyUrl="https://pay.yandex.ru/qr"
              meta="Jan 2025 - Present · Hybrid"
              description="Shipped features to run QR payments for small/average businesses"
            />
            <ExperienceItem
              role="Python/Go Developer"
              company="Yandex.Billing"
              companyUrl="https://balance.yandex.ru"
              meta="Oct 2022 - Jan 2025 · Hybrid"
              description="Drove microservices migration from monolith, cutting deployment cycles by 70% and enabling independent team velocity"
            />
            <ExperienceItem
              role="Python Developer"
              company="Yandex.ABC"
              companyUrl="https://yandex.ru"
              meta="Jul 2022 - Oct 2022 · Moscow, Russia"
              description="Delivered production-ready duty management system serving 10,000+ employees across Yandex infrastructure"
            />
          </Section>

          <Section title="Products">
            <ProjectItem
              name="Whoelse"
              url="https://www.producthunt.com/products/whoelse?launch=whoelse"
              description="Discover product alternatives instantly"
              skills={["React", "Python"]}
            />
            <ProjectItem
              name="Cavora"
              url="https://www.producthunt.com/products/cavora/launches"
              description="AI-powered YouTube learning retention"
              skills={["WXT", "React", "Python"]}
            />
            <ProjectItem
              name="AYZ Focus"
              url="#"
              description="Time tracking like Pomodoro"
              skills={["React Native", "Go"]}
            />
            <ProjectItem
              name="Vendera POS"
              url="https://vendera.live/"
              description="Point-of-sale for Thai businesses"
              skills={["Next.js", "React Native"]}
            />
          </Section>

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

          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              <Skill skill="Go" />
              <Skill skill="Python" />
              <Skill skill="React" />
              <Skill skill="React Native" />
              <Skill skill="Next.js" />
              <Skill skill="FastAPI" />
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default Index;
