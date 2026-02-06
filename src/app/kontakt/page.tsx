"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Kontakt() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ─── Hero ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brainhance-dark leading-tight">
              Ihr erster Schritt zu weniger Administration und{" "}
              <span className="text-brainhance-blue">mehr Marge.</span>
            </h1>
            <p className="mt-6 text-lg text-brainhance-dark/60">
              Buchen Sie ein kostenloses Erstgespräch und erfahren Sie in 30 Minuten,
              welche Automatisierungen für Ihr Treuhandbüro den grössten Impact haben.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Calendly Embed ─── */}
      <section className="bg-brainhance-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              {/* Calendly Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="dashboard-placeholder min-h-[400px] rounded-xl">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-brainhance-blue/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-brainhance-blue/60 font-medium">
                      Calendly-Buchungswidget
                    </p>
                    <p className="text-xs text-brainhance-dark/40 mt-2">
                      Hier wird das Calendly-Embed eingebettet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Vertrauenselemente ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  ),
                  label: "Keine Vertragsbindung",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  ),
                  label: "Ergebnisse in 2 Wochen",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                  ),
                  label: "TREUHAND|SUISSE Partner",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                  ),
                  label: "Schweizer Datenverarbeitung",
                },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 bg-brainhance-blue/10 rounded-xl flex items-center justify-center text-brainhance-blue mx-auto">
                    {item.icon}
                  </div>
                  <p className="mt-3 text-sm font-medium text-brainhance-dark/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Kontaktdaten ─── */}
      <section className="bg-brainhance-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-brainhance-dark">
                Oder kontaktieren Sie uns direkt
              </h2>
              <div className="mt-8 space-y-4">
                <div className="glass-card p-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brainhance-blue/10 rounded-lg flex items-center justify-center text-brainhance-blue shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-brainhance-dark/50">Telefon</p>
                    <a
                      href="tel:+41783199143"
                      className="text-brainhance-dark font-semibold hover:text-brainhance-blue transition-colors"
                    >
                      +41 78 319 91 43
                    </a>
                  </div>
                </div>
                <div className="glass-card p-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-brainhance-blue/10 rounded-lg flex items-center justify-center text-brainhance-blue shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-brainhance-dark/50">E-Mail</p>
                    <a
                      href="mailto:info@brainhance.ch"
                      className="text-brainhance-dark font-semibold hover:text-brainhance-blue transition-colors"
                    >
                      info@brainhance.ch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
