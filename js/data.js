/* ==========================================================================
   SITE CONTENT — edit this file to update your whole site.
   No HTML knowledge needed: change the text between the quotes.
   ========================================================================== */

const SITE = {
  name: "Luhai Tang",
  title: "Robotics Engineer",
  subtitle: "Photographer & Videographer",
  taglineHome:
    "I am so tired...",

  aboutParagraphs: [
    "I'm so burnt out...",
    "I've honestly lost all drive and motivation",
  ],

  // Contact & socials — set any value to "" to hide that row.
  contact: {
    email: "luhaitang13895@gmail.com",
    phone: "+1 (475) 287-3564",
    linkedin: "kedin.com/in/luhai-tang-711657261/",
    github: "https://github.com/luhaitang13895",
    instagram: "https://www.instagram.com/luhai_tang/",
    youtube: "https://www.youtube.com/@luhaitang13895",
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
   - date:      when you did the project
   - tags:      short keywords (shown as chips)
   - summary:   1–2 sentences shown on the card
   - image:     path to a thumbnail in assets/projects/ (or "" for none)
   - reportPdf: path to the project's final report PDF, e.g.
                "assets/projects/arm-report.pdf". Set to "" for no report.
                When set, the project page gets a "Final Report" section at
                the bottom with an inline viewer and a download button.
   - body:      the full write-up. Use \n\n between paragraphs.
                Lines starting with "## " become section headings.
                Lines starting with "- " become bullet points.

   EMBEDDING MEDIA IN THE WRITE-UP — put these on their own line in body,
   exactly where you want them to appear:

     !video[dQw4w9WgXcQ]
       Embeds a YouTube video. Paste the video ID or the whole URL —
       both work, same as the media page.

     !image[assets/projects/arm-gripper.jpg](Close-up of the gripper)
       Embeds an image with a caption. Images are auto-numbered
       "FIG. 1 —", "FIG. 2 —", etc. Leave the (...) off for no caption:
     !image[assets/projects/arm-gripper.jpg]
   ========================================================================== */

const PROJECTS = [
  {
    id: "4 ",
    title: "Object Tracking Pick-and-Place Robot",
    date: "2025",
    tags: ["Forward and Inverse Kinematics", "Motion Planning", "Trajectory Generation"],
    summary:
      "A 4 degree of freedom arm with object/color detection, tracking, and pick and place capabilities",
    image: "", //assets/card-2026-3-3-23-31-58.png
    reportPdf: "assets/RBE_3001_Final_Paper.pdf", // e.g. "assets/projects/robot-arm-report.pdf"
    body: `Replace this with the full story of the project. Explain the goal, the constraints you were working under, and what made it interesting.

● Designed and refined motion planning algorithms for smooth trajectory generation and velocity profiling.
● Developed forward and inverse kinematics for a 4-DOF robotic arm in MATLAB, enabling precise end-effector control.
● Integrated computer vision with real-time camera input to autonomously locate, identify, and accurately pick up objects.

!image[assets/card-2026-3-3-23-31-58.png](Example caption — delete this line or point it at a real image)

!video[https://youtu.be/OrKT54cp0UI]`,
  },
  {
    id: "Autonomous Robot Navigation and Mapping System",
    title: "SLAM Robotics",
    date: "2025",
    tags: ["SLAM", "Path Planning", "Controller"],
    summary:
      "An outdoor rover with LiDAR-based SLAM and vision-guided waypoint navigation.",
    image: "",
    reportPdf: "assets/RBE_3002_Final_Paper.pdf",
    body: `Replace this with the project write-up.

● Implemented SLAM with LiDAR in ROS, enabling autonomous environment mapping with > 95% positional accuracy.
● Designed and deployed an A* path planning algorithm to generate collision-free routes, reducing navigation time to target
waypoints by ~30% versus baseline methods.
● Developed a pure pursuit controller that improved trajectory accuracy by 20% and enabled smooth, reliable robot motion.`,
  },
  {
    id: "6",
    title: "UAV Regulation Interface Platform",
    date: "2026",
    tags: ["Web Design", "Flask", "Github", "JSON"],
    summary:
      "An interactive website containing 100+ entries of global UAV regualtions nad tests",
    image: "",
    reportPdf: "",
    body: `Replace this with the project write-up.

## Overview
https://etc-uav-regulation-interface.onrender.com/

Above is the link to the interface that we made. The site is deployed on render, so there will be a slight delay in booting up. 
The interface is split into card selections, to choose regions, topics, sub topics, and specifics. 

## Key Systems
Search function for specific topics
Admin login for direct webpage editting of entries
Simple heirarchical navigation
`,
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
  { instagramUrl: "https://www.instagram.com/p/DX6r72YJEUM/", orientation: "horizontal", title: "Reel Title", description: "A trip to Qijin Island" },
  { instagramUrl: "https://www.instagram.com/p/DaQQVvhg9gm/", orientation: "horizontal", title: "Reel Title", description: "Life is simple, do it all with no regrets." },
  
  
  // { instagramUrl: "https://www.instagram.com/reel/YOUR_REEL_CODE/", orientation: "horizontal", title: "Reel Title", description: "One line about this edit." },
];