import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolioData";
import { SectionLabel } from "./About";

export default function Certifications() {
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
    <section id="certifications" className="py-24 px-4 sm:px-6 bg-[#0a0e16]">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <SectionLabel label="Certifications" />
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-10 leading-tight">
          Credentials & <span className="gradient-text">learning</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card-hover border border-[#1f2937] bg-[#0d1117] rounded-2xl p-5 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#22d3ee]/10 flex-shrink-0 mt-0.5">
                  <Award size={16} className="text-[#22d3ee]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-[#22d3ee] text-xs font-mono mt-1">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-[#94a3b8] text-xs leading-relaxed mb-4 flex-1">
                {cert.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#1f2937]">
                <span className="text-[#6b7280] text-xs font-mono">{cert.date}</span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-[#22d3ee] hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} /> View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
