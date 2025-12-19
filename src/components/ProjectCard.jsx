import ProjectSlider from "./ProjectSlider";

export default function ProjectCard({
  title,
  description,
  tech,
  images,
  liveLink,
  githubLink,
}) {
  return (
    <div className="bg-[#14141d] border border-gray-800 rounded-2xl p-6 flex flex-col gap-5">
      
      {/* Slider */}
      <ProjectSlider images={images} />

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <p className="text-sm text-indigo-400 mb-4">
          {tech.join(" • ")}
        </p>

        {/* Links */}
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-white transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
