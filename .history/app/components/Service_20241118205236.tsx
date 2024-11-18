export default function Service() {
  return (
    <section id="service" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Web Design Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1: Custom Web Design */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <img
              src="/icons/custom-design.png"
              alt="Custom web design services icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Custom Web Design</h3>
            <p className="text-gray-600">
              We create visually stunning websites tailored to your brand and needs.
            </p>
          </div>

          {/* Service 2: Responsive Web Design */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <img
              src="/icons/responsive-design.png"
              alt="Responsive web design services icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Responsive Web Design</h3>
            <p className="text-gray-600">
              We ensure your website is optimized for all devices.
            </p>
          </div>

          {/* Service 3: E-commerce Web Design */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <img
              src="/icons/ecommerce.png"
              alt="E-commerce web design services icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">E-commerce Web Design</h3>
            <p className="text-gray-600">
              We specialize in creating secure e-commerce websites.
            </p>
          </div>

          {/* Service 4: UI/UX Design */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <img
              src="/icons/uiux.png"
              alt="UI/UX design services icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              We focus on user experience and interface design.
            </p>
          </div>

          {/* Service 5: Website Redesign */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <img
              src="/icons/redesign.png"
              alt="Website redesign services icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Website Redesign</h3>
            <p className="text-gray-600">
              Give your website a fresh new look with a redesign.
            </p>
          </div>

          {/* Service 6: WordPress Web Design */}
          <div className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105">
            <img
              src="/icons/wordpress.png"
              alt="WordPress web design services icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">WordPress Web Design</h3>
            <p className="text-gray-600">
              We create custom WordPress websites that are visually appealing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
