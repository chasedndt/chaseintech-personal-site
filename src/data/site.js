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

// Social links.
//   - github: verified public profile.
//   - x: taken from the operator's own GitHub profile metadata
//     (twitter_username: ChaserCrypto_) — self-declared, pending confirmation.
//   - youtube / tiktok / instagram: URL not supplied. Left null deliberately.
//     Never invent a social URL (§43.2); add only on explicit approval.
// Only entries with a non-null `url` are rendered anywhere on the site.
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
    handle: null,
    url: null, // TODO(operator): supply channel URL
    event: "youtube_click",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@chasedndt",
    url: "https://github.com/chasedndt",
    event: "github_click",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: null,
    url: null, // TODO(operator): supply profile URL
    event: "tiktok_click",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: null,
    url: null, // TODO(operator): supply profile URL
    event: "instagram_click",
  },
];

// Excluded by directive (§13.8, §44): LinkedIn and any telephone number.

export const activeSocials = socials.filter((s) => s.url);

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Videos", href: "/videos" },
  { label: "Build Log", href: "/build-log" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
];
