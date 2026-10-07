import { Wallet, Target, Repeat, TrendingUp } from "lucide-react";
import { USE_CASES } from "@/lib/content";

const ICONS = { Wallet, Target, Repeat, TrendingUp };

export default function Benefits() {
  return (
    <section id="use-cases" className="border-y border-line bg-mist py-20 sm:py-28">
      <div className="container-page">
        <h2 className="h2 max-w-xl">Built for the questions you already have.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {USE_CASES.map((u) => { const Icon = ICONS[u.icon]; return (
            <article key={u.title} className="bg-white p-7 transition-colors hover:bg-brand-soft sm:p-9">
              <Icon size={22} className="text-brand" aria-hidden />
              <h3 className="mt-5 font-display text-xl font-semibold">{u.title}</h3>
              <p className="mt-2 max-w-sm leading-relaxed text-slate">{u.body}</p>
            </article>); })}
        </div>
      </div>
    </section>
  );
}
