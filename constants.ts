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
  // ABOUT PAGE — team / founder photo
  // Folder: public/images/about/
  // Recommended: landscape, 1200×800px min
  // ---------------------------------------------------------------------------
  ABOUT_TEAM: "https://images.unsplash.com/photo-1529209074137-c6bce7188f6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  // → Replace with: "/images/about/team.jpg"

  // About page — mission section image (girls learning / workshop)
  // → Replace with: "/images/about/mission.jpg"
  ABOUT_MISSION: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",

  // ---------------------------------------------------------------------------
  // APP PAGE — hero banner
  // Folder: public/images/app/
  // Recommended: landscape, 1000×600px min
  // ---------------------------------------------------------------------------
  APP_HERO: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  // → Replace with: "/images/app/app-hero.jpg"

  // ---------------------------------------------------------------------------
  // APP SCREENSHOTS — shown in app page & gallery
  // Folder: public/images/app/
  // Recommended: portrait (9:16 or 9:19), actual phone screenshots
  // Add or remove entries as needed
  // ---------------------------------------------------------------------------
  APP_SCREENSHOTS: [
    {
      src: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      // → Replace with: "/images/app/screenshot-1.jpg"
      alt: "ShaktiPath app — student dashboard",
      caption: "Student dashboard showing AI learning progress"
    },
    {
      src: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=400&auto=format&fit=crop",
      // → Replace with: "/images/app/screenshot-2.jpg"
      alt: "ShaktiPath app — AI tutor",
      caption: "AI tutor chat interface"
    },
    {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop",
      // → Replace with: "/images/app/screenshot-3.jpg"
      alt: "ShaktiPath app — mentor connect",
      caption: "Safe mentor connection screen"
    },
    {
      src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop",
      // → Replace with: "/images/app/screenshot-4.jpg"
      alt: "ShaktiPath app — courses",
      caption: "Offline-ready course library"
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
