import Logo from "./Logo";
import { NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
          {NAV.map((n) => (<a key={n.href} href={n.href} className="hover:text-ink">{n.label}</a>))}
          <a href="#" className="hover:text-ink">Privacy</a><a href="#" className="hover:text-ink">Terms</a>
        </nav>
        <p className="text-sm text-slate">© {new Date().getFullYear()} Fermor. Sample data shown.</p>
      </div>
    </footer>
  );
}
