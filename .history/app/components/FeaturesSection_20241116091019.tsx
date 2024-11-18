// components/FeaturesSection.tsx
export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Project
            title="Project One"
            description="A modern website built with React and Next.js."
            imageSrc="/path/to/image1.jpg"
            link="#"
          />
          {/* Project 2 */}
          <Project
            title="Project Two"
            description="E-commerce site with full payment integration."
            imageSrc="/path/to/image2.jpg"
            link="#"
          />
          {/* Project 3 */}
          <Project
            title="Project Three"
            description="A mobile app interface designed with Flutter."
            imageSrc="/path/to/image3.jpg"
            link="#"
          />
          {/* Project 4 */}
          <Project
            title="Project Four"
            description="A personal blog with SEO optimization and markdown support."
            imageSrc="/path/to/image4.jpg"
            link="#"
          />
          {/* Project 5 */}
          <Project
            title="Project Five"
            description="A portfolio website with smooth animations."
            imageSrc="/path/to/image5.jpg"
            link="#"
          />
          {/* Project 6 */}
          <Project
            title="Project Six"
            description="A social networking app with real-time messaging."
            imageSrc="/path/to/image6.jpg"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}

function Project({
  title,
  description,
  imageSrc,
  link,
}: {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          className=" text-gray-400 hover:text-gray-600 font-semibold flex items-center"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5 ml-2 transform rotate-45"
          >
            <path
              d="M7 17L17 7M7 7h10v10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
