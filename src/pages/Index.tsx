import { ProfileHeader } from "@/components/ProfileHeader";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ProjectItem } from "@/components/ProjectItem";
import { ContactCTA } from "@/components/ContactCTA";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <ProfileHeader />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-12">
            <Section title="Business">
              <ExperienceItem
                role="Co-Founder"
                company="Tech Ventures Inc"
                companyUrl="https://example.com"
                description="Scaled development agency to $100k in revenue. Built 15+ apps"
              />
              <ExperienceItem
                role="Co-Founder"
                company="Digital Solutions LLC"
                companyUrl="https://example.com"
                description="Built and launched 10 apps in 6 months. Scaled to 100k+ downloads"
              />
              <ExperienceItem
                role="Founder"
                company="AI Platform"
                companyUrl="https://example.com"
                description="10,000+ users, 100+ paying customers, 1M+ social media views"
              />
              <ExperienceItem
                role="Founder"
                company="Tech YouTube Channel"
                companyUrl="https://youtube.com"
                description="30,000+ subscribers, 5M+ views"
              />
            </Section>

            <Section title="Experience">
              <ExperienceItem
                role="Growth Intern"
                company="StartupCo"
                companyUrl="https://example.com"
                meta="YC Winter '24"
                description="Generated 200k+ social media views & 2.5k+ downloads"
              />
              <ExperienceItem
                role="Software Engineering Intern"
                company="Research Institute"
                companyUrl="https://example.com"
                description="Developed ML-backed simulation for government project"
              />
              <ExperienceItem
                role="Marketing Intern"
                company="EdTech Startup"
                companyUrl="https://example.com"
                description="Generated 20M+ social media views & $15k+ in revenue"
              />
              <ExperienceItem
                role="Research Intern"
                company="University Lab"
                companyUrl="https://example.com"
                description="Researched performance optimization. Co-authored & published research paper"
              />
            </Section>
          </div>

          <div className="space-y-12">
            <Section title="Projects">
              <ProjectItem
                name="CollabSpace"
                url="https://example.com"
                description="Virtual collaboration platform"
              />
              <ProjectItem
                name="TrackMyDebt"
                url="https://example.com"
                description="Debt tracking and payment reminders"
              />
              <ProjectItem
                name="DataInsights"
                url="https://example.com"
                description="Make better decisions with data analytics"
              />
              <ProjectItem
                name="QuickEffects"
                url="https://example.com"
                description="Photo effects with one click"
              />
            </Section>

            <Section title="Languages">
              <p className="text-muted-foreground text-sm leading-relaxed">
                English (native), Spanish (fluent), French (conversational)
              </p>
            </Section>
          </div>
        </div>

        <ContactCTA />
      </main>
    </div>
  );
};

export default Index;
