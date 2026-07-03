# Course Companion v0.8.0

Adds the San Lameer Championship Course as a playable course.

## What is new
- San Lameer Championship course tile is now active
- Championship course detail page uses Wayne's uploaded course photo
- Championship course includes 18 holes, par values, stroke indexes, and a practical club-tee distance set for scoring
- Course detail page content now changes dynamically per selected course
- Handicap logic now changes by course:
  - Mashie = half of 18-hole course handicap
  - Championship = full 18-hole course handicap
- Service worker cache updated for the new assets

## Important
- `js/config.js` is still intentionally not included in this ZIP
- Keep your existing `js/config.js` file when copying this update into your repo/workspace

## Install
Copy these folders/files into your local Course-Companion project and replace existing files when asked:
- `index.html`
- `css/style.css`
- `js/app.js`
- `service-worker.js`
- `assets/championship-hero.jpg`
- `assets/championship-tile.jpg`

Do not replace or delete `js/config.js`.
