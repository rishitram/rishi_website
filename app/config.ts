/* ─────────────────────────────────────────────────────────────────────
   SITE CONFIG
   This is the only file you need to edit to personalise the template.
   Every user-facing string and portfolio entry lives here.

   Quick start:
     1. Fill in ME below — every raw fact about you (name, role, email,
        usernames, resume path) lives there ONCE. Everything else in this
        file (PERSON, SITE, SOCIAL_LINKS, CONTACT, FOOTER, project GitHub
        links) is derived from it, so you never have to repeat yourself.
     2. Update EDUCATION, EXPERIENCE, and PROJECTS with your own entries
        (add/remove array items freely — sections render however many
        entries you give them).
     3. Skim HERO and adjust the bio/CTAs if you want.
     4. Drop your resume PDF at public/resume.pdf (or wherever ME.resumePath
        points) so the resume links work (see README.md for details).

   Note: you don't need to type in your site's URL anywhere. It's
   derived automatically below — see SITE_URL.
   ───────────────────────────────────────────────────────────────────── */

// ── Your info (edit this once) ─────────────────────────────────────────
// The single source of truth for anything identifying you. Every other
// section below derives from these fields instead of repeating them.
export const ME = {
  firstName:  'Rishi',
  lastName:   'Ramachandran',
  role:       'Computer Science Student',
  email:      'rishi1ramachandran@gmail.com',
  github:     'rishitram',
  linkedin:   'rishi-ramachandran-b0989736a',
  resumePath: '/resume.pdf',
};

// Derived URLs, built once from ME so nothing else hardcodes them.
const GITHUB_URL   = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF   = `mailto:${ME.email}`;

// The site's own URL, figured out automatically instead of hardcoded:
//   - On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set for you at build
//     time, so a Vercel deploy needs zero config here.
//   - Locally (pnpm dev / pnpm build), it falls back to localhost.
//   - Deploying elsewhere (or using a custom domain)? Set NEXT_PUBLIC_SITE_URL
//     in your environment (e.g. a .env.local file) to override.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ──────────────────────────────────────────────────────
// Shown in the hero section and used to build the page title below.
export const PERSON = {
  firstName: ME.firstName,
  lastName:  ME.lastName,
  fullName:  `${ME.firstName} ${ME.lastName}`,
  role:      ME.role,
};

// ── Site metadata ─────────────────────────────────────────────────────
// Powers the browser tab title, meta description, canonical URL, and
// social previews. `url` is derived automatically (see SITE_URL above).
export const SITE = {
  url:         SITE_URL,
  title:       `${PERSON.fullName} — ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description: `Personal portfolio of ${PERSON.fullName}, a UCLA computer science student building AI, web apps, and security-focused tools.`,
};

// ── Navigation links ──────────────────────────────────────────────────
// Shown in the header. Each `href` should match a section's `id` on the
// page (e.g. '#projects' scrolls to <section id="projects">). Add or
// remove entries to match the sections you actually want to show.
export const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

// ── Hero section ──────────────────────────────────────────────────────
// The big intro at the top of the page. `ctas` are the call-to-action
// buttons — set `primary: true` for the filled/highlighted button.
export const HERO = {
  greeting: "Hey, I'm",
  bio:      "I’m a UCLA CS student who likes building products, experimenting with AI, and making tech that actually feels useful. I spend time in full-stack dev, model evals, and security-minded tooling, and I’m always trying to ship the next thing that’s a little more fun and a little more useful.",
  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true  },
    { label: 'Let’s talk',         href: '#contact',  primary: false },
  ],
};

// ── Education ─────────────────────────────────────────────────────────
// One entry per school. `minor` and `gpa` are optional — omit them if
// not applicable. `courses` shows as a list of relevant coursework.
export interface EducationEntry {
  school:     string;
  degree:     string;
  minor?:     string;
  gpa?:       string;
  graduation: string;
  courses:    string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school:     'University of California, Los Angeles',
    degree:     'B.S. Computer Science',
    graduation: 'Graduation: May 2029',
    courses: [
      'Calculus of Several Variables',
      'Computer Science 31',
      'Ethical Hacking',

    ],
  },
];

// ── Experience ────────────────────────────────────────────────────────
// One entry per job/internship/TA position, most recent first. `bullets`
// are rendered as a list of achievements — keep them action-oriented and
// quantify impact where you can. `tech` shows as tag chips.
export interface ExperienceEntry {
  company:   string;
  role:      string;
  location:  string;
  start:     string;
  end:       string;
  bullets:   string[];
  tech:      string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company:  'Ember Learning',
    role:     'Software Engineer Intern',
    location: 'Raleigh, NC',
    start:    'Feb 2025',
    end:      'Mar 2026',
    bullets: [
      'Improved AI essay grading accuracy by 50% by refining prompts and grading logic for GPT-4.',
      'Built Reading Comprehension Workshops with AI-generated passages and questions, storing student data with Prisma and PostgreSQL for 200k+ users.',
      'Designed a TypeScript and Next.js onboarding flow with a product tour, increasing weekly sign-ups by 10%.',
      'Implemented 15+ AP History and English rubric templates to speed up teacher grading workflows.',
      'Used REST APIs and Mailjet to create welcome email automation for new users and newsletters.',
    ],
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'REST APIs', 'AI', 'Mailjet'],
  },
  {
    company:  'UChicago CS Researchers',
    role:     'AI Researcher',
    location: 'Chicago, IL',
    start:    'Jun 2025',
    end:      'Nov 2025',
    bullets: [
      'Analyzed large language model reliability, studying answer-switching across GPT, Gemini, and Claude models.',
      'Evaluated LLM performance across 3,000+ benchmark questions under repetitive multi-turn prompting, observing up to 15% accuracy degradation across frontier models.',
      'Developed a novel Markov-chain-based metric called Stationary Accuracy to quantify long-term model stability.',
      'Trained linear probes on transformer hidden states to predict whether models would change their answers over time.',
    ],
    tech: ['Python', 'LLMs', 'Evaluation', 'pandas', 'NumPy', 'Pytest', 'ML'],
  },
  {
    company:  'Build-a-thon',
    role:     'Hackathon Co-Founder and Organizer',
    location: 'Remote / National',
    start:    'Sep 2025',
    end:      'Nov 2025',
    bullets: [
      'Co-led a hackathon attended by 250+ students, securing $19.5k in sponsorships and judges from Google and Tesla.',
      'Taught workshops on API keys, web development, and AI integration into hackathon projects and led the opening ceremony.',
    ],
    tech: ['Event Ops', 'AI', 'Web Dev', 'APIs', 'Leadership'],
  },
  {
    company:  'picoCTF',
    role:     'Cybersecurity Competitor',
    location: 'National / Global',
    start:    'Sep 2025',
    end:      'Oct 2025',
    bullets: [
      'Ranked Top 50 globally among 10,460+ teams and Top 12 nationally among 1,817 U.S. high school teams.',
      'Filtered HTTP, FTP, and DNS traffic in Wireshark and followed TCP streams to extract credentials and flags.',
      'Cracked Base64, XOR, Caesar, and RSA-encrypted challenges using CyberChef and Python.',
    ],
    tech: ['Python', 'Wireshark', 'Linux', 'Cybersecurity', 'Cryptography'],
  },
];

// ── Projects ──────────────────────────────────────────────────────────
// One entry per project. `github` and `live` are both optional — omit
// whichever doesn't apply. Set `featured: true` to highlight a project
// (check the ProjectsSection component to see how featured entries are
// styled differently, if at all, in this template).
export interface ProjectEntry {
  name:        string;
  description: string;
  tech:        string[];
  github?:     string;
  live?:       string;
  featured:    boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name:        'Voice Agent Evaluation Skill',
    description: 'A reusable Python evaluation skill for grading multi-turn voice-agent calls across six performance dimensions, from factual accuracy to tone and pacing.',
    tech:        ['Python', 'Ollama', 'LLMs', 'Evaluation', 'OpenClaw'],
    github:      'https://github.com/rishitram/AI_VoiceEval_Skill',
    featured:    true,
  },
  {
    name:        'Home Wildfire Risk App',
    description: 'A Java scoring engine that checks home risk factors like roofing, vegetation, and hazard data to generate a wildfire risk score for property buyers and sellers.',
    tech:        ['Java', 'CSV Parsing', 'Data Modeling', 'Risk Scoring'],
    github:      'https://github.com/rishitram/Widlfire-Risk-Application',
    featured:    true,
  },
];

// ── Social links ──────────────────────────────────────────────────────
// Shown in the header/hero area. Add or remove entries as needed.
export const SOCIAL_LINKS = [
  { label: 'GitHub',   href: GITHUB_URL   },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email',    href: EMAIL_HREF   },
];

// ── Contact ───────────────────────────────────────────────────────────
// The Resume link points to ME.resumePath, which is served from whatever
// file you place at public/resume.pdf — see README.md > "Adding Your
// Resume". If you don't want to show a resume link, delete that entry.
export const CONTACT = {
  email: ME.email,
  blurb: "I’m open to product, AI, and software engineering opportunities, especially the kind where I can learn fast and build things that matter. If you’ve got a project, a research idea, or just want to swap notes, hit me up.",
  links: [
    { label: 'Email',    href: EMAIL_HREF,     display: ME.email                         },
    { label: 'GitHub',   href: GITHUB_URL,     display: `github.com/${ME.github}`        },
    { label: 'LinkedIn', href: LINKEDIN_URL,   display: `linkedin.com/in/${ME.linkedin}` },
    { label: 'Resume',   href: ME.resumePath,  display: 'Download PDF'                   },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────
// `columns` renders as link groups. The Resume link here reuses
// ME.resumePath, so it stays in sync with CONTACT automatically.
export const FOOTER = {
  tagline: "UCLA CS student building things with code, AI, and a little bit of chaos.",
  columns: [
    {
      heading: 'Portfolio',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects',   href: '#projects'   },
        { label: 'Education',  href: '#education'  },
        { label: 'Contact',    href: '#contact'    },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub',   href: GITHUB_URL     },
        { label: 'LinkedIn', href: LINKEDIN_URL   },
        { label: 'Email',    href: EMAIL_HREF     },
        { label: 'Resume',   href: ME.resumePath  },
      ],
    },
  ],
};
