import { useEffect, useRef } from "react";
import { Cpu, Shield, Code2, BarChart3 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const interests = [
  { icon: Cpu, label: "Artificial Intelligence & ML" },
  { icon: Code2, label: "Software Engineering" },
  { icon: BarChart3, label: "Data Science" },
  { icon: Shield, label: "Cybersecurity" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <SectionLabel label="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-10">
          {/* Text */}
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight">
              Building the future,{" "}
              <span className="gradient-text">one line at a time.</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-4">
              {personalInfo.aboutMe}
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              📍 Based in{" "}
              <span className="text-white font-medium">{personalInfo.location}</span>
            </p>
          </div>

          {/* Interests grid */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="card-hover flex flex-col items-start gap-3 p-5 rounded-xl border border-[#1f2937] bg-[#0d1117]"
              >
                <div className="p-2 rounded-lg bg-[#22d3ee]/10">
                  <Icon size={18} className="text-[#22d3ee]" />
                </div>
                <span className="text-white text-sm font-medium leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable section label component
export function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-[#22d3ee] font-mono text-sm">// </span>
      <span className="text-[#22d3ee] font-mono text-sm font-medium">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-[#22d3ee]/30 to-transparent max-w-xs" />
    </div>
  );
}
