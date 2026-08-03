// ChaseInTech site configuration — canonical identity, social and contact.
// Spelling lock (§4): the brand is "ChaseInTech" and the domain is
// "chaseintech.com". Never chasintech / chasingtech / chaseintec.

export const site = {
  brand: "ChaseInTech",
  domain: "chaseintech.com",
  url: "https://chaseintech.com",
  location: "London, United Kingdom",
  signature: "Builder mode, everywhere.",
  title: "ChaseInTech — AI Engineer, Founder and Systems Builder",
  description:
    "The portfolio of Chase, a London-based AI engineer and founder building agentic systems, automation products and full-stack software.",
};

// Operator-controlled contact address.
// NOTE (§28): the handover gates this until inbound delivery is tested; the
// operator explicitly overrode that and asked for it to ship now. Flip
// `emailOperational` to false to hide it everywhere in one edit.
export const emailOperational = true;
export const email = "chase@chaseintech.com";

// Newsletter configuration. The public form posts directly to Buttondown's
// documented embed endpoint, so no API key or client-side SDK is required.
export const newsletter = {
  active: true,
  provider: "Buttondown",
  username: "ChaseInTech",
  name: "ChaseInTech Dispatch",
  description:
    "AI news and analysis, technical deep dives, independent model studies, and practical build notes from ChaseInTech.",
  url: "https://buttondown.com/ChaseInTech",
  subscribeEndpoint:
    "https://buttondown.com/api/emails/embed-subscribe/ChaseInTech",
};

// Personal social links — all confirmed by the operator on 2026-07-30.
// Only entries with a non-null `url` render anywhere on the site.
export const socials = [
  {
    id: "x",
    label: "X",
    handle: "@ChaserCrypto_",
    url: "https://x.com/ChaserCrypto_",
    event: "x_click",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@ChaseDNDT",
    url: "https://www.youtube.com/@ChaseDNDT",
    event: "youtube_click",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@chaseintech_",
    url: "https://www.tiktok.com/@chaseintech_",
    event: "tiktok_click",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@chasedndt",
    url: "https://github.com/chasedndt",
    event: "github_click",
  },
  // Personal LinkedIn. The visual-identity directive excluded LinkedIn, but the
  // operator later supplied this profile and made it the primary home for
  // articles and founder posts, which supersedes that exclusion.
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "john-idowu",
    url: "https://uk.linkedin.com/in/john-idowu-03044a175",
    event: "linkedin_click",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: null,
    url: null, // Not supplied; never invented.
    event: "instagram_click",
  },
];

// Still excluded by directive (§13.8, §44): any telephone number.

export const activeSocials = socials.filter((s) => s.url);

// Freelance platform profiles. Render-when-present: entries with a null URL
// are invisible everywhere. The operator registers the accounts (account
// creation is theirs alone); URLs get added here as they exist.
export const freelancePlatforms = [
  {
    id: "upwork",
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d263e874cb34f2cc",
  },
  { id: "fiverr", label: "Fiverr", url: null },
  { id: "contra", label: "Contra", url: null },
  { id: "toptal", label: "Toptal", url: null },
];

export const activeFreelancePlatforms = freelancePlatforms.filter((p) => p.url);

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Videos", href: "/videos" },
  { label: "Build Log", href: "/build-log" },
  { label: "About", href: "/about" },
  { label: "Uses", href: "/uses" },
  { label: "Work With Me", href: "/work-with-me" },
];

// Satellite pages, surfaced in the header "More" menu (desktop) and appended
// flat to the mobile menu — nothing on the site should be footer-only.
export const moreNav = [
  { id: "now", label: "Now", href: "/now", hint: "Current focus, dated" },
  {
    id: "newsletter",
    label: "Newsletter",
    href: "/newsletter",
    hint: "AI analysis and build notes",
  },
  { id: "press", label: "Press Kit", href: "/press", hint: "Bio, imagery, links" },
  { id: "links", label: "Links", href: "/links", hint: "The compact card" },
  { id: "search", label: "Search", href: "/search", hint: "Full-text, on-device" },
];
