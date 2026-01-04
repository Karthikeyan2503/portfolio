export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="TN Govt Job Board"
            desc="Web app to list and filter Tamil Nadu government job notifications."
            tech="React, Node.js, MongoDB"
          />
          <ProjectCard
            title="Portfolio Website"
            desc="Responsive personal portfolio built with React and Tailwind CSS."
            tech="React, Tailwind CSS"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <div className="bg-bg border border-border rounded p-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-muted mb-3">{desc}</p>
      <p className="text-sm text-muted mb-4">Tech: {tech}</p>
      <div className="flex gap-4">
        <a className="text-primary hover:underline" href="#">Live</a>
        <a className="text-primary hover:underline" href="#">GitHub</a>
      </div>
    </div>
  );
}