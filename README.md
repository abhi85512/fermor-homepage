# Fermor — Frontend Assignment

## Overview
A new homepage for Fermor, interpreted as a product: the hero is a working dashboard (sample data) rather than an illustration, so the page shows what Fermor does before it explains it.

## Design Approach
- **Audience:** digitally comfortable young professionals who earn, spend across several accounts and want to save toward specific goals.
- **Hypothesis:** people don't lack data, they lack a clear next step. The page moves from confusion to action: dashboard, then Understand → Act → Grow, then use cases, then trust, then one CTA.
- **Visual:** cool neutral surfaces, one deep-teal brand color, a single amber accent reserved for insights. Bricolage Grotesque for headings, DM Sans for text. Radii and shadows are used sparingly; most structure comes from borders.

## Key Decisions
- Hero dashboard has working tabs (Spending / Goals), count-up numbers and one personalised insight, which is the product's core value.
- Understand/Act/Grow is a tabbed panel, so each stage gets real content without a long scroll.
- Use cases are phrased as user problems, not features.
- Security is concrete (read-only access, deletion controls) rather than badges.
- Currency is ₹ with Indian number formatting; change `lib/useCountUp.ts` (`inr`) to localise.
- Motion: one hero entrance, count-up and bar fill, tab fades. Reduced-motion is respected.

## Tech Stack
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3, lucide-react, next/font.

## Running Locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deployment
Push to GitHub, import the repo at vercel.com/new, keep the Next.js defaults, deploy. Or: `npx vercel --prod`.

## Responsive Design
Mobile-first. Mobile: menu drawer, stacked hero with full-width buttons, horizontally scrollable stage tabs. Tablet: two-column use cases. Desktop: 5/7 hero split, side-tab framework, split trust layout.

## AI Usage
AI tools were used as a development assistant to draft code and copy. Product direction, design decisions, review and refinement were evaluated and adjusted by me. Not everything was written by hand.
