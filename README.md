# HaroldHQ signed update feed

This public branch contains only update metadata, public verification keys and the update-service landing page. No desktop source, private keys, account credentials or installer is published.

Serve `public/` as a Render static site. The beta manifest is at `/radio-studio/beta.json`. It currently contains no downloadable release. Publish accepted installers first, then atomically replace the signed manifest. A successful feed check does not establish an actual installer rollout.

Private signing material stays outside this repository. The signing key ID is `updates-2026-10`; public keys are in `public/radio-studio/public-keys.json`. The bootstrap manifest expires 90 days after issuance. Renew the signed metadata before expiry.

The application repository contains the release preparation and acceptance tools.
