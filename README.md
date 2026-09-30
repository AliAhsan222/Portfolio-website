# Syed Ali Ahsan — Portfolio

A React (Vite) frontend + Node/Express backend portfolio site.

## What's inside

- **Dark, gradient-accented design** (violet → cyan), Space Grotesk headings + Inter body text
- **Hero robot** whose eyes and head follow your cursor, only while the cursor is inside the hero section
- **Scroll reveal animations** on every section (fade + slide up, staggered)
- **Hover effects** on skill cards and project cards (gradient border glow, lift)
- **Working contact form** — posts to the Node backend, which emails you via Nodemailer and also saves every submission to a local JSON file as a backup

## Project structure

```
portfolio/
  frontend/   → React app (Vite)
  backend/    → Express API for the contact form
```

## 1. Run the backend

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and fill in your email details:

- `EMAIL_USER` — the Gmail address that will send the notification
- `EMAIL_PASS` — a Gmail **App Password** (not your normal password — generate one at
  https://myaccount.google.com/apppasswords, requires 2-Step Verification enabled)
- `EMAIL_TO` — where you want submissions delivered (defaults to `EMAIL_USER`)

If you skip the `.env` setup, the form still works — submissions are saved to
`backend/contact-submissions.json` instead of being emailed, so nothing is lost.

Then start the server:

```bash
npm start
```

Runs on `http://localhost:5000`.

## 2. Run the frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173` and proxies `/api` requests to the backend automatically (see
`vite.config.js`).

## 3. Customize it

- **Projects**: open `frontend/src/components/Projects.jsx` and replace the three placeholder
  entries in the `PROJECTS` array with your real projects (title, description, tech tags, link).
- **Colors**: all design tokens live at the top of `frontend/src/index.css` under `:root` —
  change `--violet`, `--cyan`, `--coral`, `--bg` to retheme the whole site.
- **Copy**: hero headline and About text are in `Hero.jsx` and `About.jsx`.

## 4. Deploy

- **Frontend**: `npm run build` inside `frontend/` produces a static `dist/` folder — deploy it to
  Vercel, Netlify, or GitHub Pages.
- **Backend**: deploy `backend/` to a Node host (Render, Railway, Fly.io, etc.) and set the same
  environment variables from `.env` in that host's dashboard. Update the frontend's `vite.config.js`
  proxy (or add a full URL in `Contact.jsx`'s fetch call) to point at the deployed backend URL.
