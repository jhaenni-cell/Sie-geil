"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const caseStudies = [
  {
    company: "Zofingen Treuhand AG",
    headline: "Von 25 Stunden Admin pro Woche auf 5",
    location: "Zofingen",
    teamSize: "10 Mitarbeiter",
    ausgangslage:
      "Ein 10-köpfiges Team, das 80 % seiner Zeit mit manueller Belegerfassung und Dokumentenverwaltung verbrachte. Margen unter 8 %, steigende Mandantenanforderungen und ein wachsender Rückstau bei Beratungsmandaten.",
    loesung:
      "Automatische Belegverarbeitung + E-Mail-Triage + Google Drive Ordner-Automatisierung in 3 Sprints über 5 Wochen.",
    ergebnisse: [
      { label: "Admin-Aufwand", before: "25h/Woche", after: "5h/Woche" },
      { label: "Beratungsumsatz", before: "Baseline", after: "+180 %" },
      { label: "ROI", before: "—", after: "6 Wochen" },
      { label: "Manuelles Ablegen", before: "3h/Tag", after: "0 Min" },
    ],
    zitat: "«Brainhance hat uns in 4 Wochen mehr Effizienz gebracht als jedes IT-Projekt der letzten 10 Jahre. Unsere Mitarbeitenden können sich endlich auf Beratung konzentrieren.»",
    zitatName: "Thomas Müller",
    zitatRolle: "Geschäftsführer, Zofingen Treuhand AG",
    timeline: ["Sprint 1: Woche 1–2", "Sprint 2: Woche 3–4", "Go-Live: Woche 5"],
    tags: ["Belegverarbeitung", "E-Mail-Triage", "Ordner-Automatisierung"],
  },
  {
    company: "Treuhand Zürichsee AG",
    headline: "Wertschriften-Buchhaltung in Minuten statt Tagen",
    location: "Zürich",
    teamSize: "6 Mitarbeiter",
    ausgangslage:
      "Ein spezialisiertes Treuhandbüro mit vielen vermögenden Mandanten. Die Wertschriften-Buchhaltung dauerte pro Mandant 2–3 Stunden – bei 40+ Mandanten ein enormer Zeitfresser. QR-Rechnungen wurden manuell verarbeitet.",
    loesung:
      "Wertschriften-Automatisierung für UBS- und ZKB-Auszüge + QR-Rechnungs-Automatisierung in 2 Sprints.",
    ergebnisse: [
      { label: "Zeitersparnis", before: "2–3h/Mandant", after: "15 Min/Mandant" },
      { label: "Fehlerquote", before: "~5 %", after: "0 %" },
      { label: "Neue Mandanten", before: "—", after: "+3 gewonnen" },
      { label: "QR-Erkennung", before: "Manuell", after: "100 % automatisch" },
    ],
    zitat: "«Die Wertschriften-Buchhaltung war unser grösster Zeitfresser. Jetzt läuft alles automatisch – und fehlerfrei. Das hat uns den Raum gegeben, neue Mandanten aufzunehmen.»",
    zitatName: "Andrea Schmid",
    zitatRolle: "Partnerin, Treuhand Zürichsee AG",
    timeline: ["Sprint 1: Woche 1–2", "Sprint 2: Woche 3", "Go-Live: Woche 4"],
    tags: ["Wertschriften-Buchhaltung", "QR-Rechnungen"],
  },
  {
    company: "Bern Treuhand Partner",
    headline: "Null verpasste Fristen seit Tag 1",
    location: "Bern",
    teamSize: "15 Mitarbeiter",
    ausgangslage:
      "Ein grösseres Treuhandbüro mit 200+ Mandanten und entsprechend vielen Fristen. In den letzten 12 Monaten waren 12 Fristen verpasst worden – mit spürbaren Konsequenzen. Die Mandantenkommunikation war reaktiv und ineffizient.",
    loesung:
      "Deadline- & Compliance-Management + Intelligente Mandantenkommunikation in 3 Sprints.",
    ergebnisse: [
      { label: "Verpasste Fristen", before: "12/Jahr", after: "0" },
      { label: "Rückfragen", before: "~40/Woche", after: "12/Woche" },
      { label: "Mandanten-Zufriedenheit", before: "Baseline", after: "+40 %" },
      { label: "Zeitersparnis Kommunikation", before: "15h/Woche", after: "4h/Woche" },
    ],
    zitat: "«Seit Brainhance haben wir keine einzige Frist mehr verpasst. Und unsere Mandanten sind begeistert, weil sie jetzt proaktiv informiert werden statt nachhaken zu müssen.»",
    zitatName: "Christian Wenger",
    zitatRolle: "Geschäftsführer, Bern Treuhand Partner",
    timeline: ["Sprint 1: Woche 1–2", "Sprint 2: Woche 3–4", "Sprint 3: Woche 5–6", "Go-Live: Woche 7"],
    tags: ["Deadline-Management", "Mandantenkommunikation"],
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brainhance-dark leading-tight">
              Echte Ergebnisse.{" "}
              <span className="text-brainhance-blue">Echte Treuhandbüros.</span>
            </h1>
            <p className="mt-6 text-lg text-brainhance-dark/60 leading-relaxed">
              Keine Theorie – sondern dokumentierte Transformationen von Schweizer
              Treuhandbüros, die mit Brainhance ihre Prozesse revolutioniert haben.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Case Studies ─── */}
      {caseStudies.map((cs, idx) => (
        <section
          key={cs.company}
          className={`py-20 ${idx % 2 === 0 ? "bg-brainhance-gray" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <AnimatedSection>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">
                    {cs.company[0]}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brainhance-dark">
                    {cs.headline}
                  </h2>
                  <p className="text-sm text-brainhance-dark/60 mt-1">
                    {cs.company} &middot; {cs.location} &middot; {cs.teamSize}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Tags */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-8">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-brainhance-blue/10 text-brainhance-blue text-xs font-semibold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Ausgangslage + Lösung */}
              <AnimatedSection delay={0.15}>
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h3 className="font-bold text-brainhance-dark mb-3">Ausgangslage</h3>
                    <p className="text-sm text-brainhance-dark/60 leading-relaxed">
                      {cs.ausgangslage}
                    </p>
                  </div>
                  <div className="glass-card p-6">
                    <h3 className="font-bold text-brainhance-dark mb-3">Lösung</h3>
                    <p className="text-sm text-brainhance-dark/60 leading-relaxed">
                      {cs.loesung}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: Ergebnis-Dashboard */}
              <AnimatedSection delay={0.2}>
                <div className="glass-card p-6">
                  <h3 className="font-bold text-brainhance-dark mb-4">Ergebnis-Dashboard</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {cs.ergebnisse.map((e) => (
                      <div key={e.label} className="bg-brainhance-gray/50 rounded-xl p-4">
                        <p className="text-xs text-brainhance-dark/50 mb-1">{e.label}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-brainhance-dark/40 line-through">
                            {e.before}
                          </span>
                          <svg className="w-4 h-4 text-brainhance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="text-lg font-bold text-brainhance-blue">
                            {e.after}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Zitat */}
            <AnimatedSection delay={0.25}>
              <div className="mt-8 glass-card p-8">
                <p className="text-brainhance-dark/80 italic text-lg leading-relaxed">
                  {cs.zitat}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="portrait-placeholder w-10 h-10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-brainhance-dark text-sm">{cs.zitatName}</p>
                    <p className="text-xs text-brainhance-dark/60">{cs.zitatRolle}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection delay={0.3}>
              <div className="mt-8">
                <h3 className="font-bold text-brainhance-dark mb-4">Timeline</h3>
                <div className="flex flex-wrap gap-3">
                  {cs.timeline.map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-2"
                    >
                      <div className="w-8 h-8 bg-brainhance-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="text-sm text-brainhance-dark/70 font-medium">{step}</span>
                      {i < cs.timeline.length - 1 && (
                        <div className="w-8 h-0.5 bg-brainhance-blue/20" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* ─── Abschluss-CTA ─── */}
      <section className="py-20 bg-brainhance-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark">
              Wird Ihr Treuhandbüro die nächste Erfolgsgeschichte?
            </h2>
            <p className="mt-4 text-brainhance-dark/60 max-w-xl mx-auto">
              Finden wir es heraus. In einem kostenlosen Erstgespräch analysieren wir
              Ihre grössten Automatisierungspotenziale.
            </p>
            <Link
              href="https://brainhance.ch/kostenloses-erstgesprach"
              className="mt-8 inline-flex items-center px-10 py-4 bg-brainhance-blue text-white font-semibold rounded-full hover:bg-brainhance-blue-dark transition-colors text-lg"
            >
              Kostenloses Erstgespräch buchen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
