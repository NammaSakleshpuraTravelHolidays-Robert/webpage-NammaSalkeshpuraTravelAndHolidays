# Deploying Namma Sakleshpura Travel & Holidays on Vercel

This is a plain static website (HTML, CSS and JavaScript). There is no build step, no Node.js server and no database, so deployment on Vercel is simple.

---

## 1. What the project looks like

```
replica_app_2/                  <- the folder you upload (project root)
|
|-- index.html                  <- the whole page (SEO tags, sections, contact form)
|-- script.js                   <- all behaviour: fleet, reviews, form, social links, phone/WhatsApp
|-- styles.css                  <- custom styling on top of Tailwind
|-- vercel.json                 <- Vercel settings (cache + security headers)
|-- robots.txt                  <- tells Google it may crawl the site
|-- sitemap.xml                 <- list of pages for Google
|-- guide.md                    <- this guide (safe to delete before deploying)
|-- newdesign.md                <- design notes (not needed on the live site)
|-- Designer (8).png            <- unused (not referenced anywhere)
|
`-- images/
    |-- logo.png                <- logo (navbar, footer, tab icon, Google data)
    |-- road-trip-to-sakleshpur.jpg
    |-- fort.jpg
    |-- bisle-ghat-sakleshpur-farmers-son-resort.jpg   <- hero slideshow
    |-- western_ghats.jfif
    |-- bisile_viewPoint.avif
    |-- bghat.jfif
    |-- sunrise.jfif            <- "complete experience" photo grid
    |-- cta-discover.png
    |-- cta-roads.png           <- "Ready to explore" banner
    |-- vehicle-hatchback.svg
    |-- vehicle-sedan.svg
    |-- vehicle-suv.svg
    |-- vehicle-mpv.svg
    |-- vehicle-tempo-traveller.svg
    |-- vehicle-bus.svg         <- fleet card images (placeholders)
    |-- image.png               <- duplicate of logo.png (not needed)
    |-- Designer (9).png
    |-- Designer1.png           <- original banner files (not needed, cta-*.png are the copies)
    `-- waterfalls.jpg          <- old placeholder (not used any more)
```

Important rule: `index.html` must be in the root of the folder you deploy. Vercel serves it automatically as the home page.

### What each main file does

| File | Purpose |
|---|---|
| `index.html` | All page sections, SEO tags, the booking form and the Google Map. |
| `script.js` | Content lists (vehicles, reviews, social links, contact number) and behaviour (form sending, scrolling, carousel). Edit the data at the top to change content. |
| `styles.css` | Fonts, buttons, cards, hero, banner and other custom styles. |
| `vercel.json` | Tells Vercel to cache images for a year and adds two security headers. |
| `robots.txt` / `sitemap.xml` | Help Google find and index the site. |

---

## 2. Changes to make BEFORE deploying

Do these in order. Items marked **Required** will not work properly if skipped.

### 2.1 Required: replace `SITE_URL` with your real address

The files contain a placeholder `SITE_URL` for the website address. Search engines and WhatsApp/Facebook link previews need the real one.

**Decide the address first:**
- Without your own domain, Vercel gives you a free one such as `your-project-name.vercel.app`.
- With your own domain, use it, for example `www.nammasakleshpura.com`.

**Replace it everywhere:**
1. Open the project in VS Code.
2. Press `Ctrl + Shift + H` (Find and Replace in Files).
3. Search for `SITE_URL`.
4. Replace with your domain only. Do NOT type `https://` or a trailing `/`. Example: `your-project-name.vercel.app`.
5. Click "Replace All". It changes these files:
   - `index.html` (canonical link, Open Graph/Twitter preview image, Google business data)
   - `robots.txt` (sitemap line)
   - `sitemap.xml` (page address)

If you don't know the Vercel address yet, deploy once (section 4), note the address Vercel gives you, replace `SITE_URL`, and deploy again.

### 2.2 Required: activate the booking form email

The form sends enquiries through FormSubmit to `bookings.nammasakleshpuratravel@gmail.com`.
1. After the site is live, open it, fill in the form and press "Book My Journey".
2. FormSubmit emails an activation message to that Gmail address (check Spam and Promotions too).
3. Click "Activate Form" in that email.
4. Submit the form again. A normal enquiry email should now arrive.

Until you activate it, visitors will see the error message with the "Message us on WhatsApp instead" button.

### 2.3 Strongly recommended: content you must verify

- **Reviews:** `script.js` contains sample reviews that are not from real customers (Priya Sharma, Rajesh Kumar, Anita Desai, Sarah Johnson, Amit Patel). Delete them from the `TESTIMONIALS` list and keep only real reviews (Karthik, Shobha Dinesh, Robin Smith, Savitha Ravindra). Fake reviews can break advertising and consumer rules.
- **Claims:** check these statements are true for your business: "24/7", "response within 30 minutes", "Airport Transfers", "Corporate Bookings", opening hours.
- **Prices:** the per-km prices in `VEHICLES` (`script.js`) are not shown on the page, but check them anyway.
- **Address spelling:** the address says "Hundai Showroom". The brand spelling is "Hyundai". Fix it in `index.html` (3 places) if needed, and keep it identical to your Google Business Profile.
- **Privacy Policy and Terms of Service:** these links currently go to the contact section. Either create real pages or remove the links. A privacy policy is important because the form collects names, phone numbers and emails.

### 2.4 Recommended: tidy unused files

These files are uploaded to the live site but not used. You can delete them to keep the project clean:
- `Designer (8).png` (root)
- `newdesign.md` (design notes)
- `guide.md` (this file, once you have read it)
- `images/image.png` (copy of the logo)
- `images/Designer (9).png` and `images/Designer1.png` (originals of the banners)
- `images/waterfalls.jpg`

Do not delete `images/logo.png`, `images/cta-discover.png` or `images/cta-roads.png`.

### 2.5 Recommended: file names

Avoid spaces and brackets in file names, because they can cause problems in links. The files `Designer (8).png` and `Designer (9).png` are not used, so deleting them solves it.

### 2.6 Optional: improvements

- **Logo size:** `images/logo.png` is small (about 150 px). For a crisper logo, save a 512 px version over it with the same name.
- **Image cache:** `vercel.json` tells browsers to keep images for one year (`immutable`). This is great for speed, but if you replace an image you must give the new file a new name, or visitors keep seeing the old one. While you are still changing images, you can change `max-age=31536000, immutable` to `max-age=3600` in `vercel.json`, then switch back later.
- **Real vehicle photos:** replace the SVG files in `VEHICLES` (`script.js`) with real photos under new file names.
- **Social links:** Instagram, Facebook, Google and WhatsApp are already set in `SOCIAL_LINKS` in `script.js`. Check each opens the right page.
- **Tailwind CDN:** the site loads Tailwind CSS from `cdn.tailwindcss.com`, which is fine and works, but the browser console shows a "not for production" notice. Replacing it with a built stylesheet is possible later and needs Node.js. It is not required to launch.
- **sitemap date:** update `<lastmod>` in `sitemap.xml` when you make big changes.

### 2.7 Test locally first

1. In VS Code, use the Live Server extension (already used at `http://127.0.0.1:5500`).
2. Check on desktop and a phone-sized window: navbar, hero search, fleet cards, reviews, map, form, floating call and WhatsApp buttons.
3. Press `F12`, open the Console tab, and confirm there are no red errors.

---

## 3. Choose how to deploy

| Method | Best for |
|---|---|
| **A. GitHub + Vercel (recommended)** | Every future change deploys automatically when you push. |
| **B. Vercel CLI** | Quick deploy from your PC without GitHub. |

Note: Vercel's free "Hobby" plan is meant for personal, non-commercial use. A business website that promotes paid services may need the paid "Pro" plan. Check Vercel's current terms before you launch.

---

## 4. Method A: GitHub + Vercel (step by step)

### Step 1. Create accounts
1. Create a GitHub account at github.com (free).
2. Create a Vercel account at vercel.com. Choose "Continue with GitHub" so the two are linked.

### Step 2. Put the project on GitHub
1. In GitHub, click "+" then "New repository".
2. Name it, for example `sakleshpura-travels`. Choose Private or Public. Do not tick "Add a README".
3. Click "Create repository".

**Option 1: use the website (no commands)**
1. On the empty repository page, click "uploading an existing file".
2. Drag in everything from inside `replica_app_2` (the files and the `images` folder, not the folder itself).
3. Click "Commit changes".

**Option 2: use Git in the VS Code terminal**
Install Git from git-scm.com if you do not have it, then run in the project folder:
```
git init
git add .
git commit -m "First version of the website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sakleshpura-travels.git
git push -u origin main
```
Replace `YOUR-USERNAME` with your GitHub user name. GitHub will ask you to sign in.

Check that `index.html` shows at the top level of the repository, not inside another folder.

### Step 3. Import the project into Vercel
1. Log in at vercel.com and click "Add New..." then "Project".
2. Under "Import Git Repository", find `sakleshpura-travels` and click "Import". If it is not listed, click "Adjust GitHub App Permissions" and allow access to the repository.
3. On the configuration screen set:
   - **Framework Preset:** Other
   - **Root Directory:** leave as `./`
   - **Build Command:** leave empty
   - **Output Directory:** leave empty
   - **Install Command:** leave empty
4. Click "Deploy".
5. Wait about a minute. When you see "Congratulations", click the preview picture or "Visit" to open your live site at `something.vercel.app`.

### Step 4. Set the real address and redeploy
1. Copy your new address from Vercel (example: `sakleshpura-travels.vercel.app`).
2. Do section 2.1 with that address.
3. Save, then commit and push the change (website: upload the changed files again; terminal: `git add .`, `git commit -m "Set site address"`, `git push`).
4. Vercel redeploys automatically within a minute.

### Step 5. Activate the form
Follow section 2.2 on the live site.

---

## 5. Method B: Vercel CLI (without GitHub)

1. Install Node.js (the LTS version) from nodejs.org.
2. Open the VS Code terminal in the project folder and run:
```
npm install -g vercel
vercel login
```
3. Run `vercel` and answer the questions:
   - Set up and deploy? `Y`
   - Which scope? choose your account
   - Link to existing project? `N`
   - Project name? `sakleshpura-travels`
   - In which directory is your code located? `./`
   - Want to modify settings? `N`
4. This creates a preview address. When you are happy, publish to production:
```
vercel --prod
```
5. For every later change, run `vercel --prod` again.

---

## 6. Add your own domain (optional)

1. Buy a domain from a registrar (GoDaddy, Namecheap, Google Domains replacement, BigRock etc.).
2. In Vercel, open your project, then "Settings" then "Domains".
3. Type your domain (for example `www.yourdomain.com`) and click "Add".
4. Vercel shows the DNS records to create. In your registrar's DNS settings add exactly what Vercel shows. Usually:
   - Type `A`, name `@` (root domain), value shown by Vercel
   - Type `CNAME`, name `www`, value shown by Vercel
5. Wait from a few minutes up to a few hours. Vercel shows a green tick when it works and turns on HTTPS automatically.
6. Repeat section 2.1 using the final domain (replace `SITE_URL`, commit and push).

---

## 7. After the site is live: checklist

1. Open the live address on your phone and PC. Test: call button, WhatsApp button, map, "Get directions" link, form, all social icons.
2. Submit a test enquiry and confirm the email arrives (and the form is activated).
3. Check the tab shows your logo.
4. Paste your address into WhatsApp or Facebook to check the link preview.
5. **Google Search Console:** go to search.google.com/search-console, add your site, verify it, then under "Sitemaps" submit `sitemap.xml`.
6. **Google Business Profile:** create or claim your listing with the same name, address and phone as on the site. This matters most for "cabs near me" searches.
7. Ask real customers for Google reviews and add genuine ones to the website.
8. Run PageSpeed Insights (pagespeed.web.dev) on your address and note any warnings.

---

## 8. Troubleshooting

| Problem | Fix |
|---|---|
| Vercel shows a 404 | `index.html` is not at the root of the repository. Move the files up one level and redeploy. |
| Images missing | File names are case sensitive on Vercel. `Logo.png` is not `logo.png`. Match the names in the code exactly. |
| Old image still showing | The one-year cache. Use a new file name, or clear the browser cache. |
| Form always shows an error | FormSubmit not activated (section 2.2), or the email address is mistyped. |
| Page looks unstyled | The Tailwind or fonts link is blocked. Check your internet connection and the browser console. |
| Changes not appearing | Check the "Deployments" tab in Vercel for a failed deployment, then hard refresh with `Ctrl + F5`. |
| Domain not working | DNS records do not match what Vercel shows, or you need to wait for DNS to update. |

---

## 9. Quick summary

1. Replace `SITE_URL` (3 files).
2. Remove the sample reviews and verify your claims.
3. Delete unused files and fix the "Hundai" spelling if needed.
4. Push the folder contents to GitHub.
5. Import the repository in Vercel (Framework: Other, nothing else to fill).
6. Open the live site, activate the booking form email.
7. Add your domain, submit the sitemap to Google and set up your Google Business Profile.
