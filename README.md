# HaroldHQ.app

A responsive, zero-dependency, static homepage for the HaroldHQ creative and technology brand.

## Develop locally
Open `index.html` or run `python3 -m http.server 3000` and visit http://localhost:3000.

## Deploy
Connect this repository to Vercel as a static project (Framework Preset: Other). Root directory `./`. Deploy the production branch, then add `haroldhq.app` and `www.haroldhq.app` under Vercel Project → Settings → Domains.

## DNS
The domain is registered at Namecheap and currently uses Namecheap BasicDNS. Keep the nameservers as-is unless you deliberately migrate DNS. Use the **exact record targets** shown by Vercel's domain configuration screen. In Namecheap → Domain List → Manage → Advanced DNS, remove the existing URL Redirect Record from the apex domain before adding the A/ALIAS record for the apex. Configure `www` CNAME according to Vercel's instructions. Avoid touching email-related MX/TXT records, and never pay for an SSL add-on for this Vercel-hosted site.

The .app TLD is HTTPS-only in modern browsers. Wait until Vercel verifies the domain and issues its TLS certificate before considering the DNS setup complete.

## Product statuses and links
This is a portfolio and introduction site, not a product ordering site. All release statuses are intentionally conservative. Do not add fake downloads, pricing, checkout, or contact links until those services are configured and tested. Future app subdomains can point to different Vercel/Render services independently.

## Design
Dark charcoal palette, soft coral brand accent, CSS-only graphics, responsive navigation and reduced-motion support. No user tracking, cookies, font downloads or third-party JavaScript.
