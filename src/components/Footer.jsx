import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f2937] py-8 px-4 sm:px-6 text-center">
      <p className="text-[#6b7280] text-sm font-mono">
        {/* ✏️ UPDATE: Change name */}
        Built by{" "}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="text-[#22d3ee] hover:text-white transition-colors"
        >
          {personalInfo.name}
        </a>{" "}
        · {new Date().getFullYear()}
      </p>
      <p className="text-[#374151] text-xs mt-1 font-mono">
        React · Tailwind CSS · Deployed on GitHub Pages
      </p>
    </footer>
  );
}
