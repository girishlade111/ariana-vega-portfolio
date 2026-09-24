export interface Project {
  id: string;
  title: string;
  tag: string;
  href: string;
  imageKey: string;
  alt: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: 'uiux' | 'web' | 'mobile' | 'visual' | 'interaction';
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: 'layers' | 'heart' | 'globe';
}

export interface SiteData {
  name: string;
  eyebrow: string;
  role: string;
  heroText: string;
  heroCta: string;
  heroCtaHref: string;
  handNoteLines: string[];
  heroBadgeText: string;
  projects: Project[];
  expertise: Expertise[];
  about: string;
  stats: Stat[];
  quote: string;
  cta: {
    headingPart1: string;
    headingPart2: string;
    headingPart3: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  contact: {
    email: string;
    website: string;
    instagram: string;
    location: string;
  };
  footerBadgeText: string;
}

export const siteData: SiteData = {
  name: 'Ariana Vega',
  eyebrow: "HELLO, I'M",
  role: 'UI/UX DESIGNER & DIGITAL STORYTELLER',
  heroText: 'I craft digital experiences that are beautiful, intuitive and built to make a real impact.',
  heroCta: 'VIEW MY WORK',
  heroCtaHref: '#work',
  handNoteLines: ['coffee', '+ music', '+ design ♡'],
  heroBadgeText: 'DESIGNING WITH PURPOSE ✦ DESIGNS THAT SPEAK ✦',
  projects: [
    {
      id: 'wild-soul',
      title: 'Wild Soul Studio',
      tag: 'WEBSITE DESIGN',
      href: '#',
      imageKey: 'wild-soul',
      alt: 'Wild Soul Studio website design mockup on a laptop'
    },
    {
      id: 'planta',
      title: 'Planta',
      tag: 'MOBILE APP UI/UX',
      href: '#',
      imageKey: 'planta',
      alt: 'Planta mobile app and website UI/UX design showcase'
    },
    {
      id: 'move-freely',
      title: 'Move Freely Campaign',
      tag: 'BRANDING & WEB DESIGN',
      href: '#',
      imageKey: 'move-freely',
      alt: 'Move Freely sportswear and active branding campaign design'
    }
  ],
  expertise: [
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'Wireframes, Prototypes, User Flows',
      icon: 'uiux'
    },
    {
      id: 'web',
      title: 'Web Design',
      description: 'Landing Pages, Full Websites, Portfolios',
      icon: 'web'
    },
    {
      id: 'mobile',
      title: 'Mobile Design',
      description: 'iOS / Android App Experiences',
      icon: 'mobile'
    },
    {
      id: 'visual',
      title: 'Visual Design',
      description: 'Branding, Campaigns, Design Systems',
      icon: 'visual'
    },
    {
      id: 'interaction',
      title: 'Interaction Design',
      description: 'Micro-interactions, Animations',
      icon: 'interaction'
    }
  ],
  about: "I'm a UI/UX designer who believes that great design is more than just how it looks — it's how it feels and how it solves problems. I love turning ideas into meaningful digital experiences.",
  stats: [
    {
      id: 'years',
      value: '4+',
      label: 'YEARS OF\nEXPERIENCE',
      icon: 'layers'
    },
    {
      id: 'clients',
      value: '30+',
      label: 'HAPPY\nCLIENTS',
      icon: 'heart'
    },
    {
      id: 'projects',
      value: '15+',
      label: 'SUCCESSFUL\nPROJECTS',
      icon: 'globe'
    }
  ],
  quote: "Design isn't just what it looks like. It's how it works.",
  cta: {
    headingPart1: "LET'S CREATE",
    headingPart2: 'SOMETHING',
    headingPart3: 'Amazing',
    description: "Have a project in mind or just want to say hi? I'd love to hear from you!",
    buttonText: "LET'S CONNECT",
    buttonHref: 'mailto:hello@arianavega.design'
  },
  contact: {
    email: 'hello@arianavega.design',
    website: 'www.arianavega.design',
    instagram: '@arianavega.design',
    location: 'Based in Los Angeles, CA'
  },
  footerBadgeText: 'AVAILABLE FOR NEW PROJECTS'
};
