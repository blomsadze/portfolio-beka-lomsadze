import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full">
      <div className="max-w-[1440px] w-full px-4 py-8">
        <Hero />
      </div>
    </main>
  );
}
