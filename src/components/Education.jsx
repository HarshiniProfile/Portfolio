import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData";
import { SectionLabel } from "./About";

export default function Education() {
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
    <section id="education" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="section-animate max-w-3xl mx-auto">
        <SectionLabel label="Education" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-12 leading-tight">
          Academic <span className="gradient-text">background</span>
        </h2>

        <div className="relative pl-6 space-y-0">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#22d3ee]/60 via-[#22d3ee]/20 to-transparent" />

          {education.map((item, i) => (
            <div key={item.id} className="relative timeline-item pb-10 last:pb-0">
              {/* Dot */}
              <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full border-2 border-[#22d3ee] bg-[#080b12] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
              </div>

              <div className="card-hover border border-[#1f2937] bg-[#0d1117] rounded-2xl p-6 ml-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-[#22d3ee] flex-shrink-0" />
                    <h3 className="font-display font-semibold text-white text-base leading-snug">
                      {item.degree}
                    </h3>
                  </div>
                  <span className="text-[#6b7280] text-xs font-mono whitespace-nowrap">{item.duration}</span>
                </div>

                <p className="text-[#22d3ee] text-sm font-medium mb-3">{item.institution}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">{item.description}</p>

                {item.achievement && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20">
                    <span className="text-[#22d3ee] text-xs font-mono">🏅 {item.achievement}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
