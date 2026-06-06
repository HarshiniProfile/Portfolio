import { useEffect, useRef } from "react";
import { Briefcase, FlaskConical, Users } from "lucide-react";
import { experience } from "../data/portfolioData";
import { SectionLabel } from "./About";

const typeConfig = {
  Internship: { icon: Briefcase, color: "text-blue-400", bg: "bg-blue-500/10", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  Research: { icon: FlaskConical, color: "text-purple-400", bg: "bg-purple-500/10", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  Leadership: { icon: Users, color: "text-green-400", bg: "bg-green-500/10", badge: "bg-green-500/10 text-green-400 border-green-500/20" },
  default: { icon: Briefcase, color: "text-[#22d3ee]", bg: "bg-[#22d3ee]/10", badge: "bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/20" },
};

export default function Experience() {
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
    <section id="experience" className="py-24 px-4 sm:px-6 bg-[#0a0e16]">
      <div ref={ref} className="section-animate max-w-3xl mx-auto">
        <SectionLabel label="Experience" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-12 leading-tight">
          Where I've <span className="gradient-text">worked & grown</span>
        </h2>

        <div className="relative pl-6 space-y-0">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#22d3ee]/60 via-[#22d3ee]/20 to-transparent" />

          {experience.map((item) => {
            const config = typeConfig[item.type] || typeConfig.default;
            const Icon = config.icon;
            return (
              <div key={item.id} className="relative timeline-item pb-10 last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full border-2 border-[#22d3ee] bg-[#080b12] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
                </div>

                <div className="card-hover border border-[#1f2937] bg-[#0d1117] rounded-2xl p-6 ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-md ${config.bg}`}>
                        <Icon size={14} className={config.color} />
                      </div>
                      <h3 className="font-display font-semibold text-white text-base">{item.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${config.badge}`}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-[#22d3ee] text-sm font-medium">{item.organisation}</p>
                    <span className="text-[#6b7280] text-xs font-mono">· {item.duration}</span>
                  </div>

                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
