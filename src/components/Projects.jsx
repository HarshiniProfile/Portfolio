import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/portfolioData";
import { SectionLabel } from "./About";

const categoryColors = {
  "Machine Learning": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "LLM / RAG": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Cybersecurity": "bg-red-500/10 text-red-400 border-red-500/20",
  "Data Science": "bg-green-500/10 text-green-400 border-green-500/20",
  "Web Development": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "default": "bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/20",
};

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const colorClass = categoryColors[project.category] || categoryColors["default"];

  return (
    <div className="card-hover flex flex-col border border-[#1f2937] bg-[#0d1117] rounded-2xl overflow-hidden h-full">
      {/* Top bar accent */}
      <div className="h-1 bg-gradient-to-r from-[#22d3ee] to-[#818cf8]" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge + title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${colorClass} mr-2`}>
              {project.category}
            </span>
          </div>
        </div>

        <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-[#6b7280] hover:text-[#22d3ee] transition-colors mb-3 font-mono"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Hide details" : "Show details"}
        </button>

        {expanded && (
          <div className="mb-4 space-y-3 border-t border-[#1f2937] pt-4">
            <div>
              <p className="text-xs text-[#22d3ee] font-mono mb-2">Key Features</p>
              <ul className="space-y-1">
                {project.keyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                    <span className="text-[#22d3ee] mt-0.5 flex-shrink-0">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-[#22d3ee] font-mono mb-1">My Role</p>
              <p className="text-sm text-[#94a3b8]">{project.role}</p>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[#1f2937]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-white transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#22d3ee] hover:text-white transition-colors ml-auto"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#0a0e16]">
      <div ref={ref} className="section-animate max-w-6xl mx-auto">
        <SectionLabel label="Projects" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2 mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <a
            href="https://github.com/alexchen" // ✏️ UPDATE: Your GitHub profile
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-[#22d3ee] hover:text-white transition-colors font-mono whitespace-nowrap"
          >
            <Github size={14} /> View all on GitHub →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
