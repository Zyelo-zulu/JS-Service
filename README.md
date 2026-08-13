# JS Car Services

Premium one-page website for JS Car Services, built with Vite, React 18, TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger and Lenis.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is `dist/`.

## GitHub

```bash
git init
git add .
git commit -m "Initial JS Car Services website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY
git push -u origin main
```

## Netlify

Import the GitHub repository in Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

## Content

Business content is centralized in `src/data/content.ts`.

## Contact form

The form is front-end only by design because there is no backend. Connect it to a form provider or Netlify Forms when you want to receive submissions.
