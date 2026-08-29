# Course Companion v0.9.8

Fixes the Gowrie update not showing reliably and hardens email login.

## What is new
- Keeps Gowrie Farm fully playable with all 18 hole guide images.
- Updates the app version to v0.9.8.
- Fixes stale cache-busting references in index.html that were still pointing to v0.8.7.
- Updates CSS, app.js, config.js and manifest cache-busters to v0.9.8.
- Updates the service worker so index/app/css/config are fetched fresh instead of getting trapped in old cache.
- Adds a more robust Supabase email sign-in flow.

## Important
- `js/config.js` is intentionally not included.
- Keep your existing `js/config.js` when copying this update into your local project.

## Test URL after deployment
https://wayneterminator.github.io/Course-Companion/index.html?v=098
