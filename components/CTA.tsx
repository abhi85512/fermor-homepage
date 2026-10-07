"use client";
import { useState } from "react";
import { Check } from "lucide-react";

export default function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="get-started" className="container-page pb-20 sm:pb-28">
      <div className="rounded-xl bg-ink px-6 py-14 text-white sm:px-14 sm:py-20">
        <h2 className="font-display max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">See your whole financial picture in five minutes.</h2>
        <p className="mt-4 max-w-md text-white/70">Connect an account, review your first insights and set one goal. Cancel any time.</p>
        {sent ? (
          <p role="status" className="mt-8 flex items-center gap-2 text-white">
            <Check size={20} aria-hidden /> You're on the list. We'll email you when your account is ready.
          </p>
        ) : (
          <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" required placeholder="you@example.com" className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus-visible:outline-white" />
            <button type="submit" className="btn bg-white text-ink hover:bg-brand-soft">Get Started</button>
          </form>
        )}
      </div>
    </section>
  );
}