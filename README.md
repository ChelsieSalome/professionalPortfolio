# Chelsie Lele — Professional Portfolio

A production-ready personal portfolio website built with Python Flask, featuring the **Black & Gold Elegance** design theme. Deployable to Render in under 5 minutes.

---

## Features

- **5 real projects** drawn from your resume — edit `data/projects.json` to update
- **Full timeline** of your education and work experience
- **Responsive design** — mobile-first with a fixed bottom nav bar on mobile
- **Smooth scroll navigation** with active section tracking
- **Scroll-reveal animations** using the Intersection Observer API
- **Project detail pages** with accordion sections, image gallery, and lightbox
- **Skills cloud + tech icon grid** with hover effects
- **Custom 404/500 error pages**
- **Production-ready** — zero debug mode, proper port binding, UTF-8 throughout

---

## Tech Stack

- **Backend:** Python 3.11, Flask 3.0
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts:** Playfair Display + Montserrat (Google Fonts)
- **Deployment:** Render (free tier), Gunicorn WSGI server

---

## Local Development Setup

### Prerequisites

- Python 3.11+
- Git

### Windows Setup (Git Bash)

```bash
# 1. Clone the repo
git clone https://github.com/ChelsieSalome/professionalPortfolio.git
cd professionalPortfolio

# 2. Create and activate virtual environment
python -m venv venv
source venv/Scripts/activate        # Git Bash on Windows
# OR: venv\Scripts\activate         # Command Prompt

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run locally
python app.py
```

Visit: **http://localhost:5000**

### macOS / Linux Setup

```bash
git clone https://github.com/ChelsieSalome/professionalPortfolio.git
cd professionalPortfolio
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Test with Gunicorn (confirms production readiness)

```bash
gunicorn app:app
```

Visit: **http://127.0.0.1:8000**

---

## Customization Guide

### Replace your photo

Replace `static/images/hero-photo.svg` with your actual headshot:

```
static/images/hero-photo.jpg   ← drop your photo here (250×250px minimum, square)
```

Then update `templates/index.html` line referencing `hero-photo.svg` to point to your new file name.

### Edit your projects

Open `data/projects.json` and edit the array. Each project has these fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | int | Unique ID — used in the URL `/project/<id>` |
| `title` | string | Project name |
| `type` | string | Badge label (e.g. "Cloud Infrastructure") |
| `short_description` | string | 1–2 sentence summary shown on the card |
| `full_description` | string | Full overview shown in the accordion |
| `problem` | string | Problem statement section |
| `solution` | string | Solution approach section |
| `technologies` | array | List of tech tags |
| `challenges` | string | Technical challenges section |
| `impact` | string | Results & impact section |
| `github_url` | string or null | Link to GitHub repo |
| `demo_url` | string or null | Link to live demo |
| `youtube_url` | string or null | Full YouTube URL for embed |
| `images` | array | Paths relative to `static/images/` |
| `featured` | bool | (reserved for future use) |

### Add project screenshots

Place screenshots in `static/images/projects/` and reference them in `projects.json`:

```json
"images": [
  "projects/my-project-screenshot.jpg",
  "projects/my-project-architecture.png"
]
```

### Change colors

All colors are CSS variables in `static/css/styles.css` at the top of the file:

```css
:root {
    --bg-primary:   #000000;   /* Main background */
    --bg-secondary: #14213D;   /* Card / section background */
    --gold:         #FCA311;   /* Accent color */
    --text-primary: #FFFFFF;
    --text-muted:   #E5E5E5;
}
```

### Update contact links

In `templates/index.html`, find the contact section and update:
- GitHub URL
- LinkedIn URL  
- Email address (appears twice: `mailto:` link and button)

Also update the footer links in `templates/base.html`.

---

## Deployment to Render

### Step-by-step

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. Go to [render.com](https://render.com) and sign in with GitHub.

3. Click **New → Web Service**.

4. Connect your GitHub repo: `ChelsieSalome/professionalPortfolio`

5. Configure:
   - **Name:** `professionalportfolio` (or anything you like)
   - **Region:** Oregon (US West) — closest to BC
   - **Branch:** `main`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
   - **Instance Type:** Free

6. Click **Create Web Service**.

7. Wait 2–5 minutes for the build to complete.

8. Your site is live at: `https://professionalportfolio-xxxx.onrender.com`

### Troubleshooting

**Build fails with "No module named flask"**
→ Check that `requirements.txt` contains `Flask==3.0.0` with no extra spaces or characters.

**Site shows "Application Error"**
→ Check Render logs. Most common cause is a syntax error in `data/projects.json`. Validate it at [jsonlint.com](https://jsonlint.com).

**Static files (CSS/images) not loading**
→ Ensure all static file references in templates use `{{ url_for('static', filename='...') }}` — never hardcoded paths.

**Free tier spins down after inactivity**
→ On Render's free tier, the service sleeps after 15 minutes of inactivity. First visit after sleep takes ~30 seconds. Upgrade to a paid plan to avoid this.

---

## File Structure

```
professionalPortfolio/
│
├── app.py                     # Flask application (production-ready)
├── requirements.txt           # Flask + Gunicorn
├── Procfile                   # Render start command
├── runtime.txt                # Python 3.11.0
├── .gitignore
├── README.md
│
├── data/
│   └── projects.json          # Your project data — edit this
│
├── static/
│   ├── css/
│   │   └── styles.css         # All styles (mobile-first)
│   ├── js/
│   │   └── main.js            # Scroll, nav, animations
│   └── images/
│       ├── hero-photo.svg     # Replace with your photo
│       ├── projects/          # Project screenshots
│       └── tech-logos/        # Technology icons
│
└── templates/
    ├── base.html              # Shared layout, nav, footer
    ├── index.html             # Home page (all sections)
    ├── project_detail.html    # Project detail page
    ├── 404.html
    └── 500.html
```

---

## License

MIT — free to use, modify, and redistribute.

---

## Contact

Chelsie Lele · [linkedin.com/in/chelsie-lele](https://linkedin.com/in/chelsie-lele) · [github.com/ChelsieSalome](https://github.com/ChelsieSalome)
