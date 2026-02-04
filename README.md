# Muhammad Abbas — Portfolio

Simple static portfolio. Files included:

- `index.html`
- `style.css`
- `script.js`

Quick local preview:

```bash
# from the project folder
# 1) Open in default browser (Windows)
start index.html

# or use a simple static server (recommended)
python -m http.server 8000
# then open http://localhost:8000
```

Deploy to GitHub Pages:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
# In the repo Settings > Pages, set source to Branch: main / Folder: / (root)
```

Notes:
- Uses no build step. Just push and enable GitHub Pages.
- For better SEO, replace dummy resume link and update metadata.

Resume placement:
- Save your resume PDF to `assets/Muhammad_Abbas_Resume.pdf` so the "Resume" button downloads it.
