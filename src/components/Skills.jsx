function SkillGroup({ title, items, delay = 0 }) {
  return (
    <div
      className="
        rounded-xl border border-white/10
        bg-white/5 p-6
        transform transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
        opacity-0 animate-fadeUp
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      <h4 className="text-lg font-semibold mb-4 text-white">
        {title}
      </h4>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              text-sm px-3 py-1 rounded-full
              bg-white/10 text-gray-300
              hover:bg-white/20 transition
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}


export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-white">
          Skills
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillGroup
            title="Frontend"
            items={["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"]}
            delay={0}
          />
          <SkillGroup
            title="Backend"
            items={["Node.js", "Express", "MongoDB", "PostgreSQL"]}
            delay={150}
          />
          <SkillGroup
            title="Tools"
            items={["Git", "GitHub", "VS Code", "Postman"]}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}

