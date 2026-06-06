import { useEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import { awards } from "../data/portfolioData";
import { SectionLabel } from "./About";

export default function Awards() {
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
    <section id="awards" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <SectionLabel label="Awards & Achievements" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-10 leading-tight">
          Recognition & <span className="gradient-text">milestones</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <div
              key={award.id}
              className="card-hover border border-[#1f2937] bg-[#0d1117] rounded-2xl p-5 relative overflow-hidden"
            >

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-yellow-500/10 flex-shrink-0">
                  <Trophy size={16} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-yellow-400 text-xs font-mono mt-1">{award.organisation}</p>
                </div>
              </div>

              <p className="text-[#94a3b8] text-xs leading-relaxed mb-4">{award.description}</p>

              <div className="pt-3 border-t border-[#1f2937]">
                <span className="text-[#6b7280] text-xs font-mono">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
