import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0b0b0f] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-sm uppercase tracking-widest text-indigo-400 mb-3">
            Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Selected Projects
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            title="Webtrix Solutions"
            description="A freelance web development brand website focused on helping startups and small businesses build modern, scalable web applications."
            tech={["React", "Tailwind CSS", "Node.js", "Express"]}
            images={[
             "/images/webtrix7.png",
              "/images/webtrix1.png",
              "/images/webtrix2.png",
              "/images/webtrix4.png",
              "/images/webtrix6.png",
              // "/images/webtrix6.png",
            ]}
            liveLink="https://webtrix-b2724.web.app/"
            githubLink=""
          />

          <ProjectCard
            title="InstaEMS"
            description="A web-based employment management system with role-based access and scalable backend APIs."
            tech={["React", "Node.js", "Express", "MongoDB"]}
            images={[
              "/images/insatems8.png",
              "/images/instaems1.png",
              "/images/instaems2.png",
              "/images/instaems3.png",
              "/images/instaems4.png",
              // "/images/instaems5.png",
              "/images/instaems6.png",
              "/images/instaems7.png",

            ]}
            liveLink=""
            githubLink=""
          />

        </div>
      </div>
    </section>
  );
}
