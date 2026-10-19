# Powerbuilding Log: setup

About 30 minutes, all free. You need a Supabase account (stores and syncs your data),
a USDA API key (food search) and your GitHub account (hosts the app).

## 1. Create the database (Supabase)
1. Go to https://supabase.com, sign up, and click **New project**.
2. Name it `powerbuilding-log`, set a database password (save it somewhere), pick the
   region closest to you (for Korea: **Northeast Asia (Seoul)**), then **Create new project**.
   Wait 1–2 minutes while it sets up.
3. In the left sidebar open **SQL Editor** → **New query**. Open `supabase-setup.sql` from
   this folder, copy everything, paste it in, and click **Run**. You should see "Success".
4. Left sidebar → **Authentication** → **Sign In / Providers** → **Email**.
   Turn **off** "Confirm email" and save. (You can then sign in right away, with no confirmation email.)
5. Copy two values somewhere handy:
   - **Project URL**: click **Connect** at the top of the dashboard, or go to
     Project Settings → **Data API**. It looks like `https://abcdefgh.supabase.co`.
   - **Publishable key**: Project Settings → **API Keys**. It starts with `sb_publishable_`.
     (Older projects show an **anon public** key instead; that works too.)
     Never use the **secret** or **service_role** key.

## 2. Get a food search key (USDA)
1. Go to https://fdc.nal.usda.gov/api-key-signup, fill in your name and email, and submit.
2. The key arrives by email within a minute or two.

## 3. Put the app online (GitHub Pages)
1. On GitHub click **+** → **New repository**. Name it `powerbuilding-log`, choose
   **Public** (free GitHub Pages needs a public repo; your data is not in it), and click **Create repository**.
2. On the new repo page click **uploading an existing file**. Unzip the download, then drag
   **everything inside the folder** (including the `icons` folder) into the page.
   Click **Commit changes**.
3. Click `config.js` in the file list, then the **pencil** icon. Replace
   `YOUR_SUPABASE_URL`, `YOUR_SUPABASE_PUBLISHABLE_KEY` and `YOUR_USDA_API_KEY` with your values.
   Keep the quotes. Click **Commit changes**.
4. Go to the repo's **Settings** → **Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, Branch to **main** and **/ (root)**, then **Save**.
5. After 1–2 minutes, refresh that page. Your address appears at the top:
   `https://YOUR-USERNAME.github.io/powerbuilding-log/`

## 4. Create your account
1. Open your address and tap **Create account** with your email and a password.
2. Back in Supabase → **Authentication** → **Sign In / Providers**, turn **off**
   "Allow new users to sign up" and save, so nobody else can make an account on your database.

## 5. Move your existing data
1. In the Claude version: **Progress** tab → **Your data** → **Save backup file**.
2. In your new app: **Progress** → **Your data** → **Restore from backup**, choose the file,
   then **Replace my data**.
3. Progress photos don't carry over. Add this week's again in the **Prep** tab.

## 6. Install it
- **iPhone:** open the address in **Safari** → **Share** → **Add to Home Screen** → **Add**.
  Open it from the home screen and sign in.
- **Mac:** Safari → **File** → **Add to Dock**. Or Chrome → ⋮ → **Cast, save and share** →
  **Install page as app**.
- **Windows:** Chrome → ⋮ → **Cast, save and share** → **Install page as app**, or
  Edge → ⋯ → **Apps** → **Install this site as an app**.

Sign in once on each device. Everything syncs through your account from then on, and the
app keeps working offline, syncing when you're back online.

## Good to know
- **Updating the app:** to install a new version, upload the new `index.html` to the repo
  (Add file → Upload files). Don't overwrite your `config.js`.
- **Supabase free plan:** a project pauses after 7 days with no activity. Daily use keeps it
  active. If it ever pauses, open the Supabase dashboard and click **Restore project**.
- **Backups:** save a backup file from the Progress tab every week or two.
- **Food search:** results come from USDA FoodData Central. It covers whole foods, common
  dishes and US brands, but not most Korean packaged foods. Use the label for those.
