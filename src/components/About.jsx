export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0f0f14] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-indigo-400 mb-3">
            About Me
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Building reliable web products  
            <br />that solve real business problems
          </h3>

          <p className="text-gray-400 mb-5 leading-relaxed">
            I’m Ashish Kumar, a full-stack web developer with experience in
            building modern web applications for startups and businesses.
            I specialize in creating scalable frontends and robust backend
            systems using React, Node.js, and MongoDB.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From idea to deployment, I focus on clean architecture,
            performance, and user experience — helping clients turn concepts
            into production-ready products.
          </p>
        </div>

        {/* Right: Highlights / Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-indigo-400">3+</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Years of Development Experience
            </p>
          </div>

          <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-indigo-400">10+</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Projects Delivered
            </p>
          </div>

          <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-indigo-400">Full-Stack</h4>
            <p className="text-gray-400 mt-2 text-sm">
              React • Node • MongoDB
            </p>
          </div>

          <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-indigo-400">Startup-Ready</h4>
            <p className="text-gray-400 mt-2 text-sm">
              MVPs & Scalable Systems
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
