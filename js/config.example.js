// Course Companion Supabase Configuration Example
// Copy this file to config.js and add your own Supabase project details.
// Do NOT paste a secret or service_role key here.

window.COURSE_COMPANION_CONFIG = {
  SUPABASE_URL: "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE",
  SUPABASE_ANON_KEY: "PASTE_YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY_HERE"
};

window.isCourseCompanionCloudConfigured = function () {
  const cfg = window.COURSE_COMPANION_CONFIG || {};
  return Boolean(
    cfg.SUPABASE_URL &&
    cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_URL.includes("PASTE_") &&
    !cfg.SUPABASE_ANON_KEY.includes("PASTE_") &&
    cfg.SUPABASE_URL.endsWith(".supabase.co")
  );
};
