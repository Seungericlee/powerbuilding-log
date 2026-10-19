// Paste your keys between the quotes, then upload this file to GitHub.
// SETUP.md shows where to find each one.
window.PBL_CONFIG = {
  // Supabase > your project > Connect (or Project Settings > Data API): "Project URL"
  supabaseUrl: "YOUR_SUPABASE_URL",

  // Supabase > Project Settings > API Keys: the "Publishable key" (or the legacy "anon public" key).
  // This key is meant to be public. Never paste the "secret" or "service_role" key here.
  supabaseAnonKey: "YOUR_SUPABASE_PUBLISHABLE_KEY",

  // Optional. Free key from https://fdc.nal.usda.gov/api-key-signup
  // Until you add one, food search uses USDA's shared demo key, which allows only a few searches an hour.
  usdaApiKey: "YOUR_USDA_API_KEY"
};
