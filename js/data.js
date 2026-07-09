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
    id: "robotic-laser-welder-integration",
    title: "Robotic Laser Welder Integration System",
    rev: "REV A",
    date: "2025",
    tags: [
      "ABB RobotStudio",
      "RAPID",
      "3D Printing",
      "SOLIDWORKS",
      "Industrial Robotics",
      "I/O Simulation"
    ],
    summary:
      "A safe robotic laser welding test platform using an ABB GOFA cobot, a mechanically accurate 3D-printed laser welder replica, and simulated electrical I/O for collision-free path planning and operator training.",
    image: "",
    body: `This project focused on developing a safe and cost-effective workflow for testing, programming, and validating robotic laser welding routines without risking damage to high-value laser welding equipment. The system integrated an ABB GOFA CRB 15000 collaborative robot with a realistic 3D-printed replica of a THEO MA1-65 laser welder, allowing robotic motion, tool calibration, and weld path validation to be performed before using the real welding hardware.

  The main challenge was balancing realism with safety. The dummy tool needed to behave similarly to the real welder from a mechanical and spatial perspective, while the electrical system needed to simulate real laser enable, external start, emergency stop, and weld-position feedback without energizing an actual laser. By combining mechanical design, electrical I/O simulation, and robotic path planning, the final system created a practical development platform for robotic welding demonstrations, training, and future live-laser integration.

  ## Mechanical Design

  I designed a SOLIDWORKS replica of the THEO MA1-65 laser welder to match the physical geometry, mounting interface, and load behavior of the real tool. The replica was 3D printed and designed to replicate mass and load distribution within ±5%, allowing the ABB GOFA cobot to perform realistic motion testing without exposing the actual laser welder to collision or handling risk.

  The dummy tool was split into multiple functional sections:

  - A head and handle assembly designed to match the welder profile
  - Hollow internal sections for steel inserts to simulate realistic tool weight
  - A simplified nozzle and wire feeder assembly
  - A laser pointer path through the nozzle to visualize the intended weld location
  - A two-part end-effector casing and mount for secure attachment to the robot wrist

  The casing was printed using a Prusa XL, with flexible TPU incorporated at selected interfaces to improve grip, reduce stress concentration, and improve durability. The robot mounting component was resin printed for higher dimensional accuracy, minimizing play at the final robot joint and improving repeatability during testing.

  ## Electrical I/O Simulation

  To simulate laser welder behavior without firing a real laser, I developed and integrated an electrical I/O feedback system using the ABB DSQC1031 I/O expander. The system included LED indicators for laser enable, external start, and emergency stop states, along with a laser pointer to visually represent the weld location.

  The LED system provided real-time visual feedback during operation, making it easier to debug robot routines and verify I/O behavior. The laser pointer was controlled through a solid-state relay, allowing the system to simulate the moment when the welding beam would activate. This gave operators and developers a safer way to confirm weld alignment, tool orientation, and program timing before transitioning to real hardware.

  This I/O simulation improved operational efficiency by approximately 30% by making robot state changes immediately visible during testing and reducing the time needed to diagnose program or wiring issues.

  ## Software & Robot Programming

  The robotic welding workflow was developed in ABB RobotStudio 2025 using RAPID, AutoPath, FlexPendant operation, and collision-free path planning tools. I programmed and optimized robotic welding routines for the ABB GOFA cobot, using both manual lead-through programming and RobotStudio AutoPath generation.

  Lead-through programming was used to physically guide the robot to important target locations and quickly define reference points in the workspace. AutoPath was then used to generate weld paths from selected curves, allowing faster creation of consistent robotic motion along the desired weld geometry.

  Key programming and calibration tasks included:

  - Tool load calibration using ABB FlexPendant procedures
  - Tool Center Point calibration for accurate weld-tip positioning
  - RAPID routine development for robot movement and I/O behavior
  - AutoPath generation for linear and curved weld paths
  - Collision geometry setup in RobotStudio
  - Collision-free path generation with defined clearance constraints
  - Verification of robot reachability, joint limits, and tool orientation

  The optimized routines reached a 90% collision-free path success rate and reduced setup time by approximately 40% compared to manual path teaching alone.

  ## Results

  The final system successfully demonstrated a safe, realistic, and programmable robotic laser welding simulation platform. By using a mechanically accurate dummy tool instead of the live laser welder, the team was able to validate robot motion while protecting more than $50K in welding equipment from potential collision damage.

  The project improved both safety and usability by combining realistic mechanical loading with live visual feedback from the simulated I/O system. RobotStudio programming and AutoPath-based path generation made it possible to create and test welding paths more efficiently, while collision-free path planning helped ensure safe motion through the robot workspace.

  Key outcomes:

  - Replicated laser welder mass and load distribution within ±5%
  - Protected $50K+ in laser welding equipment during testing
  - Improved operational debugging efficiency by 30% using visual I/O feedback
  - Achieved a 90% collision-free path success rate
  - Reduced robotic path setup time by 40% compared to manual teaching
  - Created a scalable platform for future live laser welding integration

  ## Future Improvements

  Future development could include integrating the actual laser welder for live welding applications, adding Modbus communication for more advanced welder control, and implementing additional safety interlocks for production use. I would also refine the path planning workflow further to improve repeatability and reduce manual adjustment after AutoPath generation.`
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