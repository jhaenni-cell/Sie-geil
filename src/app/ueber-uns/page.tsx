"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";

const teamMembers = [
  {
    name: "Jannik Haenni",
    role: "Co-Founder & Automation Architect",
    quote: "«Jeder manuelle Prozess ist eine Chance, die wir für unsere Kunden in Effizienz verwandeln.»",
  },
  {
    name: "Luca Fischer",
    role: "Co-Founder & Business Development",
    quote: "«Wir bauen keine Software – wir bauen Mitarbeiter, die nie krank sind und nie Ferien nehmen.»",
  },
];

const werte = [
  {
    title: "Ergebnisorientiert",
    desc: "Kein Feature ohne messbaren Impact. Wir messen uns an den Resultaten unserer Kunden.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
  {
    title: "Schweizer Präzision",
    desc: "Höchste Qualitätsstandards, lokale Datenverarbeitung und Compliance – ohne Kompromisse.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "Partnership",
    desc: "Wir sind kein Lieferant – wir sind Ihr Partner. Ihr Erfolg ist unser Erfolg.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
  {
    title: "Geschwindigkeit",
    desc: "Erste Ergebnisse in Tagen, nicht Monaten. Schnelle Iterationen statt endloser Planung.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
];

const skills = [
  { name: "N8N Automation", level: 95 },
  { name: "Google Workspace Integration", level: 90 },
  { name: "KI-Dokumentenverarbeitung", level: 88 },
  { name: "Treuhand-Prozesse", level: 92 },
  { name: "API-Integrationen", level: 85 },
];

export default function UeberUns() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brainhance-dark leading-tight">
              Die Menschen hinter den{" "}
              <span className="text-brainhance-blue">digitalen Mitarbeitern.</span>
            </h1>
            <p className="mt-6 text-lg text-brainhance-dark/60 leading-relaxed">
              Wir sind ein Team von Automatisierungs-Experten und Treuhand-Kennern, die
              eine Mission verbindet: Schweizer Treuhandbüros von repetitiver Arbeit zu
              befreien – damit sie sich auf das konzentrieren können, was wirklich zählt:
              ihre Mandanten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Event-Bilder ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <AnimatedSection key={n} delay={n * 0.08}>
                <div className="image-placeholder aspect-video rounded-2xl">
                  <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Team-/Event-Foto {n}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Firmen-KPIs ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { target: 20, suffix: "+", label: "Büros betreut" },
              { target: 50, suffix: "+", label: "Workflows automatisiert" },
              { target: 14, suffix: " Tage", prefix: "Ø ", label: "Bis zum Ergebnis" },
              { target: 100, suffix: " %", label: "Schweizer Datenverarbeitung" },
            ].map((kpi, i) => (
              <AnimatedSection key={kpi.label} delay={i * 0.1}>
                <div className="glass-card p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-brainhance-blue">
                    <CounterAnimation
                      target={kpi.target}
                      suffix={kpi.suffix}
                      prefix={kpi.target === 14 ? "Ø " : ""}
                    />
                  </div>
                  <p className="mt-2 text-sm text-brainhance-dark/60">{kpi.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Geschichte ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark">
              Unsere Geschichte
            </h2>
            <div className="mt-8 space-y-4 text-brainhance-dark/70 leading-relaxed">
              <p>
                Brainhance entstand aus einer einfachen Beobachtung: Treuhandbüros in der
                Schweiz verbringen den Grossteil ihrer Zeit mit administrativen Aufgaben –
                Belegerfassung, E-Mail-Korrespondenz, Fristüberwachung – anstatt mit dem,
                was ihre Mandanten wirklich brauchen: fundierte Beratung.
              </p>
              <p>
                Als wir uns mit den Prozessen dutzender Treuhandbüros beschäftigten, wurde
                klar: Die Branche braucht keine weiteren Tools. Sie braucht digitale
                Mitarbeiter, die repetitive Aufgaben komplett übernehmen – intelligent,
                zuverlässig und sofort einsatzbereit.
              </p>
              <p>
                Heute arbeiten wir als offizieller Startup-Partner von TREUHAND|SUISSE und
                helfen Treuhandbüros in der ganzen Deutschschweiz, ihre Margen zu steigern
                und ihre Teams zu entlasten. Nicht durch Theorie, sondern durch Workflows,
                die ab Tag 1 funktionieren.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Unser Team
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.15}>
                <div className="glass-card p-8 text-center">
                  <div className="portrait-placeholder w-28 h-28 mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brainhance-dark">{member.name}</h3>
                  <p className="text-sm text-brainhance-blue font-semibold mt-1">{member.role}</p>
                  <p className="mt-4 text-sm text-brainhance-dark/60 italic">{member.quote}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Werte ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Unsere Werte
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werte.map((wert, i) => (
              <AnimatedSection key={wert.title} delay={i * 0.1}>
                <div className="glass-card p-6 h-full">
                  <div className="w-12 h-12 bg-brainhance-blue/10 rounded-xl flex items-center justify-center text-brainhance-blue">
                    {wert.icon}
                  </div>
                  <h3 className="mt-4 font-bold text-brainhance-dark">{wert.title}</h3>
                  <p className="mt-2 text-sm text-brainhance-dark/60">{wert.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Expertise-Dashboard ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Unsere Expertise
            </h2>
          </AnimatedSection>
          <div className="mt-12 max-w-2xl mx-auto space-y-6">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.name} delay={i * 0.1}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-brainhance-dark">{skill.name}</span>
                    <span className="text-sm font-bold text-brainhance-blue">{skill.level} %</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brainhance-blue rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark">
              Lust, uns kennenzulernen?
            </h2>
            <p className="mt-4 text-brainhance-dark/60 max-w-xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie wir
              Ihr Treuhandbüro transformieren können.
            </p>
            <Link
              href="https://brainhance.ch/kostenloses-erstgesprach"
              className="mt-8 inline-flex items-center px-10 py-4 bg-brainhance-blue text-white font-semibold rounded-full hover:bg-brainhance-blue-dark transition-colors text-lg"
            >
              Erstgespräch buchen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
