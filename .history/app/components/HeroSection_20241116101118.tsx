import '@/styles/globals.css';
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-32 bg-white-600 text-gray-600 flex flex-col items-center justify-center mt-20"
    >
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <p className="text-xl mb-12 max-w-3xl text-center">
        I'm a passionate web developer who builds modern, responsive websites with Next.js and other cutting-edge technologies.
      </p>

      {/* About Me Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Card 1 - Bio */}
        <div className="bio-card relative rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 h-80">
          <div className="bg-black bg-opacity-50 rounded-lg h-full p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-semibold text-white mb-4">Bio</h3>
            <p className="text-lg text-white">
              I'm a self-taught developer with a passion for learning and building. With a strong foundation in JavaScript and React, I enjoy turning ideas into functional and beautiful websites.
            </p>
          </div>
        </div>

        {/* Card 2 - Skills */}
        <div className="skills-card relative rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 h-80">
          <div className="bg-black bg-opacity-50 rounded-lg h-full p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
            <ul className="text-lg text-white list-disc pl-5">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Card 3 - Experience */}
        <div className="experience-card relative rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 h-80">
          <div className="bg-black bg-opacity-50 rounded-lg h-full p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
            <p className="text-lg text-white">
              Over the past 3 years, I have worked on various web development projects, building both front-end and back-end solutions. My experience spans across freelancing, contributing to open-source, and working in teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
