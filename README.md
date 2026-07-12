# Course Companion v0.8.7

Play-test fixes.

## What changed
- Active rounds now auto-save locally after every score change
- If the app is closed, refreshed, or interrupted, an unfinished round can be resumed from the home screen
- Live scoring summary now shows running stroke totals instead of full-round par totals
- Front 9, Back 9, Total and Stableford are shown while playing
- The screen flashes briefly when moving to the next or previous hole so it is obvious the hole changed
- Sign-in URL cleanup no longer strips simple cache-buster URLs like `?v=087`
- Service worker caching reduced for app files to avoid old-version issues

## Important
Keep your existing `js/config.js`. It is intentionally not included in this ZIP.
