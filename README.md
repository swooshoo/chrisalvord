# Actor Portfolio Site

## Structure

```
src/
  App.tsx              — tab-based page router
  components/Nav.tsx   — sticky nav, hamburger on mobile
  pages/
    Reel.tsx           — responsive YouTube/Vimeo embeds
    Headshots.tsx      — 2-col mobile / 3-col desktop grid + lightbox
    Resume.tsx         — PDF viewer + share panel (email, SMS, copy link)
    Contact.tsx        — agency/management cards + social buttons
public/
  headshots/           — drop .jpg files here (1–6)
  resume.pdf           — drop your PDF here
render.yaml            — one-click Render static deploy config
```

## To customize before pitching

- Drop headshot JPGs into `public/headshots/` named `headshot-1.jpg` through `headshot-6.jpg`
- Drop the actor's resume as `public/resume.pdf`
- In `src/pages/Reel.tsx` — replace the YouTube embed URLs with actual reel links
- In `src/pages/Contact.tsx` — update agent/manager names, emails, phone numbers, and social URLs

## To deploy to Render

1. Push this repo to GitHub
2. Go to **Render → New → Static Site** → connect the repo
3. Render auto-detects `render.yaml` — just click **Deploy**