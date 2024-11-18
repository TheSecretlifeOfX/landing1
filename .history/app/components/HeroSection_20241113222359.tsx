// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-32 bg-blue-600 text-white flex flex-col items-center justify-center mt-20"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Landing Page</h1>
      <p className="text-xl mb-6 max-w-3xl text-center">
        Build modern websites effortlessly with Next.js 13.
      </p>
      <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
    </section>
  );
}
