# Personal Portfolio Website

A hand-built static site — no frameworks, no build step, nothing to install. Edit a file, refresh the page, done.

## Folder map

```
portfolio/
├── index.html          Home
├── about.html          About me + contact
├── resume.html         Resume viewer + download
├── projects.html       Project cards
├── project.html        Full project write-up (opens when a card is clicked)
├── media.html          Photography + video + social links
├── css/styles.css      All styling (colors/fonts are variables at the top)
├── js/data.js          ★ ALL YOUR CONTENT LIVES HERE ★
├── js/main.js          Site engine (you shouldn't need to touch it)
└── assets/
    ├── resume.pdf      ← your resume (replace to update)
    ├── headshot.jpg    ← your headshot (add this)
    ├── photos/         ← your photography
    └── projects/       ← project thumbnail images
```

## Everyday updates — the 95% case

Open **`js/data.js`** in any text editor. Everything on the site — your name, about paragraphs, contact links, projects, photos, videos — is plain text in that one file, with instructions in the comments.

### Update your resume
1. Export your new resume as a PDF.
2. Rename it `resume.pdf` and drop it into `assets/`, replacing the old one.
3. Optionally bump `resumeUpdated` in `js/data.js`.
That's it — the view and download buttons pick it up automatically.

### Add a project
Copy one of the project blocks in `js/data.js` (from `{` to `},`), paste it at the top of the `PROJECTS` list, and fill in your text. For a thumbnail, put an image in `assets/projects/` and set `image: "assets/projects/your-file.jpg"`.

### Add photos
Drop image files into `assets/photos/`, then list them in the `PHOTOS` array in `js/data.js`.
Tip: export web-sized JPEGs (~2000px on the long edge, quality ~80) so the page loads fast.

### Add videos
Upload to YouTube (Unlisted works fine), copy the video ID from the URL, and add it to the `VIDEOS` array.

### Add your headshot
Save a portrait-orientation photo as `assets/headshot.jpg`.

## Preview locally

Just double-click `index.html` — it works from your file system. For the PDF viewer to behave exactly like it will online, you can also run a tiny local server:

```
cd portfolio
python3 -m http.server 8000
```

then open http://localhost:8000

## Publish it (free, public URL) — GitHub Pages

1. Create a free account at github.com if you don't have one.
2. Create a new **public** repository named exactly `YOUR-USERNAME.github.io`
   (e.g. `janedoe.github.io`).
3. Upload everything in this folder to the repository (on the repo page:
   **Add file → Upload files**, drag the whole contents in, commit).
4. Wait a minute or two, then visit **https://YOUR-USERNAME.github.io** — your site is live for anyone with the URL.

To update the live site later, upload the changed files again (or use the GitHub Desktop app / `git push` if you're comfortable with git).

### Optional: custom domain
Buy a domain (e.g. `yourname.com`, ~$10–15/yr from Namecheap, Cloudflare, etc.), then in your repo go to **Settings → Pages → Custom domain** and follow the DNS instructions. Netlify and Cloudflare Pages are equally good free hosts if you ever outgrow GitHub Pages.

## Changing the look

All colors and fonts are CSS variables at the top of `css/styles.css`. Change `--accent` to re-tint the whole site in one line.
