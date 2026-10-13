# HaroldHQ

Product website for Harold DJ Pro, Radio Studio and Beklo. The main site contains no personal DJ biography, bookings, artist profile or unreleased side projects.

## Hosting

- Production: https://haroldhq-web.onrender.com/
- Intended custom domain: https://haroldhq.app/ (domain configuration is separate)
- Render service: `srv-db6piirl550s739j6h50`
- Render publishes `public/` automatically from `render/main`.
- `origin`: private website source repository.
- `render`: public website deployment mirror. Never add application source or credentials.

## Edit and build

Edit `products.json`, `build-site.cjs`, `styles.css` and `script.js`. Product pages and the homepage are generated with:

```sh
node build-site.cjs
```

The build copies only website assets into `public/`. Preview that directory with a local static HTTP server. No package installation is needed.

## Photography and screenshots

The published scenes use licensed real photographs with conventionally composited current software screenshots. No AI-generated people or rooms are included. Credits are in `/credits/`.

- DJ Pro 4.3.41: current source interface, fresh browser capture with synthetic local demo tracks.
- Radio Studio Network Pilot network.3: current interface captured in an isolated preview profile.
- Beklo 2.1.0: unchanged current browser interface with its built-in demonstration map.

The actual interface screenshots are also available on each product page. Versions were checked on 13 October 2026. Update screenshot assets and version labels together.

## Availability

This is a product showcase. Do not advertise a public download, price, supported platform, live service area, or purchase flow without a verified release destination. Product pages currently communicate release preparation and link back to product information.

## Accessibility and privacy

Responsive navigation, keyboard-operable menus, visible focus indicators, reduced-motion support, and semantic product pages. No advertising trackers, account forms, payments or ride bookings on the marketing site.
