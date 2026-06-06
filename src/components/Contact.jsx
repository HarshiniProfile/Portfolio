import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, FileText, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { SectionLabel } from "./About";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      icon: Github,
      label: "GitHub",
      value: personalInfo.github.replace("https://", ""),
      href: personalInfo.github,
      color: "text-white",
      bg: "bg-white/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: personalInfo.linkedin.replace("https://", ""),
      href: personalInfo.linkedin,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: personalInfo.resumeLink,
      color: "text-[#22d3ee]",
      bg: "bg-[#22d3ee]/10",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#0a0e16]">
      <div ref={ref} className="section-animate max-w-4xl mx-auto">
        <SectionLabel label="Contact" />

        <div className="text-center mt-4 mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {/* ✏️ UPDATE: Personalise this message */}
            I'm actively looking for entry-level roles and research opportunities in AI, software
            engineering, data science, and cybersecurity. Feel free to reach out — I'd love to chat!
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-3 text-[#6b7280] text-sm font-mono">
            <MapPin size={13} />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {links.map(({ icon: Icon, label, value, href, color, bg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="card-hover flex items-center gap-4 p-5 border border-[#1f2937] bg-[#0d1117] rounded-2xl group"
            >
              <div className={`p-3 rounded-xl ${bg} flex-shrink-0`}>
                <Icon size={20} className={color} />
              </div>
              <div className="min-w-0">
                <p className="text-[#6b7280] text-xs font-mono mb-0.5">{label}</p>
                <p className="text-white text-sm font-medium truncate group-hover:text-[#22d3ee] transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center border border-[#22d3ee]/20 bg-[#22d3ee]/5 rounded-2xl p-8">
          <p className="text-[#94a3b8] text-sm mb-2">Prefer email?</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#22d3ee] hover:bg-[#0891b2] text-[#080b12] font-display font-semibold rounded-xl transition-all shadow-glow text-sm"
          >
            <Mail size={16} /> Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
