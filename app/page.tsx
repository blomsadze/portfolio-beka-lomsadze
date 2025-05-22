import { Hero } from "@/components/hero";
import SkillsSection from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full">
      <div className="max-w-[1440px] w-full px-4 py-8">
        <Hero />
        <SkillsSection />
      </div>
    </main>
  );
}
