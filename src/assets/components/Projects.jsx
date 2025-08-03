export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600">A personal portfolio website built with React and Tailwind CSS.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}
