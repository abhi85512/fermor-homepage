"use client";
import { useState } from "react";
import { Lightbulb, ArrowUpRight } from "lucide-react";
import { SPENDING, GOALS } from "@/lib/content";
import { useCountUp, inr } from "@/lib/useCountUp";

const VIEWS = ["Spending", "Goals"] as const;

export default function FinancialDashboard() {
  const [view, setView] = useState<(typeof VIEWS)[number]>("Spending");
  const score = useCountUp(78);
  const saved = useCountUp(102500);
  return (
    <div className="rise rounded-xl border border-line bg-white p-4 shadow-[0_20px_50px_-24px_rgba(15,30,43,.25)] sm:p-6" style={{ animationDelay: ".15s" }} role="group" aria-label="Fermor dashboard preview with sample data">
      <div className="grid gap-4 sm:grid-cols-5">
        <div className="rounded-lg bg-mist p-4 sm:col-span-2">
          <p className="text-sm text-slate">Financial health</p>
          <div className="mt-2 flex items-end gap-2"><span className="font-display text-5xl font-semibold tabular-nums">{score}</span><span className="pb-1.5 text-sm text-slate">/ 100</span></div>
          <p className="mt-2 flex items-center gap-1 text-sm font-medium text-brand"><ArrowUpRight size={15} aria-hidden />6 points since March</p>
        </div>
        <div className="rounded-lg bg-mist p-4 sm:col-span-3">
          <p className="text-sm text-slate">Total saved</p>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums">{inr(saved)}</p>
          <p className="mt-2 text-sm text-slate">Safe to spend today: <span className="font-medium text-ink">₹1,840</span></p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div role="tablist" aria-label="Dashboard view" className="flex rounded-md border border-line p-0.5">
          {VIEWS.map((v) => (
            <button key={v} role="tab" aria-selected={view === v} onClick={() => setView(v)} className={`rounded px-3 py-1.5 text-sm transition-colors ${view === v ? "bg-ink text-white" : "text-slate hover:text-ink"}`}>{v}</button>
          ))}
        </div>
        <span className="text-sm text-slate">April</span>
      </div>

      <div className="mt-4 min-h-[188px]" role="tabpanel" key={view}>
        {view === "Spending" ? (
          <ul className="space-y-3.5">
            {SPENDING.map((s) => (
              <li key={s.name}>
                <div className="mb-1.5 flex justify-between text-sm"><span>{s.name}</span><span className="tabular-nums text-slate">{inr(s.amount)}</span></div>
                <div className="h-2 rounded-full bg-mist"><div className="grow h-2 rounded-full bg-brand" style={{ width: `${s.pct * 2}%` }} /></div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-5">
            {GOALS.map((g) => { const p = Math.round((g.saved / g.target) * 100); return (
              <li key={g.name}>
                <div className="mb-1.5 flex justify-between text-sm"><span>{g.name}</span><span className="tabular-nums text-slate">{inr(g.saved)} of {inr(g.target)}</span></div>
                <div className="h-2 rounded-full bg-mist" role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100} aria-label={g.name}><div className="grow h-2 rounded-full bg-brand" style={{ width: `${p}%` }} /></div>
              </li>); })}
          </ul>
        )}
      </div>

      <div className="mt-4 flex gap-3 rounded-lg border border-line border-l-[3px] border-l-signal p-3.5">
        <Lightbulb size={18} className="mt-0.5 shrink-0 text-signal" aria-hidden />
        <p className="text-sm leading-relaxed text-slate">Your streaming and food-delivery spend rose <span className="font-medium text-ink">₹1,350</span> this month. Moving ₹1,000 to your Goa trip keeps you on track for August.</p>
      </div>
    </div>
  );
}
