import HeroSection from "@/app/components/HeroSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import CallToAction from "@/app/components/CallToAction";
import Service from "@/app/components/Service";
import Blog from "@/app/components/Blog";
import '@/app/globals.css';
// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <Service />
      <Blog />
      <CallToAction />
    </main>
  );
}
