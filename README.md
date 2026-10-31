# WDD 430 Portfolio

My first Next.js application for WDD 430: Web Full-Stack Development. It's a simple portfolio site built with the App Router, TypeScript and Tailwind CSS.

**Live site:** https://wdd430-portfolio-mauve-omega.vercel.app/

## Pages and routes

| Route | File | Description |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home page with a list of portfolio projects |
| `/about` | `app/about/page.tsx` | About page with skill cards |
| `/api/hello` | `app/api/hello/route.ts` | API route that returns a JSON greeting |

## Components (all Server Components)

- `Header.tsx`: site name and navigation links (Next.js `Link`)
- `Footer.tsx`: copyright line with the current year
- `ProjectCard.tsx`: one project with a typed props interface; the link only renders when a URL is given
- `ProjectList.tsx`: maps an array of projects into `ProjectCard`s in a responsive grid
- `SkillCard.tsx` (custom): displays a skill category and its list of skills as tags

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
