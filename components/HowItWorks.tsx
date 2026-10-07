"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { STEPS } from "@/lib/content";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="container-page">
        <h2 className="h2 max-w-xl">From not knowing to knowing what to do.</h2>
        <p className="mt-4 max-w-xl text-lg text-slate">Three steps, in the order people actually need them.</p>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div role="tablist" aria-label="Fermor framework" className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col">
            {STEPS.map((s, i) => (
              <button key={s.id} role="tab" id={`tab-${s.id}`} aria-selected={i === active} aria-controls={`panel-${s.id}`} onClick={() => setActive(i)}
                className={`flex items-center gap-3 rounded-md border px-5 py-4 text-left transition-colors ${i === active ? "border-brand bg-brand-soft text-brand-dark" : "border-line hover:border-ink"}`}>
                <span className="font-display text-xl font-semibold">{s.title}</span>
              </button>
            ))}
          </div>
          <div role="tabpanel" id={`panel-${step.id}`} aria-labelledby={`tab-${step.id}`} key={step.id} className="rise rounded-xl border border-line p-6 sm:p-10 lg:col-span-8">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">{step.headline}</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-slate">{step.body}</p>
            <ul className="mt-8 space-y-4">
              {step.points.map((p) => (<li key={p} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden /><span>{p}</span></li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
