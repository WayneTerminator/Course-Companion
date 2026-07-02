// Course Companion Supabase Configuration
// Step 1: Create a free Supabase project.
// Step 2: Copy your Project URL and anon/public key here.
// Step 3: NEVER paste a service_role or secret key into this file.

window.COURSE_COMPANION_CONFIG = {
  SUPABASE_URL: "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE",
  SUPABASE_ANON_KEY: "PASTE_YOUR_SUPABASE_ANON_PUBLIC_KEY_HERE"
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
