# HaroldHQ.app

Official site for HaroldHQ, the creative and technology home of DJ Harold. Built as a small, dependency-free, mobile-friendly static website.

## Production and preview

- **Public production hosting:** Render static site `haroldhq-web` at https://haroldhq-web.onrender.com/
- **Primary custom domain (pending DNS setup):** https://haroldhq.app/
- **Vercel design preview:** https://haroldhq-website.vercel.app/ (Vercel account is Hobby; do not use it for commercial hosting without a qualifying plan).
- **Private working Git remote:** `origin` → `harolddj256-Beatkiller/haroldhq-website`
- **Public deployment mirror:** `render` → `harolddj256-Beatkiller/haroldhq-web-public` (only the public website, no DJ/Radio app source code).

Render automatically deploys when `render/main` gets a new commit. The published content is the `public/` folder. Files in the website root are the editing source.

## Updating the website

Edit root `index.html`, `styles.css`, `script.js`, etc. Then synchronize the deploy assets:

```sh
mkdir -p public
cp index.html styles.css script.js favicon.svg robots.txt sitemap.xml public/
git add index.html styles.css script.js favicon.svg robots.txt sitemap.xml public README.md
git commit -m "Update HaroldHQ website"
git push origin main
git push render main
```

Preview locally:

```sh
python3 -m http.server 3000
```

## Domain activation (Namecheap BasicDNS → Render)

1. In the [production Render static site dashboard](https://dashboard.render.com/static/srv-db6piirl550s739j6h50), open Settings → Custom Domains → Add Custom Domain and add **haroldhq.app**. Render automatically adds `www.haroldhq.app` as a redirect to the root.
2. In Namecheap Domain List → haroldhq.app → Manage → Advanced DNS → Host Records, remove old URL Redirect Record for `@` and existing CNAME/parking record for `www`.
3. Add `A` record: Host `@`, Value `216.24.57.1`, TTL Automatic or 1 min.
4. Add `CNAME` record: Host `www`, Value `haroldhq-web.onrender.com`, TTL Automatic or 1 min.
5. Preserve unrelated MX/TXT or other records. If the domain has any AAAA records for the root/www, follow Render's guide on removing them. Keep Namecheap BasicDNS nameservers in place.
6. Return to Render → Settings → Custom Domains → Verify. Render manages SSL/HTTPS for free. Confirm both https://haroldhq.app/ and https://www.haroldhq.app/ redirect correctly.

Official instructions: https://render.com/docs/configure-namecheap-dns

Do not configure `dj`, `radio`, `police`, `ai` or `beklo` subdomains until the corresponding websites/backends are deployed and tested.

## Product readiness

This site is a brand/portfolio home, not a production storefront. Product availability, real downloads, pricing, payment flow, customer support, and legal pages must be confirmed before any sale. Apply Harold Builder Agent Rulebook v1 before any pitch, demo, packaging or formal product release.

## Design

Dark charcoal palette, soft coral accent, CSS-generated graphics, accessible responsive navigation, reduced-motion support, no cookies, trackers, external fonts or third-party scripts.
