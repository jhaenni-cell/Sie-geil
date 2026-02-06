import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brainhance-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Firma & Kontakt */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brainhance-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold">Brainhance</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Digitale Mitarbeiter für Schweizer Treuhandbüros. KI-gestützte
              Automatisierungen für mehr Effizienz und höhere Margen.
            </p>
            <div className="text-sm text-white/60 space-y-1">
              <p>Tel: +41 78 319 91 43</p>
              <p>info@brainhance.ch</p>
            </div>
          </div>

          {/* Column 2: Seiten */}
          <div>
            <h4 className="font-semibold mb-4">Seiten</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Start" },
                { href: "/#use-cases", label: "Use Cases" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/presse", label: "Presse" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-brainhance-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Partner & Zertifizierungen */}
          <div>
            <h4 className="font-semibold mb-4">Partner & Zertifizierungen</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-brainhance-blue/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-brainhance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-white/60">TREUHAND|SUISSE Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-brainhance-blue/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-brainhance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-white/60">Schweizer Datenverarbeitung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-brainhance-blue/20 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-brainhance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-white/60">Keine Vertragsbindung</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brainhance-blue/20 transition-colors"
                  aria-label={platform}
                >
                  <span className="text-xs text-white/60">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; 2025 Brainhance GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Datenschutz
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
