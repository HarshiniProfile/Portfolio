import { useEffect, useRef } from "react";
import { Code, Brain, Globe, Database, Wrench, Shield } from "lucide-react";
import { skillCategories } from "../data/portfolioData";
import { SectionLabel } from "./About";

const iconMap = { Code, Brain, Globe, Database, Wrench, Shield };

export default function Skills() {
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
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="section-animate max-w-6xl mx-auto">
        <SectionLabel label="Skills" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-10 leading-tight">
          Technical <span className="gradient-text">toolkit</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ category, icon, skills }) => {
            const Icon = iconMap[icon] || Code;
            return (
              <div
                key={category}
                className="card-hover border border-[#1f2937] bg-[#0d1117] rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#22d3ee]/10">
                    <Icon size={16} className="text-[#22d3ee]" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#111827] border border-[#1f2937] text-[#94a3b8] hover:text-white hover:border-[#22d3ee]/40 transition-colors cursor-default font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
