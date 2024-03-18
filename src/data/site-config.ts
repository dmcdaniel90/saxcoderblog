export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'SaxCoder',
  subtitle: 'A blog by Devin McDaniel',
  description:
    'A blog about journeying through the world of web development as a professional musician. Written by Devin McDaniel.',
  image: {
    src: '/hero.jpeg',
    alt: 'Devin McDaniel - Developer and Musician',
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Tags',
      href: '/tags',
    },
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Terms',
      href: '/terms',
    },
  ],
  socialLinks: [
    {
      text: 'DM Music',
      href: 'https://devinmcdaniel.com/',
    },
    {
      text: 'Portfolio',
      href: 'https://devinmcdaniel.tech/',
    },
    {
      text: 'Github',
      href: 'https://github.com/dmcdaniel90/',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/devinmcdanielsax/',
    },
    {
      text: 'X/Twitter',
      href: 'https://twitter.com/devinmcdaniel90',
    },
  ],
  hero: {
    title: 'Devin McDaniel Web Developer and Musician',
    text: "I'm **Devin McDaniel**, a web developer and saxophonist at from Texas, USA and now residing in the England, United Kingdom. When I am not waist deep in lines of code (or baby nappies), I entertain crowds playing saxophone for nightclubs and in bands around the country. Feel free to explore some of my coding endeavors on <a href='https://github.com/dmcdaniel90'>GitHub</a> or check out where I am playing next on <a href='https://www.instagram.com/devinmcdanielsax/'>Instagram</a>.",
    image: {
      src: '/hero.jpeg',
      alt: 'Devin McDaniel - Developer, Musician, and Blogger',
    },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact',
      },
    ],
  },
  subscribe: {
    title: 'Subscribe to my newsletter',
    text: 'Maximum one update per week. All the latest posts directly in your inbox.',
    formUrl: '#',
  },
  postsPerPage: 8,
  projectsPerPage: 4,
};

export default siteConfig;
