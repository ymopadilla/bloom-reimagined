# Bloom Reimagined

Transition coaching in Colorado Springs from Yvonne Padilla, a retired school principal. Live site: [bloomreimagined.com](https://bloomreimagined.com)

---

## About the practice

Bloom Reimagined coaches men and women through the changes nobody trains you for: leaving the military, changing careers, retiring, and the quiet house after the kids move out. Coaching follows the BLOOM Framework (Believe, Listen, Observe, Own, Move). The entry point is a 45-minute Root Session.

---

## About this site

A hand-built static site: HTML, CSS, and a little JavaScript. No frameworks, no build step.

### Hosting and services

- **GitHub Pages** from `main` (repo root), with the custom domain in `CNAME`.
- **Cloudflare DNS** for bloomreimagined.com. Email forwarding runs through Cloudflare Email Routing; don't change the MX or routing records.
- **Formspree** handles the contact form (AJAX submit with a no-JavaScript fallback and a `_gotcha` honeypot).

### Brand

**Palette: four colors only, defined as CSS custom properties.**

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#22252B` | Text, nav, hero, footer |
| `--snow` | `#F1F3F4` | Page background; text on ink or violet |
| `--violet` | `#5E4B7A` | Accent: BLOOM band, Contact pill, mobile menu, pasqueflower card, list dots, footer strip, links on snow |
| `--chartreuse` | `#C3D545` | Action: buttons, headshot ring, accents on ink and violet |

Contrast: ink on snow 13.80, violet on snow 6.83, chartreuse on snow 1.46 (never as text).

Rules: button text is ink on chartreuse (snow on ink in the chartreuse band). Never violet on ink. Never chartreuse as text on snow. Pure white appears only in the form and the boundary note.

**Type (self-hosted WOFF2 in `/fonts`, SIL Open Font License):**

- Archivo 800 for headlines.
- Atkinson Hyperlegible Next 400 and 700 for body text.

**Logo:** pasqueflower circle stamp. The reversed SVG (`images/logo-reversed.svg`) is used in the nav, footer, and the hero stamp. The full logo kit lives in Google Drive, not in this repo.

---

## Site structure

```
bloom-reimagined/
├── index.html          # Single-page site
├── terms.html          # Terms of Service, with the coaching disclaimer
├── privacy.html        # Privacy Policy
├── 404.html            # Not-found page (noindex)
├── images/             # WebP photos and the reversed logo SVG
├── fonts/              # WOFF2 files and OFL license texts
├── og-image.png        # Social sharing image (1200x630)
├── favicon.ico, favicon-*.png, apple-touch-icon.png, icon-192.png, icon-512.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── CNAME
└── README.md
```

### Repo vs. Drive

This repo is public. It holds only site code and the web assets the site uses. Masters, the logo kit, brand guidelines, and drafts stay in Google Drive.

---

## Developer notes

Built and maintained by Yvonne Padilla, [Digital Navigation Solutions](https://digitalnavigationsolutions.com).
