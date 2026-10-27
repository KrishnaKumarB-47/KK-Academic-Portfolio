# Krishna Kumar B. — Academic & Research Portfolio

A responsive Next.js portfolio with an academic/research-oriented visual style, interactive project filters, expandable evidence checklists, theme toggle, publication DOI link, education and internship timeline, and contact links. All Coursera courses have been intentionally excluded, per request.

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for deployment

```bash
npm run build
```

The project uses Next.js static export (`output: 'export'`) and creates an `out/` directory. On Vercel, import the Git repository and use the standard Next.js framework preset; the build command is `npm run build`. Static output is configured for simple deployment.

## Content maintenance

- CGPA 8.43 through Semester 6; replace with latest transcript-confirmed figure.
- Class XII result 85.8%; verify against marksheet.
- Internship names and exact dates/durations.
- Publication DOI metadata, author order, and the user's exact contribution.
- Only verified credential documents are linked in the public portfolio.
- Project status, personal contribution, code repositories, demos, evaluation methodology and results.
- Confirm all public profile links and email address.

## Accuracy policy

Projects that are ongoing or exploratory are labelled as such. No uncompleted Coursera courses are listed. Avoid adding claims about model accuracy, deployment, users, awards, or research contribution unless supporting evidence exists.

## Project structure

- `app/page.tsx` — portfolio content and interactions
- `app/globals.css` — responsive visual system
- `app/layout.tsx` — metadata and root layout
- `next.config.ts` — static export configuration

## Profile portrait and motion design

The hero profile panel uses `public/profile-portrait.png`. Replace this file with a preferred professional headshot using the same filename to update the image without changing the component. The design includes animated orbit rings, subtle grid texture, entrance motion, hover lift effects, and respects `prefers-reduced-motion` for accessibility.


### Cinematic hero update
The landing hero now uses the supplied portrait as a full-bleed, darkened background with subtle cyan/violet flicker, scanline, reticle and responsive overlays. Reduced-motion preferences are respected.
