# Deployment Guide — Karthik V.G. Portfolio

This project is configured and optimized for zero-config production deployment on any modern platform.

---

## Quick Comparison: Where to Deploy?

| Platform | Best For | Build Command | Publish Directory | Configuration File |
| :--- | :--- | :--- | :--- | :--- |
| **Vercel** *(Recommended)* | Fastest, free SSL, instant preview URLs | `npm run build` | `dist` | `vercel.json` |
| **Netlify** | Great alternative, instant drag-and-drop | `npm run build` | `dist` | `netlify.toml` + `_redirects` |
| **GitHub Pages** | Free hosting directly inside your GitHub repository | Automated via GitHub Actions | `dist` | `.github/workflows/deploy.yml` |
| **Cloudflare Pages** | Global edge network | `npm run build` | `dist` | Default |

---

## Option 1: Deploy to Vercel (Recommended — Takes 1 Minute)

### Method A: Via Web Dashboard (Easiest)
1. Push your repository to GitHub (see [Pushing to GitHub](#step-0-push-to-github) below).
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** → **"Project"**.
4. Select your `karthik-portfolio` repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your site will be live on a `*.vercel.app` domain with free SSL in ~30 seconds!

### Method B: Via Vercel CLI (Direct from Terminal)
```powershell
# Run inside your project folder:
npx vercel
```
Follow the 3 quick prompts in the terminal, and it will give you a live production URL immediately.

---

## Option 2: Deploy to Netlify

### Method A: Drag and Drop (No Git required)
1. Build the production folder:
   ```powershell
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the `dist` folder directly onto the page.
4. Your portfolio will be live instantly!

### Method B: Via Netlify CLI
```powershell
npx netlify deploy --prod --dir=dist
```

---

## Option 3: Deploy to GitHub Pages (Automated CI/CD)

The repository already includes an automated GitHub Actions deployment workflow at [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml).

1. Push your code to GitHub (see below).
2. On your GitHub repository page:
   - Go to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every time you push to the `main` branch, GitHub Actions will automatically build and publish your site!

---

## Step 0: Pushing to GitHub (First-Time Setup)

Your local repository has already been initialized on the `main` branch. To link it to your GitHub account:

```powershell
# 1. Stage and commit all files
git add .
git commit -m "feat: portfolio ready for production deployment"

# 2. Create a new repository on github.com (e.g. 'karthik-portfolio')
# 3. Link your remote repository and push:
git remote add origin https://github.com/karthik-vg/karthik-portfolio.git
git branch -M main
git push -u origin main
```

---

## Pre-Configured Files Included

- **`vercel.json`**: SPA routing rewrites, immutable static asset caching, and security headers.
- **`netlify.toml` & `public/_redirects`**: Single Page Application rewrite rules (prevents 404 on refresh).
- **`.github/workflows/deploy.yml`**: GitHub Actions automated pipeline.
- **`public/robots.txt` & `public/sitemap.xml`**: Search engine discovery and indexing.
- **`vite.config.js`**: Adaptive `base` path for custom domains and subpath deployments.
