export const NAV = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Security", href: "#security" },
];

export const SPENDING = [
  { name: "Rent & bills", amount: 28500, pct: 42 },
  { name: "Food & groceries", amount: 11200, pct: 17 },
  { name: "Transport", amount: 6400, pct: 9 },
  { name: "Subscriptions", amount: 3100, pct: 5 },
];

export const GOALS = [
  { name: "Emergency fund", saved: 84000, target: 120000 },
  { name: "Goa trip", saved: 18500, target: 40000 },
];

export const STEPS = [
  { id: "understand", title: "Understand", headline: "See where your money actually goes.",
    body: "Connect your accounts and Fermor sorts every transaction, spots recurring charges and shows your position in one view.",
    points: ["Spending grouped into categories you can edit", "Subscriptions and repeat payments surfaced automatically", "Net position across accounts, updated daily"] },
  { id: "act", title: "Act", headline: "Know what to do next.",
    body: "Fermor turns patterns into specific suggestions you can accept, change or ignore.",
    points: ["Monthly limits that adjust to your real habits", "Plain-language insights, such as which bill rose and by how much", "Goals with a monthly amount that fits your income"] },
  { id: "grow", title: "Grow", headline: "Build savings and keep score.",
    body: "Track every goal against its date and see the effect of small changes before you make them.",
    points: ["Progress against each goal, updated as you save", "Projections that show how a change moves your date", "A health score that explains what moved it"] },
];

export const USE_CASES = [
  { icon: "Wallet", title: "Stop the month-end surprise", body: "Know your safe-to-spend amount each day, after bills and savings are set aside." },
  { icon: "Target", title: "Save for something specific", body: "Name the goal, set the date. Fermor works out the monthly amount and tracks it." },
  { icon: "Repeat", title: "Cut forgotten subscriptions", body: "See every recurring charge in one list, with the ones you haven't used in 60 days flagged." },
  { icon: "TrendingUp", title: "Plan the next five years", body: "Model a salary change, a move or a loan and see the effect on your savings." },
] as const;

export const TRUST = [
  { icon: "Lock", title: "Bank-grade encryption", body: "Data is encrypted in transit and at rest." },
  { icon: "Eye", title: "Read-only access", body: "Fermor can see your transactions. It cannot move your money." },
  { icon: "ShieldCheck", title: "You control your data", body: "Disconnect an account or delete everything from settings, any time." },
] as const;
