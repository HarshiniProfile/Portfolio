import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certifications" },
  { label: "Awards", href: "#awards" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080b12]/90 backdrop-blur-md border-b border-[#1f2937]/60 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display font-bold text-lg text-white hover:text-[#22d3ee] transition-colors"
          >
            {/* ✏️ UPDATE: Change to your initials or logo text */}
            <span className="text-[#22d3ee]">&lt;</span>
            AC
            <span className="text-[#22d3ee]">/&gt;</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative nav-link px-3 py-1.5 text-sm font-medium transition-colors hover:text-[#22d3ee] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#22d3ee] after:transition-all after:duration-300 after:w-0 hover:after:w-full ${
                    active === link.href ? "text-[#22d3ee]" : "text-[#94a3b8]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 border border-[#22d3ee] text-[#22d3ee] text-sm font-medium rounded hover:bg-[#22d3ee]/10 transition-colors font-display"
          >
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#94a3b8] hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080b12]/98 backdrop-blur-lg transition-all duration-300 flex flex-col items-center justify-center gap-6 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-2xl font-display font-semibold transition-colors ${
              active === link.href ? "text-[#22d3ee]" : "text-white hover:text-[#22d3ee]"
            }`}
          >
            {link.label}
          </a>
        ))}
        <a
          href={personalInfo.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 px-8 py-2 border border-[#22d3ee] text-[#22d3ee] font-display font-medium rounded hover:bg-[#22d3ee]/10 transition-colors"
          onClick={() => setOpen(false)}
        >
          Resume
        </a>
      </div>
    </>
  );
}
