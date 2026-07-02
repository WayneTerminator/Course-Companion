# Course Companion Supabase Setup

## What v0.6 adds

- Email magic-link sign-in screen
- Guest mode remains available
- Local saving still works
- Cloud saving is ready once Supabase is configured
- Local rounds can be synced after sign-in

## Setup steps

1. Create a Supabase project.
2. Open the SQL Editor.
3. Run `docs/supabase-schema.sql`.
4. In Supabase, copy your Project URL and anon/public key.
5. Paste them into `js/config.js`.
6. In Supabase Auth URL settings, add your GitHub Pages URL as an allowed redirect URL:
   `https://wayneterminator.github.io/Course-Companion/`
7. Commit and push.

## Important

Do not paste a `service_role` or secret key into the app.
Only use the anon/public key.
