import React from "react";

const MainCover = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Freelance Web Developer
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I’m <span className="text-indigo-500">Ashish Kumar</span>  
            <br />
            I build scalable web applications
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            I help startups and businesses build fast, modern, and reliable web
            applications using React, Node.js, and MongoDB.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg font-medium transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Content (Optional Visual / Stats) */}
        <div className="hidden md:flex justify-center">
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-gray-800 rounded-2xl p-8 w-full max-w-sm">
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-3 text-gray-300">
              <li>⚡ Full-Stack Web Development</li>
              <li>⚡ React & Next.js Applications</li>
              <li>⚡ REST APIs & Backend Systems</li>
              <li>⚡ Startup & SaaS Solutions</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MainCover;
