# Course Companion v0.5.3

Final playtest update for today.

## Changes
- New flow: Home → Course Detail → Round Setup → Score Round
- Added San Lameer Mashie course detail page
- Added course guide style hero section
- Added quick facts and useful course notes
- Added scorecard preview / hole distances
- Moved players and handicap setup to its own Round Setup screen
- Scoring workflow remains unchanged from v0.5.2

## Notes
Course facts are based on the San Lameer Mashie page:
https://www.sanlameer.co.za/golf/mashie-course/

Photos are represented by CSS placeholders for now. Real photos can be added once we have suitable images and permission to use them.


# Course Companion v0.5.4

Image test build.

## Changes
- Added user's own Mashie photo as the course tile image
- Added user's own Mashie photo as the course detail hero image
- Kept v0.5.3 flow and scoring unchanged

## Notes
The uploaded image was converted into web-friendly JPG assets:
- assets/mashie-hero.jpg
- assets/mashie-tile.jpg


# Course Companion v0.5.5

Scoring clarity fix.

## Changes
- Added clear selected-score display on each player score card
- This makes exact scores like 6 obvious even when the 6+ button is highlighted
- Scoring logic unchanged


# Course Companion v0.5.6

Mobile scoring screen spacing fix.

## Changes
- Reduced vertical spacing on live scoring screen
- Reduced hole photo height during scoring
- Reduced score card padding slightly
- Reduced selected-score box size slightly
- Made Previous / Next navigation sticky near the bottom of the screen
- Added iPhone safe-area padding for bottom navigation
- Kept scoring logic unchanged


# Course Companion v0.6.0

Account foundation build.

## Changes
- Added Account screen
- Added email magic-link sign-in UI
- Added Supabase config file: js/config.js
- Added Supabase schema: docs/supabase-schema.sql
- Added setup guide: docs/supabase-setup.md
- New rounds save locally first, then attempt cloud save when signed in
- Local rounds can be synced after sign-in
- Guest mode remains available
- Scoring workflow unchanged from v0.5.6


# Course Companion v0.7.0

Proper cloud history display.

## Changes
- Improved History screen
- Shows whether history is coming from Cloud, Local Backup, or Guest Local History
- Better saved-round cards
- Tap a saved round to open a read-only detail view
- Added gross / net / Stableford summary in round detail
- Added hole-by-hole score display
- Round editing intentionally held for v0.8
