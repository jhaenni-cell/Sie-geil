"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import { useState } from "react";

/* ───────────────────── Data ───────────────────── */

const serviceTicker = [
  "Belegverarbeitung",
  "Mandantenkommunikation",
  "Buchhaltungs-Automatisierung",
  "KI-Dokumentenerkennung",
  "Deadline-Management",
  "Wertschriften-Automatisierung",
  "E-Mail-Kategorisierung",
  "QR-Rechnungen",
];

const useCases = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    title: "Automatische Belegverarbeitung",
    tagline: "Belege rein. Buchung raus.",
    metric: "85 % weniger manuelle Erfassung",
    desc: "Belege werden automatisch erkannt, klassifiziert und verbucht – ohne manuelles Abtippen.",
    dashboard: "Live Workflow-Ansicht",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    ),
    title: "Intelligente Mandantenkommunikation",
    tagline: "Schluss mit «Bitte senden Sie uns noch...»-Mails.",
    metric: "70 % weniger Rückfragen",
    desc: "Automatische Erinnerungen, Statusupdates und Dokumentenanfragen – personalisiert und termingerecht.",
    dashboard: "Kommunikations-Dashboard",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: "Wertschriften-Buchhaltung",
    tagline: "PDF-Bankauszüge automatisch verbucht.",
    metric: "90 % Zeitersparnis",
    desc: "Bankauszüge von UBS, ZKB und weiteren werden automatisch geparst und verbucht.",
    dashboard: "Wertschriften-Workflow",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: "E-Mail-Kategorisierung & Triage",
    tagline: "Jede E-Mail landet sofort beim richtigen Mitarbeiter.",
    metric: "90 % automatisch kategorisiert",
    desc: "KI erkennt den Inhalt, priorisiert und leitet E-Mails direkt an die zuständige Person weiter.",
    dashboard: "E-Mail-Triage-Dashboard",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
    ),
    title: "QR-Rechnungs-Automatisierung",
    tagline: "QR-Rechnungen verarbeiten, bevor Ihr Team den Kaffee fertig hat.",
    metric: "100 % QR-Code-Erkennung",
    desc: "Alle QR-Rechnungen werden automatisch eingelesen, validiert und zur Zahlung vorbereitet.",
    dashboard: "QR-Rechnungs-Workflow",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Deadline- & Compliance-Management",
    tagline: "Nie wieder eine Frist verpassen.",
    metric: "Null verpasste Fristen",
    desc: "Automatische Fristüberwachung für MWST, Steuern und Sozialversicherungen mit Eskalationslogik.",
    dashboard: "Compliance-Dashboard",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
    ),
    title: "Google Drive Ordner-Automatisierung",
    tagline: "Jeder Beleg am richtigen Ort. Automatisch.",
    metric: "0 Min manuelles Ablegen",
    desc: "Belege, Verträge und Dokumente werden automatisch in die richtige Ordnerstruktur einsortiert.",
    dashboard: "Ordner-Workflow",
  },
];

const painPoints = [
  { icon: "📉", title: "Margen von 5–15 %", desc: "Statt 25 %+, weil manuelle Prozesse die Rentabilität auffressen." },
  { icon: "😫", title: "Überlastete Teams", desc: "Sachbearbeiter verbringen 60 % ihrer Zeit mit repetitiver Arbeit." },
  { icon: "🔍", title: "Stundenlange Suche", desc: "Belege, E-Mails und Dokumente liegen verstreut in verschiedenen Systemen." },
  { icon: "🚪", title: "Abwandernde Mandanten", desc: "Weil Beratung zu kurz kommt und nur noch Administration stattfindet." },
];

const branchenFakten = [
  { number: "15'000+", label: "Fehlende Fachkräfte", desc: "Der Treuhand-Branche fehlen tausende qualifizierte Mitarbeitende." },
  { number: "42 %", label: "Regulierungsdruck", desc: "Mehr regulatorische Anforderungen in den letzten 5 Jahren." },
  { number: "< 12 %", label: "KI-Adoption", desc: "Weniger als 12 % der Treuhandbüros nutzen heute KI." },
  { number: "5–15 %", label: "Margen unter Druck", desc: "Branchendurchschnitt weit unter dem Potenzial." },
];

const testimonials = [
  {
    quote: "«Brainhance hat uns in 4 Wochen mehr Effizienz gebracht als jedes IT-Projekt zuvor. Unsere Mitarbeitenden können sich endlich auf Beratung konzentrieren.»",
    name: "Thomas Müller",
    role: "Geschäftsführer",
    company: "Zofingen Treuhand AG",
  },
  {
    quote: "«Die automatische Belegverarbeitung spart uns 20 Stunden pro Woche. Das ist wie ein zusätzlicher Mitarbeiter – ohne Lohnkosten.»",
    name: "Sandra Keller",
    role: "Partnerin",
    company: "Contofox AG",
  },
  {
    quote: "«Seit wir Brainhance nutzen, haben wir keine einzige Frist mehr verpasst. Das gibt uns und unseren Mandanten enorme Sicherheit.»",
    name: "Marco Bernasconi",
    role: "Inhaber",
    company: "Bernasconi Treuhand",
  },
];

/* ───────────────────── Page ───────────────────── */

export default function Home() {
  const [mitarbeiter, setMitarbeiter] = useState(10);
  const [stundensatz, setStundensatz] = useState(150);
  const [stunden, setStunden] = useState(15);
  const monatlich = mitarbeiter * stundensatz * stunden * 4;
  const jaehrlich = monatlich * 12;

  return (
    <div className="pt-16 md:pt-20">
      {/* ─── Ticker ─── */}
      <div className="bg-brainhance-dark text-white overflow-hidden py-3">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold tracking-widest uppercase">
              FÜR SCHWEIZER TREUHANDBÜROS, DIE MEHR WOLLEN.
            </span>
          ))}
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <AnimatedSection className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brainhance-dark leading-tight">
              Weniger Administration.{" "}
              <span className="text-brainhance-blue">Mehr Beratung.</span>{" "}
              Maximale Marge.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brainhance-dark/60 max-w-3xl leading-relaxed">
              Wir bauen digitale Mitarbeiter für Ihr Treuhandbüro – KI-gestützte
              Automatisierungen, die Belegverarbeitung, Mandantenkommunikation und
              Buchhaltungs-Workflows übernehmen. Ohne zusätzliches Personal. Ohne
              monatelanges IT-Projekt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="https://brainhance.ch/kostenloses-erstgesprach"
                className="inline-flex items-center justify-center px-8 py-4 bg-brainhance-blue text-white font-semibold rounded-full hover:bg-brainhance-blue-dark transition-colors text-base"
              >
                Kostenloses Erstgespräch buchen
              </Link>
              <Link
                href="#use-cases"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brainhance-blue text-brainhance-blue font-semibold rounded-full hover:bg-brainhance-blue/5 transition-colors text-base"
              >
                Unsere Use Cases ansehen
              </Link>
            </div>
          </AnimatedSection>

          {/* Logo-Leiste */}
          <AnimatedSection className="mt-16 border-t border-gray-100 pt-10" delay={0.2}>
            <p className="text-xs uppercase tracking-widest text-brainhance-dark/40 mb-6 font-semibold">
              Vertraut von führenden Treuhandbüros
            </p>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {["Zofingen Treuhand", "Contofox", "Dietrich Edelmetalle", "TREUHAND|SUISSE"].map(
                (name) => (
                  <div
                    key={name}
                    className="h-10 px-6 bg-gray-100 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-sm font-semibold text-gray-400">{name}</span>
                  </div>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── KPI Dashboard ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { target: 25, suffix: "h", prefix: "Bis zu ", label: "Eingesparte Stunden/Woche" },
              { target: 30, suffix: " %", prefix: "+", label: "Mehr Marge in 90 Tagen" },
              { target: 90, suffix: " %", prefix: "", label: "Weniger manuelle Administration" },
              { target: 50, suffix: "+", prefix: "", label: "Automatisierte Workflows live" },
            ].map((kpi, i) => (
              <AnimatedSection key={kpi.label} delay={i * 0.1}>
                <div className="glass-card p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-brainhance-blue">
                    <CounterAnimation
                      target={kpi.target}
                      suffix={kpi.suffix}
                      prefix={kpi.prefix}
                    />
                  </div>
                  <p className="mt-2 text-sm text-brainhance-dark/60">{kpi.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Ticker ─── */}
      <section className="py-6 border-y border-gray-100 overflow-hidden">
        <div className="flex animate-scroll-left-slow whitespace-nowrap">
          {[...Array(3)].map((_, r) =>
            serviceTicker.map((s, i) => (
              <span
                key={`${r}-${i}`}
                className="mx-6 text-sm font-semibold text-brainhance-dark/40 uppercase tracking-wider"
              >
                {s} <span className="text-brainhance-blue mx-2">&middot;</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* ─── Event-Bilder ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Brainhance live erleben
            </h2>
            <p className="mt-4 text-center text-brainhance-dark/60 max-w-2xl mx-auto">
              Von Workshops mit Treuhandbüros bis zu Branchenevents – wir sind dort,
              wo die Treuhand-Zukunft gestaltet wird.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <AnimatedSection key={n} delay={n * 0.1}>
                <div className="image-placeholder aspect-video rounded-2xl">
                  <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Event-Foto {n}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Problem-Sektion ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark">
              «Wir haben doch schon ein DMS – reicht das nicht?»
            </h2>
            <p className="mt-6 text-lg text-brainhance-dark/60 leading-relaxed">
              Ein DMS speichert Dokumente. Aber es verarbeitet keine Belege, beantwortet
              keine Mandanten-E-Mails und überwacht keine Fristen. Die Wahrheit: Ihr
              Team verliert jeden Monat bis zu{" "}
              <span className="text-brainhance-blue font-bold text-2xl">250 Stunden</span>{" "}
              mit Aufgaben, die ein digitaler Mitarbeiter in Sekunden erledigt.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.1}>
                <div className="glass-card p-6 h-full">
                  <span className="text-3xl">{point.icon}</span>
                  <h3 className="mt-4 font-bold text-brainhance-dark">{point.title}</h3>
                  <p className="mt-2 text-sm text-brainhance-dark/60">{point.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Branchen-Fakten ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Die Treuhand-Branche im Wandel
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branchenFakten.map((fact, i) => (
              <AnimatedSection key={fact.label} delay={i * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="text-3xl font-extrabold text-brainhance-blue">{fact.number}</div>
                  <h3 className="mt-2 font-bold text-brainhance-dark">{fact.label}</h3>
                  <p className="mt-2 text-sm text-brainhance-dark/60">{fact.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3-Schritte-Prozess ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Digitale Mitarbeiter, die sofort liefern.
            </h2>
            <p className="mt-4 text-center text-brainhance-dark/60 max-w-2xl mx-auto">
              Unser Ansatz: Schnell, pragmatisch und ergebnisorientiert.
            </p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Diagnose-Workshop",
                duration: "90 Minuten",
                desc: "Wir analysieren Ihre Prozesse, identifizieren die grössten Zeitfresser und definieren die ersten Automatisierungen mit dem höchsten ROI.",
              },
              {
                step: "02",
                title: "Sprint-Umsetzung",
                duration: "2–4 Wochen",
                desc: "Unsere Automation Architects bauen Ihre digitalen Mitarbeiter – getestet, dokumentiert und ready for production.",
              },
              {
                step: "03",
                title: "Live & Optimierung",
                duration: "Fortlaufend",
                desc: "Ihre Workflows gehen live. Wir monitoren die Performance und optimieren kontinuierlich für maximale Effizienz.",
              },
            ].map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.15}>
                <div className="glass-card p-8 h-full relative">
                  <div className="text-5xl font-extrabold text-brainhance-blue/10">
                    {step.step}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-brainhance-dark">
                    {step.title}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-brainhance-blue/10 text-brainhance-blue text-xs font-semibold rounded-full">
                    {step.duration}
                  </span>
                  <p className="mt-4 text-sm text-brainhance-dark/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROI-Rechner ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Was kostet Sie der Status Quo?
            </h2>
            <p className="mt-4 text-center text-brainhance-dark/60">
              Berechnen Sie, wie viel Geld Ihr Treuhandbüro jeden Monat durch manuelle Prozesse verliert.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12 glass-card p-8 md:p-12 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-brainhance-dark mb-2">
                    Mitarbeiter
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={mitarbeiter}
                    onChange={(e) => setMitarbeiter(Number(e.target.value))}
                    className="w-full accent-brainhance-blue"
                  />
                  <div className="text-2xl font-bold text-brainhance-blue mt-1">{mitarbeiter}</div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brainhance-dark mb-2">
                    Stundensatz (CHF)
                  </label>
                  <input
                    type="range"
                    min={80}
                    max={300}
                    step={10}
                    value={stundensatz}
                    onChange={(e) => setStundensatz(Number(e.target.value))}
                    className="w-full accent-brainhance-blue"
                  />
                  <div className="text-2xl font-bold text-brainhance-blue mt-1">CHF {stundensatz}</div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brainhance-dark mb-2">
                    Verlorene Stunden/Woche
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={40}
                    value={stunden}
                    onChange={(e) => setStunden(Number(e.target.value))}
                    className="w-full accent-brainhance-blue"
                  />
                  <div className="text-2xl font-bold text-brainhance-blue mt-1">{stunden}h</div>
                </div>
              </div>
              <div className="mt-10 border-t border-gray-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-sm text-brainhance-dark/60">Monatlicher Verlust</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-red-500 mt-1">
                    CHF {monatlich.toLocaleString("de-CH")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brainhance-dark/60">Jährlicher Verlust</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-red-500 mt-1">
                    CHF {jaehrlich.toLocaleString("de-CH")}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Use Cases ─── */}
      <section id="use-cases" className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              7 Automatisierungen, die Ihr Treuhandbüro transformieren
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.title} delay={i * 0.08}>
                <div className="glass-card p-6 h-full flex flex-col">
                  <div className="w-12 h-12 bg-brainhance-blue/10 rounded-xl flex items-center justify-center text-brainhance-blue">
                    {uc.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brainhance-dark">{uc.title}</h3>
                  <p className="text-sm text-brainhance-blue font-semibold mt-1">{uc.tagline}</p>
                  <p className="mt-3 text-sm text-brainhance-dark/60 flex-1">{uc.desc}</p>
                  <div className="mt-4 px-3 py-1.5 bg-brainhance-blue/10 rounded-lg text-xs font-bold text-brainhance-blue inline-block w-fit">
                    {uc.metric}
                  </div>
                  <div className="dashboard-placeholder mt-4 min-h-[120px]">
                    {uc.dashboard}
                  </div>
                  <Link
                    href="/case-studies"
                    className="mt-4 text-sm font-semibold text-brainhance-blue hover:text-brainhance-blue-dark transition-colors"
                  >
                    Case Study lesen &rarr;
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark text-center">
              Was unsere Kunden sagen
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <p className="text-brainhance-dark/80 italic flex-1 leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="portrait-placeholder w-10 h-10">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brainhance-dark text-sm">{t.name}</p>
                      <p className="text-xs text-brainhance-dark/60">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Abschluss-CTA ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-brainhance-dark">
              Bereit, Ihr Treuhandbüro in die Zukunft zu führen?
            </h2>
            <Link
              href="https://brainhance.ch/kostenloses-erstgesprach"
              className="mt-8 inline-flex items-center px-10 py-4 bg-brainhance-blue text-white font-semibold rounded-full hover:bg-brainhance-blue-dark transition-colors text-lg"
            >
              Kostenloses Erstgespräch buchen
            </Link>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                "Keine Vertragsbindung",
                "Ergebnisse in 2 Wochen",
                "TREUHAND|SUISSE Partner",
                "Schweizer Datenverarbeitung",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-sm text-brainhance-dark/60"
                >
                  <svg className="w-4 h-4 text-brainhance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
