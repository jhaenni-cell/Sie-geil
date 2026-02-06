"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/presse", label: "Presse" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brainhance-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-brainhance-dark">
              Brainhance
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brainhance-dark/70 hover:text-brainhance-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="https://brainhance.ch/kostenloses-erstgesprach"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-brainhance-blue text-white text-sm font-semibold rounded-full hover:bg-brainhance-blue-dark transition-colors"
          >
            Erstgespräch buchen
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-brainhance-dark transition-transform ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-brainhance-dark transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-brainhance-dark transition-transform ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-brainhance-dark/70 hover:text-brainhance-blue py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://brainhance.ch/kostenloses-erstgesprach"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-brainhance-blue text-white text-sm font-semibold rounded-full"
            >
              Erstgespräch buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
