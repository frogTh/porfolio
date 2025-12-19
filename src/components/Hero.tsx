import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { personalInfo, stats } from '../data/data';

const Hero = () => {
  const { t } = useTranslation();

  const statLabels: Record<string, string> = {
    'React Components': t('stats.components'),
    'Apps in Monorepo': t('stats.apps'),
    'Code Reuse Rate': t('stats.codeReuse'),
    'Languages (i18n)': t('stats.languages'),
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden grid-pattern">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Floating 3D shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-500/15 to-pink-500/15 blur-[100px] animate-pulse-glow" />
        
        {/* Floating geometric shapes */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-[20%] w-20 h-20 border border-cyan-500/20 rounded-lg"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-[15%] w-16 h-16 border border-purple-500/20 rounded-full"
        />
        <motion.div 
          className="absolute top-1/3 left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-float"
        />
        <motion.div 
          className="absolute top-1/2 right-[10%] w-2 h-2 bg-purple-400 rounded-full animate-float-slow"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pt-20">
          
          {/* Main Hero Card - spans 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bento-card p-8 md:p-12"
          >
            {/* Status badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">{t('hero.openToWork')}</span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">{t('hero.greeting')} </span>
              <span className="gradient-text-glow">{t('hero.name')}</span>
              <br />
              <span className="text-zinc-400">{t('hero.buildText')} </span>
              <span className="text-white">{t('hero.exceptional')}</span>
              <br />
              <span className="text-white">{t('hero.digital')} </span>
              <span className="gradient-text">{t('hero.experiences')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              {t('hero.subtitle')}{' '}
              <span className="text-cyan-400">{t('hero.vr')}</span>,{' '}
              <span className="text-purple-400">{t('hero.realtime')}</span>, and{' '}
              <span className="text-pink-400">{t('hero.monorepo')}</span>.
              {' '}{t('hero.currentWork')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-glow">
                <span>{t('hero.viewWork')}</span>
                <FaArrowRight />
              </a>
              <a 
                href="/Resume-ThangPHQ.pdf" 
                download
                className="btn-neon"
              >
                <span>{t('hero.downloadCV')}</span>
                <FaDownload />
              </a>
            </div>
          </motion.div>

          {/* Stats Card - spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 bento-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HiSparkles className="text-cyan-400" />
                <span className="text-zinc-400 text-sm font-mono">{t('hero.stats')}</span>
              </div>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-zinc-500 text-sm">{statLabels[stat.label] || stat.label}</span>
                    <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 bento-card p-6"
          >
            <span className="text-zinc-500 text-sm font-mono block mb-4">{t('hero.connect')}</span>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
              >
                <FaGithub className="text-xl text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <FaLinkedin className="text-xl text-zinc-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Experience Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 bento-card p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"
          >
            <span className="text-zinc-500 text-sm font-mono block mb-4">{t('hero.currentRole')}</span>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xl">
                🚀
              </div>
              <div>
                <h3 className="text-white font-semibold">{t('hero.frontEnd')}</h3>
                <p className="text-cyan-400">Arobid</p>
                <p className="text-zinc-500 text-sm">{t('hero.buildingTradexpo')}</p>
              </div>
            </div>
          </motion.div>

          {/* Tech Tags Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 bento-card p-6"
          >
            <span className="text-zinc-500 text-sm font-mono block mb-4">{t('hero.techStack')}</span>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'Turborepo', 'Marzipano', 'WebSocket', 'TailwindCSS'].map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs font-mono">{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
