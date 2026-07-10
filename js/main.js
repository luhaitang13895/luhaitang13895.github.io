/* ==========================================================================
   SITE ENGINE — you shouldn't need to edit this file.
   It reads data.js and fills in each page.
   ========================================================================== */

// ---------- helpers ----------
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "text") node.textContent = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) node.appendChild(child);
  return node;
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// Render project body text: \n\n paragraphs, "## " headings, "- " bullets,
// plus embedded media markers:
//   !video[YOUTUBE_ID_OR_URL]              -> embedded YouTube player
//   !image[assets/projects/x.jpg](Caption) -> figure with optional caption
function isMediaMarker(line) {
  return /^!(video|image)\[/.test(line.trim());
}

function renderMediaMarker(line) {
  const t = line.trim();
  let m = t.match(/^!video\[([^\]]+)\]$/);
  if (m) {
    const vid = youtubeIdFrom(m[1]);
    return `<div class="pd-embed pd-embed--video"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(
      vid
    )}" title="Project video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>`;
  }
  m = t.match(/^!image\[([^\]]+)\](?:\(([^)]*)\))?$/);
  if (m) {
    const src = escapeHtml(m[1].trim());
    const cap = m[2] ? escapeHtml(m[2].trim()) : "";
    return `<figure class="pd-embed pd-embed--image"><img src="${src}" alt="${
      cap || "Project image"
    }" loading="lazy">${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;
  }
  return null; // not a valid marker — caller renders it as normal text
}

function renderRichText(text) {
  const blocks = text.trim().split(/\n\n+/);
  let html = "";
  for (const block of blocks) {
    const lines = block.split("\n");
    // Media markers: render each marker line as an embed, any surrounding
    // lines in the same block as a normal paragraph.
    if (lines.some(isMediaMarker)) {
      let para = [];
      const flush = () => {
        if (para.length) {
          html += `<p>${escapeHtml(para.join("\n"))}</p>`;
          para = [];
        }
      };
      for (const line of lines) {
        const media = isMediaMarker(line) ? renderMediaMarker(line) : null;
        if (media) {
          flush();
          html += media;
        } else {
          para.push(line);
        }
      }
      flush();
      continue;
    }
    if (lines.every((l) => l.trim().startsWith("- "))) {
      html += "<ul>" + lines.map((l) => `<li>${escapeHtml(l.trim().slice(2))}</li>`).join("") + "</ul>";
    } else if (block.trim().startsWith("## ")) {
      const [head, ...rest] = lines;
      html += `<h2>${escapeHtml(head.trim().slice(3))}</h2>`;
      if (rest.length) html += renderRichText(rest.join("\n"));
    } else {
      html += `<p>${escapeHtml(block)}</p>`;
    }
  }
  return html;
}

// Extract a clean YouTube video ID from whatever was pasted:
// a bare ID, an ID with extra params ("abc123&t=1s"), or a full URL.
function youtubeIdFrom(input) {
  const s = String(input).trim();
  const m = s.match(/(?:youtu\.be\/|v=|shorts\/|embed\/|live\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  const bare = s.match(/^([A-Za-z0-9_-]{11})/); // ID first, junk after
  return bare ? bare[1] : s;
}

// ---------- shared: fill name, year, nav toggle ----------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-site-name]").forEach((n) => (n.textContent = SITE.name));
  document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "about") renderAbout();
  if (page === "resume") renderResume();
  if (page === "projects") renderProjects();
  if (page === "project") renderProjectDetail();
  if (page === "media") renderMedia();
});

// ---------- home ----------
function renderHome() {
  const parts = SITE.name.trim().split(" ");
  const last = parts.length > 1 ? parts.pop() : "";
  document.getElementById("hero-name").innerHTML =
    escapeHtml(parts.join(" ")) + (last ? ` <span class="alt">${escapeHtml(last)}</span>` : "");
  document.getElementById("hero-roles").textContent = `${SITE.title} · ${SITE.subtitle}`;
  document.getElementById("hero-lede").textContent = SITE.taglineHome;
}

// ---------- about ----------
function renderAbout() {
  const copy = document.getElementById("about-paragraphs");
  SITE.aboutParagraphs.forEach((p) => copy.appendChild(el("p", { text: p })));

  const rows = [
    ["Email", SITE.contact.email, `mailto:${SITE.contact.email}`],
    ["Phone", SITE.contact.phone, `tel:${SITE.contact.phone.replace(/[^+\d]/g, "")}`],
    ["LinkedIn", SITE.contact.linkedin, SITE.contact.linkedin],
    ["GitHub", SITE.contact.github, SITE.contact.github],
    ["Instagram", SITE.contact.instagram, SITE.contact.instagram],
    ["YouTube", SITE.contact.youtube, SITE.contact.youtube],
  ];

  const list = document.getElementById("contact-list");
  rows.forEach(([label, value, href]) => {
    if (!value) return;
    const display = value.replace(/^https?:\/\/(www\.)?/, "");
    list.appendChild(
      el("li", {}, [
        el("span", { class: "spec", text: label }),
        el("a", { href, text: display, target: href.startsWith("http") ? "_blank" : "", rel: "noopener" }),
      ])
    );
  });
}

// ---------- resume ----------
function renderResume() {
  document.getElementById("resume-updated").textContent = `LAST UPDATED · ${SITE.resumeUpdated}`;
  const dl = document.getElementById("resume-download");
  dl.href = SITE.resumePath;
  const viewer = document.getElementById("resume-viewer");
  viewer.innerHTML = `
    <object data="${SITE.resumePath}" type="application/pdf">
      <div class="resume-fallback">
        <p>Your browser can't display the PDF inline.</p>
        <p style="margin-top:12px"><a class="btn btn--solid" href="${SITE.resumePath}" download>Download Resume (PDF)</a></p>
      </div>
    </object>`;
}

// ---------- projects list ----------
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  PROJECTS.forEach((p) => {
    const card = el("a", { class: "project-card", href: `project.html?id=${encodeURIComponent(p.id)}` });

    const thumb = el("div", { class: "thumb" });
    if (p.image) thumb.appendChild(el("img", { src: p.image, alt: p.title, loading: "lazy" }));
    else thumb.appendChild(el("div", { class: "placeholder", text: "FIG. — ADD IMAGE" }));
    card.appendChild(thumb);

    const body = el("div", { class: "body" });
    body.appendChild(el("h3", { text: p.title }));
    body.appendChild(el("p", { class: "summary", text: p.summary }));

    const tags = el("div", { class: "tags" });
    p.tags.forEach((t) => tags.appendChild(el("span", { class: "tag", text: t })));
    body.appendChild(tags);

    const meta = el("div", { class: "meta" }, [
      el("span", { class: "spec", text: p.date }),
    ]);
    body.appendChild(meta);

    card.appendChild(body);
    grid.appendChild(card);
  });
}

// ---------- project detail ----------
function renderProjectDetail() {
  const id = new URLSearchParams(location.search).get("id");
  const p = PROJECTS.find((x) => x.id === id) || PROJECTS[0];
  if (!p) return;

  document.title = `${p.title} — ${SITE.name}`;
  document.getElementById("pd-title").textContent = p.title;

  const tb = document.getElementById("pd-titleblock");
  tb.innerHTML = `
    <div><span class="label">Project</span>${escapeHtml(p.title)}</div>
    <div><span class="label">Date</span>${escapeHtml(p.date)}</div>`;

  const tags = document.getElementById("pd-tags");
  p.tags.forEach((t) => tags.appendChild(el("span", { class: "tag", text: t })));

  if (p.image) {
    const wrap = document.getElementById("pd-image");
    wrap.style.display = "block";
    wrap.appendChild(el("img", { src: p.image, alt: p.title }));
  }

  const bodyEl = document.getElementById("pd-body");
  bodyEl.innerHTML = renderRichText(p.body);

  // Final report — shown only if the project has a reportPdf set in data.js.
  if (p.reportPdf) {
    const pdf = escapeHtml(p.reportPdf);
    const report = el("section", { class: "pd-report" });
    report.innerHTML = `
      <h2>Final Report</h2>
      <div class="pd-report-actions">
        <a class="btn btn--solid" href="${pdf}" download>Download Report (PDF)</a>
        <a class="btn" href="${pdf}" target="_blank" rel="noopener">Open in New Tab ↗</a>
      </div>
      <div class="pd-report-viewer">
        <object data="${pdf}" type="application/pdf">
          <div class="resume-fallback">
            <p>Your browser can't display the PDF inline — use the download button above.</p>
          </div>
        </object>
      </div>`;
    bodyEl.insertAdjacentElement("afterend", report);
  }
}

// ---------- media (photos + videos) ----------
function renderMedia() {
  const photoGrid = document.getElementById("photo-grid");
  if (PHOTOS.length === 0) {
    photoGrid.outerHTML = `<p class="spec">No photos yet — add image files to assets/photos/ and list them in js/data.js.</p>`;
  } else {
    PHOTOS.forEach((ph) => {
      const fig = el("figure", {}, [el("img", { src: ph.src, alt: ph.caption || "Photograph", loading: "lazy" })]);
      if (ph.caption) fig.appendChild(el("figcaption", { text: ph.caption }));
      fig.addEventListener("click", () => openLightbox(ph.src));
      photoGrid.appendChild(fig);
    });
  }

  const videoGrid = document.getElementById("video-grid");
  if (VIDEOS.length === 0) {
    videoGrid.outerHTML = `<p class="spec">No videos yet — add YouTube video IDs or Instagram Reel links in js/data.js.</p>`;
  } else {
    let hasInstagram = false;

    VIDEOS.forEach((v) => {
      const isInsta = !!v.instagramUrl;
      // Default: YouTube videos are horizontal, Instagram Reels are vertical.
      // Override per-video with orientation: "horizontal" or "vertical" in data.js.
      const orientation = v.orientation || (isInsta ? "vertical" : "horizontal");

      const card = el("div", { class: "video-card" });
      const frame = el("div", { class: `frame frame--${orientation}${isInsta ? " frame--insta" : ""}` });

      let watchUrl, watchLabel;
      if (isInsta) {
        hasInstagram = true;
        // Normalize the link: strip query params, ensure trailing slash.
        // Works with both /reel/... and /p/... links.
        const cleanUrl = v.instagramUrl.split("?")[0].replace(/\/*$/, "/");
        watchUrl = cleanUrl;
        watchLabel = "Open on Instagram ↗";
        // Optional: crop away Instagram's baked-in letterbox bars on horizontal reels.
        if (v.cropLetterbox) frame.classList.add("frame--crop");
        // Official Instagram embed: a blockquote that embed.js upgrades to a
        // playable post sized to the media's real aspect ratio.
        const embedHtml = `<blockquote class="instagram-media" data-instgrm-permalink="${escapeHtml(
          cleanUrl
        )}" data-instgrm-version="14" style="margin:0; width:100%; min-width:unset;"><a href="${escapeHtml(
          cleanUrl
        )}" target="_blank" rel="noopener">View this post on Instagram</a></blockquote>`;
        frame.innerHTML = v.cropLetterbox ? `<div class="insta-crop">${embedHtml}</div>` : embedHtml;
      } else {
        const vid = youtubeIdFrom(v.youtubeId);
        watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(vid)}`;
        watchLabel = "Watch on YouTube ↗";
        frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(
          vid
        )}" title="${escapeHtml(
          v.title
        )}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
      }

      card.appendChild(frame);
      card.appendChild(el("h3", { text: v.title }));
      if (v.description) card.appendChild(el("p", { text: v.description }));
      card.appendChild(
        el("a", { class: "watch-link", href: watchUrl, target: "_blank", rel: "noopener", text: watchLabel })
      );
      videoGrid.appendChild(card);
    });

    if (hasInstagram) loadInstagramEmbeds();
  }

  // social buttons
  const strip = document.getElementById("media-socials");
  const socials = [
    ["Instagram", SITE.contact.instagram],
    ["YouTube", SITE.contact.youtube],
  ];
  socials.forEach(([label, url]) => {
    if (!url) return;
    strip.appendChild(el("a", { class: "btn", href: url, target: "_blank", rel: "noopener", text: `${label} ↗` }));
  });
}

// Load Instagram's official embed script (once) so blockquotes become players.
function loadInstagramEmbeds() {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
    return;
  }
  if (document.getElementById("insta-embed-script")) return;
  const s = document.createElement("script");
  s.id = "insta-embed-script";
  s.src = "https://www.instagram.com/embed.js";
  s.async = true;
  document.body.appendChild(s);
}

function openLightbox(src) {
  let lb = document.querySelector(".lightbox");
  if (!lb) {
    lb = el("div", { class: "lightbox", role: "dialog", "aria-label": "Enlarged photo" });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lb.classList.remove("open");
    });
    document.body.appendChild(lb);
  }
  lb.innerHTML = "";
  lb.appendChild(el("img", { src }));
  lb.classList.add("open");
}