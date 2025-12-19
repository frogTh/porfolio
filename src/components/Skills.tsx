import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiSocketdotio,
  SiVitest,
  SiStorybook,
  SiTurborepo,
  SiPnpm,
  SiGithubactions,
  SiFigma,
} from 'react-icons/si';
import { TbBrandThreejs, TbApi, TbWorld } from 'react-icons/tb';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTranslation } from 'react-i18next';

// Skills organized by how they're used, not arbitrary percentages
const skillCategories = [
  {
    titleKey: 'skills.core',
    description: 'Daily drivers for production apps',
    color: '#00d4ff',
    skills: [
      { name: 'React', icon: SiReact, context: 'TRADEXPO, AROBID, 490+ components' },
      { name: 'Next.js', icon: SiNextdotjs, context: 'SSR/SSG, API routes, App Router' },
      { name: 'TypeScript', icon: SiTypescript, context: 'Strict mode, all projects' },
      { name: 'TailwindCSS', icon: SiTailwindcss, context: 'Design systems, custom themes' },
    ],
  },
  {
    titleKey: 'skills.architecture',
    description: 'Scaling frontend applications',
    color: '#a855f7',
    skills: [
      { name: 'Turborepo', icon: SiTurborepo, context: '15+ apps, shared packages' },
      { name: 'PNPM Workspaces', icon: SiPnpm, context: 'Monorepo dependency management' },
      { name: 'SSR/SSG', icon: SiNextdotjs, context: 'Lighthouse 90+ performance' },
    ],
  },
  {
    titleKey: 'skills.specialization',
    description: 'Unique expertise areas',
    color: '#ec4899',
    skills: [
      { name: 'Marzipano VR', icon: TbBrandThreejs, context: '360° virtual tours, hotspots' },
      { name: 'WebSocket', icon: SiSocketdotio, context: 'Real-time bidding, live updates' },
      { name: 'Zoom SDK', icon: TbWorld, context: 'Video conferencing integration' },
    ],
  },
  {
    titleKey: 'skills.stateManagement',
    description: 'Managing complexity',
    color: '#22c55e',
    skills: [
      { name: 'Zustand', icon: SiRedux, context: 'Preferred for new projects' },
      { name: 'React Query', icon: SiReact, context: 'Server state, caching' },
      { name: 'Redux Toolkit', icon: SiRedux, context: 'Legacy projects maintenance' },
    ],
  },
  {
    titleKey: 'skills.testing',
    description: 'Ensuring reliability',
    color: '#f59e0b',
    skills: [
      { name: 'Vitest', icon: SiVitest, context: 'Unit & integration tests' },
      { name: 'Storybook', icon: SiStorybook, context: 'Component documentation' },
      { name: 'GitHub Actions', icon: SiGithubactions, context: 'CI/CD pipelines' },
    ],
  },
  {
    titleKey: 'skills.other',
    description: 'Bridging design and data',
    color: '#6366f1',
    skills: [
      { name: 'Figma', icon: SiFigma, context: 'Design handoff, prototypes' },
      { name: 'REST APIs', icon: TbApi, context: 'Integration, data fetching' },
      { name: 'i18n', icon: TbWorld, context: 'Multi-language support' },
    ],
  },
];

const Skills = () => {
  const { ref } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="section-number">04</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('skills.title')}
            </h2>
          </motion.div>

          {/* Skills Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + catIndex * 0.1 }}
                className="bento-card p-6 group hover:border-zinc-700/80 transition-all"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: category.color, boxShadow: `0 0 8px ${category.color}` }}
                    />
                    <h3 
                      className="text-lg font-semibold"
                      style={{ color: category.color }}
                    >
                      {t(category.titleKey)}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-xs font-mono">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05 }}
                        className="group/skill"
                      >
                        <div className="flex items-start gap-3">
                          <div 
                            className="p-2 rounded-lg bg-zinc-800/50 group-hover/skill:bg-zinc-700/50 transition-colors"
                            style={{ borderColor: `${category.color}30` }}
                          >
                            <Icon 
                              className="text-lg transition-all group-hover/skill:scale-110"
                              style={{ color: category.color }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-zinc-200 text-sm font-medium block">
                              {skill.name}
                            </span>
                            <span className="text-zinc-500 text-xs block truncate group-hover/skill:text-zinc-400 transition-colors">
                              {skill.context}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Decorative corner glow */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity rounded-tr-2xl"
                  style={{ background: `radial-gradient(circle at top right, ${category.color}, transparent 70%)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
