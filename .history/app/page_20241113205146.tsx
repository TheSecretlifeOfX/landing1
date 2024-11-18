import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToAction from "@/components/CallToAction";

// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
    </main>
  );
}
