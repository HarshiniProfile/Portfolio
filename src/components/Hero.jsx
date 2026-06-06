import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#818cf8]/5 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/5 text-[#22d3ee] text-xs font-mono mb-8"
          style={{ animation: "fadeIn 0.5s ease 0.1s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
          {/* ✏️ UPDATE: Change this status message */}
          Available for internships & opportunities
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white mb-4 leading-tight"
          style={{ animation: "fadeUp 0.6s ease 0.2s both" }}
        >
          {personalInfo.name}
        </h1>

        {/* Headline */}
        <p
          className="gradient-text font-display font-semibold text-xl sm:text-2xl md:text-3xl mb-5"
          style={{ animation: "fadeUp 0.6s ease 0.35s both" }}
        >
          {personalInfo.headline}
        </p>

        {/* Short intro */}
        <p
          className="text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body"
          style={{ animation: "fadeUp 0.6s ease 0.5s both" }}
        >
          {personalInfo.heroIntro}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
          style={{ animation: "fadeUp 0.6s ease 0.65s both" }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-lg transition-all"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-lg transition-all"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#22d3ee] hover:bg-[#0891b2] text-[#080b12] text-sm font-semibold rounded-lg transition-all shadow-glow"
          >
            <FileText size={16} /> Resume
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium rounded-lg transition-all"
          >
            <Mail size={16} /> Email
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center"
          style={{ animation: "fadeUp 0.6s ease 0.8s both" }}
        >
          {[
            { value: "10+", label: "Projects Built" },
            { value: "3+", label: "Certifications" },
            { value: "2+", label: "Years Coding" },
            { value: "5+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-2xl text-[#22d3ee]">{stat.value}</div>
              {/* ✏️ UPDATE: Change these stats to match your real numbers */}
              <div className="text-[#6b7280] text-xs mt-0.5 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6b7280] hover:text-[#22d3ee] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
