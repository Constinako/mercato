# mercato

The little market of everything Marie makes: mercato.marieconstancemuniz.com

Static site (plain HTML/CSS/vanilla JS, no build step), designed to live on GitHub Pages behind the `mercato` subdomain of marieconstancemuniz.com. Design spec: `../website/docs/superpowers/specs/2026-07-07-mercato-subdomain-design.md`.

## Structure

- `index.html` — landing: all products by type, with topic filter chips
- `job-search-os/` — benefits + setup for the free Job Search OS (zip download)
- `meal-planner/` — marketing page for the Verdant vegan meal planner (links to the live Lovable app)
- `art/` — "The Mind Lies, The Body Speaks Truth" series page
- `assets/` — favicon, art images, job-search-os.zip (built from the job-search-os-course folder)
- `css/mercato.css`, `js/main.js` — shared styles (main-site tokens + mercato accents) and behavior (filters, GA events, Formspree submit, lightbox)

## Local preview

```
python3 -m http.server 4173
```

then open http://localhost:4173

## Publishing

See the runbook at the bottom of `CHECKLIST.md`. Nothing goes live without Marie's explicit approval.
