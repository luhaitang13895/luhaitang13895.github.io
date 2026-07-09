/* ==========================================================================
   SITE CONTENT — edit this file to update your whole site.
   No HTML knowledge needed: change the text between the quotes.
   ========================================================================== */

const SITE = {
  name: "Luhai Tang",
  title: "Robotics Engineer",
  subtitle: "Photographer & Videographer",
  taglineHome:
    "I design, build, and program robotic systems — and when I'm away from the bench, I'm behind a camera. This site collects both.",

  aboutParagraphs: [
    "Replace this with your about-me paragraph. Talk about your background in robotics — what you studied, what kinds of systems you love working on (manipulators? mobile robots? controls? perception?), and what you're doing now.",
    "Then add a line or two about photography and videography: how you got into it, what you like to shoot, and how the two disciplines feed each other.",
  ],

  // Contact & socials — set any value to "" to hide that row.
  contact: {
    email: "luhaitang13895@gmail.com",
    phone: "+1 (475) 287-3564",
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    instagram: "https://instagram.com/your-handle",
    youtube: "https://youtube.com/@your-handle",
  },

  // Path to your resume PDF. To update your resume, just replace this file
  // in the assets folder with the new version (keep the same filename).
  resumePath: "assets/resume.pdf",
  resumeUpdated: "2026-07", // shown on the resume page, update when you swap the file
};

/* ==========================================================================
   ENGINEERING PROJECTS
   Add a new project by copying one of the blocks below (from { to },)
   and editing it. The first project in the list appears first on the page.

   - id:        short unique name, used in the URL (no spaces)
   - rev:       revision/version label shown in the title block (optional flair)
   - date:      when you did the project
   - tags:      short keywords (shown as chips)
   - summary:   1–2 sentences shown on the card
   - image:     path to a thumbnail in assets/projects/ (or "" for none)
   - body:      the full write-up. Use \n\n between paragraphs.
                Lines starting with "## " become section headings.
                Lines starting with "- " become bullet points.
   ========================================================================== */

const PROJECTS = [
  {
    id: "example-robot-arm",
    title: "6-DOF Robotic Arm",
    rev: "REV C",
    date: "2025",
    tags: ["ROS 2", "Inverse Kinematics", "3D Printing"],
    summary:
      "A 3D-printed six-axis manipulator with custom inverse kinematics and a ROS 2 control stack.",
    image: "",
    body: `Replace this with the full story of the project. Explain the goal, the constraints you were working under, and what made it interesting.

## Design
Describe the mechanical and electrical design. What actuators, sensors, and materials did you use, and why?

## Software & Controls
- Control architecture (e.g., ROS 2 nodes, real-time loop rates)
- Kinematics / planning approach
- Anything clever you're proud of

## Results
What did it achieve? Include numbers where you can — repeatability, payload, cycle time. What would you do differently next time?`,
  },
  {
    id: "example-autonomous-rover",
    title: "Autonomous Rover Platform",
    rev: "REV A",
    date: "2024",
    tags: ["SLAM", "Computer Vision", "Embedded"],
    summary:
      "An outdoor rover with LiDAR-based SLAM and vision-guided waypoint navigation.",
    image: "",
    body: `Replace this with the project write-up.

## Overview
What problem was the rover solving, and what was the scope?

## Key Systems
- Perception stack
- Localization & mapping
- Drive and power systems

## Lessons Learned
The honest retrospective — recruiters and fellow engineers love this section.`,
  },
];

/* ==========================================================================
   PHOTOGRAPHY
   Put your image files in assets/photos/ then list them here.
   caption is optional — set it to "" for no caption.
   ========================================================================== */

const PHOTOS = [
  { src: "assets/photos/3.JPG", caption: "July 4th Fireworks - Orange, CT" },
  { src: "assets/photos/6.JPG", caption: "July 4th Fireworks - Orange, CT" },
  { src: "assets/photos/7.JPG", caption: "July 4th Fireworks - Orange, CT" },
  { src: "assets/photos/IMG_2091.jpg", caption: "Alishan - Chiayi, Taiwan" },
  // { src: "assets/photos/your-photo-1.jpg", caption: "Golden hour — Hartford, CT" },
  // { src: "assets/photos/your-photo-2.jpg", caption: "" },
];

/* ==========================================================================
   VIDEOS & EDITS — supports YouTube videos AND Instagram Reels, mixed freely.

   ORDER: videos appear on the page in the exact order they're listed here,
   filling the grid left-to-right, top-to-bottom. To feature a reel first,
   just cut its whole { ... }, block and paste it at the top of the list.

   YOUTUBE — paste the video ID, or just the whole URL (both work;
   extra bits like "&t=1s" are handled automatically):
     { youtubeId: "dQw4w9WgXcQ", title: "...", description: "..." }

   INSTAGRAM — paste the full link to the reel or post. Both
   instagram.com/reel/... and instagram.com/p/... links work.
   IMPORTANT: the account and post must be PUBLIC, or the embed stays blank.
     { instagramUrl: "https://www.instagram.com/reel/ABC123xyz/", title: "...", description: "..." }

   ORIENTATION — optional on any video:
     orientation: "horizontal"   (16:9 widescreen)
     orientation: "vertical"     (9:16 portrait)
   If you leave it out, YouTube defaults to horizontal and Instagram
   defaults to vertical.

   CROPLETTERBOX — optional, for horizontal Instagram reels only:
     cropLetterbox: true
   Instagram stores reels on a portrait canvas, so a horizontal reel can show
   with big black bars baked into the embed. This crops the embed to a clean
   16:9 window around just the video. Leave it off if your reel displays fine.
   ========================================================================== */

const VIDEOS = [

  { youtubeId: "4KGFHXiTRCQ", title: "WPI 2025 Pan Asian Festival", description: "A quick vlog of the WPI 2025 Pan Asian Festival." },
  { youtubeId: "ljz32-0UyYQ", title: "pov: the trip made it out of the group chat", description: "A quick trip to the Han River in South Korea" },
  { youtubeId: "o_Zr16wNJ7c", title: "I MET MICHAEL REEVES | and we won *third place*", description: "Sauceathon 2025 was held in Norwalk, CT, so some friends and I decided to test our luck" },
  // Vertical reel (default for Instagram, no orientation needed):
  // { instagramUrl: "https://www.instagram.com/reel/YOUR_REEL_CODE/", title: "Reel Title", description: "One line about this edit." },
  // Horizontal reel (override the default):
  { instagramUrl: "https://www.instagram.com/p/DX6r72YJEUM/", orientation: "horizontal", title: "Reel Title", description: "One line about this edit." },
  // { instagramUrl: "https://www.instagram.com/reel/YOUR_REEL_CODE/", orientation: "horizontal", title: "Reel Title", description: "One line about this edit." },
];