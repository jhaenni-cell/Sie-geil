"use client";

import AnimatedSection from "@/components/AnimatedSection";

const medienberichte = [
  {
    datum: "Januar 2025",
    medium: "Handelszeitung",
    headline: "Wie KI die Treuhand-Branche revolutioniert",
  },
  {
    datum: "November 2024",
    medium: "TREUHAND|SUISSE Journal",
    headline: "Startup-Partner Brainhance: Digitale Mitarbeiter für Treuhandbüros",
  },
  {
    datum: "September 2024",
    medium: "Netzwoche",
    headline: "Automatisierung in der Buchhaltung: Ein Praxisbericht",
  },
];

export default function Presse() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brainhance-dark leading-tight">
              Brainhance in den Medien
            </h1>
            <p className="mt-6 text-lg text-brainhance-dark/60 leading-relaxed">
              Pressematerial, Medienberichte und Kontakt für Journalisten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Über Brainhance ─── */}
      <section className="bg-brainhance-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h2 className="text-2xl font-bold text-brainhance-dark mb-6">
              Über Brainhance
            </h2>
            <blockquote className="border-l-4 border-brainhance-blue pl-6 text-brainhance-dark/70 leading-relaxed">
              Brainhance GmbH ist eine Schweizer AI-Agentur, die sich auf die
              Automatisierung und Digitalisierung von Treuhandbüros spezialisiert hat.
              Als Startup-Partner von TREUHAND|SUISSE entwickelt Brainhance KI-gestützte
              digitale Mitarbeiter, die repetitive Prozesse wie Belegverarbeitung,
              Mandantenkommunikation und Compliance-Management automatisieren. Gegründet
              in der Schweiz, betreut Brainhance Treuhandbüros in der ganzen
              Deutschschweiz.
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Fakten ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-brainhance-dark mb-8">
              Fakten auf einen Blick
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
              {[
                { label: "Gründung", value: "2024" },
                { label: "Sitz", value: "Schweiz" },
                { label: "Branche", value: "KI-Automatisierung für Treuhand & Buchhaltung" },
                { label: "Partnerschaft", value: "TREUHAND|SUISSE Startup Partner" },
                { label: "Kunden", value: "XX+ Treuhandbüros in der Deutschschweiz" },
              ].map((fact) => (
                <div key={fact.label} className="flex gap-3 py-3">
                  <span className="text-sm font-semibold text-brainhance-dark min-w-[120px]">
                    {fact.label}
                  </span>
                  <span className="text-sm text-brainhance-dark/60">{fact.value}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Pressematerial ─── */}
      <section className="bg-brainhance-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-brainhance-dark mb-8">
              Pressematerial zum Download
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Brainhance Logo",
                  formats: "PNG, SVG",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  ),
                },
                {
                  title: "Gründer-Portraits",
                  formats: "Hochauflösend, JPG",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  ),
                },
                {
                  title: "Firmenbeschreibung",
                  formats: "Kurzversion & Langversion, PDF",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-6">
                  <div className="text-brainhance-blue mb-3">{item.icon}</div>
                  <h3 className="font-bold text-brainhance-dark">{item.title}</h3>
                  <p className="text-xs text-brainhance-dark/60 mt-1">{item.formats}</p>
                  <button className="mt-4 px-4 py-2 border border-brainhance-blue text-brainhance-blue text-sm font-semibold rounded-lg hover:bg-brainhance-blue/5 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Medienberichte ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-brainhance-dark mb-8">
              Medienberichte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {medienberichte.map((bericht) => (
                <div key={bericht.headline} className="glass-card p-6">
                  <p className="text-xs text-brainhance-dark/40 mb-2">{bericht.datum}</p>
                  <div className="h-8 px-4 bg-gray-100 rounded flex items-center w-fit mb-3">
                    <span className="text-xs font-semibold text-gray-400">{bericht.medium}</span>
                  </div>
                  <h3 className="font-bold text-brainhance-dark">{bericht.headline}</h3>
                  <button className="mt-4 text-sm font-semibold text-brainhance-blue hover:text-brainhance-blue-dark transition-colors">
                    Artikel lesen &rarr;
                  </button>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Pressekontakt ─── */}
      <section className="bg-brainhance-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-2xl font-bold text-brainhance-dark mb-6">
              Pressekontakt
            </h2>
            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <div className="portrait-placeholder w-16 h-16 shrink-0">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-brainhance-dark">Jannik Haenni</h3>
                  <p className="text-sm text-brainhance-blue font-semibold">Co-Founder</p>
                  <div className="mt-4 space-y-2 text-sm text-brainhance-dark/60">
                    <p>
                      E-Mail:{" "}
                      <a href="mailto:presse@brainhance.ch" className="text-brainhance-blue hover:underline">
                        presse@brainhance.ch
                      </a>
                    </p>
                    <p>
                      Telefon:{" "}
                      <a href="tel:+41783199143" className="text-brainhance-blue hover:underline">
                        +41 78 319 91 43
                      </a>
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-brainhance-dark/60 leading-relaxed">
                    Für Interviewanfragen, Zitate oder Hintergrundinformationen stehen
                    wir Ihnen gerne zur Verfügung.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
