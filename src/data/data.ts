// Personal Information
export const personalInfo = {
  name: 'Pham Huynh Quoc Thang',
  title: 'Front-End Developer',
  subtitle: 'Specializing in Next.js, Monorepo Architecture, 3D/VR UI, Real-time Systems',
  experience: '1+ years',
  email: 'quocthang2603@gmail.com',
  phone: '0773840946',
  location: 'Ho Chi Minh City, Vietnam',
  github: 'https://github.com/qthanggg',
  linkedin: 'https://linkedin.com/in/thangpham2603',
  bio: `Front-end Developer with 1+ year of experience building enterprise-grade applications. 
  Passionate about crafting high-performance UIs with cutting-edge technologies like 3D/VR, 
  real-time systems, and scalable monorepo architectures.`,
};

// Key Stats for Hero section
export const stats = [
  { value: '490+', label: 'React Components', icon: '⚛️' },
  { value: '15+', label: 'Apps in Monorepo', icon: '📦' },
  { value: '70%', label: 'Code Reuse Rate', icon: '♻️' },
  { value: '11', label: 'Languages (i18n)', icon: '🌍' },
];

// Work Experience
export const experiences = [
  {
    id: 1,
    company: 'Arobid',
    role: 'Front-End Developer',
    period: 'Jan 2025 - Present',
    location: 'HCMC, Vietnam',
    project: 'TRADEXPO – Virtual Exhibition Platform',
    projectUrl: 'https://arobid.com/tradexpo/en',
    companyUrl: 'https://arobid.com/en',
    description: 'Virtual exhibition and B2B networking platform with 3D/VR, live streaming, and real-time interactions serving thousands of concurrent users.',
    highlights: [
      'Owned UI architecture across a 15+ app monorepo using Turborepo & PNPM',
      'Built 490+ reusable React components, 70% code reuse rate across projects',
      'Developed 360° VR exhibition interface with Marzipano (hotspots & booth interactions)',
      'Implemented Business Matching System with real-time slot booking & availability sync',
      'Integrated Zoom SDK & WebSocket for live sessions and real-time updates',
      'Improved SSR/SSG performance → 40% faster load, Lighthouse 90+ score',
    ],
    tech: ['Next.js', 'TypeScript', 'Turborepo', 'Zustand', 'Marzipano VR', 'WebSocket', 'TailwindCSS'],
    techHighlights: [
      { category: 'Patterns', items: ['Compound Components', 'Custom Hooks', 'HOCs'] },
      { category: 'Next.js', items: ['Server Components', 'Server Actions', 'Streaming SSR'] },
      { category: 'State', items: ['Zustand', 'TanStack Query'] },
      { category: 'Real-time', items: ['WebSocket', 'Optimistic Updates'] },
      { category: '3D/VR', items: ['Marzipano', '360° Panorama', 'Hotspots'] },
    ],
  },
  {
    id: 2,
    company: 'Amazing Tech',
    role: 'Front-end Developer',
    period: 'May 2024 - Nov 2024',
    location: 'HCMC, Vietnam',
    description: 'Agriculture-focused e-commerce and farm management system.',
    highlights: [
      'Built modules for e-commerce and farm management system',
      'Implemented animal health tracking with Chart.js and real-time camera monitoring',
      'Developed shopping cart, checkout, order management, multi-payment integration',
      'Built user profile, address management, and authentication workflows',
    ],
    tech: ['React', 'JavaScript', 'TailwindCSS', 'Chart.js', 'Zustand', 'REST APIs'],
  },
  {
    id: 3,
    company: 'FPT Software',
    role: 'Intern Front-End Developer',
    period: 'Sep 2023 - Dec 2023',
    location: 'HCMC, Vietnam',
    description: 'Enterprise web application development.',
    highlights: [
      'Implemented secure JWT authentication with profile session handling',
      'Developed responsive UI for multiple device types',
      'Optimized page speed with code splitting & lazy loading',
      'Managed application state using Redux',
    ],
    tech: ['ReactJS', 'Redux', 'JWT', 'Material-UI', 'TailwindCSS'],
  },
];

// Featured Projects (Real)
export const projects = [
  {
    id: 'tradexpo',
    title: 'TRADEXPO Platform',
    subtitle: 'Virtual Exhibition & B2B Networking',
    description: 'Enterprise-grade virtual exhibition platform with 3D/VR booths, live streaming, and real-time networking for thousands of concurrent users.',
    image: '/tradexpo-preview.jpg',
    features: [
      '360° VR interactive booth experiences',
      'Real-time business matching & scheduling',
      'Live event streaming with Zoom SDK integration',
      'Multi-language support (11 languages)',
    ],
    tech: ['Next.js', 'TypeScript', 'Marzipano', 'WebSocket', 'Turborepo'],
    liveUrl: 'https://arobid.com/tradexpo/en',
    featured: true,
    metrics: [
      { label: 'Components', value: '490+' },
      { label: 'Apps', value: '15+' },
      { label: 'Lighthouse', value: '90+' },
    ],
  },
  {
    id: 'arobid',
    title: 'Arobid Platform',
    subtitle: 'B2B Trade & Exhibition Services',
    description: 'Main company platform for B2B trade exhibitions and business services.',
    image: '/arobid-preview.jpg',
    features: [
      'SSR/SSG optimized for performance',
      'Responsive design for all devices',
      'SEO optimized architecture',
    ],
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    liveUrl: 'https://arobid.com/en',
    featured: true,
  },
];

// Skills categorized with proficiency
export const skills = {
  core: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'TailwindCSS', level: 92 },
  ],
  architecture: [
    { name: 'Turborepo', level: 85 },
    { name: 'Monorepo', level: 85 },
    { name: 'SSR/SSG', level: 88 },
  ],
  specialization: [
    { name: 'Marzipano VR', level: 80 },
    { name: 'WebSocket', level: 82 },
    { name: 'Real-time UI', level: 85 },
  ],
  stateManagement: [
    { name: 'Zustand', level: 90 },
    { name: 'React Query', level: 88 },
    { name: 'Redux', level: 85 },
  ],
  testing: [
    { name: 'Vitest', level: 80 },
    { name: 'Playwright', level: 78 },
    { name: 'Storybook', level: 82 },
  ],
  other: [
    { name: 'i18n', level: 85 },
    { name: 'Responsive Design', level: 92 },
    { name: 'Shadcn/UI', level: 85 },
  ],
};

// Skill Icons mapping
export const skillIcons = {
  'React': 'SiReact',
  'Next.js': 'SiNextdotjs',
  'TypeScript': 'SiTypescript',
  'TailwindCSS': 'SiTailwindcss',
  'Turborepo': 'SiTurborepo',
  'Zustand': 'SiZod',
  'WebSocket': 'SiSocketdotio',
  'Vitest': 'SiVitest',
  'Playwright': 'SiTestinglibrary',
  'Storybook': 'SiStorybook',
  'Redux': 'SiRedux',
};

// Education
export const education = {
  school: 'FPT University',
  degree: 'Software Engineering',
  period: 'Oct 2020 - Dec 2024',
  location: 'Ho Chi Minh City, Vietnam',
};

// Navigation links
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

// Technical Expertise Areas
export const expertiseAreas = [
  {
    title: '3D/VR Development',
    icon: '🥽',
    description: 'Building immersive 360° VR experiences with Marzipano, interactive hotspots, and virtual exhibition booths.',
  },
  {
    title: 'Real-time Systems',
    icon: '⚡',
    description: 'WebSocket integration, optimistic updates, live streaming with Zoom SDK, and real-time notifications.',
  },
  {
    title: 'Monorepo Architecture',
    icon: '🏗️',
    description: 'Scaling 15+ apps with Turborepo & PNPM, 70% code reuse rate, shared component libraries.',
  },
  {
    title: 'Performance Optimization',
    icon: '🚀',
    description: 'SSR/SSG strategies, 40% load time reduction, Lighthouse 90+ scores, code splitting & lazy loading.',
  },
];
