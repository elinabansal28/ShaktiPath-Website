// =============================================================================
// IMAGES — Single source of truth for every image on the site.
//
// HOW TO SWAP A PHOTO:
//   1. Drop your file into the matching public/images/<folder>/
//   2. Update the path below (e.g. change the Unsplash URL to "/images/hero/hero-1.jpg")
//   3. Save. Vite hot-reloads locally; Vercel auto-deploys on git push.
//
// Supported formats: JPG, WEBP, PNG, SVG
// Files in public/ are served from the root, so public/images/x.jpg → "/images/x.jpg"
// =============================================================================

export const IMAGES = {

  // ---------------------------------------------------------------------------
  // LOGO
  // Drop your logo as public/logo.png (or change the path below)
  // ---------------------------------------------------------------------------
  LOGO: "/logo.png",

  // ---------------------------------------------------------------------------
  // HOME — Hero carousel (3 slides)
  // Folder: public/images/hero/
  // Recommended: wide landscape, 1600×900px minimum
  // Replace each Unsplash URL with e.g. "/images/hero/hero-1.jpg"
  // ---------------------------------------------------------------------------
  HOME_HERO: [
    {
      image: "/images/hero/hero-1.jpg",
      titleWhite: "A Move",
      titleAccent: " beyond textbooks",
      description: "Empowering high school girls with marketable Digital / AI skills at an early age."
    },
    {
      image: "/images/hero/hero-2.jpg",
      titleWhite: "Shifting the Northstar from \u201cLiteracy\u201d to",
      titleAccent: " \u201cCareer building\u201d",
      description: "Helping them realise their potential through side-hustles/digital gigs. Making them Job-ready"
    },
    {
      image: "/images/hero/hero-3.jpg",
      titleWhite: "We create Learners",
      titleAccent: " and Earners",
      description: "Enabling them to complete their education and build sustainable career"
    }
  ],

  // ---------------------------------------------------------------------------
  // HOME — Featured story card (large image on the home page)
  // Folder: public/images/home/
  // Recommended: portrait or square, 1000×1000px min
  // ---------------------------------------------------------------------------
  HOME_FEATURE: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  // → Replace with: "/images/home/feature.jpg"

  // ---------------------------------------------------------------------------
  // WHY SHAKTIPATH PAGE — main image
  // Folder: public/images/why/
  // Recommended: landscape, 1000×700px min
  // ---------------------------------------------------------------------------
  WHY_HERO: "/images/why/why-hero.jpg",

  // ---------------------------------------------------------------------------
  // ABOUT PAGE — hero panel image (slanted panel on right side)
  // Folder: public/images/about/
  // Recommended: landscape, 1200×800px min
  // ---------------------------------------------------------------------------
  ABOUT_TEAM: "/images/about/team.jpg",

  // About page — mission section image (left side of Mission block)
  // Folder: public/images/about/
  // Recommended: landscape, 800×600px min
  // → Replace with: "/images/about/mission.jpg"
  ABOUT_MISSION: "/images/about/mission.jpg",

  // ---------------------------------------------------------------------------
  // APP PAGE — 3 phone mockup screenshots (shown in "Inside the App" section)
  // Folder: public/images/app/
  // Recommended: portrait 9:19 ratio (e.g. 390×844px), actual phone screenshots
  // These are shown inside a phone frame — use real app screenshots for best effect
  // ---------------------------------------------------------------------------
  APP_SCREENSHOTS: [
    {
      src: "/images/app/screenshot-1.jpg",
      label: "Learning Paths",
      alt: "ShaktiPath app — learning paths home screen",
      caption: "4 skill paths, 20+ courses — pick your track and start building"
    },
    {
      src: "/images/app/screenshot-2.jpg",
      label: "Lesson View",
      alt: "ShaktiPath app — Canva design lesson",
      caption: "Bite-sized lessons with video tutorials and an AI-powered voice tutor in your language"
    },
    {
      src: "/images/app/screenshot-3.jpg",
      label: "My Progress",
      alt: "ShaktiPath app — progress tracking with certificates",
      caption: "Track your points, earn certificates, and see how far you've come"
    },
    {
      src: "/images/app/screenshot-4.jpg",
      label: "Community",
      alt: "ShaktiPath app — community circles",
      caption: "Join circles of learners — Creative Designers, Women Entrepreneurs & more"
    },
    {
      src: "/images/app/screenshot-5.jpg",
      label: "Career Hub",
      alt: "ShaktiPath app — AI career tools",
      caption: "AI-powered tools to build your portfolio, pitch clients, and find work"
    },
    {
      src: "/images/app/screenshot-6.jpg",
      label: "Settings",
      alt: "ShaktiPath app — settings and language",
      caption: "Multilingual & personalised"
    },
  ],

  // ---------------------------------------------------------------------------
  // WORKSHOPS PAGE — 6 photos in 2 rows × 3 columns magazine grid
  // Folder: public/images/workshops/
  // Recommended: landscape 4:3 ratio (e.g. 800×600px)
  // Replace each Unsplash URL with e.g. "/images/workshops/workshop-1.jpg"
  // ---------------------------------------------------------------------------
  WORKSHOP_PHOTOS: [
    {
      src: "/images/workshops/workshop-1.jpg",
      alt: "Elina presenting Career Workshop at Kalyan School",
      caption: "Career Workshop launch — Kalyan School, India"
    },
    {
      src: "/images/workshops/workshop-2.jpg",
      alt: "Elina being felicitated by school management",
      caption: "Felicitation by school management — Kalyan School, India"
    },
    {
      src: "/images/workshops/workshop-3.jpg",
      alt: "200+ students engaged at a career awareness session",
      caption: "200+ students engaged at a career awareness session"
    },
    {
      src: "/images/workshops/workshop-4.jpg",
      alt: "Girls working on computers in a computer lab",
      caption: "Hands-on computer lab session — Kalyan School, India"
    },
    {
      src: "/images/workshops/workshop-5.jpg",
      alt: "Elina mentoring students individually",
      caption: "Founder Elina mentoring students individually"
    },
    {
      src: "/images/workshops/workshop-6.jpg",
      alt: "Students exploring ShaktiPath app on screen",
      caption: "Live demo of the ShaktiPath app — Kalyan School, India"
    },
  ],

  // ---------------------------------------------------------------------------
  // GALLERY — workshop & event photos
  // Folder: public/images/gallery/
  // Add or remove entries freely. Each entry needs: src, alt, category, caption
  // Categories: "Workshops" | "Mentoring" | "App" | "Community"
  // ---------------------------------------------------------------------------
  GALLERY: [
    {
      src: "https://images.unsplash.com/photo-1577896335608-29bd2a839356?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/workshop-1.jpg"
      alt: "Girls in a workshop session",
      category: "Workshops" as const,
      caption: "AI Basics workshop — Kalyan School, Feb 2025"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/workshop-2.jpg"
      alt: "Students learning on computers",
      category: "Workshops" as const,
      caption: "Hands-on coding session with 40 students"
    },
    {
      src: "https://images.unsplash.com/photo-1529390003868-6c01d73923f8?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/community-1.jpg"
      alt: "Girls collaborating on a project",
      category: "Community" as const,
      caption: "Teamwork — project presentation day"
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/mentoring-1.jpg"
      alt: "Mentor with students",
      category: "Mentoring" as const,
      caption: "One-on-one mentor session — Ambernath pilot"
    },
    {
      src: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/app-1.jpg"
      alt: "Student using the ShaktiPath app",
      category: "App" as const,
      caption: "Testing the ShaktiPath app's AI tutor feature"
    },
    {
      src: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/workshop-3.jpg"
      alt: "Group of girls at a workshop",
      category: "Workshops" as const,
      caption: "Certificate distribution — Cohort 1 graduation"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/mentoring-2.jpg"
      alt: "Young woman on a laptop",
      category: "Mentoring" as const,
      caption: "Remote mentoring pilot — video check-in"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/community-2.jpg"
      alt: "Students working together",
      category: "Community" as const,
      caption: "Community study group — student-led initiative"
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      // → Replace with: "/images/gallery/community-3.jpg"
      alt: "Girl presenting her project",
      category: "Community" as const,
      caption: "Project showcase — Priya presents her mother's website"
    },
  ],

  // App background pattern (decorative — probably fine to leave as-is)
  APP_BG_PATTERN: "https://www.transparenttextures.com/patterns/cubes.png",
};

export const BRAND = {
  name: "ShaktiPath",
  tagline: "Empowering Her"
};

export const FORMSPREE_URL = 'https://formspree.io/f/xgolnaqj';
