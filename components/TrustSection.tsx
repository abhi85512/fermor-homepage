import { Lock, Eye, ShieldCheck } from "lucide-react";
import { TRUST } from "@/lib/content";

const ICONS = { Lock, Eye, ShieldCheck };

export default function TrustSection() {
  return (
    <section id="security" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="h2">Your data stays yours.</h2>
          <p className="mt-4 max-w-md text-lg text-slate">We ask for the least access we need, and we never sell your data.</p>
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {TRUST.map((t) => { const Icon = ICONS[t.icon]; return (
            <li key={t.title} className="flex gap-5 py-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand"><Icon size={20} aria-hidden /></span>
              <div><h3 className="font-display text-lg font-semibold">{t.title}</h3><p className="mt-1 text-slate">{t.body}</p></div>
            </li>); })}
        </ul>
      </div>
    </section>
  );
}
