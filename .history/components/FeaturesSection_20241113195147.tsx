// components/FeaturesSection.tsx
export default function FeaturesSection() {
    return (
      <section className="py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            title="Fast Performance"
            description="Enjoy lightning-fast load times and performance."
          />
          <Feature
            title="Responsive Design"
            description="Your site looks great on any device."
          />
          <Feature
            title="SEO Optimized"
            description="Boost your search engine rankings effortlessly."
          />
        </div>
      </section>
    );
  }
  
  function Feature({ title, description }: { title: string; description: string }) {
    return (
      <div className="text-center p-4 border rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  