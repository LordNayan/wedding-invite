/**
 * =============================================================================
 *  WEDDING INVITATION — SITE CONFIG
 * =============================================================================
 *  This is the ONLY file you need to edit to customise the invitation.
 *  Change any text, image path, link or date below and the whole site updates.
 *
 *  IMAGES:
 *   - All images live in /public/assets/.  Reference them as "/assets/<file>".
 *   - To pull the exact images/video from the original site, run:
 *         npm run fetch-assets
 *     (downloads everything into /public/assets automatically).
 *   - To use your own, just drop files into /public/assets and update the paths.
 * =============================================================================
 */

export const siteConfig = {
  /* ---------- Browser tab / social sharing ---------- */
  meta: {
    title: "Nayan & Natasha — Our Forever Begins Together",
    description:
      "Celebrate the wedding of Nayan & Natasha — 9th January, 2027, Kottayam, Kerala.",
    ogImage: "/assets/og-image.png",
  },

  /* ---------- Global identity ---------- */
  couple: {
    // Used in the big script heading on the hero (rendered as one word).
    scriptName: "NayanWedsNatasha",
    monogramText: "N & N",
    monogramImage: "/assets/monogram.png",
    initials: "N | N",
  },

  /* ---------- Envelope intro overlay ---------- */
  intro: {
    enabled: true,
    video: "/assets/envelope-intro.mp4",
    poster: "/assets/hero-bg.webp",
    tapLabel: "TAP TO OPEN",
  },

  /* ---------- Hero ---------- */
  hero: {
    backgroundImage: "/assets/hero-bg.webp",
    kicker: "WE ARE GETTING MARRIED",
    saveTheDate: "SAVE THE DATE",
    dateLine: "9th January 2027",
    location: "KOTTAYAM, KERALA",
  },

  /* ---------- Countdown ---------- */
  countdown: {
    // ISO date/time of the wedding (local). Drives the live countdown.
    targetDate: "2027-01-09T15:00:00+05:30",
    heading: "THE COUNTDOWN BEGINS",
    footnote: "Until our forever begins",
    thankYou: "Thank you for being a part of our special day.",
  },

  /* ---------- Families ---------- */
  families: {
    backgroundImage: "/assets/families-bg.webp",
    tagline: "Two families. One promise.",
    heading: "Introducing the families",
    closing: ["Raised with love,", "united by destiny,", "together forever"],
    groom: {
      name: "Nayan",
      relationLabel: "S/o",
      parents: "Cyril Philip & Soly Joseph",
      siblingLabel: "Brother of",
      siblings: ["Dr. Sruthi Cyril", "Sreya Cyril"],
    },
    bride: {
      name: "Natasha",
      relationLabel: "D/o",
      parents: "Scaria Joseph & Bindu Scaria",
      siblingLabel: "Sister of",
      siblings: ["Leona Mary Scaria", "Linett Mary Scaria"],
    },
  },

  /* ---------- Our Story ---------- */
  story: {
    backgroundImage: "/assets/story-bg.webp",
    heading: "OUR STORY",
    intro: "Some chapters are written by destiny.",
    quote: "From that first conversation to a lifetime of adventures",
    // Gallery images (any number). caption shows as alt + optional overlay.
    gallery: [
      { src: "/assets/story-1.webp", caption: "Every journey led us here" },
      { src: "/assets/story-2.webp", caption: "From adventures to forever" },
      { src: "/assets/story-3.webp", caption: "We wrote our story. Now comes forever" },
      { src: "/assets/story-4.webp", caption: "From miles apart to forever close" },
      { src: "/assets/story-5.webp", caption: "Our best adventure begins now" },
      { src: "/assets/story-6.webp", caption: "Our best adventure begins now" },
      { src: "/assets/story-7.webp", caption: "Our best adventure begins now" },
    ],
  },

  /* ---------- Schedule of events (overview + cards) ---------- */
  schedule: {
    backgroundImage: "/assets/schedule-bg.webp",
    heading: "SCHEDULE OF EVENTS",
    subheading: "A CELEBRATION OF TRADITION, LOVE & FAMILY",
    // Each card is a pre-designed image from the original deck.
    cards: [{ image: "/assets/schedule-card-1.webp", title: "Chanthamcharth" }],
  },

  /* ---------- Wedding ceremony ---------- */
  wedding: {
    backgroundImage: "/assets/wedding-bg.webp",
    contentImage: "/assets/wedding-content.webp",
    eyebrow: "SCHEDULE OF EVENTS",
    subheading: "A CELEBRATION OF LOVE, FAITH & FOREVER",
    dateLabel: "9TH JANUARY, 2027",
    title: "Wedding",
    time: "3:00 PM",
    venueLabel: "Venue:",
    venueName: "St. Joseph's Church Pushpagiri Kottayam",
    venueMapUrl: "https://maps.app.goo.gl/F1RsPp6k4SX69nKL9?g_st=iw",
    verse: ["Therefore what God has joined together,", "let no one separate."],
    verseRef: "MATTHEW 19:6",
  },

  /* ---------- Reception ---------- */
  reception: {
    backgroundImage: "/assets/reception-bg.webp",
    contentImage: "/assets/reception-content.webp",
    eyebrow: "SCHEDULE OF EVENTS",
    subheading: "A CELEBRATION OF LOVE, FAITH & FOREVER",
  },

  /* ---------- RSVP ---------- */
  rsvp: {
    backgroundImage: "/assets/rsvp-bg.webp",
    shapeImage: "/assets/rsvp-shape.webp",
    heading: "RSVP",
    nameLabel: "FULL NAME",
    namePlaceholder: "Your name",
    attendingQuestion: "WILL YOU BE ATTENDING?",
    acceptLabel: "Joyfully Accept",
    declineLabel: "Regretfully Decline",
    submitLabel: "SEND RSVP",
    // Shown after a (client-only) submit. No data leaves the browser.
    successMessage: "Thank you! Your response has been noted with love.",
    footer: "Celebrate this new chapter with us.",
    directionsLabel: "GET DIRECTIONS",
    directionsUrl: "https://maps.app.goo.gl/F1RsPp6k4SX69nKL9?g_st=iw",
  },
} as const;

export type SiteConfig = typeof siteConfig;
