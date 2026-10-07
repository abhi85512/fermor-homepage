import FinancialDashboard from "./FinancialDashboard";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line bg-mist">
      <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="rise lg:col-span-5">
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">Your money, finally making sense.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">Fermor connects your accounts, shows where your money goes and tells you what to do about it, so saving stops being guesswork.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-started" className="btn-primary">Get Started</a>
            <a href="#how-it-works" className="btn-secondary">See how it works</a>
          </div>
          <p className="mt-5 text-sm text-slate">Free to start. Read-only access to your accounts.</p>
        </div>
        <div className="lg:col-span-7"><FinancialDashboard /></div>
      </div>
    </section>
  );
}
