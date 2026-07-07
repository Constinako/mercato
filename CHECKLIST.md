# Mercato pre-publish checklist

Run before every publish (first launch and each later update).

## Content and links
- [ ] Every internal link resolves (/, /job-search-os/, /meal-planner/, /art/, anchors #setup, #inside, #notify)
- [ ] Every card CTA matches the spec grammar (teal nav buttons with arrows; brick "✉ Email me..." buttons)
- [ ] Pills all lowercase; "in development" appears only on Training Tracker; "free" badge only on Job Search OS
- [ ] External links open correctly: marieconstancemuniz.com, veganmealplanner.lovable.app (new tab)

## Functionality
- [ ] Topic filter chips show/hide cards and whole sections correctly, "all" restores everything
- [ ] Every mailto opens with the right prefilled subject (see funnel matrix in the design spec)
- [ ] Notify form (landing + art) submits to Formspree, inline success message appears, email arrives in inbox/dashboard
- [ ] Art lightbox opens on click, closes on click and Escape
- [ ] Zip downloads, unzips to a folder named job-search-os, and /start exists in .claude/commands/

## Analytics
- [ ] GA tag fires on all four pages (Realtime view shows the visit)
- [ ] Events fire: filter_topic, card_click, inquiry_click, notify_submit, zip_download, meal_planner_open, feedback_click, back_to_main_site

## Responsive
- [ ] 375px width: cards stack, chips wrap, no horizontal scroll, no orphan single-word wraps on CTA bars
- [ ] Art feature card stacks image-over-text on mobile

## Publish runbook (only on Marie's explicit go)
1. Create GitHub repo (suggested: Constinako/mercato), push main.
2. Repo Settings → Pages → deploy from branch main, root.
3. Confirm CNAME file contains mercato.marieconstancemuniz.com.
4. At the DNS provider for marieconstancemuniz.com, add: type CNAME, name `mercato`, value `constinako.github.io`.
5. Wait for DNS + Pages provisioning, then enable "Enforce HTTPS" in Pages settings.
6. Verify live: all checklist items above, GA Realtime, Formspree delivery.
7. Share privately with `?utm_source=friends` links. No links from the main site until Marie decides.
