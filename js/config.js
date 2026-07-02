// Course Companion Supabase Configuration
// Step 1: Create a free Supabase project.
// Step 2: Copy your Project URL and anon/public key here.
// Step 3: NEVER paste a service_role or secret key into this file.

window.COURSE_COMPANION_CONFIG = {
  SUPABASE_URL: "https://tlqinnqxdodvkwezfxmo.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_ar7ioN--1tOxA2ZW5Nr1aw_kvq0Z8WK"
};

window.isCourseCompanionCloudConfigured = function () {
  const cfg = window.COURSE_COMPANION_CONFIG || {};
  return Boolean(
    cfg.SUPABASE_URL &&
    cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_URL.includes("PASTE_") &&
    !cfg.SUPABASE_ANON_KEY.includes("PASTE_")
  );
};
