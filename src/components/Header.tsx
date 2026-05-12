import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-md py-3" : "py-4"
      )}
      style={{ backgroundColor: "#ffc20d" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <img
            src="/images/logo-transparent.png"
            alt="Dev & D Construction Company LTD."
            className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#1a6b3a] hover:text-[#0f4a27] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a6b3a] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-bold hover:-translate-y-0.5 transition-all" style={{ backgroundColor: "#1a6b3a" }}
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1a6b3a] hover:text-[#0f4a27] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 border-b border-[#e6ac00] transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"
        )}
        style={{ backgroundColor: "#ffc20d" }}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-[#1a6b3a] hover:text-[#0f4a27] transition-colors w-full text-center py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
