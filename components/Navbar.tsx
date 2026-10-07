"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" aria-label="Fermor home"><Logo /></a>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (<a key={n.href} href={n.href} className="text-[15px] text-slate transition-colors hover:text-ink">{n.label}</a>))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="px-3 py-2 text-[15px] text-slate hover:text-ink">Log in</a>
          <a href="#get-started" className="btn-primary !py-2">Get Started</a>
        </div>
        <button className="rounded-md p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white md:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {NAV.map((n) => (<a key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-lg">{n.label}</a>))}
            <a href="#get-started" onClick={() => setOpen(false)} className="btn-primary my-4">Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
}
